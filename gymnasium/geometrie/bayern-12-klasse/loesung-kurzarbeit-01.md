---
layout: exam
title: "Musterlösung Geometrie-Kurzarbeit 01 – Bayern 12. Klasse (Gymnasium)"
schulform: Gymnasium
fach: Geometrie
bundesland: Bayern
klassenstufe: "12. Klasse"
nr: "01"
pruefungstyp: Kurzarbeit
typ: loesung
bearbeitungszeit: "30 Minuten"
gesamtpunktzahl: "26 BE"
---

# Musterlösung: Geometrie-Kurzarbeit – Bayern 12. Klasse

Gegeben sind die Ankerpunkte

$$A(2 \mid 3 \mid 7), \qquad B(2 \mid 3 \mid 3), \qquad C(5 \mid 7 \mid 3).$$

---

## Aufgabe 1 – Vektoren, Abstände, Skalarmultiplikation und Addition (11 BE)

**a)** [3 BE]

Verbindungsvektoren werden nach der Regel „Spitze minus Fuß" berechnet:

$$\overrightarrow{AB} = \begin{pmatrix} 2-2 \\ 3-3 \\ 3-7 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ -4 \end{pmatrix}, \qquad \overrightarrow{AC} = \begin{pmatrix} 5-2 \\ 7-3 \\ 3-7 \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \\ -4 \end{pmatrix}, \qquad \overrightarrow{BC} = \begin{pmatrix} 5-2 \\ 7-3 \\ 3-3 \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \\ 0 \end{pmatrix}$$

**b)** [4 BE]

$$\lvert\overrightarrow{AB}\rvert = \sqrt{0^2 + 0^2 + (-4)^2} = \sqrt{16} = 4 \text{ m}$$

$$\lvert\overrightarrow{AC}\rvert = \sqrt{3^2 + 4^2 + (-4)^2} = \sqrt{9 + 16 + 16} = \sqrt{41} \approx 6{,}40 \text{ m}$$

$$\lvert\overrightarrow{BC}\rvert = \sqrt{3^2 + 4^2 + 0^2} = \sqrt{9 + 16} = \sqrt{25} = 5 \text{ m}$$

**c)** [2 BE]

Der Mittelpunkt $M$ ergibt sich als arithmetisches Mittel der Ortsvektoren von $B$ und $C$:

$$\overrightarrow{OM} = \frac{1}{2}\!\left(\overrightarrow{OB} + \overrightarrow{OC}\right) = \frac{1}{2} \begin{pmatrix} 2+5 \\ 3+7 \\ 3+3 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 7 \\ 10 \\ 6 \end{pmatrix} = \begin{pmatrix} 3{,}5 \\ 5 \\ 3 \end{pmatrix}$$

Also $M(3{,}5 \mid 5 \mid 3)$.

**d)** [2 BE]

Aus $\overrightarrow{AD} = \overrightarrow{BC}$ folgt:

$$\overrightarrow{OD} = \overrightarrow{OA} + \overrightarrow{BC} = \begin{pmatrix} 2 \\ 3 \\ 7 \end{pmatrix} + \begin{pmatrix} 3 \\ 4 \\ 0 \end{pmatrix} = \begin{pmatrix} 5 \\ 7 \\ 7 \end{pmatrix}$$

Also $D(5 \mid 7 \mid 7)$.

*Probe:* $\overrightarrow{DC} = C - D = (5-5, 7-7, 3-7)^T = (0, 0, -4)^T = \overrightarrow{AB}$ ✓ – $ABCD$ ist tatsächlich ein Parallelogramm.

---

## Aufgabe 2 – Winkelberechnung (10 BE)

**a)** [3 BE]

Der Innenwinkel bei $B$ wird von den Vektoren $\overrightarrow{BA}$ und $\overrightarrow{BC}$ eingeschlossen:

$$\overrightarrow{BA} = -\overrightarrow{AB} = \begin{pmatrix} 0 \\ 0 \\ 4 \end{pmatrix}, \qquad \overrightarrow{BC} = \begin{pmatrix} 3 \\ 4 \\ 0 \end{pmatrix}$$

$$\overrightarrow{BA} \circ \overrightarrow{BC} = 0 \cdot 3 + 0 \cdot 4 + 4 \cdot 0 = 0$$

Da das Skalarprodukt null ist, stehen $\overrightarrow{BA}$ und $\overrightarrow{BC}$ senkrecht aufeinander. Der Innenwinkel des Dreiecks bei $B$ beträgt daher $90°$. $\;\blacksquare$

