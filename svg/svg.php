<?php

// Inclusion des dépendances
include 'functionsvg.php';
include 'class/Autoloader.php';

// ////////////spl autoload dans le fichier index mais on fait une classe autoload donc ca passe en comm

// spl_autoload_register(function ($class_name) {
//     var_dump($class_name);
//     include 'class/'.$class_name . '.php';
//     var_dump($class_name);
// });


////////Utilisation de laz classe Autoloader sans la methode static

// $autoloader = new Autoloader();
// $autoloader-> register();

///////

Autoloader::register();
//classe donc ::

// include 'class/Point.php';
// include 'class/Shape.php';
// include 'class/Rectangle.php';
// include 'class/Ellipse.php';
// include 'class/Circle.php';
// include 'class/Square.php';
// include 'class/Polygon.php';
// include 'class/Triangle.php';
$couleur='blue';
$opaci = 1;
$svg = '<svg width="1000" height="800">';


if (!empty($_GET['couleur'])) {
$couleur= $_GET['couleur'];

echo ($couleur);

exit;
}
if (!empty($_GET['opaci'])) {
    $opaci= $_GET['opaci'];
    
    echo ($opaci);
    
    exit;
    }
    

$rect = new Rectangle();
$ellipse = new Ellipse();
$circle = new Circle();
$square= new Square();
$polygon= new Polygon();
$triangle = new Triangle();
$rect1 = new Rectangle();

$triangle->setCoordinates(50,100,75,150,250,100);

$rect->setLocation(300,25);
$rect1->setLocation(500,25);
$rect1->setFill("red", 1);
$rect1->

$polygon->setPoints(352,200,625,410,651,598,725,250,650,325);
$polygon->setFill("purple", 0.8);

$ellipse->setLocation(250,250);
$ellipse->setFill("green",0.5);

$square->setLocation(350,500);

$circle->setlocation(400,75);
$circle->setSize(25);


    //cretion de tableau pour alleger le code, la robustesse
$shapes=[];
$shapes[] = $rect;
$shapes[] = $ellipse;
$shapes[] = $circle;
$shapes[] = $triangle;
$shapes[]= $rect1;

var_dump(Shape::getCount());

foreach($shapes as $shape){
    $svg.=$shape->draw();
}
// $rect->setLocation(50,100);
// $rect->setSize(200,75);
// $rect->setFill('green', 0.8);
// $svg=$svg.$rect->draw();



// $svg.=$rect->draw();

var_dump($polygon);
var_dump($ellipse);
var_dump($circle);
var_dump($square);

// $svg.=$ellipse->draw();
// $svg.=$circle->draw();
// // $svg.=$square->draw();
// $svg.=$polygon->draw();
// $svg.=$square->draw();
// $svg.=$triangle->draw();


$svg.='</svg>';

// Affichage : inclusion du fichier de template
include 'svg.phtml';