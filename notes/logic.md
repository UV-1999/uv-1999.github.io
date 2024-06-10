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

for a proper and relevant implication, the consequent proposition must have the identical subject as the antecedent proposition.

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


