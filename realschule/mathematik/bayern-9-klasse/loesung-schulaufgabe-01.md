---
layout: exam
title: "Musterlösung: Mathematik-Schulaufgabe 01 – Bayern 9. Klasse (Realschule)"
schulform: Realschule
fach: Mathematik
bundesland: Bayern
klassenstufe: "9. Klasse"
nr: "01"
pruefungstyp: Schulaufgabe
typ: loesung
---

# Musterlösung: Mathematik-Schulaufgabe – Bayern 9. Klasse (Realschule)

> Die folgenden Lösungen zeigen den vollständigen Rechenweg. Andere äquivalente Schreibweisen oder Rundungen auf eine zusätzliche Nachkommastelle sind ebenfalls korrekt, sofern der Lösungsweg nachvollziehbar ist.

---

## Aufgabe 1 – Virale TikTok-Challenge (8 BE)

**Startwert:** $a = 120$ Aufrufe.  
**Wachstumsfaktor:** $b = 1 + \frac{50}{100} = 1{,}5$.

### a) [2 BE]

$$f(t) = 120 \cdot 1{,}5^{\,t}$$

(mit $t$ in Stunden nach dem Hochladen)

### b) [2 BE]

$$f(6) = 120 \cdot 1{,}5^{6} = 120 \cdot 11{,}390625 \approx 1366{,}88$$

Nach 6 Stunden hat das Reel ca. **1 367 Aufrufe**.

### c) [3 BE]

Gesucht: $t$ mit $f(t) = 50\,000$.

$$120 \cdot 1{,}5^{\,t} = 50\,000 \;\Longleftrightarrow\; 1{,}5^{\,t} = \frac{50\,000}{120} \approx 416{,}67$$

Logarithmieren:

$$t = \frac{\log(416{,}67)}{\log(1{,}5)} \approx \frac{2{,}6198}{0{,}1761} \approx 14{,}88$$

Die Marke von 50 000 Aufrufen wird also **nach ca. 14,9 Stunden** (also etwa nach 14 h 53 min) überschritten.

### d) [1 BE]

Beispielantwort: Die Anzahl der Menschen mit Internetzugang bzw. TikTok-Account ist begrenzt – das Video kann nicht beliebig oft angeklickt werden. Außerdem flaut das Interesse an einem Trend nach einigen Tagen wieder ab. Exponentielles Wachstum ist deshalb nur in den ersten Stunden eines viralen Trends ein realistisches Modell.

---

## Aufgabe 2 – Sneaker-Preisentwicklung (7 BE)

**Startpreis (2018):** $p_0 = 119{,}90$ €.  
**Wachstumsfaktor:** $b = 1 + \frac{4{,}2}{100} = 1{,}042$.

### a) [2 BE]

$$p(x) = 119{,}90 \cdot 1{,}042^{\,x}$$

(mit $x$ = Anzahl der Jahre seit 2018)

### b) [2 BE]

Im Jahr 2030 ist $x = 2030 - 2018 = 12$.

$$p(12) = 119{,}90 \cdot 1{,}042^{12} \approx 119{,}90 \cdot 1{,}6384 \approx 196{,}44$$

Der Preis im Jahr 2030 beträgt also ca. **196,44 €**.

### c) [3 BE]

Verdoppelung bedeutet $p(x) = 2 \cdot 119{,}90$, also:

$$119{,}90 \cdot 1{,}042^{\,x} = 2 \cdot 119{,}90 \;\Longleftrightarrow\; 1{,}042^{\,x} = 2$$

$$x = \frac{\log(2)}{\log(1{,}042)} \approx \frac{0{,}30103}{0{,}01787} \approx 16{,}85$$

Da nach 16 vollen Jahren der doppelte Preis noch nicht erreicht ist, wird er **im 17. Jahr nach 2018, also im Jahr 2035**, erstmals überschritten.

---

## Aufgabe 3 – Quadratische Funktionen untersuchen (12 BE)

### a) Diskriminante [3 BE]

**I)** $a = 2{,}5;\; b = -7;\; c = 2$

$$D_\text{I} = (-7)^2 - 4 \cdot 2{,}5 \cdot 2 = 49 - 20 = 29 > 0$$

→ **2 Nullstellen**.

**II)** $a = -2;\; b = 8;\; c = -8$

