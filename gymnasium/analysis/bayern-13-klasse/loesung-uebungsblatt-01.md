---
layout: exam
title: "Musterlösung Analysis-Übungsblatt 01 – Integrationsregeln – Bayern 13. Klasse (Gymnasium)"
schulform: Gymnasium
fach: Analysis
bundesland: Bayern
klassenstufe: "13. Klasse"
nr: "01"
pruefungstyp: Übungsblatt
typ: loesung
bearbeitungszeit: "30 Minuten"
gesamtpunktzahl: "39 BE"
---

# Musterlösung: Analysis-Übungsblatt – Bayern 13. Klasse

## Training: Integrationsregeln (Stammfunktionen und Integrale)

In allen Teilaufgaben gilt $C \in \mathbb{R}$.

---

## Aufgabe 1 – Die Regel $\int \frac{f'(x)}{f(x)}\,dx = \ln\lvert f(x)\rvert + C$ (16 BE)

**a)** [1 BE]

$f(x) = 5 + x^2 \Rightarrow f'(x) = 2x$

$$\int \frac{8x}{5+x^2}\,dx = 4\int \frac{2x}{5+x^2}\,dx = 4\ln\left(5+x^2\right) + C$$

Der Betrag kann weggelassen werden, da $5 + x^2 > 0$ für alle $x \in \mathbb{R}$. Entsprechend bei den weiteren Aufgaben, wenn der Nenner stets positiv ist.

**b)** [1 BE]

$f(x) = 2 + x^4 \Rightarrow f'(x) = 4x^3$

$$\int \frac{x^3}{2+x^4}\,dx = \frac{1}{4}\int \frac{4x^3}{2+x^4}\,dx = \frac{1}{4}\ln\left(2+x^4\right) + C$$

**c)** [1 BE]

$f(x) = x^2 - 4 \Rightarrow f'(x) = 2x$

$$\int \frac{6x}{x^2-4}\,dx = 3\int \frac{2x}{x^2-4}\,dx = 3\ln\left\lvert x^2-4\right\rvert + C$$

⚠️ Hier ist der **Betrag nötig**: Für $-2 < x < 2$ ist $x^2 - 4 < 0$.

**d)** [2 BE]

$f(x) = x^2 - 3x + 5 \Rightarrow f'(x) = 2x - 3$. Der Zähler ist das Doppelte davon: $4x - 6 = 2\cdot(2x-3)$.

$$\int \frac{4x-6}{x^2-3x+5}\,dx = 2\int \frac{2x-3}{x^2-3x+5}\,dx = 2\ln\left(x^2-3x+5\right) + C$$

Betrag nicht nötig: Die Diskriminante von $x^2 - 3x + 5$ ist $(-3)^2 - 4\cdot 1\cdot 5 = -11 < 0$, der Nenner hat also keine Nullstelle und ist (nach oben geöffnete Parabel) stets positiv.

**e)** [2 BE]

$f(x) = x^2 + 2x + 7 \Rightarrow f'(x) = 2x + 2 = 2\cdot(x+1)$

$$\int \frac{x+1}{x^2+2x+7}\,dx = \frac{1}{2}\int \frac{2x+2}{x^2+2x+7}\,dx = \frac{1}{2}\ln\left(x^2+2x+7\right) + C$$

Betrag nicht nötig: $x^2 + 2x + 7 = (x+1)^2 + 6 > 0$.

**f)** [1 BE]

$f(x) = 3 + \sin x \Rightarrow f'(x) = \cos x$

$$\int \frac{2\cos x}{3+\sin x}\,dx = 2\int \frac{\cos x}{3+\sin x}\,dx = 2\ln\left(3+\sin x\right) + C$$

Betrag nicht nötig, da $-1 \leq \sin x \leq 1$ und damit $3 + \sin x \geq 2 > 0$.

**g)** [2 BE]

$\tan x = \dfrac{\sin x}{\cos x}$. Mit $f(x) = \cos x \Rightarrow f'(x) = -\sin x$:

$$\int \tan x\,dx = \int \frac{\sin x}{\cos x}\,dx = -\int \frac{-\sin x}{\cos x}\,dx = -\ln\lvert\cos x\rvert + C = -\ln(\cos x) + C$$

Auf $\left]-\frac{\pi}{2};\, \frac{\pi}{2}\right[$ ist $\cos x > 0$, daher darf der Betrag entfallen.

**h)** [2 BE]

$f(x) = e^x + e^{-x} \Rightarrow f'(x) = e^x + e^{-x}\cdot(-1) = e^x - e^{-x}$ — das ist genau der Zähler!

$$\int \frac{e^x - e^{-x}}{e^x + e^{-x}}\,dx = \ln\left(e^x + e^{-x}\right) + C$$

Betrag nicht nötig, da $e^x > 0$ und $e^{-x} > 0$.

