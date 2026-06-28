---
layout: exam
title: "Musterlösung Geometrie-Stegreifaufgabe 01 – Bayern 12. Klasse (Gymnasium)"
schulform: Gymnasium
fach: Geometrie
bundesland: Bayern
klassenstufe: "12. Klasse"
nr: "01"
pruefungstyp: Stegreifaufgabe
typ: loesung
bearbeitungszeit: "30 Minuten"
gesamtpunktzahl: "24 BE"
---

# Musterlösung: Geometrie-Stegreifaufgabe – Bayern 12. Klasse

Gegeben sind die Befestigungspunkte

$$A(1 \mid 1 \mid 1), \qquad B(5 \mid 1 \mid 1), \qquad C(1 \mid 4 \mid 5).$$

---

## Aufgabe 1 – Vektoren und Seitenlängen (8 BE)

**a)** [3 BE]

Verbindungsvektoren werden mit „Spitze minus Fuß" gebildet:

$$\overrightarrow{AB} = \begin{pmatrix} 5-1 \\ 1-1 \\ 1-1 \end{pmatrix} = \begin{pmatrix} 4 \\ 0 \\ 0 \end{pmatrix}, \qquad \overrightarrow{AC} = \begin{pmatrix} 1-1 \\ 4-1 \\ 5-1 \end{pmatrix} = \begin{pmatrix} 0 \\ 3 \\ 4 \end{pmatrix}, \qquad \overrightarrow{BC} = \begin{pmatrix} 1-5 \\ 4-1 \\ 5-1 \end{pmatrix} = \begin{pmatrix} -4 \\ 3 \\ 4 \end{pmatrix}$$

**b)** [4 BE]

$$\lvert\overrightarrow{AB}\rvert = \sqrt{4^2 + 0^2 + 0^2} = \sqrt{16} = 4$$

$$\lvert\overrightarrow{AC}\rvert = \sqrt{0^2 + 3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

$$\lvert\overrightarrow{BC}\rvert = \sqrt{(-4)^2 + 3^2 + 4^2} = \sqrt{16 + 9 + 16} = \sqrt{41} \approx 6{,}40$$

Die Seitenlängen betragen also $4\,\text{m}$, $5\,\text{m}$ und $\sqrt{41}\,\text{m} \approx 6{,}40\,\text{m}$.

**c)** [1 BE]

$$U = 4 + 5 + \sqrt{41} \approx 15{,}40\,\text{m}$$

---

## Aufgabe 2 – Skalarprodukt und Winkel (8 BE)

**a)** [3 BE]

Der Innenwinkel bei $A$ wird von den Vektoren $\overrightarrow{AB}$ und $\overrightarrow{AC}$ eingeschlossen. Wir bilden ihr Skalarprodukt:

$$\overrightarrow{AB} \circ \overrightarrow{AC} = \begin{pmatrix} 4 \\ 0 \\ 0 \end{pmatrix} \circ \begin{pmatrix} 0 \\ 3 \\ 4 \end{pmatrix} = 4 \cdot 0 + 0 \cdot 3 + 0 \cdot 4 = 0$$

Da das Skalarprodukt null ist, stehen $\overrightarrow{AB}$ und $\overrightarrow{AC}$ senkrecht aufeinander. Das Dreieck $ABC$ ist somit bei $A$ rechtwinklig. $\;\blacksquare$

**b)** [4 BE]

Der Innenwinkel bei $B$ wird von den Vektoren $\overrightarrow{BA}$ und $\overrightarrow{BC}$ eingeschlossen:

$$\overrightarrow{BA} = -\overrightarrow{AB} = \begin{pmatrix} -4 \\ 0 \\ 0 \end{pmatrix}, \qquad \overrightarrow{BC} = \begin{pmatrix} -4 \\ 3 \\ 4 \end{pmatrix}$$

$$\overrightarrow{BA} \circ \overrightarrow{BC} = (-4)\cdot(-4) + 0\cdot 3 + 0\cdot 4 = 16$$

$$\lvert\overrightarrow{BA}\rvert = 4, \qquad \lvert\overrightarrow{BC}\rvert = \sqrt{41}$$

