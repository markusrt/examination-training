# 🤖 AGENT_INSTRUCTIONS.md – Anweisungen für KI-Agenten

Dieses Dokument enthält verbindliche Anweisungen für KI-Agenten (z. B. GitHub Copilot), die in diesem Repository Übungsklausuren erstellen oder erweitern.

---

## 🎯 Ziel

Erstelle fachlich korrekte, realistische Übungsklausuren zur Abiturvorbereitung – abgestimmt auf Schulform, Fach, Bundesland und Klassenstufe, die im Prompt angegeben werden. Qualität und fachliche Korrektheit haben absoluten Vorrang vor Quantität.

---

## 📁 Ordnerstruktur

Prüfungen werden immer nach diesem Schema abgelegt:

```
{schulform}/{fach}/{bundesland}-{klassenstufe}/{typ}-{nr}.md
{schulform}/{fach}/{bundesland}-{klassenstufe}/loesung-{typ}-{nr}.md
```

- `{schulform}`: z. B. `gymnasium`, `realschule`, `fos`
- `{fach}`: z. B. `stochastik`, `analysis`, `geometrie`, `deutsch`
- `{bundesland}-{klassenstufe}`: z. B. `bayern-12-klasse`, `nrw-13-klasse`
- `{typ}`: Art der Prüfung – z. B. `klausur`, `schulaufgabe`, `kurzarbeit`, `stegreifaufgabe`
- `{nr}`: **zweistellige, fortlaufende Nummer** (`01`, `02`, `03`, …) pro Typ
- Die Lösung wird mit dem Präfix `loesung-` vor dem Typ-Namen abgelegt

Beispiele:
- `gymnasium/stochastik/bayern-12-klasse/klausur-01.md`
- `gymnasium/stochastik/bayern-12-klasse/loesung-klausur-01.md`
- `gymnasium/stochastik/bayern-12-klasse/klausur-02.md`
- `gymnasium/stochastik/bayern-12-klasse/loesung-klausur-02.md`
- `gymnasium/analysis/nrw-13-klasse/schulaufgabe-01.md`
- `gymnasium/analysis/nrw-13-klasse/loesung-schulaufgabe-01.md`
- `gymnasium/stochastik/bayern-12-klasse/stegreifaufgabe-01.md`
- `gymnasium/stochastik/bayern-12-klasse/loesung-stegreifaufgabe-01.md`
- `gymnasium/deutsch/bayern-12-klasse/klausur-01.md`
- `gymnasium/deutsch/bayern-12-klasse/loesung-klausur-01.md`

Beim Anlegen einer neuen Prüfung: Prüfe, welche Nummern pro Typ bereits existieren, und verwende die nächste freie Nummer.

---

## 🎭 Persona – Schreibe wie eine echte Lehrkraft

Alle Prüfungen sollen so geschrieben sein, wie sie **eine erfahrene Lehrkraft der jeweiligen Schulform** tatsächlich an ihre Schülerinnen und Schüler verteilen würde. Das bedeutet:

- **Persönliche Ansprache:** Verwende einen freundlichen, ermutigenden Ton – nicht steril oder maschinell.
- **Typische Lehrer-Floskeln** einbauen, z. B.:
  - „Viel Erfolg! :)" oder „Viel Erfolg bei der Bearbeitung!" am Ende des Aufgabenblatts
  - „Lies dir die Aufgaben erst in Ruhe durch, bevor du anfängst."
  - „Achte auf vollständige Lösungswege – Ergebnisse ohne Rechenweg werden nicht gewertet."
  - „Tipp: Skizziere dir ein Baumdiagramm, bevor du rechnest."
  - „Belegt eure Aussagen immer mit Textstellen (Zeilenangaben!)."
  - „Achtet auf einen klaren Aufbau und sprachliche Richtigkeit."
- **Sachkontexte** sollen lebensnah und altersgerecht sein – Bezug zur Lebenswelt der Schülerinnen und Schüler (Schulfest, Sport, Social Media, Alltag, etc.)
- **Schwierigkeitsaufbau** innerhalb einer Aufgabe: von leicht nach schwer, sodass auch schwächere Schülerinnen und Schüler die ersten Teilaufgaben lösen können
- **Formulierungen** sollen klar, freundlich und motivierend sein – so wie Lehrkräfte, denen ihre Schülerinnen und Schüler am Herzen liegen
- Bei Klausuren/Schulaufgaben: Einen kurzen **Hinweis-Block** am Anfang mit praktischen Tipps (Zeiteinteilung, Rechenweg aufschreiben, etc.)

