<?php

session_start();



?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CHASIDE - Resultados</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <header id="header">
        <div class="container__header">
            <div class="logo">
                <img src="../../eleccion-examen/imagenes/loco academia transparente.png" alt="logo academia">
            </div>
            <div class="container__nav">
                <nav id="nav">
                    <h1>Academia Santa Maria</h1>
                </nav>
                <div class="btn__menu" id="btn_menu"><i class="fa-solid fa-bars"></i></div>
            </div>
        </div>
    </header>

    <!-- Sección explicativa sobre qué es el CHASIDE -->
    <section id="que-es-chaside">
        <h1>CHASIDE - Descubre tus Áreas de Aptitud e Interés</h1>
        <div class="container__section">
            <h1>¿Qué es el CHASIDE?</h1>
            <p>CHASIDE es una herramienta de evaluación vocacional que te ayuda a identificar tus áreas de interés y aptitud, organizadas en diferentes categorías: C (administrativas y contables), H (humanísticas y sociales), A (artísticas), S (medicina y ciencias de la salud), I (ingeniería y computación), D (defensa y seguridad), y E (ciencias exactas y agrarias). Con esta prueba, podrás tener una mejor idea de las áreas profesionales en las que podrías destacarte.</p>
        </div>
    </section>

    <!-- Sección explicativa para qué sirve el CHASIDE y cómo buscarlo -->
    <section id="para-que-sirve-chaside">
        <div class="container__section">
            <h1>¿Para qué sirve el CHASIDE?</h1>
            <p>El CHASIDE te sirve para descubrir tus principales áreas de aptitud e interés, permitiéndote tomar decisiones informadas sobre qué carrera profesional podría ser la más adecuada para ti. Con base en los resultados obtenidos, podrás explorar diferentes opciones académicas y profesionales que coincidan con tus habilidades y preferencias.</p>
        </div>

        <div class="container__section">
            <h1>¿Cómo interpretar tus resultados del CHASIDE?</h1>
            <p>Ya tienes las letras y puntajes correspondientes. Ahora, sigue estos pasos para interpretar tus resultados:</p>
            <ol>
                <li>Identifica las dos letras con los puntajes más altos. Estas letras representan las áreas en las que tienes mayor aptitud e interés.</li>
                <li>Consulta la tabla de áreas correspondiente a esas letras para ver qué carreras están relacionadas con cada una.</li>
                <li>Explora las opciones profesionales que coinciden con tus letras y decide cuál podría ser más adecuada para ti.</li>
            </ol>
        </div>
    </section>

    <!-- Sección de tablas de resultados -->
    <section id="tablas-chaside">
        <div class="container__section-imagenes">
            <h1>Tablas de Resultados CHASIDE</h1>
            <p>A continuación, verás las tablas correspondientes a las áreas del CHASIDE. Usa estas tablas para comparar tus resultados y encontrar las carreras relacionadas con tus intereses y aptitudes.</p>
            <div class="imagenes-tablas">
                <img src="../imagenes/chaside-CH.PNG" alt="Tabla CHASIDE 1">
                <img src="../imagenes/chaside-AS.PNG" alt="Tabla CHASIDE 2">
                <img src="../imagenes/chaside-ID.PNG" alt="Tabla CHASIDE 3">
                <img src="../imagenes/chaside-E.PNG" alt="Tabla CHASIDE 4">
            </div>
        </div>
    </section>
    
    <!-- Nueva Sección con reflexiones -->
    <section class="container__section">
        <h1>Reflexiona sobre tus preferencias</h1>
        <p>Por último, luego de encontrar tus áreas de preferencias, relájate y analiza cada una de las áreas en cuanto a tus intereses y aptitudes. Busca, indaga, lee sobre las incumbencias de cada una de las carreras involucradas. Tus preferencias empiezan a tomar forma. Posteriormente deberás empezar a tomar decisiones, y ahí se irá vislumbrando la carrera que elegirás estudiar.</p>
        
        <p>No es fácil tomar decisiones en este campo en particular, pero mi experiencia te puede aconsejar que te hagas estas preguntas retrospectivas:</p>
        <ol>
            <li>¿Qué me gusta hacer?</li>
            <li>¿Realizando qué actividad me siento cómodo?</li>
            <li>¿Qué me hace feliz?</li>
            <li>¿Qué me apasiona y realmente lo disfruto?</li>
            <li>¿Para qué soy bueno?</li>
            <li>¿Qué destrezas resaltan mi personalidad?</li>
            <li>¿Cuáles son mis habilidades?</li>
            <li>¿Qué me gusta investigar y aprender?</li>
            <li>¿Tengo preparación y carácter para realizar esto o aquello?</li>
            <li>¿Me siento feliz cuando elijo algo concerniente a los estudios?</li>
        </ol>

        <input type="button" value="iniciar examen verbal" onclick="location.href='../examen-abilidades/1-verbal/index.php'">

    </section>
    

    <footer id="footer">
        <div class="container__footer">
            <div class="box__footer">
                <div class="logo">
                    <img src="../../eleccion-examen/imagenes/loco academia transparente.png" alt="logo academia">
                </div>
                <div class="terms">
                    <p>El Grupo de Investigación de 5to Año de la Academia Santa María se complace en presentar en su investigacion documental la aplicación web de tests vocacionales desarrollada durante el presente año académico. Esta aplicación está diseñada para ayudar a los estudiantes a descubrir sus intereses y aptitudes vocacionales, facilitando así la toma de decisiones informadas sobre su futuro académico y profesional.</p>
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
            <p>Todos los derechos reservados ©2024 <b>grupo 5to año</b></p>
        </div>
    </footer>
    <script src="script.js"></script>
</body>
</html>
