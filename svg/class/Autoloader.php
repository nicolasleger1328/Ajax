<?php

// C'est la classe sans la methode static

// class Autoloader{

//     function autoload($classname){

//         include 'class/'.$classname.'.php';
//     }

//     function register(){

//         spl_autoload_register([$this, 'autoload']);
//         //                      callable
//     }


// }

// Maintenant la classe que l'on utilise avec les methodes statics donc on l'applique sur une classe.

class Autoloader{

    static function autoload($classname){

        include 'class/'.$classname.'.php';
    }

    static function register(){

        spl_autoload_register([__CLASS__, 'autoload']);
        //                      callable
    }


}