Die Musterlösung darf sachlicher gehalten sein, sollte aber ebenfalls vollständige Lösungswege (Rechenwege, Analysen, Argumentationen) und nachvollziehbare Erklärungen enthalten.

---

## ✅ Pflichtregeln

### 1. Format

- Aufgaben und Lösung **immer** als separate Markdown-Dateien: `{typ}-{nr}.md` und `loesung-{typ}-{nr}.md`
- Jede Datei beginnt mit einem aussagekräftigen Titel (z. B. `# Stochastik-Klausur – Bayern 12. Klasse` oder `# Deutsch-Klausur – Bayern 12. Klasse`)
- Metadaten am Anfang: Bearbeitungszeit, Hilfsmittel, Gesamtpunktzahl
- YAML Front Matter mit: `schulform`, `fach`, `bundesland`, `klassenstufe`, `nr`, `pruefungstyp`, `typ` (aufgabe/loesung)

### 2. Mathematische Korrektheit – KRITISCH (für MINT-Fächer)

> **Dies ist die wichtigste Anforderung für mathematische Fächer. Überprüfe JEDEN Rechenschritt mehrfach.**

- Alle Berechnungen müssen **Schritt für Schritt** nachvollziehbar sein
- **Wahrscheinlichkeiten** müssen immer zwischen 0 und 1 liegen
- **Baumdiagramme**: Alle Äste eines Knotens müssen sich zu 1 ergänzen
- **Binomialkoeffizienten** $\binom{n}{k}$ müssen korrekt berechnet sein
- **Erwartungswert** und **Standardabweichung** müssen korrekt berechnet sein:
  - $E(X) = n \cdot p$
  - $\sigma(X) = \sqrt{n \cdot p \cdot (1-p)}$
- **Hypothesentests** müssen logisch konsistent sein:
  - Null- und Alternativhypothese klar formulieren
  - Ablehnungsbereich korrekt aus der Verteilung ableiten (nicht aus der Normalapproximation schätzen)
  - Tatsächliches Signifikanzniveau angeben
  - Fehler 1. und 2. Art korrekt definieren und berechnen
- Vor der Erstellung: Alle Berechnungen mit Python/Code-Ausführung verifizieren

### 2b. Fachliche Korrektheit – KRITISCH (für textbasierte Fächer wie Deutsch)

> **Dies ist die wichtigste Anforderung für textbasierte Fächer. Überprüfe ALLE Fakten und Textquellen sorgfältig.**

