<head>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>

# From Philosophy to Science to Physics
My unwarranted notes on whatever I write here.

> “Tiger got to hunt, bird got to fly; Man got to sit and wonder 'why, why, why?' <br>
> Tiger got to sleep, bird got to land; Man got to tell himself he understand.”

Philosophy is the pursuit of **wisdom**. Wisdom is **knowledge** applied to make **good** judgements.
Judgements are the **beliefs** that motivate certain actions.

## Major branches of Philosophy:
### 1. Epistemology - What is the nature of truth?
### 2. [Logic - What is the nature of reason?](#logic)
### 3. Metaphysics- What is the nature of reality?
### 4. Axiology - What is the nature of values?
### 5. Maybe more since one can always philosophise...

### [Science](#science)
### [Classical Physics](https://uv-1999.github.io/notes/physics/classical)
### [Quantum Physics](https://uv-1999.github.io/notes/physics/quantum)
### [Thermal Physics](https://uv-1999.github.io/notes/physics/thermal)
### [Solid State Physics](https://uv-1999.github.io/notes/physics/solid)
### [Atomic and Molecular Physics](https://uv-1999.github.io/notes/physics/amol)
### [Nuclear Physics](https://uv-1999.github.io/notes/physics/nuclear)
### [Particle Physics](https://uv-1999.github.io/notes/physics/particle)

***

# Logic

Logic is the study of reasoning. Reasoning is how we make inferences. Inference is the act of gaining knowledge. Knowledge is true beliefs that are properly justified. Beliefs are what our mind is filled of. I can not define anything after that.

Truths are propositions that are true. But what is true?

Propositions are beliefs represented through some language as sentences that are not vague or ambiguous.

**Ambiguity** is about a word having several meanings. Context or definition is needed to avoid ambiguity. For example, a plane (aircraft or surface).

**Vagueness** is about words that describe some quantity but are not at all precise, like large and small. To avoid vagueness, we use numbers or give comparative statements.

**When is a Proposition True?**

**1. Analytically - True by Reasoning**
A proposition such as "If p and q, then p" is considered to be an analytic truth because of the meaning of the symbols and words in it and not because of any fact of any particular world. They are such that they could not be untrue. Analytic truth (also called a necessary truth) is a proposition that is true in all possible worlds or under all possible interpretations.

**2. Factually - True by Reality**
Factually true propositions are called synthetic truths or facts. A fact (also called a contingency), is only true in this world as it has historically unfolded.
It is a proposition that is true by conforming to reality.

Inferences are also called conclusions and they are formed by arguments. An argument is a collection of premises that have some conclusion.

Argument: if given some premises then they imply some conclusion.

## Implications (The “if-then” statements)
Consider this “If dogs are mammals, then I am human”. Both sub-statements are true. Dogs are mammals and I am a human. But clearly something is off about the compound statement. There is no causal relevance. The truth value of the antecedent does not imply the truth value of the consequent. 

True implies true - valid implication
False implies false - valid implication
Trues does not imply false - if it would that is an invalid implication
But false can imply true as well - how?

Consider the sentence "if a given number is smaller than 10 then it is also smaller than 100". 
This is clearly a true statement. Therefore, if we specialise the statement by replacing the words 'any number' by a number, we should still consider it to be true. So let's look at some of these specialised cases.

Using the number 5 gives the true statement "if 5 is smaller than 10 then it is also smaller than 100".
This is an example of 'true implies true'.

Using the number 500, we get "if 500 is smaller than 10 then it is also smaller than 100".
This is also a true statement, of the form 'false implies false'.

Finally, if we use the number 50, we get "if 50 is smaller than 10 then it is also smaller then 100".
This is an example of 'false implies true', and it still should be a true statement.
So the reason for the convention '{false implies true} is true' is that it makes statements like “x<10→x<100” true for all values of x, as one would expect.

We learn that true only implies true and false implies anything.
But it is clear that all implications in this example are directly connected.

Consider 
1. If Paris is in France then French people are from france. [true implies true]  - no okay

2. If Paris is in England then English people are from France. [false implies false]  - still okay

3. If Paris is in England then French people are from France. [false implies true] - still okay

The problem is that the implications are irrelevant. True implies true but there is no connection between antecedent and consequent.

I guess this is the reason we need first and higher order logic.

For a proper and relevant implication, the consequent proposition must have the identical subject as the antecedent proposition.

Consider this: “if atom exists then atom has a nucleus”
But the existence of an atom doesn't imply the existence of a nucleus.

So not just subjects in the proposition but we also need the predicates also to be constrained.

Say: “2 is even” with this alone one cannot say that it implies “2 is odd”. 
We would need the fact that a natural number is either odd or even and 2 is a natural number.

