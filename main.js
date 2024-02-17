    
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
        const icon = document.querySelector('icon-link');
        icon.classList.add('dark-mode');

        
        
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
        const icon = document.querySelector('icon-link');
        icon.classList.remove('dark-mode');

   
        
    }
    
    button.addEventListener("click", function () {
        if (button.textContent == "☀️") {
            button.textContent = "🌙";
            localStorage.setItem('preferred-theme', 'dark');
            toggleDarkMode();
            
        } else if  (button.textContent == "🌙") {
            button.textContent = "☀️";
            localStorage.setItem('preferred-theme', 'light');
            toggleLightMode();
            
        }    });
    const userPreference = localStorage.getItem('preferred-theme')
    if (userPreference === 'dark') {
        
        button.textContent = "🌙"; // Enable dark mode
        toggleDarkMode();
      } else if (userPreference === 'light'){
        
        button.textContent = "☀️";

        toggleLightMode();
    }
