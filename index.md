---
layout: default
title: "📚 Examination Training – Übersicht"
---

# Abitur-Übungsklausuren

Willkommen bei **Examination Training** – einer Sammlung fachlich geprüfter Übungsklausuren zur Vorbereitung auf das Abitur. Alle Aufgaben orientieren sich an den offiziellen Lehrplänen der deutschen Bundesländer.

---

## Verfügbare Prüfungen

<div class="exam-grid">

{% assign exams = site.pages | where: "typ", "aufgabe" | sort: "fach" %}
{% for exam in exams %}
  {% assign pruefungstyp_lower = exam.pruefungstyp | downcase %}
  {% assign exam_stem = pruefungstyp_lower | append: '-' | append: exam.nr %}
  {% assign loesung_stem = 'loesung-' | append: exam_stem %}
  {% assign loesung_url = exam.url | replace: exam_stem, loesung_stem %}
  {% assign klausur_pdf = exam.url | replace: '.html', '.pdf' %}
  {% assign loesung_pdf = loesung_url | replace: '.html', '.pdf' %}
  <div class="exam-card">
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

{% if exams.size == 0 %}
_Noch keine Prüfungen vorhanden._
{% endif %}

---

## 📖 Hinweise

- **Aufgabenblatt** (z. B. `klausur-01.md`): Enthält die Aufgaben mit Bewertungseinheiten (BE).
- **Musterlösung** (z. B. `loesung-klausur-01.md`): Vollständige Rechenwege mit LaTeX-Formeln und Diagrammen.
- **PDF-Download**: Jede Prüfung und Lösung steht als druckfertiges PDF bereit.

Weitere Details und Beitragshinweise findest du im [GitHub-Repository](https://github.com/markusrt/examination-training).
