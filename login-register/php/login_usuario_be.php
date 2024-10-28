<?php 

session_start();

include 'conexion_be.php';

// Obtener los datos del formulario
$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];
$contrasena = hash('sha512', $contrasena);

// Asignar directamente el correo a la sesión, sin validar con la base de datos
$_SESSION['usuario'] = $correo;

// Redirigir a la página de elección de examen
header("location: ../../eleccion-examen/eleccion_examen.php");
exit;

?>

