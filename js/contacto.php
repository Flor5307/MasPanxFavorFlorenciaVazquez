<?php

$errors = [];
$data = [];

if (empty($_POST['nombre'])) {
    $errors['nombre'] = 'nombre es obligatorio.';
}
if (empty($_POST['apellido'])) {
    $errors['apellido'] = 'apellido es obligatorio.';
}
if (empty($_POST['email'])) {
    $errors['email'] = 'email es obligatorio.';
}

if (empty($_POST['tel'])) {
    $errors['tel'] = 'tel es obligatorio.';
}

if (empty($_POST['comentarios'])) {
    $errors['comentarios'] = 'comentarios es obligatorio.';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    $data['success'] = true;
    $data['message'] = 'Success!';
}

echo json_encode($data);