$$D_\text{II} = 8^2 - 4 \cdot (-2) \cdot (-8) = 64 - 64 = 0$$

→ **genau 1 (doppelte) Nullstelle**.

### b) Nullstellen [4 BE]

**I)** Mitternachtsformel:

$$x_{1/2} = \frac{-(-7) \pm \sqrt{29}}{2 \cdot 2{,}5} = \frac{7 \pm 5{,}385}{5}$$

$$x_1 \approx \frac{7 + 5{,}385}{5} \approx 2{,}48 \qquad x_2 \approx \frac{7 - 5{,}385}{5} \approx 0{,}32$$

Nullstellen: $N_1(2{,}48 \mid 0)$ und $N_2(0{,}32 \mid 0)$.

**II)** Da $D_\text{II} = 0$:

$$x = \frac{-8}{2 \cdot (-2)} = \frac{-8}{-4} = 2$$

Doppelte Nullstelle bei $N(2 \mid 0)$.

### c) Öffnung [2 BE]

- **I)** $a = 2{,}5 > 0$ und $\lvert a\rvert > 1$ → Parabel ist **nach oben geöffnet** und **gestreckt**.
- **II)** $a = -2 < 0$ und $\lvert a\rvert > 1$ → Parabel ist **nach unten geöffnet** und **gestreckt**.

### d) Skizze (Wertetabellen) [3 BE]

**I)** $y = 2{,}5x^2 - 7x + 2$

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $y$ | $11{,}5$ | $2$ | $-2{,}5$ | $-2$ | $3{,}5$ |

Scheitelpunkt bei $x_S = \frac{7}{2 \cdot 2{,}5} = 1{,}4$, $y_S = 2{,}5 \cdot 1{,}4^2 - 7 \cdot 1{,}4 + 2 = -2{,}9$.

**II)** $y = -2x^2 + 8x - 8$

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $y$ | $-8$ | $-2$ | $0$ | $-2$ | $-8$ |

Scheitelpunkt bei $S(2 \mid 0)$ – dort liegt auch die doppelte Nullstelle.

Die Punkte sind in ein gemeinsames Koordinatensystem zu übertragen und durch eine glatte Parabel zu verbinden.

---

## Aufgabe 4 – Von der Scheitelform in die Normalform (6 BE)

### I) $y = 3(x-4)^2 - 6$ [3 BE]

Zweite binomische Formel im Inneren:

$$y = 3 \cdot (x^2 - 8x + 16) - 6$$

$$y = 3x^2 - 24x + 48 - 6$$

$$\boxed{y = 3x^2 - 24x + 42}$$

### II) $y = -1{,}5(x+2)^2 + 4{,}8$ [3 BE]

Erste binomische Formel im Inneren:

$$y = -1{,}5 \cdot (x^2 + 4x + 4) + 4{,}8$$

$$y = -1{,}5x^2 - 6x - 6 + 4{,}8$$

$$\boxed{y = -1{,}5x^2 - 6x - 1{,}2}$$

---

## Aufgabe 5 – Bausteine zusammensetzen (8 BE)

### a) Funktionsgleichung von $h$ [4 BE]

Aus dem Schaubild lesen wir ab:

- Die Parabel $h$ ist **nach oben geöffnet** → Streckfaktor ist positiv. Da $h$ deutlich schmaler als die Normalparabel verläuft, kommt nur $3x^2$ infrage. → Baustein $3x^2$.
- Der Scheitelpunkt liegt bei $S_h(0 \mid -8)$, also wird die Parabel um 8 Einheiten **nach unten** verschoben. → Baustein $-8$.

$$\boxed{h(x) = 3x^2 - 8}$$

**Punktprobe** mit $P(1 \mid -5)$:

$$h(1) = 3 \cdot 1^2 - 8 = 3 - 8 = -5 \;\checkmark$$

### b) Funktionsgleichung von $t$ in Scheitelform [2 BE]

Scheitelpunkt $S_t(3 \mid 5)$ und Streckfaktor $a = -2$. Allgemeine Scheitelform:

$$t(x) = a \cdot (x - x_S)^2 + y_S$$

$$\boxed{t(x) = -2 \cdot (x - 3)^2 + 5}$$

### c) Beschreibung von $t$ [2 BE]

- $a = -2 < 0$ → Parabel ist **nach unten geöffnet**.
- $\lvert a\rvert = 2 > 1$ → Parabel ist **gestreckt** (also schmaler als die Normalparabel).

