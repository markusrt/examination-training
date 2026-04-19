#!/usr/bin/env node

/**
 * generate-pdfs.mjs
 *
 * Converts every klausur / loesung HTML page in _site/ to a PDF using
 * Puppeteer.  The PDF is saved alongside the HTML file so that the
 * GitHub Pages deployment includes it for download.
 *
 * Usage (after `jekyll build`):
 *   node .github/scripts/generate-pdfs.mjs
 */

import puppeteer from "puppeteer";
import { createServer } from "node:http";
import { readFile, readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const SITE_DIR = join(process.cwd(), "_site");
const BASE_PATH = "/examination-training";
const PORT = 4000;
const ORIGIN = `http://localhost:${PORT}`;

/* ---------- tiny static-file server ---------- */

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
};

function serve() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const urlPath = decodeURIComponent(req.url).replace(BASE_PATH, "") || "/";
      let filePath = join(SITE_DIR, urlPath);

      try {
        const s = await stat(filePath);
        if (s.isDirectory()) filePath = join(filePath, "index.html");
      } catch {
        /* fall through – will 404 below */
      }

      try {
        const buf = await readFile(filePath);
        const ext = extname(filePath);
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        res.end(buf);
      } catch {
        res.writeHead(404);
        res.end("Not Found");
      }
    });

    server.listen(PORT, () => {
      console.log(`Static server listening on ${ORIGIN}`);
      resolve(server);
    });
  });
}

/* ---------- find exam HTML pages ---------- */

async function findExamPages(dir, pages = []) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return pages;
  }
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      await findExamPages(fullPath, pages);
    } else if (
      entry.name.endsWith(".html") &&
      entry.name !== "index.html"
    ) {
      pages.push(fullPath);
    }
  }
  return pages;
}

/* ---------- main ---------- */

async function main() {
  const server = await serve();

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const htmlPages = await findExamPages(SITE_DIR);

    if (htmlPages.length === 0) {
      console.log("No exam pages found – skipping PDF generation.");
      return;
    }

    console.log(`Found ${htmlPages.length} exam page(s) to convert.\n`);

    for (const htmlPath of htmlPages) {
      const relativePath = htmlPath.replace(SITE_DIR, "");
      const url = `${ORIGIN}${BASE_PATH}${relativePath}`;
      const pdfPath = htmlPath.replace(/\.html$/, ".pdf");

      console.log(`  → ${relativePath}`);

      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30_000 });

      // Wait for MathJax to finish typesetting
      try {
        await page.waitForFunction(
          () => typeof MathJax !== "undefined" && MathJax.startup,
          { timeout: 10_000 }
        );
        await page.evaluate(() => MathJax.startup.promise);
      } catch {
        console.log("    ⚠ MathJax not detected or timed out – continuing");
      }

      // Wait for Mermaid diagrams to render (SVGs appear inside .mermaid divs)
      try {
        await page.waitForFunction(
          () =>
            document.querySelectorAll(".mermaid:not([data-processed])").length === 0,
          { timeout: 10_000 }
        );
      } catch {
        console.log("    ⚠ Mermaid rendering timed out – continuing");
      }

      // Small extra buffer for any remaining async rendering
      await new Promise((r) => setTimeout(r, 1_000));

      await page.pdf({
        path: pdfPath,
        format: "A4",
        margin: { top: "20mm", right: "18mm", bottom: "20mm", left: "18mm" },
        printBackground: true,
        displayHeaderFooter: false,
      });

      await page.close();
      console.log(`    ✓ ${pdfPath.replace(SITE_DIR, "")}`);
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log("\nPDF generation complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
