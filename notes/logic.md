# Logic

Logic is the study of reasoning. Reasoning is how we make inferences. Inference is the act of gaining knowledge.

Argument is a collection of premises that have some conclusion.
Argument: if given some premises then they imply some conclusion.
Type of arguments (process of stating premises that leads to some stated conclusion):

Syllogism - conclusion from two premises.
Enthymeme - conclusion form three premises.

Socratic method - Dialogue based way to present arguments and counter arguments to reach a general conclusion.

## IMPLICATIONS - the “if-then” statements.
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

## Types of reasoning:

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

## LAWS OF LOGIC:
- Law of excluded middle - a proposition is either true or false. Not somewhere in the middle.
- Law of contradiction - something is either A or not A. Where A can be anything.
- Law of identity - a thing is identical or same to itself, A = A for all A.

Law of excluded middle is necessary for logic. If a statement P is both true and false then anything can be proven to be true. The statement "law of excluded middle is true" can also be proven to be true which is contradictory. So either the law of excluded middle has to be true or all the propositions are true and false at the same time leading to the collapse of logic.

If a proposition that is always true regardless of the truth values of the propositional variables it contains is called a tautology.
A compound proposition that is always false is called a contradiction or absurdity.
And a compound proposition that is neither a tautology nor a contradiction is referred to as a contingency. The truth value depends on the contents of the propositions.

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

### Cases of combination of sufficient and necessary condition:

> **Case1**
> Sufficient conditions are true (implies proposition to be true.
> Necessary conditions are false (implies proposition to be false).
> So this is a contradiction, (true and false simultaneously).

> **Case2**
> Sufficient conditions are false.
> Necessary conditions are true.
> Truth of proposition is not guaranteed.

> **Case3**
> Sufficient conditions are false.
> Necessary conditions are false.
> Proposition is guaranteed to be false.

> **Case4**
> Sufficient conditions are true.
> Necessary conditions are true.
> Proposition is guaranteed to be true.

## [Logical Paradoxes](https://uv-1999.github.io/logic.html)

Principles of explosion: Let say : “no pigs can fly” and “there are flying pigs”
“There are flying pigs or There exist unicorns.” This statement is true in the above inconsistent system of axioms. The truth value of “there are flying pigs” is one and the truth value of “unicorns exists” is say x. So the combined truth value is one But also “no pigs can fly”, so the truth value of “there are flying pigs” is now zero. But since the combined Statement is true. Unicorns must exist. So using inconsistent axioms, we can prove anything, any nonsense. In the same manner we can simultaneously prove that unicorns don't exist. So if we start with inconsistent axioms, we will reach self-contradicting theorems and results.

Proof by contradiction or “reduction to absurdity”
If something absurd (statement is both true and false at same time) follows then the premise must be false. This follows from the principle of explosion.

Proof by induction is modus ponens applied many times.
Base case is verified to be true, the inductive step is proved, then all else is modus ponens ad infinitum.

If it is asked how any given proposition is known to be true, proof in support of that proposition may be provided. Yet that same question can be asked of that supporting proof, and any subsequent supporting proof.
The Münchhausen trilemma is that there are only three ways of completing a proof:
The circular argument, in which the proof of some proposition presupposes the truth of that very proposition

The regressive argument, in which each proof requires a further proof, ad infinitum.

The dogmatic argument, which rests on accepted precepts which are merely asserted rather than defended

The trilemma, then, is the decision among the three equally unsatisfying options. Karl Popper's suggestion was to accept the trilemma as unsolvable and work with knowledge by way of conjecture and criticism.


