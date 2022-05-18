<?php

// class Polygon{

//     private  $points;  
//     private string   $color;
//     private float   $opacity;

//     public function __construct(){

//         $this->points = [];
//         $this->color='grey';
//         $this->opacity=1;
//     }

//     // public function setPoints(array $points){
//     public function setPoints(int ...$points){

//         $separator=",";
//         $this->points=$points;

//     }

//     public function setFill(string $color, float $opacity){
//         $this->color= $color;
//         $this->opacity= $opacity; 
//     }

//     public function draw(){
//             return '<polygon points="'.implode(",",$this->points).'" fill="'.$this->color.'" opacity="'.$this->opacity.'" />';
    
//     }
// }


class Polygon extends Shape{

    protected  $points;  
    

    public function __construct(){

        parent::__construct();
        $this->points = [];
        
    }

    // public function setPoints(array $points){
    public function setPoints(int ...$points){

        $separator=",";
        $this->points=$points;

    }

   

    public function draw(){
            return '<polygon points="'.implode(",",$this->points).'" fill="'.$this->color.'" opacity="'.$this->opacity.'" />';
    
    }
}