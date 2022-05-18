<?php

class Circle extends Shape{

    
    private $r;
    

    public function __construct(){
        
        parent::__construct();
        $this->r = 10;
       
    }

    
    public function setSize(int $r){
        $this->r = $r;
        
    }
    

    function draw(){
        return '<circle class="change" cx="'.$this->location->getX().'" cy="'.$this->location->getY().'" r="'.$this->r.'" fill="'.$this->color.'" opacity="'.$this->opacity.'" />';
    }
}