So to conclude another predicate about a subject from a known predicate, one must know more propositions that are more “general” and true.

One single premise is not enough for a conclusion.

Type of arguments (process of stating premises that leads to some stated conclusion):
1. Syllogism - conclusion from two premises.
2. Enthymeme - conclusion form three premises.

Socratic method - Dialogue based way to present arguments and counter arguments to reach a general conclusion.

## Types of Reasoning

Inductive - General conclusion from special observation.

Deductive - Special conclusion from general rule. As long as the general rule is true, a valid special conclusion is also true hence the deduction be sound.

Abductive - Probable cause of conclusion from a general rule (making most likely explanation based on evidence)

| Abduction | Deduction | Induction |
|----------|----------|----------|
| Case from Rule and Result  | Result from Rule and Case | Rule from Case and Result |
| Rule (first principle) All the beans in this bag are white | Rule (first principle) All the beans in this bag are white | Case (hypothesis): These beans are from this bag |
| Result (conclusion): These beans are white | Case (hypothesis): These beans are from this bag | Result (conclusion): These beans are white |
| Case (hypothesis): These beans are from this bag | Result (conclusion): These beans are white | Rule (first principle) All the beans in this bag are white |

Only deductive reasoning guarantees truth of conclusion. Abductive and Inductive reasoning are trial fits to make the deduction work.
- In abduction, we seek a Case that makes the conclusion deductively true given the Rule is true.
- In induction, we seek a Rule that makes the conclusion deductively true given the Case is true.

**Zero-order logic**: Also known as propositional logic, it deals with propositions as indivisible units and doesn't involve variables or quantifiers. For example, "p → q" represents the implication "If p, then q."

**First-order logic**: This extends propositional logic by introducing variables, predicates, and quantifiers. It allows for the formalisation of statements about objects and their properties. For instance, "∀x (P(x) → Q(x))" asserts that for all x, if x has property P, then x has property Q.

**Variables** - Something that can take value of a subject in a proposition. Since proposition = subject + predicate.
**Predicate** - Predicate is a part of propositions that talks about a property of some variable. The meaning of a predicate is exactly a function from the domain of objects to the truth-values "true" and "false".

**Quantifiers** - tells you for how many elements in a collection (that take place in variables), the given predicate is true or false.
1. Universal quantifier - "for all"
2. Existential quantifier - "there exists"

**Higher-order logic**: It goes beyond first-order logic by allowing quantification over functions and predicates, not just individuals. This enables reasoning about properties of properties and functions of functions.

## Logical Proofs
A proof is a series of implications.

**Principle of explosion:**
Let say : “no pigs can fly” and “there are flying pigs”
“There are flying pigs or There exist unicorns.” This statement is true in the above inconsistent system of axioms. The truth value of “there are flying pigs” is one and the truth value of “unicorns exists” is say x. So the combined truth value is one But also “no pigs can fly”, so the truth value of “there are flying pigs” is now zero. But since the combined Statement is true. Unicorns must exist. So using inconsistent axioms, we can prove anything, any nonsense. In the same manner we can simultaneously prove that unicorns don't exist. So if we start with inconsistent axioms, we will reach self-contradicting theorems and results.

**Proof by contradiction or “reduction to absurdity”**: If something absurd (statement is both true and false at same time) follows then the premise must be false. This follows from the principle of explosion.

**Proof by induction is "modus ponens" applied many times.**: Base case is verified to be true, the inductive step is proved, then all else is modus ponens ad infinitum.

The **Münchhausen trilemma** is that there are only three ways of completing a proof:

1. The circular argument, in which the proof of some proposition presupposes the truth of that very proposition

2. The regressive argument, in which each proof requires a further proof, ad infinitum.

3. The dogmatic argument, which rests on accepted precepts which are merely asserted rather than defended

The trilemma, then, is the decision among the three equally unsatisfying options. Karl Popper's suggestion was to accept the trilemma as unsolvable and work with knowledge by way of conjecture and criticism.

### Laws of logic
- Law of excluded middle - a proposition is either true or false. Not somewhere in the middle.
- Law of contradiction - something is either A or not A. Where A can be anything.
- Law of identity - a thing is identical or same to itself, A = A for all A.

**Law of excluded middle is necessary for logic.**
If a statement P is both true and false then anything can be proven to be true. The statement "law of excluded middle is true" can also be proven to be true which is contradictory. So either the law of excluded middle has to be true or all the propositions are true and false at the same time leading to the collapse of logic.