$$\cos\varphi_B = \frac{\overrightarrow{BA} \circ \overrightarrow{BC}}{\lvert\overrightarrow{BA}\rvert \cdot \lvert\overrightarrow{BC}\rvert} = \frac{16}{4 \cdot \sqrt{41}} = \frac{4}{\sqrt{41}} \approx 0{,}6247$$

$$\varphi_B = \cos^{-1}(0{,}6247) \approx 51{,}3^\circ$$

**c)** [1 BE]

Die Innenwinkelsumme im Dreieck beträgt $180^\circ$. Da der Winkel bei $B$ etwa $51{,}3^\circ$ groß ist, gilt für die Summe der Winkel bei $A$ und $C$:

$$\varphi_A + \varphi_C = 180^\circ - 51{,}3^\circ = 128{,}7^\circ.$$

(Wegen des rechten Winkels bei $A$ ist $\varphi_A = 90^\circ$ und damit $\varphi_C \approx 38{,}7^\circ$.)

---

## Aufgabe 3 – Flächeninhalt des Segels (5 BE)

**a)** [2 BE]

Aus Aufgabe 2a) ist bekannt, dass das Dreieck bei $A$ rechtwinklig ist. Die beiden Seiten $\overrightarrow{AB}$ und $\overrightarrow{AC}$ stehen senkrecht aufeinander. Damit ist eine Kathete die Grundseite $g$ und die andere Kathete bereits die zugehörige Höhe $h$ – eine zusätzliche Höhenkonstruktion ist nicht nötig.

**b)** [3 BE]

Mit $g = \lvert\overrightarrow{AB}\rvert = 4$ und $h = \lvert\overrightarrow{AC}\rvert = 5$ folgt:

$$A_{\triangle} = \frac{1}{2}\cdot g \cdot h = \frac{1}{2}\cdot 4 \cdot 5 = 10$$

Das Sonnensegel hat einen Flächeninhalt von $10\,\text{m}^2$.

---

## Aufgabe 4 – Vektoraddition und Skalarmultiplikation (3 BE)

**a)** [1 BE]

Der Mittelpunkt der Strecke $\overline{BC}$ ergibt sich als arithmetisches Mittel der Ortsvektoren:

$$\overrightarrow{OM} = \frac{1}{2}\left(\vec{B} + \vec{C}\right) = \frac{1}{2}\begin{pmatrix} 5+1 \\ 1+4 \\ 1+5 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 6 \\ 5 \\ 6 \end{pmatrix} = \begin{pmatrix} 3 \\ 2{,}5 \\ 3 \end{pmatrix}$$

Also $M(3 \mid 2{,}5 \mid 3)$.

**b)** [2 BE]

$$\overrightarrow{OD} = \vec{A} + \overrightarrow{AB} + \overrightarrow{AC} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} + \begin{pmatrix} 4 \\ 0 \\ 0 \end{pmatrix} + \begin{pmatrix} 0 \\ 3 \\ 4 \end{pmatrix} = \begin{pmatrix} 5 \\ 4 \\ 5 \end{pmatrix}$$

Also $D(5 \mid 4 \mid 5)$. (Da $\overrightarrow{AB}\perp\overrightarrow{AC}$, ist $ABDC$ sogar ein Rechteck.)

---

## Bewertungsübersicht

| Aufgabe | Teilaufgabe | Inhalt | BE |
|---------|-------------|--------|----|
| 1 | a) | Verbindungsvektoren $\overrightarrow{AB},\overrightarrow{AC},\overrightarrow{BC}$ | 3 |
| 1 | b) | Seitenlängen (Beträge) | 4 |
| 1 | c) | Umfang | 1 |
| 2 | a) | Rechter Winkel bei $A$ (Skalarprodukt $=0$) | 3 |
| 2 | b) | Innenwinkel bei $B$ | 4 |
| 2 | c) | Summe der übrigen Winkel | 1 |
| 3 | a) | Begründung Grundformel | 2 |
| 3 | b) | Flächeninhalt $10\,\text{m}^2$ | 3 |
| 4 | a) | Mittelpunkt $M$ | 1 |
| 4 | b) | Punkt $D$ (Vektoraddition) | 2 |
| **Gesamt** | | | **24** |
