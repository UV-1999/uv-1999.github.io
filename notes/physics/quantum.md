# Quantum Physics

## Mathematical Framework of Quantum Mechanics
In classical physics, physical quantities have following important features:
1. Single-valued
2. Deterministic
3. Evolve continuously
Hence it is reasonable to model them as continuous functions.

In the Lagrangian formulation of classical mechanics, all the physical knowledge about the system is incoded in this Lagrangian functional. 

$$\mathcal{L} = \mathcal{L}(t, q(t), \dot{q(t)}) $$

The Euler-Lagrange equation: 

$$ \frac{\partial \mathcal{L}}{\partial q_i} - \frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q_i}} \right) = 0 $$

that governs the evolution of the system is derived from the **principle of stationary action**:

$$ \delta S = \delta \int_{t_1}^{t_2} \mathcal{L}(q, \dot{q}, t) \, dt = 0 $$

It is different from the Newtonian mechanics since there we deal with all dynamical quantities seperately like force, momenta, energy, position, etc. But the Euler-Lagrange equation is nothing but a generalisation of the Newton's second law of motion.

$$ \frac{\partial \mathcal{L}}{\partial q} = \frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}} \right) = \frac{d}{dt} p \right)$$

Since:

$$ p = \frac{\partial \mathcal{L}}{\partial \dot{x}}$$

But we do not need to stop here rather we can investigate further:

$$ \frac{\partial \mathcal{L}}{\partial {p}} = \frac{\partial \mathcal{L}}{\partial \dot{q}} \frac{\partial \dot{q}}{\partial {p}} = \dot{q} =  \frac{d}{dt} \q$$

In Quantum physics, quantities are not always be single-valued but evolve discreetly in a probabilistic nature. How to model these quantum properties?



We need a mathematical object that can take the values of the quantity, and since each value has a probability, the mathematical object must tell us the probability of each of those values.

Zero probability of some values takes care of the discreteness of the physical quantities.

We hence can represent objects as abstract vectors where the basis vectors represent all the discrete states it can take.

The physical properties can be shown as matrices (linear operators) that when acted upon on the state vectors give us the possible values of the physical properties.

That is why we use linear algebra for quantum mechanics.

$$|\Psi\rangle = \sum_i c_i |\phi_i\rangle$$

These sums can be allowed to be infinite.

But consider position as a property. It is continuous so showing it as a discrete sum is not efficient. We may replace the sum with an integral.

We can say that state vector is the $$\int dx \ c(x) |x\rangle$$

$c(x)$ is a function for each position state $|x\rangle$ so that we can use it to find the probability.

It is mathematically possible that adding an infinite number of vectors together the sum may come out as not an element of the vector space. 

E.g. Adding an infinite number of polynomial terms is not a polynomial and polynomials can be thought of as vectors.

Hence we need to assert that the sum always converges to another vector in the same vector space.

Such a vector space is called a Hilbert space.

So Quantum vector space $=$ Hilbert vector space

But Hilbert space has an inner product also.

An inner product is a map that takes two vectors and gives out a scalar from the field over which the vector space is defined.

Inner product is not always commutative:

Say $\langle i P | i P \rangle$ where $i$ is the imaginary unit.

Taking out $i$ from the right side $\Rightarrow i \langle i P | P \rangle$

If it was commutative $\Rightarrow i \langle P | i P \rangle$

$\Rightarrow i \times i \langle P | P \rangle \Rightarrow -1 \langle P | P \rangle$

So $\langle i P | i P \rangle = -1 \langle P | P \rangle \Rightarrow \langle P | P \rangle = 0$ regardless of what $P$ is.

To avoid such issue we say that:

$\langle a P | b P \rangle = b \langle a P | P \rangle = b a^* \langle P | P \rangle$; $a^*$ is the complex conjugate of $a$.

This solves the above issue especially when we take the scalar field as the set of complex numbers.

$\Rightarrow \langle P | P \rangle = 1$

Inner product is also distributive.

The inner product is useful to find the probability coefficients:

Consider $|\text{state vector}\rangle = c_1|C_1\rangle + c_2|C_2\rangle +  \ldots$

