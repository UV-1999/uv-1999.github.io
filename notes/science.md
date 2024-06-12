<head>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>

[Back to main menu](https://uv-1999.github.io/notes/philosophy)

# Science

### Scientific Method

Observation are done. Abductive reasoning is done to reach a hypothesis.
Phenomenology - extracting meaningful insights from empirical data and often serves as a precursor to theoretical developments.

Hypothesis predicts something by deductive reasoning. Predictions are tested by experiments. An experiment is designed either to demonstrate the observations or to check the predictions. If prediction is experimentally verified to be true then the hypothesis becomes theory, by inductive reasoning it is taken as part of scientific knowledge.

If prediction comes out to be false then the theory is discarded or labelled as of limited validity.

Every theory is tested repeatedly to avoid mistakes. If new observations violate the theory then again the theory becomes limited or even discarded when better theory is there. The description provided by theory became more concise as unnecessary details are removed, and they became more precise as the details are increased but it become accurate only by the experimental verification of it.

Theory = Laws + Model.
Model = A description of a system using assumptions and approximations, introduces physical quantities.
Laws = Mathematical statements that are derived from experimental results relating physical quantities.

### Kuhn’s phases of science:
1. Pre Paradigmatic science (e.g. physics before Newton)
2. Normal Science (e.g. classical mechanics)
3. Crisis (e.g. UV catastrophe)
4. Scientific revolution (e.g. Relativity and QM)

You go from 1 to 2 to 3 to either return to 2 or to go to 4 to again create a new paradigm and call it new normal science.

### Characteristics of a scientific theory:

1. Popper’s rule: A theory must be testable, refutable and falsifiable.

2. Hitchens's razor: What can be asserted without evidence can be dismissed without evidence.

3. Occam's razor: Given two competing theories which in all tested cases produce Identical results, The theory that makes fewer assumptions is preferred.
Better theories may be regarded as generalisation of limited theories. Different strong theories are tried to be logically consistent with each other to form a singular theory ultimately (unification).

5. Reality of a theory: a necessary ingredient of a theory that correctly describes what we observe is called Real observable or a 'real' thing. Electrons and other elementary particles are a great example, we don’t interact with those things on the size scales of our routine human life but the observations support their existence, because after all they are just an idea inherently.

A classic example is the theory of general relativity. One of the logical consequences of its hypotheses is that light will be affected by the gravity of a massive body. That is: If (1) the theory of general relativity is true, then (2) light will be affected by the gravity of a massive body. Now the truth of (2) will not logically imply the truth of (1). However, the falsity of (2) will imply the falsity of (1): i.e. if (2) turns out to be false, then there will have to be a false hypothesis somewhere in the theory of general relativity. It turns out that the truth of (2) can be tested by observation.

In the famous eclipse experiment of 1919, the positions of stars near the sun were carefully measured while the sun was eclipsed by the moon. Those measurements were compared with the positions of those same stars when the sun was in another part of the sky. And it was found that their positions had changed: the gravitational field of the sun had deflected the light from the stars. In other words, the theory of general relativity predicted that light will be affected by gravity. And if that prediction had been proven false, that would have meant that the theory could not have been completely true. However, proving the truth of the prediction was not enough by itself to prove the truth of the theory.

That’s why theories are tested as much as possible by logically deriving many different predictions from them, and then using observation or experiment to determine whether those predictions are true. A single failed prediction would be enough to prove the theory false. Therefore, the more true predictions the theory produces, the more likely it is that the theory itself is true. So that is the primary way that empirical sciences are based on logic. They use the laws of logical deduction (which include mathematics) to generate predictions, based on the hypotheses of their theories. It’s then up to the observers and experimentalists to determine whether those predictions are true.

## Scientific Measurements
Measurements can be made of a property of a system considered in the study. Instruments may be required to make some measurements. A measurement is the central idea in experiments and has two parts, a number and a unit.

1. Natural units: when one or more fundamental physical constants are assigned to be unity.
2. Planck units: $$c = \hbar = G = k_{B} = 1$$
3. Atomic units: $$e = m_e = \hbar = k_e = \frac{1}{4πε_0} = 1$$
4. Geometrized units: $$c = G = 1$$
5. [Gaussian Units](http://www.pgccphy.net/ref/gaussian-conv.pdf)

### What IS a measurement?
It is a property of a system, a system is something we define ourselves, it is not necessary that we have clear cut boundaries of the system. Properties are constructed predicates that conforms to reality subject to our experience aided by our senses. We cannot sense electric charge, but it is a physical property because it comes with a theory that works. Since we can only have a comparative description of these properties, we create reference values which are called units. 1 Coulomb charge may not be something real ontologically. It is just a computable property of the system that we compute or in an informal way, measure, by some instruments. The instrument works by an effect that makes us feel sensible experiences, like seeing two gold leaf repelling each other by some amount. So even if charges are a part of the absolute objective reality still all we can do is see its effects only. The effects we can observe and sense by some analysis. These effects are the act of making a measurement. Such and other sensible experiences are the only way we can decide if the theory works or not. Data visualisation is also just an effect of nature in a way that we can sense. A model or theory fits not objectively but rather always subjectively. When we all agree over the same subjective experience somehow that's when we say something is effectively objective about our experiences, and our measurements. Hence physical quantities are never measured but only computed. Effects are measured.

Reality simplified by assumptions leads to a theory, model or hypothesis. Reality measured with some senses, or instruments leads to data with errors and uncertainties. If we only know the result of an experiment but do not know the errors or uncertainties, then we are completely unable to judge the significance of the result. 

The result of an experiment may have several measurements and it becomes naturally crucial to describe the quality of a measurement (in order to have trust in the results). It is desirable to have a very good estimate and a minimum uncertainty in your measurements. As soon as we make measurements we are dealing with data. Sometimes called experimental data. observations, or readings. To understand the quality of data, statistics is needed to infer general information from samples and also to quantify the quality of the data.

### Statistical Properties of a Measurement
An instrument measures a property numerically. Let’s say “010.1040”. 
Since here the 0 (left to 1 before decimal) is not a **significant digit**, we safely re-write it to be 10.1040.
Why are we writing the rightmost 0? Because it is significant.
It is obvious that non-zero digits are significant but the significance of zeros between nonzero digits and trailing zeros have a little more for us to understand. These zeros are tailing us that there is 0 contribution of that particular digit place (power of 10) and having such tells the least possible measurements that can be made with an instrument, often called the **least count** which also serves as a measure of precision for the instrument.
For the above example, the least count is 0.0001.

**Accuracy** is the closeness of agreement between a measured value and a true or accepted value.
**Measurement** error is the amount of inaccuracy and is defined as the difference between the measured value and the ‘true value’ of the thing being measured.

**Error = measured value - true value**

**Random errors** are statistical fluctuations (in either direction) in the measured data due to the precision limitations of the measurement device. Random errors can be evaluated through statistical analysis and can be reduced by averaging over a large number of observations. Random errors decrease precision. 

**Systematic errors** are reproducible inaccuracies that are consistently in the same direction. These errors are difficult to detect and cannot be analysed statistically. If a systematic error is identified when calibrating against a standard, applying a correction or correction factor to compensate for the effect can reduce the bias. Unlike random errors, systematic errors cannot be detected or reduced by increasing the number of observations.

**Precision** is a measure of how well a result can be determined (without reference to a theoretical or true value). It is the degree of consistency and agreement among independent measurements of the same quantity; also the reliability or reproducibility of the result. 

Any error whose value we do not know is a source of *uncertainty*. More is the precision less is the uncertainty and vice versa.

We want to know the properties of a system as they really are (true-values). We can do something to get there but often we may have the truths covered in some noises (unwanted information). The most common way to show the range of values that we believe includes the true value is:

**measurement = (best estimate $$\pm$$ uncertainty) units**

It is possible to find the following notations for expressing a measurement.

1. $$\text{measured value} \pm \text{uncertainty}$$.
2. $${\text{measured value}^\text{+uncertainty}_\text{-uncertainty}}$$.
3. $$\text{measured value} \text{(uncertainty)}$$.

**The best estimate** = Expectation value of the probability distribution that models the data. For normal distribution it is the arithmetic mean.
**The uncertainty** = Standard deviation of the mean or “standard error” which is the standard deviation divided by the square root of the number of observations made (measurements made).

It is possible that people use the words "error" and "uncertainty" interchangeably but error values can be any real number and uncertainity is always a non-negative real number.

**Standard deviation** is the square root of **variance**.
**Variance** is the **expectation value** of squares of data values minus the square of Expectation value of data.

**Expectation value** of a variable x with probability distribution P(x) is $$\int x P(x) dx $$  over the whole range of $$x$$.

**Propagation of error**
Let us have a property we want to measure, say $$f$$ and according to some theory, it depends on some a priori independent variables x, y, z, etc.

$$ \Delta f = \sum_i \partial_{x_i} f \times \Delta x_i $$

**Propagation of uncertainty**
Let us have a property we want to measure, say $$f$$ and according to some theory, it depends on some a priori independent variables x, y, z, etc.

$$ {\sigma_f} = \sqrt{\sum_i \left( {\partial_{x_i} f \times \sigma_{x_i}} \right) ^2}$$

[A python code to use this formula.](https://github.com/UV-1999/Misc-codes/blob/main/uncertainty-propagation.py)

But if there are unexpected covariances in the variables x, y, z, etc. the above rule **(addition in quadrature)** may not work.

**Correlation** is a statistical measure of how two things are related. It is important to know that **un-correlation** means that there is no linear dependence between the two variables, while **independence** means that no types of dependence exist between the two variables

An **artefact** is any error in the perception or representation of any information introduced by the involved equipment or technique(s).

An **outlier** is a data point that differs significantly from other observations (assuming some model). You could argue that outliers are more likely to be errors than correct observations, but there’s a bit of circular reasoning going on here: I think my model is correct, and this outlier has low probability according to my model, therefore it is incorrect. And when I remove the points that violate my assumptions, see how well my assumptions hold? Often outliers are errors but it is necessary to study each outlier and remove it conclusively.

Do my experimental results agree with a theoretical prediction or results from other experiments?
A measured result agrees with a theoretical prediction if the prediction lies within the range of experimental uncertainty. 

if two measured values have standard uncertainty ranges that overlap, then the measurements are said to be consistent (they agree).
If the uncertainty ranges do not overlap, then the measurements are said to be discrepant (they do not agree).
Assuming that there are no artificial changes in the data.

***
[Back to main menu](https://uv-1999.github.io/notes/philosophy)
