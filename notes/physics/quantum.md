<head>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>

# Quantum Physics

## Mathematical Framework of Quantum Mechanics
In classical physics, physical quantities have following important features:
1. Single-valued
2. Deterministic
3. Evolve continuously
Hence it is reasonable to model them as continuous functions.

In the Lagrangian formulation of classical mechanics, all the physical knowledge about the system is encoded in this Lagrangian functional. 

$$\mathcal{L} = \mathcal{L}(t, q(t), \dot{q(t)}) $$

The Euler-Lagrange equation: 

$$ \frac{\partial \mathcal{L}}{\partial q_i} - \frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q_i}} \right) = 0 $$

that governs the evolution of the system is derived from the **principle of stationary action**:

$$ \delta S = \delta \int_{t_1}^{t_2} \mathcal{L}(q, \dot{q}, t) \, dt = 0 $$

It is different from the Newtonian mechanics since there we deal with all dynamical quantities seperately like force, momenta, energy, position, etc. But the Euler-Lagrange equation is nothing but a generalisation of the Newton's second law of motion.

$$\frac{\partial \mathcal{L}}{\partial q} = \frac{d}{dt} \left(\frac{\partial \mathcal{L}}{\partial \dot{q}}\right) = \frac{d}{dt} p$$

Since:

$$p = \frac{\partial \mathcal{L}}{\partial \dot{q}}$$

But we do not need to stop here rather we can investigate further:

$$ \frac{\partial \mathcal{L}}{\partial {p}} = \frac{\partial \mathcal{L}}{\partial \dot{q}} \frac{\partial \dot{q}}{\partial {p}} = \dot{q} =  \frac{d}{dt} q$$

Finally, we try:

$$ \frac{d \mathcal{L}}{d {t}} =  \frac{\partial \mathcal{L}}{\partial {t}} + \frac{\partial \mathcal{L}}{\partial {q}} {\dot{q}} + \frac{\partial \mathcal{L}}{\partial \dot{q}} {\ddot{q}}$$

$$ \frac{d \mathcal{L}}{d {t}} =  \frac{\partial \mathcal{L}}{\partial {t}} + \frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}} \right){\dot{q}} + \frac{\partial \mathcal{L}}{\partial \dot{q}} {\ddot{q}}$$

We can find that:

$$\frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}} {\dot{q}}\right) = \frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}}\right){\dot{q}} + \frac{\partial \mathcal{L}}{\partial \dot{q}} {\ddot{q}}$$

Hence

$$ \frac{d \mathcal{L}}{d {t}} =  \frac{\partial \mathcal{L}}{\partial {t}} + \frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}} {\dot{q}}\right) $$

$$ \frac{\partial \mathcal{L}}{\partial {t}} = \frac{d \mathcal{L}}{d {t}} - \frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}} {\dot{q}}\right) $$

$$ \frac{\partial \mathcal{L}}{\partial {t}} = \frac{d}{dt}\left(\mathcal{L} - \frac{\partial \mathcal{L}}{\partial \dot{q}} {\dot{q}}\right) $$

$$ \frac{\partial \mathcal{L}}{\partial {t}} = - \frac{d}{dt} H $$

$$ H = \frac{\partial \mathcal{L}}{\partial \dot{q}} {\dot{q}} - \mathcal{L} $$

This is the definition of Hamiltonian and we can get the following relations:

$$ \frac{\partial \mathcal{L}}{\partial {x}} = \frac{d}{dt} p $$

$$ \frac{\partial \mathcal{L}}{\partial {p}} = \frac{d}{dt} x $$

$$ \frac{\partial \mathcal{L}}{\partial {t}} = -\frac{d}{dt} H $$

$$ \frac{\partial \mathcal{L}}{\partial {\theta}} = \frac{d}{dt} L $$

This hints that the changes in momentum of the system corresponds to how the Lagrangian depends on the coordianate.
Also that the changes in coordinate of the system corresponds to how the Lagrangian depends on the momentum.
The most important is how the changes in energy correponds to how the lagrangian depends on the time.

The Lagrangian of a system can be intuitively understood as the totatlity of physical laws that the system follows.

1. If the laws don't depend on time then we get conservation of energy.
2. If the laws don't depend on a particular coordiante (often called the symmetric or cyclic coordinate) then we get conservation of momentum corresponding to that coordinate.
3. If the laws don't depend on a momentum then we get uniform motion along the corresponding coordinate.

***
### Quantum state
### Hilbert Space and Inner Product
### Quantum operators
### Born's Rule
### Commutator
### Hermitian Operators

### Unitary Operators

A unitary operator \( U \) satisfies the condition:
$$ U^\dagger U = U U^\dagger = I $$

where $ U^\dagger $ is the Hermitian conjugate (or adjoint) of $ U $, and $ I $ is the identity operator.

Additionally, the inner product is preserved under a unitary transformation:

$$ \langle U \psi | U \phi \rangle = \langle \psi | \phi \rangle $$

Proof:

$$ \langle U \psi | U \phi \rangle = (U \psi)^\dagger (U \phi) $$

$$ (U \psi)^\dagger = \psi^\dagger U^\dagger $$

$$ (U \psi)^\dagger (U \phi) = \psi^\dagger U^\dagger U \phi $$

$$ \psi^\dagger U^\dagger U \phi = \psi^\dagger I \phi = \psi^\dagger \phi = \langle \psi | \phi \rangle $$

The eigenvalues of a unitary operator $U$ have unit magnitude.

Proof:

$$ U |\lambda\rangle = \lambda |\lambda\rangle $$

$$ \langle \lambda | U |\lambda\rangle = \langle \lambda | \lambda |\lambda\rangle$$

$$ \langle \lambda | U^\dagger U |\lambda\rangle = \langle \lambda | I |\lambda\rangle$$

Since $\langle \lambda | I |\lambda\rangle = \langle \lambda | \lambda \rangle = 1$, we have:

$$ \langle \lambda | U^\dagger U |\lambda\rangle = 1 $$

But $U |\lambda\rangle = \lambda |\lambda\rangle$, so:

$$ \langle \lambda | U^\dagger (\lambda |\lambda\rangle) = \lambda \langle \lambda | U^\dagger |\lambda\rangle $$

Since $U^\dagger |\lambda\rangle = \overline{\lambda} U^\dagger |\lambda\rangle$, where $\overline{\lambda}$ is the complex conjugate of $\lambda$:

$$ \lambda \langle \lambda | U^\dagger |\lambda\rangle = \lambda \overline{\lambda} \langle \lambda | \lambda \rangle $$

Since $\langle \lambda | \lambda \rangle = 1$:

$$\lambda \overline{\lambda} = 1$$

Thus:

$$ |\lambda|^2 = 1 \Rightarrow |\lambda| = 1 $$

Since the probability of the state vector $\langle psi \rangle$ to collapse in the eigenstate say $\langle phi \rangle$ is {|$\langle phi | psi \rangle|}^2$.
Therefore the application of an unitary operator on these states will conserve probability since it conserves the innner product.