---

## Aufgabe 6 – Richtig oder falsch? (9 BE)

| Nr. | Aussage | Bewertung | Begründung / Korrektur |
| :--- | :--- | :---: | :--- |
| 1 | Eine Parabel mit dem Streckfaktor $a = -1$ ist die an der x-Achse gespiegelte Normalparabel. | **richtig** | $y = -1 \cdot x^2 = -x^2$ entsteht aus $y = x^2$ durch Vorzeichenumkehr aller $y$-Werte – das entspricht genau der Spiegelung an der x-Achse. |
| 2 | Der Scheitelpunkt der Funktion $y = 2(x-5)^2 + 3$ liegt bei $S(5 \mid 3)$. | **richtig** | In der Scheitelform $y = a(x - x_S)^2 + y_S$ liest man den Scheitelpunkt direkt ab: hier $x_S = 5$ und $y_S = 3$, also $S(5 \mid 3)$. |
| 3 | Wenn die Diskriminante $D < 0$ ist, hat die quadratische Funktion genau eine Nullstelle. | **falsch** | Bei $D < 0$ ist die Wurzel in der Mitternachtsformel nicht definiert – die Parabel hat **keine** Nullstelle. *Gegenbeispiel:* $y = x^2 + 1$ mit $D = 0 - 4 = -4 < 0$ hat keine Nullstelle. **Korrekt:** Bei $D < 0$ hat die Funktion **keine** Nullstelle, bei $D = 0$ genau eine, bei $D > 0$ zwei. |
| 4 | Je größer der Betrag des Streckfaktors $\lvert a\rvert$, desto **breiter** wird die Parabel. | **falsch** | Genau umgekehrt: ein großer Betrag von $a$ macht die Parabel **schmaler** (gestreckt). *Gegenbeispiel:* $y = 5x^2$ ist deutlich schmaler als $y = x^2$. **Korrekt:** Je größer $\lvert a\rvert$, desto **schmaler** (gestreckter) wird die Parabel; je kleiner $\lvert a\rvert$ (mit $0 < \lvert a\rvert < 1$), desto breiter (gestauchter). |
| 5 | Eine nach oben geöffnete Parabel mit Scheitelpunkt unterhalb der x-Achse hat genau zwei Nullstellen. | **richtig** | Wenn $a > 0$ ist und der tiefste Punkt (Scheitel) unterhalb der x-Achse liegt, muss die Parabel die x-Achse links und rechts vom Scheitel jeweils einmal schneiden – also gibt es genau zwei Nullstellen. |

Bewertung: je **1 BE** für die richtige Entscheidung (insgesamt 4 BE für die fünf Häkchen, da Aussage 1 als Einstieg gemeinsam mit den anderen gewertet wird) und je **1 BE** für eine vollständige, fachlich korrekte Begründung bzw. Korrektur (5 BE).

---

## Bewertungsübersicht

| Aufgabe | Teilaufgabe | Inhalt | BE |
|---------|-------------|--------|----|
| 1 | a) | Funktionsgleichung Reels | 2 |
| 1 | b) | Aufrufe nach 6 h | 2 |
| 1 | c) | Zeit bis 50 000 Aufrufe | 3 |
| 1 | d) | Grenzen des Modells | 1 |
| 2 | a) | Funktionsgleichung Sneakerpreis | 2 |
| 2 | b) | Preis 2030 | 2 |
| 2 | c) | Jahr der Verdoppelung | 3 |
| 3 | a) | Diskriminante I + II | 3 |
| 3 | b) | Nullstellen I + II | 4 |
| 3 | c) | Öffnungsbeschreibung | 2 |
| 3 | d) | Skizze mit Wertetabelle | 3 |
| 4 | I) | Normalform $3(x-4)^2-6$ | 3 |
| 4 | II) | Normalform $-1{,}5(x+2)^2+4{,}8$ | 3 |
| 5 | a) | $h(x)$ aus Bausteinen | 4 |
| 5 | b) | $t(x)$ in Scheitelform | 2 |
| 5 | c) | Beschreibung von $t$ | 2 |
| 6 | 1–5 | Richtig/falsch (Häkchen) | 4 |
| 6 | 1–5 | Begründungen / Korrekturen | 5 |
| **Gesamt** | | | **50** |
