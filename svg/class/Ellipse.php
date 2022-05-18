<?php

// class Ellipse{
//     private $cx;
//     private $cy;
//     private $rx;
//     private $ry;
//     private $color;
//     private $opacity;

//     public function __construct(){
//         $this->cx=30;
//         $this->cy=30;
//         $this->rx = 10;
//         $this->ry=5;
//         $this->color='grey';
//         $this->opacity=1;
//     }

//     public function setLocation(int $cx, int $cy){
//         $this->cx=$cx;
//         $this->cy=$cy;
//     }
//     public function setSize(int $rx, int $ry){
//         $this->rx = $rx;
//         $this->ry = $ry;
//     }
//     public function setFill(string $color, float $opacity){
//         $this->color= $color;
//         $this->opacity= $opacity; 
//     }

//     public function draw(){
//         return '<ellipse cx="'.$this->cx.'" cy="'.$this->cy.'" rx="'.$this->rx.'" ry="'.$this->ry.'" fill="'.$this->color.'" opacity="'.$this->opacity.'" />';
//     }
// }

class Ellipse extends Shape{
    
    private $rx;
    private $ry;
    

    public function __construct(){
        
        parent::__construct();
        $this->rx = 10;
        $this->ry=5;
        
    }

    
    public function setSize(int $rx, int $ry){
        $this->rx = $rx;
        $this->ry = $ry;
    }
   

    public function draw(){
        return '<ellipse cx="'.$this->location->getX().'" cy="'.$this->location->getY().'" rx="'.$this->rx.'" ry="'.$this->ry.'" fill="'.$this->color.'" opacity="'.$this->opacity.'" />';
    }
}