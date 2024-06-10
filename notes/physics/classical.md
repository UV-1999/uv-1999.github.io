# Classical Physics

What is Physics? 
Physics is a category of natural science where the system of interest is anything.

System is a part of the reality that one is interested in studying. Everything else is hence labelled as Surroundings of the system.

Degree of freedom - The minimum number of independent variables to define the state of a system completely.

Generalised Coordinates - The independent variables needed to define the state of a system completely.

How do we describe the system?
The set of fundamental properties of a system is called the state of the system. The state of the system may change. What properties are fundamental? Any property that we possibly cannot reduce to some other property is a fundamental property. It is also affected by the choice of a physicist.

Emergence - Some properties of the system are emergent, hence may not be possessed by the composting simpler parts. "Many are different" or “The whole is greater and different than the sum of its parts” is Emergence: an important fact that, in physics several characteristic properties just exist when things are bulk: Temperature, Pressure are two examples. Sometimes we invent parameters to define some property like say “conductivity”, we know that quantum statistical mechanics can give us the model to explain the conductivity so we reduce this property to fundamental-er properties. But the reason we use conductivity or any other parameter is to allow us to quantify all those fundamental-er properties without a contemporary mechanism or model for it. Later we can replace it with some underlying mechanism.

Kinetics is the study of forces that cause motion while kinematics is a mathematical description of motion that doesn't refer to forces. Doing kinetics is finding the laws of motion while doing kinematics is finding the equations of motion.
Statics - Kinematics of rest
Dynamics - Kinematics of motion

### [Physics from Aristotle to Newton](https://uv-1999.github.io/motion.html)

## Classical Mechanics

### Central Force
A central force is a force that is directed along the line joining the particle and a fixed point, called the center. The magnitude of this force depends only on the distance between the particle and the center. Mathematically, a central force $\mathbf{F}$ can be expressed as:

$$\mathbf{F} = f(r) \hat{\mathbf{r}},$$

where $r$ is the distance from the center, $\hat{\mathbf{r}}$ is the unit vector in the radial direction, and $f(r)$ is some function of $r$. 

### Central Force Equation of Motion

$$\mathbf{F} = m \mathbf{a}.$$

$$\mathbf{r} = r \hat{\mathbf{r}},$$

$$\mathbf{v} = \dot{r} \hat{\mathbf{r}} + r \dot{\theta} \hat{\mathbf{\theta}},$$

$$\mathbf{a} = (\ddot{r} - r \dot{\theta}^2) \hat{\mathbf{r}} + (r \ddot{\theta} + 2 \dot{r} \dot{\theta}) \hat{\mathbf{\theta}}.$$

Substituting $\mathbf{F} = f(r) \hat{\mathbf{r}}$ and $\mathbf{a}$ into Newton's second law, we get two separate equations:

$$ m (\ddot{r} - r \dot{\theta}^2) = f(r), $$

$$m (r \ddot{\theta} + 2 \dot{r} \dot{\theta}) = 0. $$

Above equation  can be simplified using the conservation of angular momentum. The angular momentum $L$ is:

$$L = m r^2 \dot \theta.$$

Since angular momentum is conserved, $L$ is constant, and we have:

$$r^2 \dot{\theta} = \text{constant} = h,$$

$$\dot{\theta} = \frac{h}{r^2}.$$

Substituting into the radial equation, we get:

$$ m \left( \ddot{r} - \frac{h^2}{r^3} \right) = f(r).$$

We introduce the substitution $u = \frac{1}{r}$, so that $r = \frac{1}{u}$. This leads to:

$$\dot{r} = \dot{\frac{1}{u}} = \frac{-1}{u^2}\frac{du}{dt} = \frac{-1}{u^2}\frac{du}{d\theta}\dot{\theta} = -h\frac{du}{d\theta}$$

$$\ddot{r} = \frac{d}{dt} -h\frac{du}{d\theta} = -h \frac{d^2u}{d{\theta}^2}\dot\theta = -h \frac{d^2u}{d{\theta}^2} h u^2 = -h^2{u^2} \frac{d^2u}{d{\theta}^2}$$

Finally we get the \textbf{Binet equation}. \textbf{Here m is reduced mass}:

$$m \left(-h^2{u^2} \frac{d^2u}{d{\theta}^2}  - {h^2}{u^3} \right) = f(u).$$

$$-h^2 {u^2} m \left( \frac{d^2u}{d{\theta}^2}  + u \right) = f(u).$$

For a central force that follows an inverse square law, such as gravitational force, we have the $\textbf{Kepler problem}$:

$$f(r) = -\frac{K}{r^2}, f(u) = -K u^2 $$

$$-h^2 {u^2} m \left( \frac{d^2u}{d{\theta}^2}  + u \right) = -K u^2$$

$$\left( \frac{d^2u}{d{\theta}^2}  + u \right) = \frac{K}{m h^2} $$

$$ \left( \frac{d^2u}{d{\theta}^2}  + u \right) = \frac{K}{m h^2} $$

Solution:

$$u = \frac{K}{m h^2}(1 + e\cos{(\theta - \theta_0})$$

At $\theta = \theta_0$, u is maximum. At $\theta = \pi + \theta_0$, u is minimum. Both must satisfy energy conservation:

$$E = -Ku + \frac{m{h^2}{u^2}}{2}$$

$$u_{max} =  \frac{K}{m h^2}(1 + e)$$

$$u_{min} =  \frac{K}{m h^2}(1 - e)$$

Put the above two in energy equation and add those two equations. Eccentricity comes out to be:

$$e = \sqrt{1 + \frac{2mEh^2}{K^2}} = \sqrt{1 + \frac{2EL^2}{mK^2}}$$

Here $m$ is reduced mass above.
