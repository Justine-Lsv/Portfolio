document.getElementById('bts').addEventListener('mouseover', function() {
    const title = document.getElementById('bts');
    const table = document.getElementById('def-bts');
    
    // Obtenez la position du titre par rapport à la fenêtre
    const rect = title.getBoundingClientRect();
    
    // Calculez la position du tableau
    const tableTop = rect.top + window.scrollY - table.offsetHeight - 200; // Positionne le tableau légèrement au-dessus
    const tableLeft = rect.left + window.scrollX + title.offsetWidth - 150; // Positionne le tableau à droite du titre

    // Appliquez la nouvelle position au tableau
    table.style.top = `${tableTop}px`;
    table.style.left = `${tableLeft}px`;

    // Affichez le tableau
    table.style.display = 'block';
});

document.getElementById('bts').addEventListener('mouseout', function() {
    const table = document.getElementById('def-bts');
    // Masquez le tableau lorsque la souris quitte le titre
    table.style.display = 'none';
});
