<head>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>

# Quantum Physics

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

$ c(x) $ is a function for each position state $\vert x \rangle$ so that we can use it to find the probability.

It is mathematically possible that adding an infinite number of vectors together the sum may come out as not an element of the vector space. 

E.g. Adding an infinite number of polynomial terms is not a polynomial and polynomials can be thought of as vectors.

Hence we need to assert that the sum always converges to another vector in the same vector space.

Such a vector space is called a Hilbert space.

So Quantum vector space = Hilbert vector space

But Hilbert space has an inner product also.

An inner product is a map that takes two vectors and gives out a scalar from the field over which the vector space is defined.

Inner product is not always commutative:



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

$$ \hat{H} \vert \psi \rangle = i \hbar \frac{d}{t} \vert \psi \rangle$$

$$ \hat{L} \vert \theta \rangle = i \hbar \frac{d}{\theta} \vert \theta \rangle$$

$$ \hat{x} \vert p \rangle = i \hbar\frac{d}{p} \vert p \rangle$$
