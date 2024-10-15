document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
    });
});

window.addEventListener('load', function() {
    const aboutSection = document.getElementById('about-me');
    aboutSection.classList.add('sbl-animate'); // Ajoute la nouvelle classe d'animation
});

// Affichage des autres sections au défilement
document.addEventListener('scroll', function() {
    var sectionsImp = ['exp']; // Retire 'about-me' de cette liste
    var sectionsPair = ['formation', 'projet'];

    sectionsImp.forEach(function(sectionImpId) {
        var sectionImp = document.getElementById(sectionImpId);
        var position = sectionImp.getBoundingClientRect();

        if (position.top < window.innerHeight - 400 && position.bottom >= 0) {
            sectionImp.classList.add('sbl'); // Utilise 'sbl' pour les autres sections
        }
    });

    sectionsPair.forEach(function(sectionPairId) {
        var sectionPair = document.getElementById(sectionPairId);
        var position = sectionPair.getBoundingClientRect();

        if (position.top < window.innerHeight - 400 && position.bottom >= 0) {
            sectionPair.classList.add('sbr');
        }
    });
});
//Bienvenue
const text = ["Bienvenue sur mon portfolio !", "Welcome to my portfolio !"];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpd = 65;
const deletingSpd = 65;
const pauseBtweenTxt = 1000;

const textElement = document.getElementById('bvn');

function typeEffect() {
    const currentText=text[currentTextIndex];

    if(isDeleting){
        textElement.innerHTML = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    }

    else{
        textElement.innerHTML = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % text.length;
    }

    if (!isDeleting && currentCharIndex === currentText.length) {
        setTimeout(() => isDeleting = true, pauseBtweenTxt);
    }

    const spd = isDeleting ? deletingSpd : typingSpd;

    setTimeout(typeEffect, spd);

}

typeEffect();

//Affichage des sections
document.addEventListener('scroll',function() {

    var sectionsImp = ['about-me', 'exp'];
    var sectionsPair = ['formation', 'projet'];

    sectionsImp.forEach(function(sectionImpId){

        var sectionImp = document.getElementById(sectionImpId);
        var position = sectionImp.getBoundingClientRect();
    
        if (position.top < window.innerHeight - 400 && position.bottom >= 0){
            sectionImp.classList.add('sbl');
        }
    });

    sectionsPair.forEach(function(sectionPairId){

        var sectionPair = document.getElementById(sectionPairId);
        var position = sectionPair.getBoundingClientRect();
    
        if (position.top < window.innerHeight - 400 && position.bottom >= 0){
            sectionPair.classList.add('sbr');
        }
    });
});


//Affichage des définition dans formation
var titles = ['t-bts', 't-bac']; // Tableau contenant les IDs des titres

// Boucle sur chaque titre
titles.forEach(function(titleId) {
    const title = document.getElementById(titleId);
    const table = document.getElementById('def-' + titleId.split('-')[1]); // Correspondance dynamique : 't-bts' donne 'def-bts' et 't-bac' donne 'def-bac'

    // Lorsque la souris survole le titre
    title.addEventListener('mouseover', function() {
        const rect = title.getBoundingClientRect();

        let tableTop, tableLeft;

        // Calculez des positions spécifiques selon le titre
        if (titleId === 't-bts') {
            // Position pour le tableau def-bts
            tableTop = rect.top + window.scrollY - table.offsetHeight - 130;
            tableLeft = rect.left + window.scrollX + title.offsetWidth - 100;
        } else if (titleId === 't-bac') {
            // Position pour le tableau def-bac (ajustez ces valeurs comme vous le souhaitez)
            tableTop = rect.top + window.scrollY - table.offsetHeight - 110; // Exemple de décalage différent
            tableLeft = rect.left + window.scrollX + title.offsetWidth - 100; // Exemple de décalage différent
        }

        // Appliquez la nouvelle position au tableau
        table.style.top = `${tableTop}px`;
        table.style.left = `${tableLeft}px`;

        // Affichez le tableau
        table.style.display = 'block';
    });

    // Lorsque la souris quitte le titre
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
});

// function toggleList(listId) {
//     const list = document.getElementById(listId);
//     const arrow = document.querySelector('.toggle-arrow');
    
//     if (list.style.display === 'none') {
//         list.style.display = 'block'; // Affiche la liste
//         arrow.classList.add('active'); // Tourne la flèche vers le haut
//     } else {
//         list.style.display = 'none'; // Masque la liste
//         arrow.classList.remove('active'); // Remet la flèche vers le bas
//     }
// }

function toggleList(listId, arrowElement) {
    const list = document.getElementById(listId);
    
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block'; // Affiche la liste
        arrowElement.innerHTML = '&#9650;'; // Change la flèche vers le haut
    } else {
        list.style.display = 'none'; // Masque la liste
        arrowElement.innerHTML = '&#9660;'; // Remet la flèche vers le bas
    }
}