If a proposition that is always true regardless of the truth values of the propositional variables it contains is called a **tautology**.
A compound proposition that is always false is called a **contradiction** or absurdity.
And a compound proposition that is neither a tautology nor a contradiction is referred to as a **contingency**. The truth value depends on the contents of the propositions.

### [Logical Paradoxes](https://uv-1999.github.io/logic.html)

### Necessary conditions

A proposition P is **necessary** for a proposition Q.
We say this when  “If P is false, then Q is also false”. 
Or  “If Q is true then P is also true”.
Or “Q if P”.

But We cannot always say that “If P is true then Q is also true”.
Because P is merely necessary but not sufficient for Q.
Example: “Air is necessary for life”.
Or “If No air then no life”.
Or “Life if Air”.
Or “If life is there then air is also there.”

But is "If Air then life" true? No!
Assuming it to be true is called the **fallacy of converse**.

### Modus Ponens

**Modus ponens**: It is the act of concluding consequent if the antecedent is true and the implication is also true.

If No air then no life. 
No air on moon.
By modus ponens, no life on moon.

### Sufficient conditions

A proposition R is **sufficient** for a proposition Q.
We say this when “If R is true then Q is also true”.
Or “If Q is false then R is also false”.
Or “R only if Q”.

But We cannot always say that “If R is false then Q is also false”.
Because R is mere sufficient but not necessary for Q.

Example: “Too much food increases weight”.
Or “Too much food is sufficient condition for gaining weight”.
Or “If you eat too much food, you will gain weight”.
Or “If you are not gaining weight then you are not eating too much”

But is "If you are not eating too much then you will not gain weight" is true? No!
Assuming it to be true is called the **fallacy of inverse.**

### Modus tollens

**Modus tollens**: It is an act of concluding the negation of antecedent, if negation of consequent is true and the implication is also true.

If too much food, then weight gain.
No weight gain.
By modus tollens, Not too much food.

### Examples of "Sufficient Conditions $$\neq$$ Necessary Conditions"

Air is necessary for life but not sufficient.
You need more things for life.
You need the sufficient conditions also like food.

Too much eating is sufficient for weight gain but not necessary.
Not eating too much doesn't guarantee weight gain control.
Other conditions are also necessary to maintain weight like exercise.

Studying is necessary for passing exam.
Since no study guarantee no passing.
But studying is not sufficient for passing exam.
Since study doesn't guarantee passing.

Using an umbrella is sufficient for protection from rain.
Since umbrella guarantee to avoid rainfall on you.
But umbrella is not necessary to avoid rainfall on you.
You could use a raincoat as well.

"Having all the necessary conditions together" is the sufficient and necessary condition .

(The above follows from the AND logic)

"Having all the sufficient conditions together" is the sufficient but not necessary condition.

(The above follows from the OR logic)

***

# Science

## SCIENTIFIC METHOD

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

# Scientific Measurements
Measurements can be made of a property of a system considered in the study. Instruments may be required to make some measurements. A measurement is the central idea in experiments and has two parts, a number and a unit.

