<?php

$sub_menu = array(
    array(
        'titulo' => 'Ropa',
        'url' => '/ropa.html'
    ),
    array(
        'titulo' => 'Electronica',
        'url' => '/electronica.html'
    ),
    array(
        'titulo' => 'Higiene',
        'url' => '/higiene.html'
    ),
    array(
        'titulo' => 'Alimentos',
        'url' => '/alimentos.html'
    ),
   array(
        'titulo' => 'Otros',
        'url' => '/otros.html'
    )
);

	echo json_encode($sub_menu);
?>