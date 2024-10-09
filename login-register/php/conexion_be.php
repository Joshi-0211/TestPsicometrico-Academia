<?php

$servidor = "ewr1.clusters.zeabur.com"

$usuario = 'root'

$contrasena = "3P7Rm8MY0X5agfb6tEnOde2FGu1zh4r9"

$base_de_datos = "zeabur"

$port = ":30893"


//crear la coneccion

$conexion = mysqli_connect("$servidor", "$usuario", "$contrasena", "$base_de_datos", "$port");


/*if($conexion){
    echo 'conectado exitosamente a la base de datos';
}else{
    echo 'no se ha podido conectar a la base de datos';
} 
*/


?>
