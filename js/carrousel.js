// (function(){})() --> Fonction auto-executée

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

    // On ajoute la premiere image de la galerie à la figure
    carrousel__figure.appendChild(carrousel__img);

    // Creation de l'index des images
    let index = 0;

    /* Boucle pour ajouter toutes les images de la galerie à la figure et les boutons radio
    ------------------------------------------------------------------------------------------*/
    for (const elm of galerie__img) {
        creerImageCarrousel(index, elm);
        creerRadioCarrousel(index);
        index++;
    }

    /**
     * Fonction pour creer l'image du carrousel a partir de la galerie
     * @param {*} index le numero de l'image
     * @param elm l'element img de la galerie
     */
    function creerImageCarrousel(index, elm) {
        let carrousel__img = document.createElement('img');
        // Ajout d'une classe pour la balise img
        carrousel__img.classList.add('carrousel__img');
        // Ajout d'un numero a l'image
        carrousel__img.dataset.index = index;
        carrousel__img.src = elm.src;
        carrousel__figure.appendChild(carrousel__img);
    }
    /**
     * Fonction pour creer des bouton radio pour le carrousel
     * @param {*} index le numero de l'image
     */
    function creerRadioCarrousel(index) {
        // creation du bouton
        let carrousel__radio = document.createElement('input');
        // classe du bouton 
        carrousel__radio.classList.add('carrousel__radio');
        // type de bouton 
        carrousel__radio.type = 'radio';
        // index du bouton
        carrousel__radio.dataset.index = index;
        // nom du bouton
        carrousel__radio.name = 'radio';
        // ajout du bouton
        carrousel__figure.appendChild(carrousel__radio);

    }

    // Recuperation des bouton radio
    let lesBoutonsRadio = document.querySelectorAll('input');

    console.log(lesBoutonsRadio);

    // Ajout d'un ecouteur d'evenement sur tous les boutons radio
    for (let bouton of lesBoutonsRadio){
        bouton.addEventListener('click', function(){
            let index = this.dataset.index;

            // On recupere l'image avec le bon index et on l'affiche en changeant son opacite 
            // l'opacite de l'image precedante est remise a 0
            let lesImages = document.querySelectorAll('.carrousel__img');
            
            for (let img of lesImages){
                if (img.dataset.index == index){
                    img.style.opacity = 1;
                } else {
                    img.style.opacity = 0;
                }
            } 
        })
    }
})()