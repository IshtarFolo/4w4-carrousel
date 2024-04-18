(function(){
    /* On récupère le bouton pour ouvrir et le carrousel 
    ----------------------------------------------------------------*/
    let carrousel = document.querySelector('.carrousel')
    let bouton = document.querySelector('.bouton__ouvrir')

    // On ajoute un écouteur d'événement sur le bouton pour ouvrir le carrousel
    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
    })

    /* On récupère le bouton pour fermer le carrousel 
    -------------------------------------------------------------*/
    let boutonFermer = document.querySelector('.carrousel__x')

    // On ajoute un écouteur d'événement sur le bouton pour fermer le carrousel
    boutonFermer.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })

    /* On récupère la galerie pour y insérer les images
    --------------------------------------------------------------*/ 
    let galerie = document.querySelector('.galerie')
    // On cree une balise img 
    let carrousel__img = document.createElement('img');
    // On capture l'element figure du carrousel
    let carrousel__figure = document.querySelector('figure');

    // Pour creer une collection d'images dans la galerie
    // On capture tous les elements img de la galerie
    let galerie__img = galerie.querySelectorAll('img');

    // Ajout d'une classe pour la balise img
    carrousel__img.classList.add('carrousel__img');

    // On ajoute la premiere image de la galerie à la figure
    carrousel__figure.appendChild(carrousel__img);

    // Boucle pour ajouter toutes les images de la galerie à la figure
    for (const elm of galerie__img) {
        let carrousel__img = document.createElement('img');
        carrousel__img.classList.add('carrousel__img');
        carrousel__img.src = elm.src;
        carrousel__figure.appendChild(carrousel__img);
    }

    console.log(galerie__img);
})()