1. Natural units: when one or more fundamental physical constants are assigned to be unity.
2. Planck units: $$c = \hbar = G = k_{B} = 1$$
3. Atomic units: $$e = m_e = \hbar = k_e = \frac{1}{4πε_0} = 1$$
4. Geometrized units: $$c = G = 1$$
5. [Gaussian Units](http://www.pgccphy.net/ref/gaussian-conv.pdf)

## What IS a measurement?
It is a property of a system, a system is something we define ourselves, it is not necessary that we have clear cut boundaries of the system. Properties are constructed predicates that conforms to reality subject to our experience aided by our senses. We cannot sense electric charge, but it is a physical property because it comes with a theory that works. Since we can only have a comparative description of these properties, we create reference values which are called units. 1 Coulomb charge may not be something real ontologically. It is just a computable property of the system that we compute or in an informal way, measure, by some instruments. The instrument works by an effect that makes us feel sensible experiences, like seeing two gold leaf repelling each other by some amount. So even if charges are a part of the absolute objective reality still all we can do is see its effects only. The effects we can observe and sense by some analysis. These effects are the act of making a measurement. Such and other sensible experiences are the only way we can decide if the theory works or not. Data visualisation is also just an effect of nature in a way that we can sense. A model or theory fits not objectively but rather always subjectively. When we all agree over the same subjective experience somehow that's when we say something is effectively objective about our experiences, and our measurements. Hence physical quantities are never measured but only computed. Effects are measured.

## Properties of a measurement
An instrument measures a property numerically. Let’s say “010.1040”. 
Since here the 0 (left to 1 before decimal) is not a **significant digit**, we safely re-write it to be 10.1040.
Why are we writing the rightmost 0? Because it is significant.
It is obvious that non-zero digits are significant but the significance of zeros between nonzero digits and trailing zeros have a little more for us to understand. These zeros are tailing us that there is 0 contribution of that particular digit place (power of 10) and having such tells the least possible measurements that can be made with an instrument, often called the **least count** which also serves as a measure of precision for the instrument.
For the above example, the least count is 0.0001.

**Accuracy** is the closeness of agreement between a measured value and a true or accepted value.
**Measurement** error is the amount of inaccuracy and is defined as the difference between the measured value and the ‘true value’ of the thing being measured.

Error = measured value - true value

**Random errors** are statistical fluctuations (in either direction) in the measured data due to the precision limitations of the measurement device. Random errors can be evaluated through statistical analysis and can be reduced by averaging over a large number of observations. Random errors decrease precision. 

**Systematic errors** are reproducible inaccuracies that are consistently in the same direction. These errors are difficult to detect and cannot be analysed statistically. If a systematic error is identified when calibrating against a standard, applying a correction or correction factor to compensate for the effect can reduce the bias. Unlike random errors, systematic errors cannot be detected or reduced by increasing the number of observations.

**Precision** is a measure of how well a result can be determined (without reference to a theoretical or true value). It is the degree of consistency and agreement among independent measurements of the same quantity; also the reliability or reproducibility of the result. 

Any error whose value we do not know is a source of *uncertainty*. More is the precision less is the uncertainty and vice versa.

We want to know the properties of a system as they really are (true-values). We can do something to get there but often we may have the truths covered in some noises (unwanted information). The most common way to show the range of values that we believe includes the true value is:

**measurement = (best estimate $$\pm$$ uncertainty) units**

It is possible to find the following notations for expressing a measurement.

- $$\text{measured value} \pm \text{uncertainty}$$
- $${\text{measured value}^\text{+uncertainty}_\text{-uncertainty}}$$
- $$\text{measured value} \text{(uncertainty)}$$

Reality simplified by assumptions leads to a theory, model or hypothesis. Reality measured with some senses, or instruments leads to data with uncertainty. If we only know the result of an experiment but do not know the error or uncertainty, then we are completely unable to judge the significance of the result. 

The result of an experiment may have several measurements and it becomes naturally crucial to describe the quality of a measurement (in order to have trust in the results). It is desirable to have a very good estimate and a minimum uncertainty in your measurements. As soon as we make measurements we are dealing with data. Sometimes called experimental data. observations, or readings. To understand the quality of data, statistics is needed to infer general information from samples and also to quantify the quality of the data.

**The best estimate** = Expectation value of the probability distribution that models the data. For normal distribution it is the arithmetic mean.
**The uncertainty** = Standard deviation of the mean or “standard error” which is the standard deviation divided by the square root of the number of observations made (measurements made).

**Standard deviation** is the square root of **variance**.
**Variance** is the **expectation value** of squares of data values minus the square of Expectation value of data.

**Expectation value** is $$\int x P(x) dx $$  over the whole range of $$x$$.

**Propagation of error**
Let us have a property we want to measure, say $$f$$ and according to some theory, it depends on some a priori independent variables x, y, z, etc.

$$ \Delta f = \sum_i \partial_{x_i} f \times \Delta x_i $$

**Propagation of uncertainty**
Let us have a property we want to measure, say $$f$$ and according to some theory, it depends on some a priori independent variables x, y, z, etc.

$$ {\sigma_f}^2 = \sum_i \partial_{x_i} f \times {\sigma_{x_i}}^2$$

But if there are unexpected covariances in the variables x, y, z, etc. the above rule **(addition in quadrature)** may not work.

**Correlation** is a statistical measure of how two things are related. It is important to know that **un-correlation** means that there is no linear dependence between the two variables, while **independence** means that no types of dependence exist between the two variables

An **artefact** is any error in the perception or representation of any information introduced by the involved equipment or technique(s).

An **outlier** is a data point that differs significantly from other observations (assuming some model). You could argue that outliers are more likely to be errors than correct observations, but there’s a bit of circular reasoning going on here: I think my model is correct, and this outlier has low probability according to my model, therefore it is incorrect. And when I remove the points that violate my assumptions, see how well my assumptions hold? Often outliers are errors but it is necessary to study each outlier and remove it conclusively.

Do my experimental results agree with a theoretical prediction or results from other experiments?
A measured result agrees with a theoretical prediction if the prediction lies within the range of experimental uncertainty. 

if two measured values have standard uncertainty ranges that overlap, then the measurements are said to be consistent (they agree).
If the uncertainty ranges do not overlap, then the measurements are said to be discrepant (they do not agree).
Assuming that there are no artificial changes in the data.
