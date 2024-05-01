// (function(){})() --> Fonction auto-executée

(function(){
    /* On récupère le bouton pour ouvrir et le carrousel 
    ----------------------------------------------------------------*/
    let carrousel = document.querySelector('.carrousel')
    let bouton = document.querySelector('.bouton__ouvrir')

    // Faire apparaitre le carrousel dans le body du document HTML pour éviter qu'il ne se retrouve
    // sous les autres cartes des sections du site.
    document.addEventListener('DOMContentLoaded', function(){
        document.body.appendChild(carrousel);
    })

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
        // classe du formulaire
        let carrousel__form = document.querySelector('.carrousel__form');
        // classe du bouton 
        carrousel__radio.classList.add('carrousel__radio');
        // type de bouton 
        carrousel__radio.type = 'radio';
        // index du bouton
        carrousel__radio.dataset.index = index;
        // nom du bouton
        carrousel__radio.name = 'radio';
        // ajout du bouton
        carrousel__form.appendChild(carrousel__radio);
    }

    // Recuperation des bouton radio
    let lesBoutonsRadio = document.querySelectorAll('.carrousel__radio');

    console.log(lesBoutonsRadio);

    // Ajout d'un ecouteur d'evenement sur tous les boutons radio
    for (let bouton of lesBoutonsRadio){
        bouton.addEventListener('change', function(){
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

    // Attrapper la balise figure du carrousel
    let carrouselFigure = document.querySelector('.carrousel__figure');

    // Recuperer les images et les boutons radio
    let images = document.querySelectorAll('.carrousel__img');
    let boutons = document.querySelectorAll('.carrousel__radio');

    // La première image est rendue visible
    if (images.length > 0) {
        images[0].style.opacity = 1;
    }

    // Creer les boutons de navigation
    let prevButton = document.createElement('input');
    prevButton.type = 'button';
    prevButton.value = '<';
    prevButton.id = 'prevButton';

    let nextButton = document.createElement('input');
    nextButton.type = 'button';
    nextButton.value = '>';
    nextButton.id = 'nextButton';

    // Ajouter les boutons de navigation a la figure
    carrouselFigure.appendChild(prevButton);
    carrouselFigure.appendChild(nextButton);

    // Ajouter un ecouteur d'evenement sur les boutons de navigation
    // Ici le bouton precedent
    //---------------------------------
    prevButton.addEventListener('click', function() {
    // L'index descend d'une unité, on revient au début si nécessaire
    index = (index - 1 + images.length) % images.length;

    // On change l'opacite des images en fonction de l'index
    for (let img of images) {
        if (img.dataset.index == index) {
            img.style.opacity = 1;
        } else {
            img.style.opacity = 0;
        }
    }

        // On met à jour le bouton radio correspondant
        boutons[index].checked = true;
    });

    // Ici le bouton suivant
    //---------------------------------
    nextButton.addEventListener('click', function() {
        // On incrementer l'index, on revient au début si nécessaire
        index = (index + 1) % images.length;

        // On change l'opacite des images en fonction de l'index
        for (let img of images) {
            if (img.dataset.index == index) {
                img.style.opacity = 1;
            } else {
                img.style.opacity = 0;
            }
        }

        // On met à jour le bouton radio correspondant
        boutons[index].checked = true;
    });
})()