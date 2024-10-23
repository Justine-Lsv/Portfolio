document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Récupérer la cible du lien
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Faire défiler doucement jusqu'à l'élément cible
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('scroll', function() {
    const totopButton = document.querySelector('#totop img');
    
    if (window.scrollY > 300) {
        totopButton.classList.add('visible'); // Ajoute la classe 'visible' pour afficher le bouton
    } else {
        totopButton.classList.remove('visible'); // Retire la classe 'visible' pour masquer le bouton
    }
});

document.querySelector('#totop a').addEventListener('click', function(e) {
    e.preventDefault(); // Empêche le comportement par défaut du lien

    // Défilement en douceur vers le haut
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
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
let typingSpeed = 65;
let deletingSpeed = 65;
const pauseBetweenTexts = 1000;

const textElement = document.getElementById('bvn');
const speedRange = document.getElementById('speed-range');

// Fonction pour faire défiler le texte
function typeEffect() {
    const currentText = text[currentTextIndex];

    if (isDeleting) {
        textElement.innerHTML = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        textElement.innerHTML = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % text.length;
    }

    if (!isDeleting && currentCharIndex === currentText.length) {
        setTimeout(() => isDeleting = true, pauseBetweenTexts);
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeEffect, speed);
}

typeEffect();

// Barre de réglage pour ajuster la vitesse
speedRange.addEventListener('input', function() {
    const value = this.value;

    // Ajuster les vitesses d'écriture et d'effacement en fonction de la position de la barre
    // La plage varie de 200ms (très lent) à 20ms (très rapide)
    typingSpeed = 200 - (value * 1.8);  // Ajuste la vitesse d'écriture
    deletingSpeed = 200 - (value * 1.8);  // Ajuste la vitesse d'effacement

    // Mise à jour du curseur entre la tortue et le lièvre
    if (value < 50) {
        this.classList.remove('fast'); // Montre la tortue
    } else {
        this.classList.add('fast'); // Montre le lièvre
    }
});


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


//CAROUSEL
$(document).ready(function() {
    function moveToSelected(element) {
        var selected;

        if (element === "next") {
            selected = $(".selected").next();

            // Si on dépasse le dernier élément, revenir au premier
            if (selected.length === 0) {
                selected = $('#carousel div').first();
            }

        } else if (element === "prev") {
            selected = $(".selected").prev();

            // Si on dépasse le premier élément, revenir au dernier
            if (selected.length === 0) {
                selected = $('#carousel div').last();
            }

        } else {
            selected = element;
        }

        // Réinitialiser les classes
        $('#carousel div').removeClass();

        // Ajouter les classes aux bons éléments
        var prev = $(selected).prev();
        var next = $(selected).next();

        if (prev.length === 0) {
            prev = $('#carousel div').last();
        }

        if (next.length === 0) {
            next = $('#carousel div').first();
        }

        $(prev).addClass("prev");
        $(selected).addClass("selected");
        $(next).addClass("next");
    }

    // Gestion des événements clavier
    $(document).keydown(function(e) {
        switch (e.which) {
            case 37: // Flèche gauche
                moveToSelected('prev');
                break;
            case 39: // Flèche droite
                moveToSelected('next');
                break;
            default:
                return;
        }
        e.preventDefault();
    });

    // Gestion du clic
    $('#carousel div').click(function() {
        moveToSelected($(this));
    });

});
