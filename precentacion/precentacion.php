<?php
    session_start();
    
    if (!isset($_SESSION['usuario'])) {
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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presentación</title>
    <link rel="stylesheet" href="../precentacion/estilo-precentacion.css">
    <script src="https://kit.fontawesome.com/2f8a5675b1.js" crossorigin="anonymous"></script>
</head>
<body>
    <header id="header">
        <div class="container__header">
            <div class="logo">
                <img src="../eleccion-examen/imagenes/loco academia transparente.png" alt="logo academia">
            </div>
            <div class="container__nav">
                <nav id="nav">
                    <ul>
                        <li><a href="../eleccion-examen/eleccion_examen.php" class="select">Inicio</a></li>
                        <li><a href="#footer">Nosotros</a></li>
                        <li><a href="../login-register/php/cerrar_sesion.php">Cerrar sesión</a></li>
                    </ul>
                </nav>
                <div class="btn__menu" id="btn_menu">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    </header>

    <div class="container__all" id="container_all">
        <div class="cover__precentacion">
            <div class="container__cover">
                <div class="container__info">
                    <h1>Test Vocacional</h1>
                    <h2>tipos de examenes</h2>
                    <p>
                    Aquí podrás encontrar una lista detallada de los exámenes a los que serás sometido, 
                    junto con una explicación clara de la función y propósito de cada uno de ellos. 
                    Esta información te permitirá comprender mejor cada evaluación y estar mejor preparado para afrontarlas con éxito.
                    </p>
            
                </div>
                <div class="container__vector">
                    <img src="../eleccion-examen/imagenes/imagen-3.svg" alt="imagen movil">
                </div>
            </div>
        </div>

        <!-- aqui comienza el codigo -->
        
        <div class="boody__page">

            <div class="container__card">

                <div class="card c1"> <!-- carta examen actitudes -->

                    <div class="icon">
                     <i class="fa-solid fa-face-smile"></i>
                    </div>
                    
                    <div class="info__description">
                        <p>
                        El examen de actitud evalúa la disposición y motivación de una persona hacia diferentes situaciones o tareas. 
                        Mide aspectos como la proactividad, resiliencia, orientación al logro y capacidad de adaptación. 
                        Es útil para identificar cómo alguien podría enfrentarse a desafíos en el entorno laboral o académico, 
                        y para orientar en la elección de una carrera o rol adecuado.</p>
                        <input type="button" value="Leer Más" onclick="location.href='../precentacion/1-examen_actitud/index.html   '">
                    </div>

                </div> 

                     <div class="card c2"> <!-- carta examen verbal -->

                    <div class="icon">
                        <i class="fa-solid fa-book-open"></i>
                    </div>
                    
                    <div class="info__description">
                        <p>
                        El examen verbal evalúa la capacidad de una persona para comprender y usar el lenguaje de manera efectiva. 
                        Mide habilidades en comprensión lectora, vocabulario, analogías y razonamiento verbal. Es útil para 
                        identificar aptitudes en áreas como la comunicación, derecho, enseñanza y otras carreras que requieren 
                        habilidades lingüísticas avanzadas.</p>
                        <input type="button" value="Leer Más" onclick="location.href='../precentacion/2-examen_verbal/index.html   '">
                    </div>

                </div> 
                     <div class="card c3"> <!-- carta examen numerico -->

                    <div class="icon">
                     <i class="fa-solid fa-calculator"></i>
                    </div>
                    
                    <div class="info__description">
                        <p>
                        El examen numérico evalúa la capacidad para trabajar con números y resolver problemas matemáticos. 
                        Mide habilidades en cálculo, razonamiento lógico, interpretación de datos y resolución de problemas cuantitativos. 
                        Es especialmente útil para carreras en ciencias, ingeniería, economía y cualquier campo que requiera un fuerte 
                        dominio de las matemáticas.</p>
                        <input type="button" value="Leer Más" onclick="location.href='../precentacion/3-examen_numerico/index.html   '">
                    </div>

                </div> 

                     <div class="card c4"> <!-- carta examen abstracto -->

                    <div class="icon">
                     <i class="fa-solid fa-cubes-stacked"></i>
                    </div>
                    
                    <div class="info__description">
                        <p>
                        El examen abstracto evalúa la capacidad de una persona para pensar de manera lógica y conceptual 
                        sin depender de conocimientos específicos. Mide habilidades en el reconocimiento de patrones, 
                        azonamiento inductivo y deductivo, y resolución de problemas abstractos. Es útil para identificar 
                        aptitudes en áreas que requieren pensamiento crítico y creatividad,
                         como la programación, diseño, y ciencias.</p>
                         <input type="button" value="Leer Más" onclick="location.href='../precentacion/4-examen_abstracto/index.html   '">
                    </div>

                </div> 

                <div class="card c5"> <!-- carta examen mecanico -->

                    <div class="icon">
                      <i class="fa-solid fa-gear"></i>
                    </div>
                    
                    <div class="info__description">
                        <p>
                        El examen mecánico evalúa la comprensión de principios físicos y mecánicos. Mide habilidades 
                        en el razonamiento espacial, la comprensión de sistemas mecánicos, y la capacidad para visualizar 
                        cómo funcionan las máquinas. Es especialmente útil para identificar aptitudes en campos como la ingeniería, 
                        la mecánica automotriz, la robótica, y otras áreas técnicas que requieren un buen conocimiento 
                        de la mecánica.</p>
                        <input type="button" value="Leer Más" onclick="location.href='../precentacion/5-examen_mecanico/index.html   '">
                    </div>

                </div> 

                <div class="card c6"> <!-- carta examen espacial -->

                    <div class="icon">
                        <i class="fa-solid fa-compass"></i>
                    </div>
                    
                    <div class="info__description">
                        <p>
                        El examen espacial evalúa la capacidad para visualizar y manipular objetos en el espacio.
                         Mide habilidades en la percepción tridimensional, el razonamiento espacial y la capacidad 
                         para imaginar cómo se verán los objetos cuando se giran o se ensamblan. Es útil para carreras 
                         en arquitectura, diseño industrial, ingeniería, y cualquier campo que requiera habilidades de 
                         visualización espacial.</p>
                         <input type="button" value="Leer Más" onclick="location.href='../precentacion/6-examen_espacial/index.html   '">
                    </div>

                </div> 
                
                <div class="card c7"> <!-- carta examen ortografico -->

                    <div class="icon">
                        <i class="fa-solid fa-pencil"></i>
                    </div>
                    
                    <div class="info__description">
                        <p>
                        El examen ortográfico evalúa la capacidad para escribir correctamente según las normas ortográficas 
                        de un idioma. Mide el conocimiento de reglas gramaticales, uso correcto de acentos, y la identificación 
                        de errores comunes en la escritura. Es especialmente útil para identificar aptitudes en áreas 
                        como la redacción, la enseñanza de idiomas, la corrección de textos y la comunicación escrita en general.</p>
                        <input type="button" value="Leer Más" onclick="location.href='../precentacion/7-examen_ortografico/index.html   '">
                    </div>

                </div> 

            </div>

        </div>

        <!-- Fin del codigo -->

        <footer id="footer">
            <div class="container__footer">
                <div class="box__footer">
                    <div class="logo">
                        <img src="../eleccion-examen/imagenes/loco academia transparente.png" alt="logo academia">
                    </div>
                    <div class="terms">
                        <p>
                            El Grupo de Investigación de 5to Año de la Academia Santa María se complace en presentar en su investigacion documental
                            la aplicación web de test vocacionales desarrollada durante el presente año académico. Esta aplicación está 
                            diseñada para ayudar a los estudiantes a descubrir sus intereses y aptitudes vocacionales, facilitando así 
                            la toma de decisiones informadas sobre su futuro académico y profesional.
                        </p>
                    </div>
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
                <p>Todos los derechos reservados ©2024 <b>Grupo 5to Año</b></p>
            </div>
        </footer>

        <script src="../precentacion/script.js"></script>
    </div>
</body>
</html>

