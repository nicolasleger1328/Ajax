<?php

class Triangle extends Polygon{

    function setCoordinates($x1, $y1, $x2, $y2, $x3, $y3){

        $this->setPoints($x1, $y1, $x2, $y2, $x3, $y3);
    }
}