**i)** [2 BE]

$f(x) = x \cdot \ln x$. Mit der Produktregel:

$$f'(x) = 1 \cdot \ln x + x \cdot \frac{1}{x} = \ln x + 1$$

Das ist genau der Zähler. Also:

$$\int \frac{1+\ln x}{x\cdot\ln x}\,dx = \ln\left\lvert x \ln x\right\rvert + C = \ln(x \ln x) + C$$

Für $x > 1$ ist $x > 0$ und $\ln x > 0$, also $x\ln x > 0$ — der Betrag darf entfallen.

**j)** [2 BE]

$f(x) = 1 + (\sin x)^2 \Rightarrow f'(x) = 2\sin x \cdot \cos x = \sin(2x)$ (Kettenregel bzw. Doppelwinkelformel).

$$\int \frac{\sin(2x)}{1+(\sin x)^2}\,dx = \ln\left(1+(\sin x)^2\right) + C$$

Betrag nicht nötig, da $1 + (\sin x)^2 \geq 1 > 0$.

---

## Aufgabe 2 – Die Regeln $\int f'(x)\cdot e^{f(x)}\,dx = e^{f(x)} + C$ bzw. $\int f(ax+b)\,dx = \frac{1}{a}F(ax+b) + C$ (16 BE)

**a)** [1 BE]

$f(x) = 3x^2 \Rightarrow f'(x) = 6x$

$$\int 6x \cdot e^{3x^2}\,dx = e^{3x^2} + C$$

**b)** [1 BE]

$f(x) = -x^2 \Rightarrow f'(x) = -2x$

$$\int x \cdot e^{-x^2}\,dx = -\frac{1}{2}\int (-2x)\cdot e^{-x^2}\,dx = -\frac{1}{2}e^{-x^2} + C$$

**c)** [2 BE]

$f(x) = \cos(2x) \Rightarrow f'(x) = -\sin(2x)\cdot 2 = -2\sin(2x)$

$$\int \sin(2x)\cdot e^{\cos(2x)}\,dx = -\frac{1}{2}\int \left(-2\sin(2x)\right)\cdot e^{\cos(2x)}\,dx = -\frac{1}{2}e^{\cos(2x)} + C$$

**d)** [2 BE]

$f(x) = \dfrac{1}{x} = x^{-1} \Rightarrow f'(x) = -x^{-2} = -\dfrac{1}{x^2}$

$$\int \frac{e^{\frac{1}{x}}}{x^2}\,dx = -\int \left(-\frac{1}{x^2}\right)\cdot e^{\frac{1}{x}}\,dx = -e^{\frac{1}{x}} + C$$

Probe: $\left(-e^{\frac{1}{x}}\right)' = -e^{\frac{1}{x}} \cdot \left(-\frac{1}{x^2}\right) = \dfrac{e^{\frac{1}{x}}}{x^2}$ ✓

**e)** [1 BE]

Lineare Verkettung mit $a = 3$, $b = -2$; eine Stammfunktion von $u^4$ ist $\frac{1}{5}u^5$:

$$\int (3x-2)^4\,dx = \frac{1}{3}\cdot\frac{1}{5}(3x-2)^5 + C = \frac{1}{15}(3x-2)^5 + C$$

Probe: $\left[\frac{1}{15}(3x-2)^5\right]' = \frac{1}{15}\cdot 5\cdot(3x-2)^4\cdot 3 = (3x-2)^4$ ✓

**f)** [2 BE]

Umschreiben als Potenz: $\dfrac{1}{(2x+1)^3} = (2x+1)^{-3}$. Lineare Verkettung mit $a = 2$; eine Stammfunktion von $u^{-3}$ ist $\frac{u^{-2}}{-2}$:

$$\int (2x+1)^{-3}\,dx = \frac{1}{2}\cdot\frac{(2x+1)^{-2}}{-2} + C = -\frac{1}{4(2x+1)^2} + C$$

Probe: $\left[-\frac{1}{4}(2x+1)^{-2}\right]' = -\frac{1}{4}\cdot(-2)\cdot(2x+1)^{-3}\cdot 2 = (2x+1)^{-3}$ ✓

**g)** [2 BE]

Innere Funktion $x^3 + 1$ mit Ableitung $3x^2$; $6x^2 = 2\cdot 3x^2$:

$$\int 6x^2\cdot\sqrt{x^3+1}\,dx = 2\int 3x^2\cdot\left(x^3+1\right)^{0{,}5}dx = 2\cdot\frac{1}{1{,}5}\left(x^3+1\right)^{1{,}5} + C = \frac{4}{3}\left(x^3+1\right)^{1{,}5} + C$$

