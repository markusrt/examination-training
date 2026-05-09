---
layout: default
title: "📚 Examination Training – Übersicht"
---

# Übungsklausuren & Prüfungen

Willkommen bei **Examination Training** – einer wachsenden Sammlung fachlich geprüfter Übungsprüfungen für verschiedene Schulformen und Klassenstufen. Alle Aufgaben orientieren sich an den offiziellen Lehrplänen der deutschen Bundesländer.

---

## Verfügbare Prüfungen

{% assign exams = site.pages | where: "typ", "aufgabe" | sort: "fach" %}

<div class="filter-bar no-print" id="filter-bar">
  <label>
    🏫 Schulform
    <select id="filter-schulform" onchange="applyFilters()">
      <option value="">Alle</option>
      {% assign schulformen = exams | map: "schulform" | uniq | sort %}
      {% for s in schulformen %}<option value="{{ s }}">{{ s }}</option>{% endfor %}
    </select>
  </label>
  <label>
    📘 Fach
    <select id="filter-fach" onchange="applyFilters()">
      <option value="">Alle</option>
      {% assign faecher = exams | map: "fach" | uniq | sort %}
      {% for f in faecher %}<option value="{{ f }}">{{ f }}</option>{% endfor %}
    </select>
  </label>
  <label>
    📍 Bundesland
    <select id="filter-bundesland" onchange="applyFilters()">
      <option value="">Alle</option>
      {% assign bundeslaender = exams | map: "bundesland" | uniq | sort %}
      {% for b in bundeslaender %}<option value="{{ b }}">{{ b }}</option>{% endfor %}
    </select>
  </label>
  <label>
    🎓 Klassenstufe
    <select id="filter-klassenstufe" onchange="applyFilters()">
      <option value="">Alle</option>
      {% assign klassenstufen = exams | map: "klassenstufe" | uniq | sort %}
      {% for k in klassenstufen %}<option value="{{ k }}">{{ k }}</option>{% endfor %}
    </select>
  </label>
  <label>
    📝 Prüfungstyp
    <select id="filter-pruefungstyp" onchange="applyFilters()">
      <option value="">Alle</option>
      {% assign pruefungstypen = exams | map: "pruefungstyp" | uniq | sort %}
      {% for p in pruefungstypen %}<option value="{{ p }}">{{ p }}</option>{% endfor %}
    </select>
  </label>
  <button class="btn btn-outline filter-reset" onclick="resetFilters()">✕ Filter zurücksetzen</button>
</div>

<div class="exam-grid" id="exam-grid">

{% for exam in exams %}
  {% assign pruefungstyp_lower = exam.pruefungstyp | downcase %}
  {% assign exam_stem = pruefungstyp_lower | append: '-' | append: exam.nr %}
  {% assign loesung_stem = 'loesung-' | append: exam_stem %}
  {% assign loesung_url = exam.url | replace: exam_stem, loesung_stem %}
  {% assign klausur_pdf = exam.url | replace: '.html', '.pdf' %}
  {% assign loesung_pdf = loesung_url | replace: '.html', '.pdf' %}
  <div class="exam-card"
       data-schulform="{{ exam.schulform }}"
       data-fach="{{ exam.fach }}"
       data-bundesland="{{ exam.bundesland }}"
       data-klassenstufe="{{ exam.klassenstufe }}"
       data-pruefungstyp="{{ exam.pruefungstyp }}">
    <h3>{{ exam.fach }} – {{ exam.pruefungstyp }} Nr. {{ exam.nr }}</h3>
    <p>
      🏫 {{ exam.schulform }} · 📍 {{ exam.bundesland }} · 🎓 {{ exam.klassenstufe }}<br>
      {% if exam.bearbeitungszeit %}⏱️ {{ exam.bearbeitungszeit }} · {% endif %}
      {% if exam.gesamtpunktzahl %}📊 {{ exam.gesamtpunktzahl }}{% endif %}
    </p>
    <div class="card-links">
      <a class="btn btn-outline" href="{{ exam.url | relative_url }}">📋 Aufgaben</a>
      <a class="btn btn-outline" href="{{ loesung_url | relative_url }}">📝 Lösung</a>
      <a class="btn btn-primary" href="{{ klausur_pdf | relative_url }}">⬇ Aufgaben PDF</a>
      <a class="btn btn-primary" href="{{ loesung_pdf | relative_url }}">⬇ Lösung PDF</a>
    </div>
  </div>
{% endfor %}

</div>

<p class="no-results" id="no-results" style="display:none;">
  Keine Prüfungen gefunden, die den gewählten Filtern entsprechen.
</p>

{% if exams.size == 0 %}
_Noch keine Prüfungen vorhanden._
{% endif %}

<script>
function applyFilters() {
  const filters = {
    schulform: document.getElementById('filter-schulform').value,
    fach: document.getElementById('filter-fach').value,
    bundesland: document.getElementById('filter-bundesland').value,
    klassenstufe: document.getElementById('filter-klassenstufe').value,
    pruefungstyp: document.getElementById('filter-pruefungstyp').value
  };
  const cards = document.querySelectorAll('#exam-grid .exam-card');
  let visibleCount = 0;
  cards.forEach((card) => {
    let show = true;
    for (const [key, value] of Object.entries(filters)) {
      if (value && card.getAttribute('data-' + key) !== value) {
        show = false;
        break;
      }
    }
    card.style.display = show ? '' : 'none';
    if (show) visibleCount++;
  });
  document.getElementById('no-results').style.display = visibleCount === 0 ? '' : 'none';
}

function resetFilters() {
  document.getElementById('filter-schulform').value = '';
  document.getElementById('filter-fach').value = '';
  document.getElementById('filter-bundesland').value = '';
  document.getElementById('filter-klassenstufe').value = '';
  document.getElementById('filter-pruefungstyp').value = '';
  applyFilters();
}

document.addEventListener('DOMContentLoaded', applyFilters);
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    applyFilters();
  }
});
</script>

---

## 📖 Hinweise

- **Aufgabenblatt** (z. B. `klausur-01.md`): Enthält die Aufgaben mit Bewertungseinheiten (BE).
- **Musterlösung** (z. B. `loesung-klausur-01.md`): Vollständige Rechenwege mit LaTeX-Formeln und Diagrammen.
- **PDF-Download**: Jede Prüfung und Lösung steht als druckfertiges PDF bereit.

Weitere Details und Beitragshinweise findest du im [GitHub-Repository](https://github.com/markusrt/examination-training).

---

## 🙋 Mitmachen & Beitragen

Fehlt eine Prüfung für dein Fach oder deine Schulform? Du kannst ganz einfach eine neue Prüfung anfragen:

👉 [Neue Prüfung anfordern](https://github.com/markusrt/examination-training/issues/new?template=neue-pruefung.yml)

Füll einfach das Formular aus – wir kümmern uns um den Rest!
