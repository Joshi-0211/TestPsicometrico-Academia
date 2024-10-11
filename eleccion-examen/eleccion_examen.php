<?php
    session_start();
    
    if(!isset($_SESSION['usuario'])){
        echo '
        <script>
            alert("Por favor iniciar sesión para continuar");
            window.location = "../login-register/index.php";
        </script>
        ';
        session_destroy();
        die();
    }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elección Examen</title>
    <link rel="stylesheet" href="css/estilos.css">
    <script src="https://kit.fontawesome.com/2f8a5675b1.js" crossorigin="anonymous"></script>
</head>
<body>
    <header id="header">
        <div class="container__header">
            <div class="logo">
                <img src="imagenes/loco academia transparente.png" alt="logo academia">
            </div>
            <div class="container__nav">
                <nav id="nav">
                    <ul>
                        <li><a href="../eleccion-examen/eleccion_examen.php" class="select">Inicio</a></li>
                        <li><a href="#footer">Nosotros</a></li>
                        <a href="../login-register/php/cerrar_sesion.php">Cerrar sesión</a>
                    </ul>
                </nav>
                <div class="btn__menu" id="btn_menu"><i class="fa-solid fa-bars"></i></div>
            </div>
        </div>
    </header>

    <div class="container__all" id="container_all">
        <div class="cover__precentacion">
            <div class="container__cover">
                <div class="container__info">
                    <h1>Test Vocacional</h1>
                    <h2>Descubre tu carrera</h2>
                    <p>Realizar un test vocacional es fundamental para identificar las áreas de interés y las habilidades individuales, facilitando así la elección de una carrera profesional que se alinee con las aptitudes y aspiraciones personales. Estos tests ayudan a los estudiantes a tomar decisiones informadas, reduciendo el riesgo de insatisfacción y abandono académico, y aumentando las posibilidades de éxito y realización en el ámbito profesional.</p>
                    <input type="button" value="Iniciar Test" onclick="location.href='../examen/index.php'">
                    <input type="button" value="Presentación" onclick="location.href='../precentacion/precentacion.php'">
                </div>
                <div class="container__vector">
                    <img src="imagenes/imagen 1.svg" alt="imagen movil">
                </div>
            </div>
        </div>

        <footer id="footer">
            <div class="container__footer">
                <div class="box__footer">
                    <div class="logo">
                        <img src="../imagenes/loco academia transparente.png" alt="logo academia">
                    </div>
                    <div class="terms">
                        <p>El Grupo de Investigación de 5to Año de la Academia Santa María se complace en presentar en su investigacion documental la aplicación web de tests vocacionales desarrollada durante el presente año académico. Esta aplicación está diseñada para ayudar a los estudiantes a descubrir sus intereses y aptitudes vocacionales, facilitando así la toma de decisiones informadas sobre su futuro académico y profesional.</p>
                    </div>
                    </div>
                            <div class="box__footer">
                        <div class="patrocinadores">
                            <img src="../imagenes/DH_Nana.svg" alt="DH Nana">
                            <img src="../imagenes/Raul_Alejandro.svg" alt="Raul Alejandro">
                     </div>
                <div class="box__footer">
                    <h2>Desarrolladores</h2>
                    <a href="https://www.instagram.com/carlos_lopez2829/">Carlos José López Dávila</a>
                    <a href="https://www.instagram.com/melendez_987/">René Alejandro Jorge Meléndez</a>
                    <a href=" https://www.instagram.com/gdpu_/ ">Gary Dahey Palacio Umaña</a>
                    <a href="https://www.instagram.com/nicolas.valverde.1257?igsh=OTZhbTYweTJ6bzBs ">Fabián Joel Valverde Chevez</a>
                    <a href="https://www.instagram.com/carlo_aguliar2/ ">Luis Carlos Medrano Aguilar</a>
                    <a href="https://www.instagram.com/cristian_spmi/ ">Cristian Alberto Moraga Sediles</a>
                    <a href="https://www.instagram.com/mario_fer1031/profilecard/?igsh=bWY4aDZnN25wZDNo ">Mario Fernando Baltodano González</a>
                    <a href="https://www.instagram.com/fabianaa_vb?igsh=YzFscnB1ZWo1ZjE4 ">Fabiana Lucia Valerio Bendaña</a>
                    <a href="https://www.instagram.com/xime_isabel_/ ">Ximena Isabel Cardenas Gutiérrez</a>
                </div>
            </div>
            <div class="box__copyright">
                <hr>
                <p>Todos los derechos reservados ©2024 <b>grupo 5to año</b></p>
            </div>
        </footer>

        <script src="js/script.js"></script>
    </div>
</body>
</html>