Probe: $\left[\frac{4}{3}\left(x^3+1\right)^{1{,}5}\right]' = \frac{4}{3}\cdot\frac{3}{2}\cdot\left(x^3+1\right)^{0{,}5}\cdot 3x^2 = 6x^2\sqrt{x^3+1}$ ✓

**h)** [1 BE]

Innere Funktion $x^3$ mit Ableitung $3x^2$:

$$\int x^2\cdot\cos\left(x^3\right)dx = \frac{1}{3}\int 3x^2\cdot\cos\left(x^3\right)dx = \frac{1}{3}\sin\left(x^3\right) + C$$

**i)** [2 BE]

Innere Funktion $\sin x$ mit Ableitung $\cos x$; es steht also $\left(f(x)\right)^2\cdot f'(x)$ da. Eine Stammfunktion von $u^2$ ist $\frac{1}{3}u^3$:

$$\int (\sin x)^2\cdot\cos x\,dx = \frac{1}{3}(\sin x)^3 + C$$

Probe: $\left[\frac{1}{3}(\sin x)^3\right]' = \frac{1}{3}\cdot 3(\sin x)^2\cdot\cos x = (\sin x)^2\cos x$ ✓

**j)** [2 BE]

Erst vereinfachen! Für $x > 0$ gilt $e^{2\ln x} = \left(e^{\ln x}\right)^2 = x^2$. Damit:

$$\int 3x\cdot e^{2\ln x}\,dx = \int 3x\cdot x^2\,dx = \int 3x^3\,dx = \frac{3}{4}x^4 + C$$

---

## Aufgabe 3 – Bestimmte Integrale (7 BE)

**a)** [2 BE]

$$\int_0^2 \frac{4x}{x^2+1}\,dx = 2\int_0^2 \frac{2x}{x^2+1}\,dx = 2\Big[\ln\left(x^2+1\right)\Big]_0^2 = 2\left(\ln 5 - \ln 1\right) = 2\ln 5 \approx 3{,}22$$

**b)** [2 BE]

$f(x) = \cos x \Rightarrow f'(x) = -\sin x$:

$$\int_0^{\frac{\pi}{2}} \sin x\cdot e^{\cos x}\,dx = \Big[-e^{\cos x}\Big]_0^{\frac{\pi}{2}} = -e^{\cos\frac{\pi}{2}} - \left(-e^{\cos 0}\right) = -e^0 + e^1 = e - 1 \approx 1{,}72$$

**c)** [3 BE]

$$\int_0^a \frac{2x}{x^2+1}\,dx = \Big[\ln\left(x^2+1\right)\Big]_0^a = \ln\left(a^2+1\right) - \ln 1 = \ln\left(a^2+1\right)$$

Bedingung:

$$\ln\left(a^2+1\right) = \ln 5 \iff a^2 + 1 = 5 \iff a^2 = 4 \iff a = 2 \;\;(\text{da } a > 0;\; a = -2 \text{ entfällt})$$

---

## Bewertungsübersicht

| Aufgabe | Teilaufgabe | Inhalt | BE |
|---------|-------------|--------|----|
| 1 | a) | $4\ln(5+x^2)$ | 1 |
| 1 | b) | $\frac{1}{4}\ln(2+x^4)$ | 1 |
| 1 | c) | $3\ln\lvert x^2-4\rvert$ (Betrag!) | 1 |
| 1 | d) | $2\ln(x^2-3x+5)$ | 2 |
| 1 | e) | $\frac{1}{2}\ln(x^2+2x+7)$ | 2 |
| 1 | f) | $2\ln(3+\sin x)$ | 1 |
| 1 | g) | $-\ln(\cos x)$ | 2 |
| 1 | h) | $\ln(e^x+e^{-x})$ | 2 |
| 1 | i) | $\ln(x\ln x)$ | 2 |
| 1 | j) | $\ln(1+(\sin x)^2)$ | 2 |
| 2 | a) | $e^{3x^2}$ | 1 |
| 2 | b) | $-\frac{1}{2}e^{-x^2}$ | 1 |
| 2 | c) | $-\frac{1}{2}e^{\cos(2x)}$ | 2 |
| 2 | d) | $-e^{1/x}$ | 2 |
| 2 | e) | $\frac{1}{15}(3x-2)^5$ | 1 |
| 2 | f) | $-\frac{1}{4(2x+1)^2}$ | 2 |
| 2 | g) | $\frac{4}{3}(x^3+1)^{1{,}5}$ | 2 |
| 2 | h) | $\frac{1}{3}\sin(x^3)$ | 1 |
| 2 | i) | $\frac{1}{3}(\sin x)^3$ | 2 |
| 2 | j) | $\frac{3}{4}x^4$ | 2 |
| 3 | a) | $2\ln 5$ | 2 |
| 3 | b) | $e-1$ | 2 |
| 3 | c) | $a = 2$ | 3 |
| **Gesamt** | | | **39** |
