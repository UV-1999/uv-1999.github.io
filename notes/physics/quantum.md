<head>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>

# Quantum Physics

## Mathematical Framework of Quantum Mechanics
### Quantum state
### Hilbert Space and Inner Product
### Quantum operators
### Born's Rule
### Commutator
### Hermitian Operators

### Unitary Operators

A unitary operator $$ U $$ satisfies the condition:
$$ U^\dagger U = U U^\dagger = I $$

where $$ U^\dagger $$ is the Hermitian conjugate (or adjoint) of $$ U $$, and $$ I $$ is the identity operator.

Additionally, the inner product is preserved under a unitary transformation:

$$ \langle U \psi | U \phi \rangle = \langle \psi | \phi \rangle $$

Proof:

$$ \langle U \psi | U \phi \rangle = (U \psi)^\dagger (U \phi) $$

$$ (U \psi)^\dagger = \psi^\dagger U^\dagger $$

$$ (U \psi)^\dagger (U \phi) = \psi^\dagger U^\dagger U \phi $$

$$ \psi^\dagger U^\dagger U \phi = \psi^\dagger I \phi = \psi^\dagger \phi = \langle \psi | \phi \rangle $$

The eigenvalues of a unitary operator $$ U $$ have unit magnitude.

Proof:

$$ U |\lambda\rangle = \lambda |\lambda\rangle $$

$$ \langle \lambda | U |\lambda\rangle = \langle \lambda | \lambda |\lambda\rangle $$

$$ \langle \lambda | U^\dagger U |\lambda\rangle = \langle \lambda | I |\lambda\rangle $$

Since $$ \langle \lambda | I |\lambda\rangle = \langle \lambda | \lambda \rangle = 1 $$, we have:

$$ \langle \lambda | U^\dagger U |\lambda\rangle = 1 $$

But $$ U |\lambda\rangle = \lambda |\lambda\rangle $$, so:

$$ \langle \lambda | U^\dagger (\lambda |\lambda\rangle) = \lambda \langle \lambda | U^\dagger |\lambda\rangle $$

Since $$ U^\dagger |\lambda\rangle = \overline{\lambda} U^\dagger |\lambda\rangle $$,

where $$ \overline{\lambda} $$ is the complex conjugate of $$ \lambda $$:

$$ \lambda \langle \lambda | U^\dagger |\lambda\rangle = \lambda \overline{\lambda} \langle \lambda | \lambda \rangle $$

Since $$ \langle \lambda | \lambda \rangle = 1 $$:

$$\lambda \overline{\lambda} = 1$$

Thus:

$$ |\lambda|^2 = 1 \Rightarrow |\lambda| = 1 $$

Since the probability of the state vector $$\langle \psi \rangle$$ to collapse in the eigenstate say $$\langle \phi \rangle$$ is $${|\langle \phi | \psi \rangle|}^2$$.
Therefore the application of an unitary operator on these states will conserve probability since it conserves the innner product.