So taking inner product of state vector with $|C_1\rangle$ with the requirements that $|C_1\rangle$ and $|C_2\rangle$ and etc. are orthonormal.

We get $\langle C_1 | \text{state} \rangle = c_1$

But what about the inner product for the integrals? When the state vector is integral of $\int dx \, c(x) |x\rangle$.
For position value say “a”:

$c(x=a) = \int dx \, c(x) \delta(x-a)$

Consider the inner product of two states $= \int dx \, C_1(x) |x\rangle \times \int dy \, C_2(y) |y\rangle$

$\Rightarrow \iint dx \, dy \, C_1'(x) C_2(y) \langle x | y \rangle$

$\Rightarrow$ Since $x$ and $y$ are orthonormal states hence only when they are the same ($x=y$) they are non-zero.

$\Rightarrow \iint dx \, C_1'(x) C_2(x)$

Dual space of vector space $V$ is a vector space that has vectors as all the linear functionals in $V$ (row vectors).

Since inner products and linear functional spit out scalars hence they are useful to find the values of physical quantities.

And linear functionals (row vectors) applied to column vectors is just the inner product of those two vectors.

This is the consequence of the Riesz representation theorem in maths.

Row vector $= \text{Bra} = \langle x |$ and Column vector $= \text{Ket} = |x\rangle$

HOW LINEAR OPERATORS REPRESENT PHYSICAL QUANTITIES?

A system can be in several possible definite states (states we can observe). Such states have the corresponding values of the physical properties that we measure or observe.

The linear operator for a particular physical observable quantity acted upon by the state should spit out all possible values of the observable which are also exclusive. Such a feature is also shown by the eigenvalue problem.

Hence the state vector is a linear combination of eigenstates (mutually orthogonal vectors $=$ basis vectors).

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
Sum of probability function say $f(c_i) = 1$

$\Rightarrow$ Sum of $f(c_i) + f(c_n) = 1$

$\Rightarrow c_n = \pm \sqrt { \text{length squared} - (\text{sum of squares of } c_i \text{ other than } n) }$ 

$\Rightarrow$ since $f$ is even $f(c_n) = f(\sqrt { \text{length squared} - (\text{sum of squares of } c_i \text{ other than } n) })$

$\Rightarrow$ Sum of $f(c_i) + f(c_n) = 1 \Rightarrow$ Sum of $f(c_i) + f(\sqrt { \text{length squared} - (\text{sum of squares of } c_i \text{ other than } n) }) = 1$

$\Rightarrow$ we can differentiate this wrt say $c_1$. Since all $c$ are independent of each other.

$\Rightarrow \frac{df(c_1)}{dc_1} + \frac{d}{dc_1} ( f (\text{square root term from above}) ) = 0$

$\Rightarrow  \frac{1}{c_1} \times \frac{df(c_1)}{dc_1} = \text{some terms having all } c = \text{constant}$

$\Rightarrow$ So $f = Ac^2 + B$

$\Rightarrow B$ is zero since $f(0) = 0$ if the coefficient is zero then the probability is also zero.

$\Rightarrow f(\text{length of state vector}) = 1 \Rightarrow A = 1/ (\text{length}^2)$ and we choose length to be 1.

$\Rightarrow f(c) = (c)^2 = \text{square of magnitude of inner product} \langle \text{eigenvector for } c | \text{state vector} \rangle$ 

THE BORN RULE DERIVED !!

BUT such a derivation works only for vector space having equal or more than 3 dimensions. Since in 1 dimension state vector the state is fixed anyway. 

In two dimensions the two eigenstates will not be independent if we keep the length to be constant. So for two or less dimensions we take the Born rule as an axiom.

For observables with continuous eigenbasis, the probability density is the square of the coefficient function.

So back to quantum operators. The eigenvalues must be real and the operator must not change the length of the state vector. Also the eigenvectors must span the vector space. Eigenvectors are also orthonormal.

Say some operator \( A \).

⇒ Consider \( A|\text{state}\rangle = \sum_{i} c_i A|\text{eigenvectors}\rangle = \sum_{i} c_i \text{eigenvalue} |\text{eigenvectors}\rangle \)

