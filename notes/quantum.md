# Quantum Physics

In Classical physics, quantities are single valued and evolve continuously hence it is reasonable to model them by continuous functions. (Deterministic)

In Quantum physics, quantities can NOT be single valued (Probabilistic) and can evolve discreetly. How to model these properties?

We need a mathematical object that can take the values of the quantity, and since each value has a probability, the mathematical object must tell us the probability of each of those values.

Zero probability of some values takes care of the discreteness of the physical quantities.

We hence can represent objects as abstract vectors where the basis vectors represent all the discrete states it can take.

The physical properties can be shown as matrices (linear operators) that when acted upon on the state vectors give us the possible values of the physical properties.

That is why we use linear algebra for quantum mechanics.

$$|\Psi\rangle = \sum_{\text{all states}} c_i |\text{a particular state}\rangle$$