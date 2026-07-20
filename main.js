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

    const bottom = document.querySelector('.bottom-button');
    bottom.classList.add('dark-mode');
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

    const bottom = document.querySelector('.bottom-button');
    bottom.classList.remove('dark-mode');
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

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
}

const resourceSearchInput = document.getElementById('resource-search-input');
const resourceSearchCount = document.getElementById('resource-search-count');
const resourceOrderToggle = document.getElementById('resource-order-toggle');
const categoryFilterButtons = Array.from(document.querySelectorAll('[data-category-filter]'));

if (resourceSearchInput) {
    const resourceRows = Array.from(document.querySelectorAll('[data-search-row]'));
    const resourceSections = Array.from(document.querySelectorAll('.resource-section'));
    const resourceGroups = Array.from(document.querySelectorAll('.resource-group'));
    const allLiteratureSection = document.querySelector('[data-all-section]');
    const allLiteratureTitle = allLiteratureSection ? allLiteratureSection.querySelector('h2') : null;
    const literatureCategorySections = Array.from(document.querySelectorAll('[data-category-section]'));
    const selectedCategories = new Set();
    let sortAscending = true;

    resourceRows.forEach((row, index) => {
        row.dataset.originalIndex = String(index);
    });

    function getRowYear(row) {
        const yearText = row.querySelector('td') ? row.querySelector('td').textContent : '';
        const match = yearText.match(/\d{4}/);
        if (match) {
            return Number(match[0]);
        }
        return Number.MAX_SAFE_INTEGER;
    }

    function sortRowsInSection(section) {
        if (!section) {
            return;
        }
        const tbody = section.querySelector('tbody');
        if (!tbody) {
            return;
        }
        Array.from(tbody.querySelectorAll('[data-search-row]'))
            .sort((rowA, rowB) => {
                const yearA = getRowYear(rowA);
                const yearB = getRowYear(rowB);
                const rowAHasUnknownYear = yearA === Number.MAX_SAFE_INTEGER;
                const rowBHasUnknownYear = yearB === Number.MAX_SAFE_INTEGER;
                if (rowAHasUnknownYear && rowBHasUnknownYear) {
                    return Number(rowA.dataset.originalIndex) - Number(rowB.dataset.originalIndex);
                }
                if (rowAHasUnknownYear) {
                    return 1;
                }
                if (rowBHasUnknownYear) {
                    return -1;
                }
                const yearSort = sortAscending ? yearA - yearB : yearB - yearA;
                if (yearSort !== 0) {
                    return yearSort;
                }
                return Number(rowA.dataset.originalIndex) - Number(rowB.dataset.originalIndex);
            })
            .forEach(row => tbody.appendChild(row));
    }

    function sortVisibleTables() {
        sortRowsInSection(allLiteratureSection);
        literatureCategorySections.forEach(sortRowsInSection);
    }

    function updateResourceSearch() {
        const query = resourceSearchInput.value.trim().toLowerCase();
        const hasCategoryFilters = categoryFilterButtons.length > 0;
        const hasSelectedCategories = selectedCategories.size > 0;
        let visibleRows = 0;
        const selectedCategoryNames = categoryFilterButtons
            .map(button => button.dataset.categoryFilter)
            .filter(category => selectedCategories.has(category));

        if (hasCategoryFilters) {
            categoryFilterButtons.forEach(button => {
                button.classList.toggle('active', selectedCategories.has(button.dataset.categoryFilter));
            });
        }

        sortVisibleTables();

        resourceRows.forEach(row => {
            const isInAllSection = Boolean(row.closest('[data-all-section]'));
            const categoryIsActive = !hasCategoryFilters || (query ? isInAllSection : (hasSelectedCategories ? isInAllSection && selectedCategories.has(row.dataset.category) : isInAllSection));
            const searchText = (row.dataset.searchText || row.textContent).toLowerCase();
            const isMatch = categoryIsActive && (!query || searchText.includes(query));
            row.classList.toggle('resource-hidden', !isMatch);
            if (isMatch) {
                visibleRows += 1;
            }
        });

        if (hasCategoryFilters) {
            if (allLiteratureSection) {
                const allRows = Array.from(allLiteratureSection.querySelectorAll('[data-search-row]'));
                const hasVisibleRows = allRows.some(row => !row.classList.contains('resource-hidden'));
                allLiteratureSection.classList.toggle('resource-empty', !hasVisibleRows);
            }
            if (allLiteratureTitle) {
                allLiteratureTitle.textContent = hasSelectedCategories ? selectedCategoryNames.join(', ') : 'All Categories';
            }

            literatureCategorySections.forEach(section => {
                section.classList.add('resource-empty');
            });
        } else {
            resourceSections.forEach(section => {
                const sectionRows = Array.from(section.querySelectorAll('[data-search-row]'));
                const hasVisibleRows = sectionRows.some(row => !row.classList.contains('resource-hidden'));
                section.classList.toggle('resource-empty', !hasVisibleRows);
                if (query && hasVisibleRows) {
                    section.open = true;
                }
            });

            resourceGroups.forEach(group => {
                const groupRows = Array.from(group.querySelectorAll('[data-search-row]'));
                const hasVisibleRows = groupRows.some(row => !row.classList.contains('resource-hidden'));
                group.classList.toggle('resource-empty', !hasVisibleRows);
                if (query && hasVisibleRows) {
                    group.open = true;
                }
            });
        }

        resourceSearchCount.textContent = query ? `${visibleRows} matches` : `${visibleRows} rows`;
    }

    categoryFilterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.dataset.categoryFilter;
            if (selectedCategories.has(category)) {
                selectedCategories.delete(category);
            } else {
                selectedCategories.add(category);
            }
            updateResourceSearch();
        });
    });

    resourceSearchInput.addEventListener('input', updateResourceSearch);

    if (resourceOrderToggle) {
        resourceOrderToggle.addEventListener('click', function () {
            sortAscending = !sortAscending;
            this.textContent = sortAscending ? 'Chronological' : 'Reverse chronological';
            this.setAttribute('aria-pressed', String(!sortAscending));
            updateResourceSearch();
        });
    }

    updateResourceSearch();
}
