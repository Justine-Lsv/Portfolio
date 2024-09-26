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

document.getElementById('bts').addEventListener('mouseover', function() {
    const title = document.getElementById('bts');
    const table = document.getElementById('def-bts');
    
    // Obtenez la position du titre par rapport à son parent
    const rect = title.getBoundingClientRect();
    
    // Calculez la nouvelle position du tableau
    const tableTop = rect.top + window.scrollY - table.offsetHeight - 200; // Place le tableau 10px au-dessus du titre
    const tableLeft = rect.left + window.scrollX + title.offsetWidth - 150; // Place le tableau 10px à droite du titre

    // Appliquez la nouvelle position au tableau
    table.style.top = `${tableTop}px`;
    table.style.left = `${tableLeft}px`;

    // Affichez le tableau
    table.style.display = 'block';
});

document.getElementById('bts').addEventListener('mouseout', function() {
    const table = document.getElementById('def-bts');
    // Masquez le tableau
    table.style.display = 'none';
});