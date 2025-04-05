const options = { year: 'numeric', month: 'short', day: 'numeric' };
const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', options).replace(',', '');
document.getElementById('current-date').textContent = formattedDate;

// Get all elements with the class 'collapsar'
const button = document.getElementById("darkmodebutton");

function toggleDarkMode() {
    const element = document.querySelector('body');
    element.classList.add('dark-mode');
    const head = document.querySelector('header');
    head.classList.add('dark-mode');
    const ae = document.querySelectorAll('a');
    ae.forEach(anchor => {
        anchor.classList.add('dark-mode');
    });
    const he = document.querySelectorAll('hr');
    he.forEach(hline => {
        hline.classList.add('dark-mode');
    });
  
    const h11 = document.querySelectorAll('h1');
    h11.forEach(th1 => {
        th1.classList.add('dark-mode');
    });
  
    const h22 = document.querySelectorAll('h2');
    h22.forEach(th2 => {
        th2.classList.add('dark-mode');
    });
  
    const h33 = document.querySelectorAll('h3');
    h33.forEach(th3 => {
        th3.classList.add('dark-mode');
    });
    
    const contra = document.querySelectorAll('.container');
    contra.forEach(contain => {
        contain.classList.add('dark-mode');
    });

    const thh = document.querySelectorAll('th');
    thh.forEach(header => {
        header.classList.add('dark-mode');
    });

    const tdh = document.querySelectorAll('td');
    tdh.forEach(cell => {
        cell.classList.add('dark-mode');
    });

    const dibba = document.querySelectorAll('.collapsible');
    dibba.forEach(colla => {
        colla.classList.add('dark-mode');
    });
  
    const dark = document.querySelector('.dark-mode-button');
    dark.classList.add('dark-mode');
  
    const top = document.querySelector('.top-button');
    top.classList.add('dark-mode');
}

function toggleLightMode() {
    const element = document.querySelector('body');
    element.classList.remove('dark-mode');
    const head = document.querySelector('header');
    head.classList.remove('dark-mode');
    const ae = document.querySelectorAll('a');
    ae.forEach(anchor => {
        anchor.classList.remove('dark-mode');
    });
    const he = document.querySelectorAll('hr');
    he.forEach(hline => {
        hline.classList.remove('dark-mode');
    });
  
    const h11 = document.querySelectorAll('h1');
    h11.forEach(th1 => {
        th1.classList.remove('dark-mode');
    });
  
    const h22 = document.querySelectorAll('h2');
    h22.forEach(th2 => {
        th2.classList.remove('dark-mode');
    });
  
    const h33 = document.querySelectorAll('h3');
    h33.forEach(th3 => {
        th3.classList.remove('dark-mode');
    });
    
    const contra = document.querySelectorAll('.container');
    contra.forEach(contain => {
        contain.classList.remove('dark-mode');
    });

    const thh = document.querySelectorAll('th');
    thh.forEach(header => {
        header.classList.remove('dark-mode');
    });

    const tdh = document.querySelectorAll('td');
    tdh.forEach(cell => {
        cell.classList.remove('dark-mode');
    });

    const dibba = document.querySelectorAll('.collapsible');
    dibba.forEach(colla => {
        colla.classList.remove('dark-mode');
    });
  
    const dark = document.querySelector('.dark-mode-button');
    dark.classList.remove('dark-mode');
  
    const top = document.querySelector('.top-button');
    top.classList.remove('dark-mode');
}

const userPreference = localStorage.getItem('preferred-theme');
if (userPreference === 'dark') {
    const icon = button.querySelector('i');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    toggleDarkMode();
} else  {
    const icon = button.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    toggleLightMode();
}

button.addEventListener("click", function () {
    const icon = button.querySelector('i');
    if (icon.classList.contains('fa-sun')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('preferred-theme', 'dark');
        toggleDarkMode();
    } else if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('preferred-theme', 'light');
        toggleLightMode();
    }
});

    // Get all collapsible buttons
    const collapsibles = document.querySelectorAll('.collapsible');

    // Loop through each collapsible and add event listeners
    collapsibles.forEach(function(collapsible) {
        collapsible.addEventListener('click', function() {
            const content = this.nextElementSibling; // Get the content div next to the button

            if (content.style.display === "block") {
                content.style.display = "none"; // Hide content if it's visible
            } else {
                content.style.display = "block"; // Show content if it's hidden
            }
        });
    });

window.onscroll = function() {
    const btn = document.getElementById("topbutton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block"; // Show button
    } else {
        btn.style.display = "none"; // Hide button
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
