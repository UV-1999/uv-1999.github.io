// Get all elements with the class 'collapsar'
const button = document.getElementById("darkmodebutton");

function toggleDarkMode() {
    document.documentElement.classList.add('dark-mode-preload');
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
    document.documentElement.classList.remove('dark-mode-preload');
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
const resourceEmptyMessage = document.getElementById('resource-empty-message');
const topicFilterButtons = Array.from(document.querySelectorAll('[data-topic-filter]'));
const typeFilterButtons = Array.from(document.querySelectorAll('[data-type-filter]'));
const categoryFilterButtons = [...topicFilterButtons, ...typeFilterButtons];

if (resourceSearchInput) {
    const literatureStateKey = 'pulsar-literature-state-v1';
    const resourceRows = Array.from(document.querySelectorAll('[data-search-row]'));
    const resourceSections = Array.from(document.querySelectorAll('.resource-section'));
    const resourceGroups = Array.from(document.querySelectorAll('.resource-group'));
    const allLiteratureSection = document.querySelector('[data-all-section]');
    const allLiteratureTitle = allLiteratureSection ? allLiteratureSection.querySelector('h2') : null;
    const literatureCategorySections = Array.from(document.querySelectorAll('[data-category-section]'));
    const selectedTopics = new Set();
    const selectedTypes = new Set();
    let sortAscending = true;
    const filterButtonsBySlug = new Map(categoryFilterButtons.map(button => [button.dataset.filterSlug, button]));

    resourceRows.forEach((row, index) => {
        row.dataset.originalIndex = String(index);
    });

    function normalizeSearchText(text) {
        return text
            .normalize('NFKD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, ' ')
            .trim();
    }

    function stemSearchToken(token) {
        if (token.length > 4 && token.endsWith('ies')) {
            return `${token.slice(0, -3)}y`;
        }
        if (token.length > 4 && /(ches|shes|sses|xes|zes)$/.test(token)) {
            return token.slice(0, -2);
        }
        if (token.length > 3 && token.endsWith('s') && !token.endsWith('ss')) {
            return token.slice(0, -1);
        }
        return token;
    }

    function isSingleEditApart(left, right) {
        if (Math.abs(left.length - right.length) > 1) {
            return false;
        }

        let leftIndex = 0;
        let rightIndex = 0;
        let edits = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] === right[rightIndex]) {
                leftIndex += 1;
                rightIndex += 1;
                continue;
            }
            edits += 1;
            if (edits > 1) {
                return false;
            }
            if (left.length > right.length) {
                leftIndex += 1;
            } else if (right.length > left.length) {
                rightIndex += 1;
            } else {
                leftIndex += 1;
                rightIndex += 1;
            }
        }
        return edits + Number(leftIndex < left.length || rightIndex < right.length) <= 1;
    }

    function rowMatchesQuery(row, query) {
        if (!query) {
            return true;
        }

        const searchText = row.dataset.normalizedSearchText;
        if ((query.length >= 4 || query.includes(' ')) && searchText.includes(query)) {
            return true;
        }

        const rowTokens = row.dataset.normalizedSearchTokens.split(' ');
        const queryTokens = query.split(' ').map(stemSearchToken);
        return queryTokens.every(queryToken => rowTokens.some(rowToken => {
            const stemmedRowToken = stemSearchToken(rowToken);
            return stemmedRowToken === queryToken
                || (queryToken.length >= 3 && stemmedRowToken.startsWith(queryToken))
                || (queryToken.length >= 5 && isSingleEditApart(stemmedRowToken, queryToken));
        }));
    }

    function saveLiteratureState() {
        try {
            sessionStorage.setItem(literatureStateKey, JSON.stringify({
                query: resourceSearchInput.value,
                topics: Array.from(selectedTopics),
                types: Array.from(selectedTypes),
                sortAscending
            }));
        } catch (error) {}
    }

    function restoreLiteratureState() {
        try {
            const state = JSON.parse(sessionStorage.getItem(literatureStateKey));
            if (!state || typeof state !== 'object') {
                return;
            }

            resourceSearchInput.value = typeof state.query === 'string' ? state.query : '';
            const validTopics = new Set(topicFilterButtons.map(button => button.dataset.topicFilter));
            const validTypes = new Set(typeFilterButtons.map(button => button.dataset.typeFilter));
            if (Array.isArray(state.topics)) {
                state.topics.filter(topic => validTopics.has(topic)).forEach(topic => selectedTopics.add(topic));
            }
            if (Array.isArray(state.types)) {
                state.types.filter(type => validTypes.has(type)).forEach(type => selectedTypes.add(type));
            }
            if (typeof state.sortAscending === 'boolean') {
                sortAscending = state.sortAscending;
            }
        } catch (error) {}
    }

    function restoreLiteratureStateFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const hasUrlState = params.has('category') || params.has('q') || params.has('order');
        const categorySlugs = params.getAll('category')
            .flatMap(value => value.split(','))
            .map(value => value.trim())
            .filter(Boolean);

        if (hasUrlState) {
            selectedTopics.clear();
            selectedTypes.clear();
            resourceSearchInput.value = '';
            sortAscending = true;
        }
        if (params.has('category')) {
            categorySlugs.forEach(slug => {
                const button = filterButtonsBySlug.get(slug);
                if (button && button.dataset.topicFilter) {
                    selectedTopics.add(button.dataset.topicFilter);
                }
                if (button && button.dataset.typeFilter) {
                    selectedTypes.add(button.dataset.typeFilter);
                }
            });
        }
        if (params.has('q')) {
            resourceSearchInput.value = params.get('q') || '';
        }
        if (params.has('order')) {
            sortAscending = params.get('order') !== 'desc';
        }
    }

    function syncLiteratureStateToUrl(mode) {
        const url = new URL(window.location.href);
        url.searchParams.delete('category');
        url.searchParams.delete('q');
        url.searchParams.delete('order');

        categoryFilterButtons.forEach(button => {
            const isSelected = button.dataset.topicFilter
                ? selectedTopics.has(button.dataset.topicFilter)
                : selectedTypes.has(button.dataset.typeFilter);
            if (isSelected) {
                url.searchParams.append('category', button.dataset.filterSlug);
            }
        });

        const query = resourceSearchInput.value.trim();
        if (query) {
            url.searchParams.set('q', query);
        }
        if (!sortAscending) {
            url.searchParams.set('order', 'desc');
        }

        window.history[mode === 'push' ? 'pushState' : 'replaceState']({}, '', url);
    }

    resourceRows.forEach(row => {
        const searchText = normalizeSearchText(`${row.dataset.searchText || ''} ${row.textContent}`);
        row.dataset.normalizedSearchText = searchText;
        row.dataset.normalizedSearchTokens = searchText;
    });

    restoreLiteratureState();
    restoreLiteratureStateFromUrl();

    function getRowYear(row) {
        const yearText = row.dataset.year || (row.querySelector('td') ? row.querySelector('td').textContent : '');
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

    function updateResourceSearch(urlMode) {
        const query = normalizeSearchText(resourceSearchInput.value);
        const hasCategoryFilters = categoryFilterButtons.length > 0;
        const hasSelectedTopics = selectedTopics.size > 0;
        const hasSelectedTypes = selectedTypes.size > 0;
        let visibleRows = 0;
        const selectedCategoryNames = [
            ...topicFilterButtons
                .map(button => button.dataset.topicFilter)
                .filter(topic => selectedTopics.has(topic)),
            ...typeFilterButtons
                .map(button => button.dataset.typeFilter)
                .filter(type => selectedTypes.has(type))
        ];

        if (hasCategoryFilters) {
            topicFilterButtons.forEach(button => {
                const isActive = selectedTopics.has(button.dataset.topicFilter);
                button.classList.toggle('active', isActive);
                button.setAttribute('aria-pressed', String(isActive));
            });
            typeFilterButtons.forEach(button => {
                const isActive = selectedTypes.has(button.dataset.typeFilter);
                button.classList.toggle('active', isActive);
                button.setAttribute('aria-pressed', String(isActive));
            });
        }

        sortVisibleTables();

        resourceRows.forEach(row => {
            const isInAllSection = Boolean(row.closest('[data-all-section]'));
            const rowTopics = (row.dataset.topic || '').split('|').map(topic => topic.trim()).filter(Boolean);
            const rowTypes = (row.dataset.type || '').split('|').map(type => type.trim()).filter(Boolean);
            const topicMatches = !hasSelectedTopics || rowTopics.some(topic => selectedTopics.has(topic));
            const typeMatches = !hasSelectedTypes || rowTypes.some(type => selectedTypes.has(type));
            const categoryIsActive = !hasCategoryFilters || (isInAllSection && topicMatches && typeMatches);
            const isMatch = categoryIsActive && rowMatchesQuery(row, query);
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
                allLiteratureTitle.textContent = selectedCategoryNames.length ? selectedCategoryNames.join(', ') : 'All Categories';
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

        const isFiltered = Boolean(query || hasSelectedTopics || hasSelectedTypes);
        resourceSearchCount.textContent = isFiltered ? `${visibleRows} matches` : `${visibleRows} rows`;
        if (resourceEmptyMessage) {
            resourceEmptyMessage.hidden = visibleRows !== 0;
        }
        if (resourceOrderToggle) {
            resourceOrderToggle.textContent = sortAscending ? 'Chronological' : 'Reverse chronological';
            resourceOrderToggle.setAttribute('aria-pressed', String(!sortAscending));
        }
        saveLiteratureState();
        if (urlMode) {
            syncLiteratureStateToUrl(urlMode);
        }
    }

    topicFilterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const topic = this.dataset.topicFilter;
            if (selectedTopics.has(topic)) {
                selectedTopics.delete(topic);
            } else {
                selectedTopics.add(topic);
            }
            updateResourceSearch('push');
        });
    });

    typeFilterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const type = this.dataset.typeFilter;
            if (selectedTypes.has(type)) {
                selectedTypes.delete(type);
            } else {
                selectedTypes.add(type);
            }
            updateResourceSearch('push');
        });
    });

    resourceSearchInput.addEventListener('input', function () {
        updateResourceSearch('replace');
    });

    if (resourceOrderToggle) {
        resourceOrderToggle.addEventListener('click', function () {
            sortAscending = !sortAscending;
            updateResourceSearch('push');
        });
    }

    window.addEventListener('popstate', function () {
        selectedTopics.clear();
        selectedTypes.clear();
        resourceSearchInput.value = '';
        sortAscending = true;
        restoreLiteratureStateFromUrl();
        updateResourceSearch();
    });

    updateResourceSearch();
}
