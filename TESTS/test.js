var title = ['t-bts', 't-bac'];
const table = document.getElementById('def-bts');

// Lorsque la souris survole le titre
title.addEventListener('mouseover', function() {
    const rect = title.getBoundingClientRect();

    // Calculez la nouvelle position du tableau
    const tableTop = rect.top + window.scrollY - table.offsetHeight - 130;
    const tableLeft = rect.left + window.scrollX + title.offsetWidth - 100;

    // Appliquez la nouvelle position au tableau
    table.style.top = `${tableTop}px`;
    table.style.left = `${tableLeft}px`;

    // Affichez le tableau
    table.style.display = 'block';
});

// Lorsque la souris quitte le titre **ou** le tableau
title.addEventListener('mouseout', function(e) {
    // Vérifie si la souris est réellement en dehors du tableau aussi
    if (!table.contains(e.relatedTarget)) {
        table.style.display = 'none';
    }
});

// Évite de cacher le tableau si la souris est sur le tableau lui-même
table.addEventListener('mouseout', function(e) {
    if (!title.contains(e.relatedTarget)) {
        table.style.display = 'none';
    }
});