**b)** [4 BE]

Der Innenwinkel bei $A$ wird von den Vektoren $\overrightarrow{AB}$ und $\overrightarrow{AC}$ eingeschlossen:

$$\overrightarrow{AB} \circ \overrightarrow{AC} = 0 \cdot 3 + 0 \cdot 4 + (-4) \cdot (-4) = 16$$

$$\lvert\overrightarrow{AB}\rvert = 4, \qquad \lvert\overrightarrow{AC}\rvert = \sqrt{41}$$

$$\cos\varphi_A = \frac{\overrightarrow{AB} \circ \overrightarrow{AC}}{\lvert\overrightarrow{AB}\rvert \cdot \lvert\overrightarrow{AC}\rvert} = \frac{16}{4 \cdot \sqrt{41}} = \frac{4}{\sqrt{41}} \approx 0{,}6247$$

$$\varphi_A = \cos^{-1}(0{,}6247) \approx 51{,}3°$$

**c)** [3 BE]

Der Innenwinkel bei $C$ wird von den Vektoren $\overrightarrow{CA}$ und $\overrightarrow{CB}$ eingeschlossen:

$$\overrightarrow{CA} = -\overrightarrow{AC} = \begin{pmatrix} -3 \\ -4 \\ 4 \end{pmatrix}, \qquad \overrightarrow{CB} = -\overrightarrow{BC} = \begin{pmatrix} -3 \\ -4 \\ 0 \end{pmatrix}$$

$$\overrightarrow{CA} \circ \overrightarrow{CB} = (-3)(-3) + (-4)(-4) + 4 \cdot 0 = 9 + 16 + 0 = 25$$

$$\lvert\overrightarrow{CA}\rvert = \sqrt{41}, \qquad \lvert\overrightarrow{CB}\rvert = 5$$

$$\cos\varphi_C = \frac{25}{\sqrt{41} \cdot 5} = \frac{5}{\sqrt{41}} \approx 0{,}7809$$

$$\varphi_C = \cos^{-1}(0{,}7809) \approx 38{,}7°$$

*Probe:* $90° + 51{,}3° + 38{,}7° = 180°$ ✓

---

## Aufgabe 3 – Flächenberechnung (5 BE)

**a)** [2 BE]

Aus Aufgabe 2 a) ist bekannt, dass das Dreieck $ABC$ bei $B$ rechtwinklig ist: Die Seiten $\overline{BA}$ und $\overline{BC}$ stehen senkrecht aufeinander. Damit kann man $\overline{BC}$ als Grundseite $g$ und $\overline{BA}$ als zugehörige Höhe $h$ des Dreiecks auffassen – eine gesonderte Höhenkonstruktion oder das Vektorprodukt sind nicht nötig.

**b)** [3 BE]

Mit $g = \lvert\overrightarrow{BC}\rvert = 5\,\text{m}$ und $h = \lvert\overrightarrow{BA}\rvert = 4\,\text{m}$ gilt:

$$A_{\triangle} = \frac{1}{2} \cdot g \cdot h = \frac{1}{2} \cdot 5 \cdot 4 = 10$$

Das dreieckige Schutznetz hat einen Flächeninhalt von $\mathbf{10\,\text{m}^2}$.

---

## Bewertungsübersicht

| Aufgabe | Teilaufgabe | Inhalt | BE |
|---------|-------------|--------|----|
| 1 | a) | Verbindungsvektoren $\overrightarrow{AB}$, $\overrightarrow{AC}$, $\overrightarrow{BC}$ | 3 |
| 1 | b) | Seitenlängen $4$, $\sqrt{41}\approx 6{,}40$, $5$ | 4 |
| 1 | c) | Mittelpunkt $M(3{,}5 \mid 5 \mid 3)$ | 2 |
| 1 | d) | Punkt $D(5 \mid 7 \mid 7)$ (Parallelogramm) | 2 |
| 2 | a) | Rechter Winkel bei $B$ (Skalarprodukt $= 0$) | 3 |
| 2 | b) | Innenwinkel bei $A \approx 51{,}3°$ | 4 |
| 2 | c) | Innenwinkel bei $C \approx 38{,}7°$ | 3 |
| 3 | a) | Begründung: rechter Winkel bei $B$ → $g \perp h$ | 2 |
| 3 | b) | Flächeninhalt $10\,\text{m}^2$ | 3 |
| **Gesamt** | | | **26** |
