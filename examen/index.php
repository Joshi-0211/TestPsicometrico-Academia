<?php

session_start();


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <!-- FontAwesome CDN Link for Icons-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <title>Document</title>
</head>
<body>

  <!-- botón de inicio de prueba -->
  <div class="start_btn"><button>Iniciar prueba</button></div>

  <!-- Caja de Informacion-->
  <div class="info_box">
      <div class="info-title"><span>Algunas reglas de este cuestionario</span></div>
      <div class="info-list">
          <div class="info">1. Responde cada pregunta con honestidad: No hay respuestas correctas o incorrectas, solo refleja quién eres realmente.</div>
          <div class="info">2. Tómate tu tiempo: No hay límite de tiempo, así que responde con calma y asegúrate de que cada respuesta te represente fielmente.</div>
          <div class="info">3. No te preocupes por la puntuación: Este test no evalúa tu valor ni habilidades, solo busca conocer tus preferencias y comportamientos.</div>
          <div class="info">4. Sé consistente en tus respuestas: No trates de dar respuestas que creas "correctas", sé tú mismo/a en todo momento.</div>
          <div class="info">5. Lee cada pregunta con atención: Asegúrate de entender bien lo que se te pregunta antes de contestar.</div>
          <div class="info">6. Sé espontáneo/a: Confía en tu primera impresión al responder, normalmente es la más precisa.</div>
          <div class="info">7. Mantén la privacidad: Tus respuestas son confidenciales y serán tratadas de manera anónima.</div>
          <div class="info">8. Si no estás seguro/a, elige la opción que más se acerque a tu pensamiento: No dejes preguntas en blanco si es posible.</div>
      </div>
      <div class="buttons">
          <button class="quit">Salir del Cuestionario</button>
          <button class="restart">Continuar</button>
      </div>
  </div>

  <!-- Cuadro de prueba-->
  <div class="quiz_box">
      <header>
          <div class="title">test de actitud</div>
      </header>
      <section>
          <div class="que_text">
              <!-- Aquí he insertado una pregunta de JavaScript -->
          </div>
          <div class="option_list">
              <!-- Aquí he insertado opciones de JavaScript -->
          </div>
      </section>

      <!-- pie de página de la prueba -->
      <footer>
          <div class="total_que">
              <!-- Aquí he insertado Número de conteo de preguntas de JavaScript -->
          </div>
          <button class="next_btn">Siguiente</button>
      </footer>
  </div>

  <!-- Result Box -->
  <div class="result_box">
      <div class="icon">
          <img src="../eleccion-examen/imagenes/loco academia transparente.png" class="avatar" alt="">
      </div>
      <div class="complete_text">¡Has completado el cuestionario!</div>
      <h1>instrucciones</h1>
      <p>        
        Anota tus resultados de intereses y aptitudes en una hoja de papel.
         Las letras que destaquen en tu C.H.A.S.I.D.E representan las áreas en las que sobresales.
          Busca esas letras para identificar las áreas en las que calificaste en este examen y descubrir 
          tus posibles áreas ocupacionales.
      </p>
      <div class="score_text">
          <!-- Aquí he insertado Score Result de JavaScript-->
      </div>
      <div class="buttons">
          <input type="button" value="Ver CHASIDE" onclick="location.href='CHASIDE/CHASIDE.php'">
      </div>
  </div>

  <!-- Dentro de este archivo JavaScript, solo he insertado preguntas y opciones. -->
  <script src="preguntas.js"></script>

  <!-- Dentro de este archivo JavaScript he codificado todos los códigos de prueba -->
  <script src="script.js"></script>
</body>
</html>