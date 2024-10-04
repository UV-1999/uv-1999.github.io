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

    // Get the collapsible button
    const collapsible = document.querySelector('.collapsible');

    // Add an event listener to toggle content visibility on click
    collapsible.addEventListener('click', function() {
        const content = this.nextElementSibling; // Get the content div

        if (content.style.display === "block") {
            content.style.display = "none"; // Hide content if it's visible
        } else {
            content.style.display = "block"; // Show content if it's hidden
        }
    });
