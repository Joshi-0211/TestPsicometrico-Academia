<?php

$servidor = "ewr1.clusters.zeabur.com";  // Agregar punto y coma
$usuario = "root";  // Agregar punto y coma
$contrasena = "74S0v6pQzngH8Xl53eDL9RBiIUAbh2Y1";  // Agregar punto y coma
$base_de_datos = "login_register_db";  // Agregar punto y coma
$port = 30620;  // El puerto debe ser un número entero, sin comillas y sin los dos puntos

// Crear la conexión
$conexion = mysqli_connect($servidor, $usuario, $contrasena, $base_de_datos, $port);

/* if($conexion){
    echo 'Conectado exitosamente a la base de datos';
} else {
    echo 'No se ha podido conectar a la base de datos';
} 
*/
?>
