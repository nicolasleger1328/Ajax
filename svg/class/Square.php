<?php

class Square extends Shape{

   
    private  $size;
    

    public function __construct(){
        
        parent::__construct();
        $this->size = 50;
        
    }

   
    public function setSize(int $size){
        $this->size = $size;
    }
     
    public function draw(){
        return '<rect x="'.$this->location->getX().'" y="'.$this->location->getY().'" width="'.$this->size.'" height="'.$this->size.'" fill="'.$this->color.'" opacity="'.$this->opacity.'" />';
    }
}