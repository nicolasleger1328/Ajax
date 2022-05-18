<?php

function genRect(float $x, float $y, float $width, float $height, string $color, float $opacity){
    return '<rect id="change" x="'.$x.'" y="'.$y.'" width="'.$width.'" height="'.$height.'" fill="'.$color.'" opacity="'.$opacity.'" />';
}

function genCircle(int $cx, int $cy, int $r, string $color, float $opacity){
    return '<circle id="change" cx="'.$cx.'" cy="'.$cy.'" r="'.$r.'" fill="'.$color.'" opacity="'.$opacity.'" />';
}

function genEllipse(int $cx, int $cy, int $rx, int $ry, string $color, float $opacity){
    return '<ellipse cx="'.$cx.'" cy="'.$cy.'" rx="'.$rx.'" ry="'.$ry.'" fill="'.$color.'" opacity="'.$opacity.'" />';
}

function genSquare(float $x, float $y, float $width, string $color, float $opacity){
    return '<rect  x="'.$x.'" y="'.$y.'" width="'.$width.'" height="'.$width.'" fill="'.$color.'" opacity="'.$opacity.'" />';
}
function genTriangle(int $x1,int $y1,int $x2,int $y2,int $x3,int $y3, string $color, float $opacity){
    return '<polygon points="'.$x1.','.$y1.' '.$x2.','.$y2.' '.$x3.','.$y3.'" fill="'.$color.'" opacity="'.$opacity.'" />';
}