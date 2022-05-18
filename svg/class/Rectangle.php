<?php

// class Rectangle{
//     //visibilite et proprietes 
//     // On peut maintenenat typer les proprietes dans les classes
//     private  $x;
//     private  $y;
//     private  $width;
//     private  $height;
//     private  $color;
//     private  $opacity;

//     //Par covention le constructeur en premlier

//     public function __construct(){
//         $this->x=0;
//         $this->y=0;
//         $this->width = 10;
//         $this->height=5;
//         $this->color='grey';
//         $this->opacity=1;
//     }

//     //getters et setters LES PORTES D entrées
//     function getX(){
//         return $this->x;
//         //this reprensente l'objet courant
//     }
//     function setX(int $x){
//         $this->x=$x;
//     }
//     // le tout s'appelle l'encapsulation
//     // ou alors pour les setter et getters
//     function setLocation(int $x, int $y){
//     $this->x=$x;
//     $this->y=$y;
//       }
//     public function setSize(int $width, int $height){
//         $this->width = $width;
//         $this->height = $height;
//     }
//     public function setFill(string $color, float $opacity){
//         $this->color= $color;
//         $this->opacity= $opacity; 
//     }

//     // On recupere la fct genRect pour maintenant dessiner notre rectangle

//     public function draw(){
//         return '<rect x="'.$this->x.'" y="'.$this->y.'" width="'.$this->width.'" height="'.$this->height.'" fill="'.$this->color.'" opacity="'.$this->opacity.'" />';
//     }
// }

class Rectangle extends Shape{

    private  $width;
    private  $height;

    public function __construct(){
        
        parent::__construct();
        $this->width = 10;
        $this->height=5;
    }  


    public function setSize(int $width, int $height){
        $this->width = $width;
        $this->height = $height;
    }

    public function draw(){
        return '<rect x="'.$this->location->getX().'" y="'.$this->location->getY().'" width="'.$this->width.'" height="'.$this->height.'" fill="'.$this->color.'" opacity="'.$this->opacity.'" />';
    }

}

