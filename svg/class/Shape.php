<?php

abstract class Shape{

    protected string $color;
    protected float $opacity;
    protected Point $location ;
    //cretaion d une propriete static
    // tout se qui static est relie a la  classe
    static private int $count =0;
    // protected int $x;
    // protected int $y;

    public function __construct(){
        // $this->x=0;
        // $this->y=0;
        $this->location = new Point();
        $this->color='grey';
        $this->opacity=1;
        // on utile le mot cle "self" qui signifie classe courante, un peu comme "parent" qui est la classe parente
        //Ici on n'utilise pas $this car cela veut dire l'objet, ici on bosse donc sur la classe car on utilise le mot clé static
        self::$count++;
    }

    //creation d une fonction pour recuperer la variable ou propriete $count
    static public function getCount(){
        return self::$count;
    }


    public function setFill(string $color, float $opacity){
        $this->color= $color;
        $this->opacity= $opacity; 
    }

    function setLocation(int $x, int $y){
        // $this->x=$x;
        // $this->y=$y;
        $this->location-> setXY($x, $y);
    }

    abstract function draw();
}