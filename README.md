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
└── klausuren/
    └── {fach}/
        └── {bundesland}-{klassenstufe}/
            ├── klausur-01.md           ← Aufgabenblatt Nr. 1
            ├── loesung-01.md           ← Musterlösung Nr. 1
            ├── klausur-02.md           ← Aufgabenblatt Nr. 2
            ├── loesung-02.md           ← Musterlösung Nr. 2
            └── ...
```

### Verfügbare Klausuren

| Fach        | Bundesland | Klassenstufe | Nr. | Niveau      | Bearbeitungszeit |
|-------------|------------|--------------|-----|-------------|-----------------|
| Stochastik  | Bayern     | 12. Klasse   | 01  | Oberstufe   | 90 Minuten      |

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

Neue Klausuren können über einen Pull Request beigetragen werden. Bitte halte dich dabei an die bestehende Ordnerstruktur:

```
klausuren/{fach}/{bundesland}-{klassenstufe}/klausur-{nr}.md
klausuren/{fach}/{bundesland}-{klassenstufe}/loesung-{nr}.md
```

Weitere Hinweise zur Erstellung korrekter Aufgaben für KI-Agenten findest du in [`AGENT_INSTRUCTIONS.md`](AGENT_INSTRUCTIONS.md).

---

## 📝 Lizenz

Dieses Repository dient ausschließlich Bildungszwecken.
