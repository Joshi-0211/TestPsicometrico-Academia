<?php

session_start();

if(isset($_SESSION['usuario'])){
    header("location: ../../eleccion-examen/eleccion_examen.php");
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login y registro -</title>

    <link rel="stylesheet" href="assets/css/estios.css">
</head>
<body>
    
    <main>
        <div class="contenedor__todo">
            
            <div class="caja__trasera">

                <div class="caja__trasera-login">
                    <h3>¿ya tienes un cuenta?</h3>
                    <p>inicia seción para realiazar tu examen</p>
                    <button id="btn__iniciar-sesion">iniciar sesión</button>
                </div>
                <div class="caja__trasera-register">
                    <h3>¿Aún no tienes un cuenta?</h3>
                    <p>Registrate para que puedas iniciar sesión</p>
                    <button id="btn__registrarse">Registrate</button>
                </div>
            </div>
            <!-- formulario de login y registro-->
            <div class="contenedor__login-register">
                <!--login-->
                <form action="php/login_usuario_be.php" method="POST"
                class="formulario__login">
                    <h2>Iniciar Sesión</h2>
                    <input type="text" placeholder="Correo electronico" name="correo">
                    <input type="password" placeholder="contraseña" name="contrasena">
                    <button>Entrar</button>

                </form>   
                <!--registro-->
                <form action="php/registro_usuario_be.php" method="POST" class="formulario__register">
                    <h2>registrarse</h2>
                    <input type="text" placeholder="Nombre Completo" name ="nombre_completo">
                    <input type="text" placeholder="Correo electronico" name = "correo">
                    <input type="text" placeholder="Usuario" name = "usuario">
                    <input type="password" placeholder="Contraseña" name="contrasena">
                    <button>Registrarse</button>
                </form>
                
                               
            </div>
        </div>
    </main>
    <script src="assets/js/script.js"></script>
</body>
</html>