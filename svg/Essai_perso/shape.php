<?php

//Inclusion des dépendances

include 'libfonction.php';
//Inclusion des Classes

///////////////////
//Code principal//
//////////////////
    
    //Gestion des formulaires formes
if(!empty($_GET['forme'])){
    $forme = $_GET['forme'];

    if($forme== "rectangle"){
        $scriptrect = '<script src="rect.js" defer></script>';
        include 'rectangle.phtml';
        exit;
    }
    exit;
}
    //Gestion des couleurs
if (!empty($_GET['couleur'])) {
    $couleur= $_GET['couleur']; 
    echo ($couleur);  
    exit;
}
    //Gestion de l'opacité
if (!empty($_GET['opacite'])) {
    $opacite= $_GET['opacite'];
    echo ($opacite);
    exit;
}
    //Gestion de l'ordonnee
if (!empty($_GET['ordonnee'])) {
    $ordonnee= $_GET['ordonnee'];
    echo ($ordonnee);
    exit;
}
    //Gestion des abscisses
if (!empty($_GET['abscisse'])) {
    $abscisse= $_GET['abscisse'];
    echo ($abscisse);
    exit;
}
    //Gestion des longueurs
if (!empty($_GET['longueur'])) {
    $longueur= $_GET['longueur'];
    echo ($longueur);
    exit;
}
    //Gestion des largeur
if (!empty($_GET['largeur'])) {
    $largeur= $_GET['largeur'];
    echo ($largeur);
    exit;
}
//Inclusion des templates

include 'shape.phtml';