- **Textquellen:** Nur **gemeinfreie Texte** verwenden (Autor mindestens 70 Jahre verstorben), z. B. von [Projekt Gutenberg](https://www.projekt-gutenberg.org/)
- **Texttreue:** Textauszüge müssen werkgetreu wiedergegeben werden – keine eigenmächtigen Änderungen oder Kürzungen ohne Kennzeichnung
- **Zeilennummerierung:** Alle Textauszüge mit fortlaufenden Zeilennummern versehen – als Tabelle formatieren
- **Lesezeit:** Textlänge so wählen, dass das Lesen in die Bearbeitungszeit passt (Richtwert: max. 1–2 Seiten Prosa, 1 Gedicht, 1 Szene)
- **Operatoren:** Aufgabenstellungen müssen klare Operatoren verwenden, die den drei Anforderungsbereichen (AFB) entsprechen:
  - **AFB I** (Reproduktion): „benenne", „gib wieder", „fasse zusammen", „beschreibe"
  - **AFB II** (Reorganisation/Transfer): „analysiere", „untersuche", „erläutere", „vergleiche"
  - **AFB III** (Reflexion/Bewertung): „beurteile", „deute", „setze dich auseinander mit", „nimm Stellung"
- **Epochenzuordnung:** Literarische Epochen, Strömungen und Gattungsbegriffe müssen fachlich korrekt sein
- **Literarische Fachbegriffe:** Korrekte Verwendung von Begriffen wie Metrum, Reimschema, Erzählperspektive, Stilmittel etc.
- Vor der Erstellung: Fakten zu Autoren, Werken und Epochen verifizieren

### 3. Bewertungsschema

- Jede Teilaufgabe erhält eine Angabe in **BE (Bewertungseinheiten)**
- Beispielformat: `[2 BE]` am Ende der Teilaufgabe
- Gesamtpunktzahl am Anfang des Dokuments angeben
- Typische Gesamtpunktzahlen: 50 BE (90 min), 75 BE (135 min), 100 BE (180 min)

### 4. Schwierigkeitsgrad

- Orientiere dich am **offiziellen Lehrplan** des angegebenen Bundeslandes
- Für Bayern gilt: Orientierung an den [Abituraufgaben des ISB](https://www.isb.bayern.de)
- Aufgaben sollen dem **Leistungsstand der Jahrgangsstufe** entsprechen
- Mischung aus Reproduktion, Anwendung und Transfer

### 5. Sprache

- Aufgaben für **deutsche Bundesländer** werden auf **Deutsch** verfasst
- Für andere Länder die jeweilige Amtssprache verwenden
- Fachbegriffe im Stil des jeweiligen Schulsystems verwenden

---

## 📐 Mathematische Formeln

Verwende LaTeX-Syntax direkt im Markdown:

- **Inline-Formeln**: `$...$` – z. B. `$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$`
- **Block-Formeln**: `$$...$$` – für mehrzeilige oder hervorgehobene Formeln

> ⚠️ **Wichtig:** Verwende **niemals** das Pipe-Zeichen `|` direkt in Inline-Formeln – kramdown/GFM interpretiert es als Tabellen-Trenner und bricht die Formel auf. Stattdessen:
> - Bedingte Wahrscheinlichkeit: `\mid` statt `|` → `$P(A \mid B)$`
> - Betrag / Mächtigkeit: `\lvert` und `\rvert` statt `|` → `$\lvert S\rvert = 18$`
> - Norm: `\lVert` und `\rVert` statt `||` → `$\lVert x\rVert$`

Beispiele:
```markdown
Die Binomialwahrscheinlichkeit berechnet sich als:

$$P(X = k) = \binom{n}{k} \cdot p^k \cdot (1-p)^{n-k}$$

Der Erwartungswert ist $E(X) = n \cdot p$ und die Standardabweichung $\sigma(X) = \sqrt{n \cdot p \cdot (1-p)}$.
```

---

## 🌳 Diagramme mit Mermaid

Baumdiagramme und andere Diagramme werden **direkt in Markdown** mit Mermaid eingebettet:

````markdown
```mermaid
graph TD
    W(( )) -->|P = 0,60| A[Maschine A]
    W -->|P = 0,40| B[Maschine B]
    A -->|P = 0,03| AF["fehlerhaft\nP(A∩F) = 0,018"]
    A -->|P = 0,97| AOK["fehlerfrei\nP(A∩F') = 0,582"]
    B -->|P = 0,05| BF["fehlerhaft\nP(B∩F) = 0,020"]
    B -->|P = 0,95| BOK["fehlerfrei\nP(B∩F') = 0,380"]
```
````

Regeln für Mermaid-Baumdiagramme:
- Wahrscheinlichkeiten als Kantenbeschriftungen (`|P = ...|`)
- Endknoten enthalten Pfadwahrscheinlichkeiten
- Kontrolliere: Alle Äste eines Knotens ergeben zusammen 1,00

---

## 🌐 Interaktive HTML-Visualisierungen

Falls eine Visualisierung das Verständnis einer Lösung erheblich verbessert (z. B. Histogramme der Binomialverteilung, Normalverteilungskurven), erstelle eine **eigenständige, lokal lauffähige HTML-Datei**:

- Dateiname: z. B. `visualisierung_binomialverteilung.html`
- **Keine externen Abhängigkeiten außer CDN** (die Seite muss ohne Build-Prozess öffenbar sein)
- Empfohlene Bibliotheken via CDN:
  - **Chart.js**: `https://cdn.jsdelivr.net/npm/chart.js`
  - **MathJax**: `https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js`
  - **Plotly**: `https://cdn.plot.ly/plotly-latest.min.js`

Beispiel-Gerüst:
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Binomialverteilung B(n; p)</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <canvas id="chart"></canvas>
    <script>
        // Visualisierungslogik hier
    </script>
</body>
</html>
```

---

## 📋 Struktur einer Klausur – Mathematik (`klausur.md`)

```markdown
# {Fach}-Klausur – {Bundesland} {Klassenstufe}

**Bearbeitungszeit:** XX Minuten  
**Hilfsmittel:** Teil A: keine | Teil B: CAS-Rechner, Formelsammlung  
**Gesamtpunktzahl:** XX BE

---

> 📝 **Tipps von eurer Lehrkraft:**
> - Lest euch alle Aufgaben erst einmal in Ruhe durch, bevor ihr mit dem Schreiben anfangt.
> - Schreibt eure Lösungswege vollständig auf – Ergebnisse ohne Rechenweg werden nicht gewertet!
> - {Weitere aufgabenspezifische Tipps}

---

## Teil A – Ohne Hilfsmittel (XX BE)

### Aufgabe 1 – {Thema} (XX BE)

{Sachkontext und Aufgabenstellung}

a) {Teilaufgabe} [X BE]
b) {Teilaufgabe} [X BE]

