<?php

$users =
[
    [
        'firstname' => 'alfred',
        'lastname' => 'dupont',
        'email' => 'alfred@gmail.com'
    ],
    [
            'firstname' => 'nico',
            'lastname' => 'coco',
            'email' => 'coco@gmail.com'
    ]
];

echo json_encode($users);
exit;