<?php

class Point{

    private int $x;
    private $y;

    public function __construct(){

        $this->x = 0;
        $this->y =0;
    }

    function setXY(int $x, int $y){
        $this->x=$x;
        $this->y=$y;
        // $this->x=setX($x);
        // $this->y=setY($y);
    }

    function getX(){
       return $this->x;
    
    }

    function getY(){
        
       return $this->y;
    }
}