---

## Teil B – Mit Hilfsmitteln (XX BE)

### Aufgabe 3 – {Thema} (XX BE)

...

---

**Viel Erfolg! 🍀**
```

---

## 📋 Struktur einer Lösung – Mathematik (`loesung.md`)

```markdown
# Musterlösung: {Fach}-Klausur – {Bundesland} {Klassenstufe}

---

## Teil A – Ohne Hilfsmittel

### Aufgabe 1 (X BE)

**a)** [X BE]

{Vollständiger Rechenweg mit LaTeX-Formeln}

$$\text{Formel}$$

**b)** [X BE]

...

---

## Bewertungsübersicht

| Aufgabe | Teilaufgabe | BE |
|---------|-------------|----|
| 1       | a)          | X  |
...
| **Gesamt** |          | **XX** |
```

---

## 📋 Struktur einer Klausur – Deutsch / textbasiert (`klausur.md`)

```markdown
# {Fach}-Klausur – {Bundesland} {Klassenstufe}

**Bearbeitungszeit:** XX Minuten  
**Hilfsmittel:** Duden (Rechtschreibung)  
**Gesamtpunktzahl:** XX BE  
**Datum:** ..................  **Name:** ..................

---

> 📝 **Tipps von eurer Lehrkraft:**
> - Lest euch alle Texte und Aufgaben erst einmal in Ruhe durch, bevor ihr mit dem Schreiben anfangt.
> - Plant eure Zeit gut ein: ca. XX Minuten pro Aufgabe.
> - Belegt eure Aussagen immer mit Textstellen (Zeilenangaben!).
> - Achtet auf einen klaren Aufbau und sprachliche Richtigkeit – das fließt in die Bewertung ein.

---

## Aufgabe 1 – {Gattung}: {Aufgabentyp} (XX BE)

{Einleitung zur Aufgabe}

---

**{Autor}: {Titel} ({Jahr})**

| | |
|---:|:---|
| 1 | {Textzeile 1} |
| 2 | {Textzeile 2} |
| ... | ... |

---

a) {Teilaufgabe mit Operator} [X BE]
b) {Teilaufgabe mit Operator} [X BE]

---

**Viel Erfolg! 🍀**
```

---

## 📋 Struktur einer Lösung – Deutsch / textbasiert (`loesung.md`)

```markdown
# Musterlösung: {Fach}-Klausur – {Bundesland} {Klassenstufe}

---

### Aufgabe 1 – {Gattung}: {Aufgabentyp} (XX BE)

#### a) {Kurztitel} [X BE]

{Ausformulierte Musteranalyse mit Textbelegen (Zeilenangaben)}

#### b) {Kurztitel} [X BE]

...

---

## Bewertungsübersicht

