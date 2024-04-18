<?php

/**
 * Plugin Name: Carousel
 * Author: Xavier Arbour
 * Description: Affiche le carrousel associé à la galerie wordpress
 * Version: 1.0
 * Plugin URI: https://github.com/IshtarFolo
 * Author URI: httsp://referenced.ca
 * 
 */

// Evalution des versions 
function enqueue_style_script()
{
    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    /*
        version http (link) de la feuille de style avec nouveau nom unique a chaque
        mod du fichier pcq date de creation change
    */
    wp_enqueue_style(
        'em_plugin_carrousel_css',
        plugin_dir_url(__FILE__) . "style.css",
        array(),
        $version_css
    );

    /*
        Meme chose ici avec carrousel.js, on s'assure aussi que script est ajoute
        a la fin de la page
    */
    wp_enqueue_script(
        'em_plugin_carrousel_js',
        plugin_dir_url(__FILE__) . "js/carrousel.js",
        array(),
        $version_js,
        true
    );
}

// Ajout des scripts js et css dans le header/ footer
add_action('wp_enqueue_scripts', 'enqueue_style_script');

// Genere le code html du carrousel
function genere_HTML()
{
    $html = '
        <button class="bouton__ouvrir">Ouvrir Carrousel</button>  
            <div class="carrousel">                    
                <button href="" class="carrousel__x">X</button>  
                <figure class="carrousel__figure"></figure>
                <form action="" class="carrousel__form"></form> 
            </div>   
            ';
    return $html;
}

// Ajout a la page avec le bon string --> carrousel ici
add_shortcode('carrousel', 'genere_HTML');

// Retire la marge en haut de la barre admin
add_theme_support('admin-bar', array('callback' => '__return_false'));
