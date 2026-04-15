# 📚 Examination Training – Abitur-Übungsklausuren

Dieses Repository stellt Übungsklausuren zur Vorbereitung auf das Abitur bereit. Die Aufgaben orientieren sich an den offiziellen Lehrplänen der deutschen Bundesländer und dem jeweiligen Abiturniveau (Grundkurs / Leistungskurs).

---

## 🎯 Zweck

- **Abiturvorbereitung**: Realistische Klausuren im Stil des jeweiligen Landesabiturs
- **Selbststudium**: Klare Aufgabenstellungen mit vollständigen Musterlösungen
- **Lehrunterstützung**: Einsetzbar als Übungsmaterial im Unterricht oder zur Eigenkorrektur

---

## 📁 Ordnerstruktur

```
examination-training/
├── README.md                           ← Diese Datei
├── AGENT_INSTRUCTIONS.md               ← Anweisungen für KI-Agenten
└── {schulform}/
    └── {fach}/
        └── {bundesland}-{klassenstufe}/
            ├── klausur-01.md           ← Klausur Nr. 1 (Aufgaben)
            ├── loesung-klausur-01.md   ← Musterlösung zu Klausur Nr. 1
            ├── klausur-02.md           ← Klausur Nr. 2 (Aufgaben)
            ├── loesung-klausur-02.md   ← Musterlösung zu Klausur Nr. 2
            ├── stegreifaufgabe-01.md   ← Stegreifaufgabe Nr. 1
            ├── loesung-stegreifaufgabe-01.md
            └── ...
```

### Verfügbare Prüfungen

| Schulform  | Fach        | Bundesland | Klassenstufe | Typ     | Nr. | Bearbeitungszeit |
|------------|-------------|------------|--------------|---------|-----|-----------------|
| Gymnasium  | Stochastik  | Bayern     | 12. Klasse   | Klausur | 01  | 90 Minuten      |

---

## 📖 Verwendung

### Als Schülerin / Schüler

1. Öffne die gewünschte `klausur.md` im Ordner des passenden Fachs und Bundeslands.
2. Bearbeite die Aufgaben unter realistischen Klausurbedingungen (Zeitlimit beachten!).
3. Vergleiche anschließend deine Lösung mit der `loesung.md`.

### Als Lehrkraft

- Die Klausuren können direkt als Übungsblätter verwendet werden.
- Alle Lösungen enthalten Bewertungseinheiten (BE) pro Teilaufgabe.

---

## 🤝 Beitragen

Neue Prüfungen können über einen Pull Request beigetragen werden. Bitte halte dich dabei an die bestehende Ordnerstruktur:

```
{schulform}/{fach}/{bundesland}-{klassenstufe}/{typ}-{nr}.md
{schulform}/{fach}/{bundesland}-{klassenstufe}/loesung-{typ}-{nr}.md
```

Weitere Hinweise zur Erstellung korrekter Aufgaben für KI-Agenten findest du in [`AGENT_INSTRUCTIONS.md`](AGENT_INSTRUCTIONS.md).

---

## 📝 Lizenz

Dieses Repository dient ausschließlich Bildungszwecken.

---

## 🌐 GitHub Pages

Die Klausuren sind auch als Website mit PDF-Download verfügbar:
**[https://markusrt.github.io/examination-training/](https://markusrt.github.io/examination-training/)**

Die Seite wird automatisch über GitHub Actions gebaut und enthält:
- Navigationsseite mit Übersicht aller verfügbaren Prüfungen
- Aufgaben und Lösungen mit korrekt gerenderten LaTeX-Formeln und Mermaid-Diagrammen
- Druckfertige PDF-Downloads für jede Prüfung und Lösung

> **Einrichtung:** Unter *Settings → Pages → Source* muss **GitHub Actions** ausgewählt werden.