| Aufgabe | Teilaufgabe | Inhalt | BE |
|---------|-------------|--------|----|
| 1       | a)          | ...    | X  |
...
| **Gesamt** |          |        | **XX** |
```

---

## ⚠️ Häufige Fehler – Diese musst du vermeiden

### Mathematische Fächer

| Fehler | Korrekt |
|--------|---------|
| Wahrscheinlichkeit > 1 | Immer $0 \leq P \leq 1$ |
| Baumäste addieren nicht zu 1 | Alle Äste eines Knotens summieren zu 1 |
| Falscher Ablehnungsbereich | Kumulierte Binomial-CDF verwenden, nicht Normalapproximation |
| Fehlende Zwischenschritte | Jeden Rechenschritt explizit aufführen |
| Falsches Signifikanzniveau | Tatsächliches α aus der Verteilung bestimmen |
| Vertauschen von Fehler 1./2. Art | Fehler 1. Art: H₀ fälschlich ablehnen; Fehler 2. Art: H₀ fälschlich beibehalten |
| $\sigma$ statt $\sigma^2$ | Standardabweichung = $\sqrt{n \cdot p \cdot (1-p)}$, Varianz = $n \cdot p \cdot (1-p)$ |

### Textbasierte Fächer (Deutsch etc.)

| Fehler | Korrekt |
|--------|---------|
| Urheberrechtlich geschützter Text | Nur gemeinfreie Texte verwenden (Autor ≥ 70 Jahre verstorben) |
| Text zu lang für Bearbeitungszeit | Textlänge so wählen, dass Lesen + Bearbeiten in die Zeit passt |
| Textauszug ohne Zeilennummern | Alle Textpassagen mit fortlaufenden Zeilennummern versehen |
| Aufgabe ohne klaren Operator | Immer eindeutigen Operator verwenden (analysiere, erläutere, deute, …) |
| Analyse ohne Textbelege in der Lösung | Musterlösung muss konkrete Textstellen mit Zeilenangaben zitieren |
| Falsche Epochenzuordnung | Epochen, Strömungen und Datierungen sorgfältig prüfen |
| Falsche Gattungsbegriffe | Korrekte Fachterminologie verwenden (Metrum, Erzählperspektive, etc.) |

### Allgemein (alle Fächer)

| Fehler | Korrekt |
|--------|---------|
| Pipe `\|` in Inline-LaTeX | Kramdown bricht Formeln am `\|` auf → `\mid`, `\lvert`/`\rvert` verwenden |
| Unterstriche `___` als Ausfüllzeile | Kramdown interpretiert `___` als Trennlinie/Emphasis → Punkte `..................` verwenden |

---

## 🔍 Qualitätssicherung vor dem Commit

Bevor du die Dateien commitest, überprüfe:

### Immer (alle Fächer)

- [ ] BE-Summen stimmen (Teilaufgaben + Gesamt)
- [ ] YAML Front Matter vollständig (schulform, fach, bundesland, klassenstufe, nr, pruefungstyp, typ)
- [ ] Keine `___` Unterstriche als Ausfüllzeilen (stattdessen `..................`)
- [ ] Kein Pipe `|` in Inline-LaTeX

### Mathematische Fächer (zusätzlich)

- [ ] Alle Wahrscheinlichkeiten liegen zwischen 0 und 1
- [ ] Alle Baumdiagramm-Äste summieren sich korrekt
- [ ] E(X) und σ(X) stimmen mit n und p überein
- [ ] Ablehnungsbereich wurde aus der korrekten Verteilung (nicht Approximation) bestimmt
- [ ] Tatsächliches Signifikanzniveau ≤ α
- [ ] Beobachtetes Ergebnis korrekt mit Ablehnungsbereich verglichen
- [ ] Alle Berechnungen wurden mit Code/Rechner verifiziert
- [ ] Musterlösung enthält vollständige Rechenwege (keine übersprungenen Schritte)

### Textbasierte Fächer (zusätzlich)

- [ ] Alle verwendeten Texte sind gemeinfrei (Autor ≥ 70 Jahre verstorben)
- [ ] Textauszüge haben fortlaufende Zeilennummern
- [ ] Aufgaben verwenden klare Operatoren (AFB I–III)
- [ ] Musterlösung enthält konkrete Textbelege mit Zeilenangaben
- [ ] Epochen, Autoren und Werke sind fachlich korrekt zugeordnet
- [ ] Textlänge passt zur Bearbeitungszeit