⇒ \( c = \langle \text{eigenvector} | \text{state} \rangle \)

⇒ \( \text{Sum over } c_i \text{ eigenvalue } |\text{eigenvectors}\rangle = \sum_{i} \langle \text{eigenvector} | \text{state} \rangle \text{ eigenvalue } |\text{eigenvectors}\rangle \)

⇒ \( \text{Sum over } \text{ eigenvalue } |\text{eigenvectors}\rangle \langle \text{eigenvector} | | \text{ state }\rangle \)

⇒ \( A = \sum_{i} \text{ Eigenvalue } |\text{eigenvectors}\rangle \langle \text{eigenvectors}| \)

The Hermitian conjugate of \( A \) is also \( A \) hence \( A \) is a Hermitian Operator. Hence all quantum observables are Hermitian operators.

**THE COMMUTATOR == \([A, B] = AB - BA\)**

\( A \) and \( B \) are operators.

Consider operators that commute:

Say state \( |\alpha\rangle \) is an eigenstate of operator \( A \). So \( BA|\alpha\rangle = B \lambda |\alpha\rangle \). Here \( \lambda \) is the eigenvalue.

\( B \lambda |\alpha\rangle = \lambda B |\alpha\rangle = AB |\alpha\rangle \Rightarrow B |\alpha\rangle \) is eigenvector of \( A \).

So both \( |\alpha\rangle \) and \( |B \alpha\rangle \) are both eigenvectors of \( A \) having the same \( \lambda \) eigenvalue.

Non-degenerate eigenvector is something that has a unique eigenvalue.

If \( |\alpha\rangle \) is a non-degenerate eigenvector of \( A \) then it is a unique eigenvalue \( \lambda \).
But \( |B \alpha\rangle \) is also an eigenvector of \( A \) with the same eigenvalue so

\( |B \alpha\rangle = \text{some scalar time } |\alpha\rangle \)

So \( |\alpha\rangle \) is also an eigenvector of \( B \).

In the degenerate case:

Consider that we span the vector space by the eigenvectors of \( A \) (the eigenspace of \( A \)).

Since \( AB|\alpha\rangle = \lambda B |\alpha\rangle \) hence \( |B \alpha\rangle \) has to stay in the vector space.

If there is some vector \( |p\rangle \) that is orthogonal to the eigenspace of \( A \), then the inner product \( \langle p | B \alpha \rangle = 0 \).

Since \( B \) is Hermitian \( \Rightarrow \langle p | B \alpha \rangle = \langle B^* p | \alpha \rangle = 0 \).

\( |B p\rangle \) is orthogonal to the eigenspace.

So a vector that is one component inside the eigenspace and one that is orthogonal, when applied with \( B \), will just scale that vector since both the parallel and perpendicular components have to stay that way.

**CONCLUSION**: Commuting operators share eigenvectors. Also, they share a simultaneous eigenbasis.

Why does it matter? Because the system can stay in a definite state for both of the operators simultaneously.

Measurement of one observable does not affect the other.

Non-commuting operators don't have such property. So simultaneous measurements are NOT possible.

We can derive the Uncertainty principle from here.

Standard deviation \( A \) * Standard deviation \( B \geq \text{magnitude of } \frac{1}{2i} \times \text{average value of commutator operator} \).

**UNITARY OPERATOR** : \( U^*U = I \).

\( \langle U \psi | U \phi \rangle = U^*U \langle \psi | \phi \rangle = \langle \psi | \phi \rangle \).

The eigenvalues of \( U \) have unit length. Unitary operators conserve probability.

**Time evolution operator**:
\( U(t) \) this evolves the state by \( t \) amount of time. Since time evolution is assumed to be reversible. So the inverse of \( U \) must exist.

Position, Translational and Rotational operators.

**GENERATOR IN CLASSICAL MECHANICS**:
The lagrangian tells us the state of the system in classical physics.

**FROM A QUANTUM LAGRANGIAN TO QUANTUM EOM**

**SCHRODINGER EQUATION**

**Energy and Generalised Momentum and Generalised position operator**

**Applications**
