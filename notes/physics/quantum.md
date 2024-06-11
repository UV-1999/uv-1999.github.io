<head>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>

[Back to main menu](https://uv-1999.github.io/notes/philosophy)

# Quantum Physics

## Problems with Classical Mechanics



## Wave-particle duality and special relativity

Premise 1: Each particle is associated with a wave and it is impossible to separate the motion of the particle from its wave.

Premise 2: The 4-velocity of the particle flows in the same direction of the wave propagation (4-wave vector).

Deduction 1: We get that the 4-momentum must also be in the same direction as the 4-wave vector.

Deduction 2: Hence all the corresponding components of 4-momentum must be linearly proportional to the corresponding components of the 4-wave vector and the constant must be invariant since this is valid for all possible velocities. The 4-momentum is $$(p_0, p_1, p_2, p_3)$$ and the 4-wave vector is $$(k_0, k_1, k_2, k_3)$$.

Deduction 3: We have $$p_i = \hbar {k_i}$$ (de-Broglie Hypothesis).

Premise 3: It is also known that $$p_0 = \frac{E}{c}$$ and $$k_0 = \frac{\omega}{c}$$.

Deduction 4: So we have $$E = \hbar \omega$$ (Planck’s Hypothesis).

Deduction 5: From the energy momentum relation of special theory of relativity, Planck’s Hypothesis and de-Broglie Hypothesis, we can derive:

$$\omega^2 = {cK}^2 + {\omega_0}^2$$

Premise 4: Since group velocity $$v_g = \frac{domega}{dk}$$  and phase velocity $$v_p = \frac{omega}{k}$$ and $$v_g v_p = c^2$$

So the wave associated with a matter particle travels faster than the invariant speed so it must not carry any mechanical influence.
What does this wave represent then?



## Mathematical Framework of Quantum Mechanics

In Classical physics, physical quantities are single-valued, deterministic and evolve continuously hence it is reasonable to model them by continuous functions.

In Quantum physics, physical quantities can not be single valued but are always probabilistic and may evolve discreetly. How to model these properties?

We need a mathematical object that can take the values of the quantity, and since each value has a probability, the mathematical object must tell us the probability of each of those values. Zero probability of some values takes care of the discreteness of the physical quantities.

We can represent objects as abstract vectors where the basis vectors represent all the discrete states it can take.

The physical properties can be shown as matrices (linear operators). When acted upon on the state vectors, they output the possible values of the physical properties with some probabilities.

That is why we use linear algebra for quantum mechanics.

$$ \vert \psi \rangle = \sum_{i} c_{i} \vert \phi_i \rangle $$

These sums can be allowed to be infinite. But consider position as a property. It is continuous so showing it as a discrete sum is not efficient. We may replace the sum with an integral.

We can say that state vector is the integral:

$$ \int {dx} {c(x)} {\vert x \rangle} $$

$$c(x)$$ is a function for each position state $$\vert x \rangle$$ so that we can use it to find the probability.

It is mathematically possible that adding an infinite number of vectors together the sum may come out as not an element of the vector space. 

E.g. Adding an infinite number of polynomial terms is not a polynomial and polynomials can be thought of as vectors.

Hence we need to assert that the sum always converges to another vector in the same vector space.

Such a vector space is called a Hilbert space.

So Quantum vector space = Hilbert vector space

But Hilbert space has an inner product also.


The inner product is useful to find the probability coefficients:
Consider |state vector> = c1|C1> + c2|C2> +  …
So taking inner product of state vector with |C1> with the requirements that |C1> and |C2> and etc. are orthonormal.
We get < C1 | state > = c1
But what about the inner product for the integrals? When the state vector is integral of { dx c(x) |x> }.
For position value say “a”:

c(x=a) = integral of { dx c(x) Diracdelta(x-a) }
Consider the inner product of two states = integral of { dx C1(x) |x> } X integral of { dy C2(y) |y> }
⇒ double integral of { dx dy C1’(x) C2(y) <x | y> }
⇒ Since x and y are orthonormal states hence only when they are the same (x=y) they are non-zero.
⇒  integral of { dx C1’(x) C2(x) }

Dual space of vector space V is a vector space that has vectors as all the linear functionals in V (row vectors).
Since inner products and linear functional spit out scalars hence they are useful to find the values of physical quantities.
And linear functionals (row vectors) applied to column vectors is just the inner product of those two vectors.
This is the consequence of the Riesz representation theorem in maths.
Row vector = Bra = <x| and Column vector = Ket = |x>

HOW LINEAR OPERATORS REPRESENT PHYSICAL QUANTITIES?
A system can be in several possible definite states (states we can observe). Such states have the corresponding values of the physical properties that we measure or observe.
The linear operator for a particular physical observable quantity acted upon by the state should spit out all possible values of the observable which are also exclusive. Such a feature is also shown by the eigenvalue problem.
Hence the state vector is a linear combination of eigenstates (mutually orthogonal vectors = basis vectors).
The eigenvalues must be real. 

Okay. HOW TO FIND THE PROBABILITY?
Since the eigenvector with the component such that its complex magnitude is largest implies a larger probability, 
Hence it is seemingly reasonable to just say that probability distribution is equal to that complex magnitude of the coefficient.
Well we should first decide what we expect from the probability distribution:
Total probability is one.
The length of the quantum state should not change.
The probability does not depend on the sign of the coefficient.
If the length could change as we apply the operator then we have to define the initial length of the vector which can not be known. Because all we observe is the eigenvalues, not the length of the state vectors.
The length of the vector is the sum of squares of the coefficients.
Sum of probability function say f(c_i) = 1
⇒ Sum of f(c_i) + f(c_n) = 1
⇒ c_n = +/- sqrt { length squared - (sum of squares of c_i other than n) } 
⇒ since f is even f(c_n) = f(sqrt { length squared - (sum of squares of c_i other than n) })
⇒ Sum of f(c_i) + f(c_n) = 1 ⇒ Sum of f(c_i) + f(sqrt { length squared - (sum of squares of c_i other than n) }) = 1
⇒ we can differentiate this wrt say c1. Since all c are independent of each other.
⇒ df(c1)/c1 + d/dc1 ( f (square root term from above) ) = 0
⇒  (1/c1) * df(c1)/c1 = some terms having all c = constant
⇒ So f = Ac^2 + B
⇒ B is zero since f(0) = 0 if the coefficient is zero then the probability is also zero.
⇒ f(length of state vector) = 1 ⇒ A = 1/ (length^2) and we choose length to be 1.
⇒ f(c) = (c)^2 = square of magnitude of inner product <eigenvector for c | state vector> 
THE BORN RULE DERIVED !!
BUT such a derivation works only for vector space having equal or more than 3 dimensions. Since in 1 dimension state vector the state is fixed anyway. In two dimensions the two eigenstates will not be independent if we keep the length to be constant. So for two or less dimensions we take the Born rule as an axiom. 

For observables with continuous eigenbasis, the probability density is the square of the coefficient function.
So back to quantum operators. The eigenvalues must be real and the operator must not change the length of the state vector. Also the eigenvectors must span the vector space. Eigenvectors are also orthonormal.
Say some operator A.
⇒ Consider A|state> = Sum over { c A |eigenvectors> } = Sum over { c eigenvalue |eigenvectors> }
⇒ c = < eigenvector | state >
⇒ Sum over { c eigenvalue |eigenvectors> } = Sum over { < eigenvector | state >  eigenvalue |eigenvectors> }
⇒ Sum over {  eigenvalue |eigenvectors> < eigenvector | } | state >
⇒ A = Sum over { Eigenvalue |eigenvectors><eigenvectors| }
The Hermitian conjugate of A is also A hence A is a Hermitian Operator. Hence all quantum observables are Hermitian operators.

THE COMMUTATOR == [A, B] = AB - BA 
A and B are operators.
Consider operators that commute:
Say state |alpha> is an eigenstate of operator A. So BA |alpha> = B lambda |alpha>. Here lambda is the eigenvalue. 
B lambda |alpha> = lambda B |alpha> =  AB |alpha> ⇒ B |alpha> is eigenvector of A 
So both |alpha> and |B alpha> are both eigenvectors of A having the same lambda eigenvalue.
Non-degenerate eigenvector is something that has a unique eigenvalue.
If |alpha> is a non-degenerate eigenvector of A then it is a unique eigenvalue lambda.
But |B alpha>  is also an eigenvector of A with the same eigenvalue so 
|B alpha> = some scalar time |alpha> 
So |alpha> is also an eigenvector of B.
In the degenerate case:
Consider that we span the vector space by the eigenvectors of A (the eigenspace of A).
Since AB |alpha> = lambda B |alpha> hence |B alpha> has to stay in the vector space.
If there is some vector |p> that is orthogonal to the eigenspace of A, then the inner product <p | B alpha > = 0
Since B is Hermitian ⇒ <p | B alpha > = < B* p | alpha > = 0.
|B p> is orthogonal to the eigenspace.
So a vector that is one component inside the eigenspace and one that is orthogonal, when applied with B, will just scale that vector since both of the parallel and perpendicular components have to stay that way.
CONCLUSION: Commutating operators share eigenvectors. Also they share a simultaneous eigenbasis.
Why does it matter? Because the system can stay in a definite state for both of the operators simultaneously. 
Measurement of one observable does not affect the other.
Non-commutating operators dont have such property. So simultaneous measurements are NOT possible.
We can derive the Uncertainty principle from here.
Standard deviation A * Standard deviation B >= magnitude of { 1/2i * average value of commutator operator }

Time evolution operator:
U(t) this evolves the state by t amount of time.Since time evolution is assumed to be reversible.
So the inverse of U must exist.
Position, Translational and Rotational operators.



### Unitary Operators

A unitary operator $$ U $$ satisfies the condition:
$$ U^\dagger U = U U^\dagger = I $$

where $$ U^\dagger $$ is the Hermitian conjugate (or adjoint) of $$ U $$, and $$ I $$ is the identity operator.

Additionally, the inner product is preserved under a unitary transformation:

$$ \langle U \psi \vert U \phi \rangle = \langle \psi \vert \phi \rangle $$

Proof:

$$ \langle U \psi \vert U \phi \rangle = (U \psi)^\dagger (U \phi) $$

$$ (U \psi)^\dagger = \psi^\dagger U^\dagger $$

$$ (U \psi)^\dagger (U \phi) = \psi^\dagger U^\dagger U \phi $$

$$ \psi^\dagger U^\dagger U \phi = \psi^\dagger I \phi = \psi^\dagger \phi = \langle \psi \vert \phi \rangle $$

The eigenvalues of a unitary operator $$ U $$ have unit magnitude.

Proof:

$$ U |\lambda\rangle = \lambda \vert \lambda\rangle $$

$$ \langle \lambda \vert U \vert \lambda\rangle = \langle \lambda \vert \lambda |\lambda\rangle $$

$$ \langle \lambda \vert U^\dagger U \vert \lambda\rangle = \langle \lambda \vert I \vert \lambda\rangle $$

Since $$ \langle \lambda \vert I \vert \lambda\rangle = \langle \lambda \vert \lambda \rangle = 1 $$, we have:

$$ \langle \lambda \vert U^\dagger U \lambda\rangle = 1 $$

But $$ U \vert \lambda\rangle = \lambda \vert \lambda\rangle $$, so:

$$ \langle \lambda \vert U^\dagger (\lambda \vert \lambda\rangle) = \lambda \langle \lambda \vert U^\dagger \vert \lambda\rangle $$

Since $$ U^\dagger \vert \lambda\rangle = \overline{\lambda} U^\dagger \vert \lambda\rangle $$,

where $$ \overline{\lambda} $$ is the complex conjugate of $$ \lambda $$:

$$ \lambda \langle \lambda \vert U^\dagger \vert \lambda\rangle = \lambda \overline{\lambda} \langle \lambda \vert \lambda \rangle $$

Since $$ \langle \lambda \vert \lambda \rangle = 1 $$:

$$\lambda \overline{\lambda} = 1$$

Thus:

$$ |\lambda|^2 = 1 \Rightarrow \vert \lambda| = 1 $$

Since the probability of the state vector $$\langle \psi \rangle$$ to collapse in the eigenstate say $$\langle \phi \rangle$$ is $${|\langle \phi \vert \psi \rangle|}^2$$.
Therefore the application of an unitary operator on these states will conserve probability since it conserves the innner product.

### Time Evolution Operator

An operator that advances the state vector in time.

$$\hat{U}(t)\vert \psi \rangle = \vert \psi(t) \rangle$$

Advancing the state by zero time must be identity.

$$\hat{U}(0)\vert \psi \rangle = I \vert \psi \rangle = \vert \psi \rangle $$

Time evolution is theorised to be reversible so the inverse of time-evolution operator must also exist and it should conserve the probability so it must be unitary well.

$$ \langle \vert \hat{U}^\dagger \hat{U} \vert \psi \rangle = \langle \vert I \vert \psi \rangle $$

$$ \langle \vert \hat{U}^\dagger \hat{U} - I \vert \psi \rangle = 0$$

$$ \hat{U}^\dagger \hat{U} - I = 0$$

$$ \hat{U}^\dagger \hat{U} = I$$

So $\hat{U}$ unitary as well as Hermition.

$$\hat{U}(dt) = \hat{U}(0) + \dot{\hat{U}}dt + \hat{O}dt^2$$

$$\hat{U}(dt) = I + \dot{\hat{U}}dt + \hat{O}dt^2$$

$$\hat{U}(dt)\vert \psi \rangle = I\vert \psi \rangle + \dot{\hat{U}}\vert \psi \rangle dt + \hat{O}\vert \psi \rangle dt^2$$

$$\vert \psi(dt) \rangle - \vert \psi \rangle = \dot{\hat{U}}\vert \psi \rangle dt + \hat{O}\vert \psi \rangle dt^2$$

$$\dot{\hat{U}}\vert \psi \rangle = \frac{\vert \psi(dt) \rangle - \vert \psi \rangle}{dt} = \frac{\vert \psi(t) \rangle}{dt}$$

Is $\dot{\hat{U}}$ Hermition? No, it is Anti-Hermition. But \dot{\hat{U}} scaled any imaginary number is Hermition.

### Translation and rotational operators

$$\hat{T}(a)\vert x \rangle = \vert x+a \rangle$$

These operators have the same properties as the Time evolution operator.

### Quantum operators

$$ \hat{p} \vert x \rangle = i \hbar \frac{d}{dx} \vert x \rangle$$

$$ \hat{H} \vert \psi \rangle = i \hbar \frac{d}{dt} \vert \psi \rangle$$

$$ \hat{L} \vert \theta \rangle = i \hbar \frac{d}{d\theta} \vert \theta \rangle$$

$$ \hat{x} \vert p \rangle = i \hbar\frac{d}{dp} \vert p \rangle$$

## Bloch Theorem

For periodic potentials $$V(x+a) = V(x)$$

$$ \psi(x+a) = e^{iKa} \psi(x) $$

for some constant K.

***

[Back to main menu](https://uv-1999.github.io/notes/philosophy)
