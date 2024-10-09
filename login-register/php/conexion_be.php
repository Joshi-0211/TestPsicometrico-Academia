<?php

$servidor = "ewr1.clusters.zeabur.com";  // Agregar punto y coma
$usuario = "root";  // Agregar punto y coma
$contrasena = "3P7Rm8MY0X5agfb6tEnOde2FGu1zh4r9";  // Agregar punto y coma
$base_de_datos = "zeabur";  // Agregar punto y coma
$port = 30893;  // El puerto debe ser un número entero, sin comillas y sin los dos puntos

// Crear la conexión
$conexion = mysqli_connect($servidor, $usuario, $contrasena, $base_de_datos, $port);

/* if($conexion){
    echo 'Conectado exitosamente a la base de datos';
} else {
    echo 'No se ha podido conectar a la base de datos';
} 
*/
?>
