---
layout: exam
title: "Analysis-Übungsblatt 01 – Integrationsregeln – Bayern 13. Klasse (Gymnasium)"
schulform: Gymnasium
fach: Analysis
bundesland: Bayern
klassenstufe: "13. Klasse"
nr: "01"
pruefungstyp: Übungsblatt
typ: aufgabe
bearbeitungszeit: "30 Minuten"
gesamtpunktzahl: "39 BE"
---

# Analysis-Übungsblatt – Bayern 13. Klasse

## Training: Integrationsregeln (Stammfunktionen und Integrale)

**Bearbeitungszeit:** ca. 30 Minuten  
**Hilfsmittel:** keine  
**Gesamtpunktzahl:** 39 BE  
**Datum:** ..................  **Name:** ..................

---

> 📝 **Tipps von eurer Lehrkraft:**
> - Schaut euch jeden Integranden zuerst genau an: **Steht im Zähler (fast) die Ableitung des Nenners?** Oder steht vor der e-Funktion (fast) die Ableitung des Exponenten? Dann habt ihr schon gewonnen!
> - Fehlt nur ein konstanter Faktor, holt ihn euch: *erweitern* und den Kehrwert vor das Integral schreiben, z. B. $\int \frac{x}{2+x^2}\,dx = \frac{1}{2}\int \frac{2x}{2+x^2}\,dx$.
> - Macht bei jeder Teilaufgabe die **Probe durch Ableiten** – so merkt ihr sofort, ob ein Faktor fehlt.
> - Denkt beim $\ln$ an den **Betrag** – und überlegt, wann ihr ihn weglassen dürft.
> - Die mit ⭐ markierten Teilaufgaben sind etwas kniffliger. Nicht verzweifeln – erst umformen, dann integrieren!

In allen Teilaufgaben gilt $C \in \mathbb{R}$.

---

## Aufgabe 1 – Die Regel $\int \frac{f'(x)}{f(x)}\,dx = \ln\lvert f(x)\rvert + C$ (16 BE)

*Beispiel:* $\displaystyle\int \frac{3x^2}{1+x^3}\,dx = \ln\lvert 1+x^3\rvert + C$ für $x \neq -1$, denn $f(x) = 1 + x^3 \Rightarrow f'(x) = 3x^2$.

Bestimme jeweils eine Stammfunktion bzw. das unbestimmte Integral.

**a)** $\displaystyle\int \frac{8x}{5+x^2}\,dx = $ .................. [1 BE]

**b)** $\displaystyle\int \frac{x^3}{2+x^4}\,dx = $ .................. [1 BE]

**c)** $x \notin \{-2;\, 2\}$: $\displaystyle\int \frac{6x}{x^2-4}\,dx = $ .................. [1 BE]

**d)** $\displaystyle\int \frac{4x-6}{x^2-3x+5}\,dx = $ .................. [2 BE]

**e)** $\displaystyle\int \frac{x+1}{x^2+2x+7}\,dx = $ .................. [2 BE]

**f)** $\displaystyle\int \frac{2\cos x}{3+\sin x}\,dx = $ .................. [1 BE]

**g)** ⭐ $x \in \left]-\frac{\pi}{2};\, \frac{\pi}{2}\right[$: $\displaystyle\int \tan x\,dx = $ .................. [2 BE]

> 💡 Erinnerung: $\tan x = \dfrac{\sin x}{\cos x}$

**h)** ⭐ $\displaystyle\int \frac{e^x - e^{-x}}{e^x + e^{-x}}\,dx = $ .................. [2 BE]

**i)** ⭐ $x > 1$: $\displaystyle\int \frac{1+\ln x}{x \cdot \ln x}\,dx = $ .................. [2 BE]

**j)** ⭐ $\displaystyle\int \frac{\sin(2x)}{1+(\sin x)^2}\,dx = $ .................. [2 BE]

> 💡 Erinnerung: $\sin(2x) = 2\sin x \cos x$

---

## Aufgabe 2 – Die Regeln $\int f'(x)\cdot e^{f(x)}\,dx = e^{f(x)} + C$ bzw. $\int f(ax+b)\,dx = \frac{1}{a}F(ax+b) + C$ (16 BE)

($F$ ist eine Stammfunktion von $f$.) Allgemeiner gilt auch hier die „Kettenregel rückwärts": Steht die **innere Ableitung** als Faktor da, kann man direkt integrieren.

*Beispiel:* $\displaystyle\int 2\,e^{2x+5}\,dx = e^{2x+5} + C$, denn $f(x) = 2x + 5 \Rightarrow f'(x) = 2$.

Bestimme jeweils eine Stammfunktion bzw. das unbestimmte Integral.

**a)** $\displaystyle\int 6x \cdot e^{3x^2}\,dx = $ .................. [1 BE]

**b)** $\displaystyle\int x \cdot e^{-x^2}\,dx = $ .................. [1 BE]

**c)** $\displaystyle\int \sin(2x) \cdot e^{\cos(2x)}\,dx = $ .................. [2 BE]

**d)** ⭐ $x \neq 0$: $\displaystyle\int \frac{e^{\frac{1}{x}}}{x^2}\,dx = $ .................. [2 BE]

**e)** $\displaystyle\int (3x-2)^4\,dx = $ .................. [1 BE]

**f)** $x \neq -\frac{1}{2}$: $\displaystyle\int \frac{1}{(2x+1)^3}\,dx = $ .................. [2 BE]

**g)** $x > -1$: $\displaystyle\int 6x^2 \cdot \sqrt{x^3+1}\,dx = $ .................. [2 BE]

**h)** $\displaystyle\int x^2 \cdot \cos\left(x^3\right)dx = $ .................. [1 BE]

**i)** ⭐ $\displaystyle\int (\sin x)^2 \cdot \cos x\,dx = $ .................. [2 BE]

**j)** ⭐ $x > 0$: $\displaystyle\int 3x \cdot e^{2\ln x}\,dx = $ .................. [2 BE]

---

## Aufgabe 3 – Bestimmte Integrale (7 BE)

Berechne die folgenden Integrale **exakt**. Überlege dir zuerst, welche Regel passt.

**a)** $\displaystyle\int_0^2 \frac{4x}{x^2+1}\,dx$ [2 BE]

**b)** $\displaystyle\int_0^{\frac{\pi}{2}} \sin x \cdot e^{\cos x}\,dx$ [2 BE]

**c)** ⭐ Bestimme $a > 0$ so, dass gilt: $\displaystyle\int_0^a \frac{2x}{x^2+1}\,dx = \ln 5$. [3 BE]

---

**Viel Erfolg! 🍀 Und denkt dran: Ableiten ist die beste Kontrolle :)**
