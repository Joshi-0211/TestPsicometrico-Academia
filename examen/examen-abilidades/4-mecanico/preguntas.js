let questions = [const mechanicalTest = [
  {
    numb: 1,
    question: "En un sistema de engranajes, si el engranaje A tiene 12 dientes y gira a 100 RPM (revoluciones por minuto), ¿a qué velocidad gira el engranaje B que tiene 36 dientes y está conectado al engranaje A?",
    answer: "a) 33.33 RPM",
    options: [
      "a) 33.33 RPM",
      "b) 50 RPM",
      "c) 66.67 RPM",
      "d) 25 RPM"
    ]
  },
  {
    numb: 2,
    question: "Si una rueda de freno tiene un diámetro de 40 cm y una fuerza de fricción de 200 N, ¿qué torque se aplica si se considera que la fuerza se aplica en el borde de la rueda?",
    answer: "d) 20 Nm",
    options: [
      "a) 10 Nm",
      "b) 15 Nm",
      "c) 25 Nm",
      "d) 20 Nm"
    ]
  },
  {
    numb: 3,
    question: "Un objeto se encuentra en equilibrio sobre una rampa inclinada. Si la fuerza de fricción es suficiente para evitar el deslizamiento, ¿cómo se relacionan la fuerza de fricción y la componente de la fuerza gravitacional paralela a la rampa?",
    answer: "b) La fuerza de fricción es igual a la componente de la fuerza gravitacional paralela a la rampa.",
    options: [
      "a) La fuerza de fricción es menor que la componente de la fuerza gravitacional paralela a la rampa.",
      "b) La fuerza de fricción es igual a la componente de la fuerza gravitacional paralela a la rampa.",
      "c) La fuerza de fricción es mayor que la componente de la fuerza gravitacional paralela a la rampa.",
      "d) La fuerza de fricción no afecta a la componente de la fuerza gravitacional paralela a la rampa."
    ]
  },
  {
    numb: 4,
    question: "Si un objeto se mueve a lo largo de una trayectoria circular con una velocidad constante, ¿cómo cambia su aceleración centrípeta cuando se duplica el radio de la trayectoria?",
    answer: "a) La aceleración centrípeta se reduce a la mitad.",
    options: [
      "a) La aceleración centrípeta se reduce a la mitad.",
      "b) La aceleración centrípeta se duplica.",
      "c) La aceleración centrípeta se mantiene igual.",
      "d) La aceleración centrípeta se cuadruplica."
    ]
  },
  {
    numb: 5,
    question: "En un sistema de palancas, si la distancia desde el punto de apoyo hasta el lugar donde se aplica la fuerza es el doble que la distancia desde el punto de apoyo hasta la carga, ¿cómo se compara la fuerza aplicada con la carga?",
    answer: "c) La fuerza aplicada es la mitad de la carga.",
    options: [
      "a) La fuerza aplicada es el doble de la carga.",
      "b) La fuerza aplicada es igual a la carga.",
      "c) La fuerza aplicada es la mitad de la carga.",
      "d) La fuerza aplicada es la cuarta parte de la carga."
    ]
  },
  {
    numb: 6,
    question: "Si un engranaje de 20 dientes gira a 60 RPM y está conectado a un engranaje de 40 dientes, ¿cuál será la velocidad angular del engranaje de 40 dientes?",
    answer: "a) 30 RPM",
    options: [
      "a) 30 RPM",
      "b) 15 RPM",
      "c) 45 RPM",
      "d) 60 RPM"
    ]
  },
  {
    numb: 7,
    question: "¿Cuál es el trabajo realizado por una fuerza de 500 N aplicada a lo largo de una distancia de 2 metros en la dirección de la fuerza?",
    answer: "b) 1000 J",
    options: [
      "a) 500 J",
      "b) 1000 J",
      "c) 2000 J",
      "d) 250 J"
    ]
  },
  {
    numb: 8,
    question: "Un cilindro de radio 5 cm y altura 10 cm se encuentra lleno de agua. Si el agua se vierte por un orificio de 2 cm de radio en la base, ¿cuál es el caudal de salida si se tarda 20 segundos en vaciar el cilindro?",
    answer: "c) 1.57 cm³/s",
    options: [
      "a) 2.5 cm³/s",
      "b) 3.14 cm³/s",
      "c) 1.57 cm³/s",
      "d) 0.79 cm³/s"
    ]
  },
  {
    numb: 9,
    question: "Si una polea fija de 5 cm de radio está conectada a una polea móvil de 10 cm de radio, ¿qué relación de fuerzas se establece entre la fuerza aplicada y la fuerza resistida?",
    answer: "a) La fuerza aplicada es la mitad de la fuerza resistida.",
    options: [
      "a) La fuerza aplicada es la mitad de la fuerza resistida.",
      "b) La fuerza aplicada es el doble de la fuerza resistida.",
      "c) La fuerza aplicada es igual a la fuerza resistida.",
      "d) La fuerza aplicada es cuatro veces la fuerza resistida."
    ]
  },
  {
    numb: 10,
    question: "En una máquina de levas, si la leva tiene una forma de un perfil de onda y la velocidad angular de la leva es constante, ¿cómo se comporta la velocidad lineal del seguidor a lo largo del perfil?",
    answer: "b) La velocidad lineal varía dependiendo del perfil de la leva.",
    options: [
      "a) La velocidad lineal es constante.",
      "b) La velocidad lineal varía dependiendo del perfil de la leva.",
      "c) La velocidad lineal es máxima en el punto más alto del perfil.",
      "d) La velocidad lineal es mínima en el punto más bajo del perfil."
    ]
  },
  {
    numb: 11,
    question: "Si se aplican dos fuerzas perpendiculares entre sí sobre un objeto, ¿cómo se calcula la fuerza resultante?",
    answer: "b) Usando el teorema de Pitágoras.",
    options: [
      "a) Sumando las magnitudes de las fuerzas.",
      "b) Usando el teorema de Pitágoras.",
      "c) Calculando el promedio de las fuerzas.",
      "d) Multiplicando las magnitudes de las fuerzas."
    ]
  },
  {
    numb: 12,
    question: "En un mecanismo de biela-manivela, ¿qué efecto tiene una biela más larga en el movimiento del mecanismo?",
    answer: "a) Aumenta la amplitud del movimiento del extremo de la biela.",
    options: [
      "a) Aumenta la amplitud del movimiento del extremo de la biela.",
      "b) Disminuye la amplitud del movimiento del extremo de la biela.",
      "c) No afecta el movimiento del extremo de la biela.",
      "d) Cambia la dirección del movimiento del extremo de la biela."
    ]
  },
  {
    numb: 13,
    question: "¿Qué sucede con el momento de inercia de un disco cuando se duplica su radio manteniendo constante su masa?",
    answer: "b) Se cuadruplica.",
    options: [
      "a) Se duplica.",
      "b) Se cuadruplica.",
      "c) Permanece igual.",
      "d) Se reduce a la mitad."
    ]
  },
  {
    numb: 14,
    question: "En un sistema de poleas con una polea móvil, ¿cómo se compara la fuerza aplicada con la fuerza resistida?",
    answer: "a) La fuerza aplicada es la mitad de la fuerza resistida.",
    options: [
      "a) La fuerza aplicada es la mitad de la fuerza resistida.",
      "b) La fuerza aplicada es el doble de la fuerza resistida.",
      "c) La fuerza aplicada es igual a la fuerza resistida.",
      "d) La fuerza aplicada es cuatro veces la fuerza resistida."
    ]
  },
  {
    numb: 15,
    question: "En una palanca de primer tipo, ¿cómo se relaciona la fuerza aplicada y la carga cuando el punto de apoyo se encuentra en el centro?",
    answer: "c) La fuerza aplicada es igual a la carga.",
    options: [
      "a) La fuerza aplicada es el doble de la carga.",
      "b) La fuerza aplicada es la mitad de la carga.",
      "c) La fuerza aplicada es igual a la carga.",
      "d) La fuerza aplicada es cuatro veces la carga."
    ]
  },
  {
    numb: 16,
    question: "Si un objeto se mueve sobre una superficie inclinada sin fricción, ¿cómo se calcula la componente de la fuerza gravitacional paralela a la rampa?",
    answer: "d) Multiplicando el peso del objeto por el seno del ángulo de inclinación.",
    options: [
      "a) Multiplicando el peso del objeto por el coseno del ángulo de inclinación.",
      "b) Multiplicando el peso del objeto por la tangente del ángulo de inclinación.",
      "c) Multiplicando el peso del objeto por el coseno del ángulo de inclinación y dividiendo entre el ángulo.",
      "d) Multiplicando el peso del objeto por el seno del ángulo de inclinación."
    ]
  },
  {
    numb: 17,
    question: "En un sistema de engranajes, si un engranaje de 40 dientes está conectado a un engranaje de 10 dientes, ¿cómo se compara la velocidad de rotación del engranaje de 40 dientes con la del engranaje de 10 dientes?",
    answer: "a) La velocidad del engranaje de 40 dientes es una cuarta parte de la del engranaje de 10 dientes.",
    options: [
      "a) La velocidad del engranaje de 40 dientes es una cuarta parte de la del engranaje de 10 dientes.",
      "b) La velocidad del engranaje de 40 dientes es el doble de la del engranaje de 10 dientes.",
      "c) La velocidad del engranaje de 40 dientes es la misma que la del engranaje de 10 dientes.",
      "d) La velocidad del engranaje de 40 dientes es cuatro veces la del engranaje de 10 dientes."
    ]
  },
  {
    numb: 18,
    question: "Si un objeto gira alrededor de un eje con una velocidad angular constante y se duplica el radio del objeto, ¿cómo cambia la velocidad tangencial?",
    answer: "a) Se duplica.",
    options: [
      "a) Se duplica.",
      "b) Se reduce a la mitad.",
      "c) Se mantiene igual.",
      "d) Se cuadruplica."
    ]
  },
  {
    numb: 19,
    question: "En un engranaje cónico, ¿cómo afecta la inclinación de los dientes a la eficiencia del engranaje?",
    answer: "b) La inclinación puede causar pérdida de energía por fricción y mayor desgaste.",
    options: [
      "a) La inclinación no afecta la eficiencia del engranaje.",
      "b) La inclinación puede causar pérdida de energía por fricción y mayor desgaste.",
      "c) La inclinación mejora la eficiencia al permitir una mayor transferencia de energía.",
      "d) La inclinación hace que el engranaje funcione a una velocidad constante."
    ]
  },
  {
    numb: 20,
    question: "Si un engranaje de 30 dientes está conectado a otro engranaje de 60 dientes, ¿cuál es la relación de transmisión entre ellos?",
    answer: "a) 1:2",
    options: [
      "a) 1:2",
      "b) 2:1",
      "c) 1:3",
      "d) 3:1"
    ]
  },
  {
    numb: 21,
    question: "En un sistema de transmisión por correas, ¿cómo afecta la tensión en la correa a la eficiencia del sistema?",
    answer: "b) Una tensión demasiado alta puede causar deslizamiento y desgaste, reduciendo la eficiencia.",
    options: [
      "a) La tensión en la correa no afecta la eficiencia del sistema.",
      "b) Una tensión demasiado alta puede causar deslizamiento y desgaste, reduciendo la eficiencia.",
      "c) Una tensión baja mejora la eficiencia al reducir el fricción.",
      "d) La tensión en la correa siempre mejora la eficiencia del sistema."
    ]
  },
  {
    numb: 22,
    question: "Si una biela en un motor de combustión tiene una longitud de 15 cm y está conectada a una manivela de 5 cm de radio, ¿cuál es la relación entre el movimiento de la biela y el movimiento de la manivela?",
    answer: "a) La biela se mueve con una amplitud mayor que la manivela.",
    options: [
      "a) La biela se mueve con una amplitud mayor que la manivela.",
      "b) La biela se mueve con una amplitud menor que la manivela.",
      "c) La amplitud de movimiento de la biela es igual a la de la manivela.",
      "d) La biela se mueve en dirección opuesta a la manivela."
    ]
  },
  {
    numb: 23,
    question: "En un sistema de frenos hidráulicos, ¿cómo se relaciona la fuerza aplicada en el pedal con la fuerza de frenado en las ruedas?",
    answer: "b) La fuerza de frenado en las ruedas es mayor debido a la ley de Pascal.",
    options: [
      "a) La fuerza de frenado en las ruedas es menor debido a la fricción.",
      "b) La fuerza de frenado en las ruedas es mayor debido a la ley de Pascal.",
      "c) La fuerza de frenado en las ruedas es igual a la fuerza aplicada en el pedal.",
      "d) La fuerza de frenado en las ruedas no se ve afectada por la fuerza aplicada en el pedal."
    ]
  },
  {
    numb: 24,
    question: "Si un sistema de palanca tiene una distancia desde el punto de apoyo a la carga de 4 m y la fuerza aplicada está a 1 m del punto de apoyo, ¿cuál es la relación entre la fuerza aplicada y la carga?",
    answer: "a) La fuerza aplicada es una cuarta parte de la carga.",
    options: [
      "a) La fuerza aplicada es una cuarta parte de la carga.",
      "b) La fuerza aplicada es una cuarta parte de la carga.",
      "c) La fuerza aplicada es el doble de la carga.",
      "d) La fuerza aplicada es igual a la carga."
    ]
  },
  {
    numb: 25,
    question: "En un sistema de transmisión por correas, si la correas está deslizándose en la polea, ¿cómo afecta esto a la transmisión de potencia?",
    answer: "b) Reduce la eficiencia y la transmisión de potencia.",
    options: [
      "a) Aumenta la eficiencia y la transmisión de potencia.",
      "b) Reduce la eficiencia y la transmisión de potencia.",
      "c) No afecta la eficiencia ni la transmisión de potencia.",
      "d) Mejora la eficiencia y la transmisión de potencia."
    ]
  },
  {
    numb: 26,
    question: "Si una polea tiene un diámetro de 20 cm y la correa se mueve a 100 cm/s, ¿a qué velocidad girará la polea si la correa pasa por el borde?",
    answer: "a) 31.4 cm/s",
    options: [
      "a) 31.4 cm/s",
      "b) 50 cm/s",
      "c) 62.8 cm/s",
      "d) 100 cm/s"
    ]
  },
  {
    numb: 27,
    question: "¿Cómo cambia el momento de fuerza cuando se aumenta la distancia desde el punto de apoyo a la fuerza aplicada en una palanca?",
    answer: "a) Aumenta el momento de fuerza.",
    options: [
      "a) Aumenta el momento de fuerza.",
      "b) Disminuye el momento de fuerza.",
      "c) No afecta el momento de fuerza.",
      "d) El momento de fuerza se reduce a la mitad."
    ]
  },
  {
    numb: 28,
    question: "Si se utilizan dos engranajes de diferentes tamaños en un sistema, ¿cómo afecta el tamaño de los engranajes a la relación de transmisión?",
    answer: "b) La relación de transmisión es inversamente proporcional a la relación de los tamaños de los engranajes.",
    options: [
      "a) La relación de transmisión es directamente proporcional a la relación de los tamaños de los engranajes.",
      "b) La relación de transmisión es inversamente proporcional a la relación de los tamaños de los engranajes.",
      "c) La relación de transmisión no se ve afectada por el tamaño de los engranajes.",
      "d) La relación de transmisión aumenta con el tamaño de los engranajes."
    ]
  },
  {
    numb: 29,
    question: "En un sistema de engranajes, ¿cómo se calcula la velocidad angular del engranaje de salida en función de la velocidad angular del engranaje de entrada y el número de dientes de ambos engranajes?",
    answer: "c) Multiplicando la velocidad angular del engranaje de entrada por la relación inversa de los números de dientes.",
    options: [
      "a) Multiplicando la velocidad angular del engranaje de entrada por el número de dientes del engranaje de salida.",
      "b) Dividiendo la velocidad angular del engranaje de entrada por el número de dientes del engranaje de salida.",
      "c) Multiplicando la velocidad angular del engranaje de entrada por la relación inversa de los números de dientes.",
      "d) Sumando la velocidad angular del engranaje de entrada y el número de dientes del engranaje de salida."
    ]
  },
  {
    numb: 30,
    question: "Si se aplica una fuerza de 10 N a un palanca de 2 m de largo en un extremo, ¿qué momento de fuerza se genera si el punto de apoyo está en el otro extremo?",
    answer: "a) 20 Nm",
    options: [
      "a) 20 Nm",
      "b) 10 Nm",
      "c) 5 Nm",
      "d) 40 Nm"
    ]
  },
  {
    numb: 31,
    question: "En un mecanismo de biela-manivela, si se aumenta la longitud de la biela, ¿cómo afecta esto a la amplitud del movimiento del extremo de la biela?",
    answer: "b) Aumenta la amplitud del movimiento.",
    options: [
      "a) Disminuye la amplitud del movimiento.",
      "b) Aumenta la amplitud del movimiento.",
      "c) No afecta la amplitud del movimiento.",
      "d) Cambia la dirección del movimiento."
    ]
  },
  {
    numb: 32,
    question: "¿Cómo se determina el trabajo realizado por una fuerza en un sistema de palanca?",
    answer: "a) Multiplicando la fuerza aplicada por la distancia desde el punto de apoyo.",
    options: [
      "a) Multiplicando la fuerza aplicada por la distancia desde el punto de apoyo.",
      "b) Dividiendo la fuerza aplicada por la distancia desde el punto de apoyo.",
      "c) Sumando la fuerza aplicada y la distancia desde el punto de apoyo.",
      "d) Restando la fuerza aplicada de la distancia desde el punto de apoyo."
    ]
  },
  {
    numb: 33,
    question: "Si se utiliza una biela de 10 cm en un motor y la manivela tiene un radio de 5 cm, ¿cuál es la relación de amplificación del movimiento de la biela en comparación con la manivela?",
    answer: "a) La amplitud de movimiento de la biela es el doble de la manivela.",
    options: [
      "a) La amplitud de movimiento de la biela es el doble de la manivela.",
      "b) La amplitud de movimiento de la biela es la mitad de la manivela.",
      "c) La amplitud de movimiento de la biela es igual a la manivela.",
      "d) La amplitud de movimiento de la biela es cuatro veces la manivela."
    ]
  },
  {
    numb: 34,
    question: "En un sistema de engranajes, si el engranaje A tiene 20 dientes y está conectado a un engranaje B con 60 dientes, ¿cuál será la relación de velocidad angular entre A y B?",
    answer: "b) 1:3",
    options: [
      "a) 3:1",
      "b) 1:3",
      "c) 2:1",
      "d) 1:2"
    ]
  },
  {
    numb: 35,
    question: "En una polea, si el diámetro se duplica, ¿cómo afecta esto al torque necesario para girar la polea si se mantiene constante la fuerza aplicada?",
    answer: "b) Se duplica el torque necesario.",
    options: [
      "a) Se reduce a la mitad el torque necesario.",
      "b) Se duplica el torque necesario.",
      "c) No afecta al torque necesario.",
      "d) Se cuadruplica el torque necesario."
    ]
  },
  {
    numb: 36,
    question: "Si un engranaje de 10 dientes está conectado a un engranaje de 20 dientes, ¿cómo se comparan las velocidades angulares de ambos engranajes?",
    answer: "c) La velocidad angular del engranaje de 10 dientes es el doble de la del engranaje de 20 dientes.",
    options: [
      "a) La velocidad angular del engranaje de 10 dientes es la mitad de la del engranaje de 20 dientes.",
      "b) La velocidad angular del engranaje de 10 dientes es igual a la del engranaje de 20 dientes.",
      "c) La velocidad angular del engranaje de 10 dientes es el doble de la del engranaje de 20 dientes.",
      "d) La velocidad angular del engranaje de 10 dientes es cuatro veces la del engranaje de 20 dientes."
    ]
  },
  {
    numb: 37,
    question: "En un sistema de transmisión por correas, ¿cómo afecta el deslizamiento de la correa en una polea a la transferencia de potencia?",
    answer: "b) Reduce la eficiencia de la transferencia de potencia.",
    options: [
      "a) Aumenta la eficiencia de la transferencia de potencia.",
      "b) Reduce la eficiencia de la transferencia de potencia.",
      "c) No afecta la transferencia de potencia.",
      "d) Aumenta la transferencia de potencia."
    ]
  },
  {
    numb: 38,
    question: "Si una rueda de freno tiene un diámetro de 30 cm y se aplica una fuerza de 500 N en el borde, ¿qué torque se genera?",
    answer: "d) 150 Nm",
    options: [
      "a) 75 Nm",
      "b) 100 Nm",
      "c) 125 Nm",
      "d) 150 Nm"
    ]
  },
  {
    numb: 39,
    question: "En un mecanismo de biela-manivela, si la biela es el doble de larga que la manivela, ¿cómo afecta esto a la amplitud del movimiento del extremo de la biela?",
    answer: "b) Aumenta la amplitud del movimiento.",
    options: [
      "a) Disminuye la amplitud del movimiento.",
      "b) Aumenta la amplitud del movimiento.",
      "c) No afecta la amplitud del movimiento.",
      "d) Cambia la dirección del movimiento."
    ]
  },
  {
    numb: 40,
    question: "Si se aumenta la longitud de una palanca manteniendo constante la fuerza aplicada, ¿cómo cambia el momento de fuerza?",
    answer: "a) Aumenta.",
    options: [
      "a) Aumenta.",
      "b) Disminuye.",
      "c) Permanece igual.",
      "d) Se reduce a la mitad."
    ]
  },
  {
    numb: 41,
    question: "En un sistema de engranajes, si el engranaje de entrada gira a 500 RPM y el engranaje de salida tiene el doble de tamaño, ¿a qué velocidad gira el engranaje de salida?",
    answer: "b) 250 RPM",
    options: [
      "a) 200 RPM",
      "b) 250 RPM",
      "c) 500 RPM",
      "d) 1000 RPM"
    ]
  },
  {
    numb: 42,
    question: "¿Cómo afecta el tamaño de una polea a la velocidad de la correa que pasa por ella?",
    answer: "b) A mayor tamaño de la polea, menor es la velocidad de la correa.",
    options: [
      "a) A mayor tamaño de la polea, mayor es la velocidad de la correa.",
      "b) A mayor tamaño de la polea, menor es la velocidad de la correa.",
      "c) El tamaño de la polea no afecta la velocidad de la correa.",
      "d) La velocidad de la correa se mantiene constante con el tamaño de la polea."
    ]
  },
  {
    numb: 43,
    question: "En un mecanismo de palanca de segundo tipo, ¿cómo se comparan la fuerza aplicada y la carga cuando la fuerza aplicada está más cerca del punto de apoyo?",
    answer: "c) La fuerza aplicada es menor que la carga.",
    options: [
      "a) La fuerza aplicada es mayor que la carga.",
      "b) La fuerza aplicada es igual a la carga.",
      "c) La fuerza aplicada es menor que la carga.",
      "d) La fuerza aplicada es cuatro veces la carga."
    ]
  },
  {
    numb: 44,
    question: "Si se aplica una fuerza de 200 N a una palanca de 4 m de largo en el extremo, ¿qué momento de fuerza se genera?",
    answer: "b) 800 Nm",
    options: [
      "a) 400 Nm",
      "b) 800 Nm",
      "c) 200 Nm",
      "d) 1000 Nm"
    ]
  },
  {
    numb: 45,
    question: "En un sistema de biela-manivela, si la manivela gira a 100 RPM y la biela tiene el doble de longitud que la manivela, ¿cómo se compara la velocidad angular de la biela con la de la manivela?",
    answer: "d) La velocidad angular de la biela es igual a la de la manivela.",
    options: [
      "a) La velocidad angular de la biela es la mitad de la de la manivela.",
      "b) La velocidad angular de la biela es el doble de la de la manivela.",
      "c) La velocidad angular de la biela es cuatro veces la de la manivela.",
      "d) La velocidad angular de la biela es igual a la de la manivela."
    ]
  },
  {
    numb: 46,
    question: "Si un engranaje de 50 dientes está conectado a otro engranaje de 10 dientes, ¿cómo se compara la velocidad angular del engranaje de 10 dientes con la del engranaje de 50 dientes?",
    answer: "a) La velocidad angular del engranaje de 10 dientes es cinco veces la del engranaje de 50 dientes.",
    options: [
      "a) La velocidad angular del engranaje de 10 dientes es cinco veces la del engranaje de 50 dientes.",
      "b) La velocidad angular del engranaje de 10 dientes es igual a la del engranaje de 50 dientes.",
      "c) La velocidad angular del engranaje de 10 dientes es una quinta parte de la del engranaje de 50 dientes.",
      "d) La velocidad angular del engranaje de 10 dientes es diez veces la del engranaje de 50 dientes."
    ]
  },
  {
    numb: 47,
    question: "¿Cómo afecta el diámetro de una polea a la fuerza de fricción en una correa que pasa por ella?",
    answer: "a) A mayor diámetro de la polea, mayor es la fuerza de fricción.",
    options: [
      "a) A mayor diámetro de la polea, mayor es la fuerza de fricción.",
      "b) A mayor diámetro de la polea, menor es la fuerza de fricción.",
      "c) El diámetro de la polea no afecta la fuerza de fricción.",
      "d) La fuerza de fricción se mantiene constante con el diámetro de la polea."
    ]
  },
  {
    numb: 48,
    question: "En un sistema de palanca, ¿cómo cambia la ventaja mecánica si se aumenta la distancia desde el punto de apoyo a la carga?",
    answer: "a) La ventaja mecánica aumenta.",
    options: [
      "a) La ventaja mecánica aumenta.",
      "b) La ventaja mecánica disminuye.",
      "c) La ventaja mecánica se mantiene constante.",
      "d) La ventaja mecánica se reduce a la mitad."
    ]
  },
  {
    numb: 49,
    question: "Si una correa se desliza en una polea, ¿cómo afecta esto a la potencia transmitida?",
    answer: "b) Reduce la potencia transmitida.",
    options: [
      "a) Aumenta la potencia transmitida.",
      "b) Reduce la potencia transmitida.",
      "c) No afecta la potencia transmitida.",
      "d) Aumenta la eficiencia de la potencia transmitida."
    ]
  },
  {
    numb: 50,
    question: "En un sistema de transmisión por engranajes, si el engranaje de entrada tiene 30 dientes y el engranaje de salida tiene 60 dientes, ¿cómo se compara la velocidad angular del engranaje de salida con la del engranaje de entrada?",
    answer: "a) La velocidad angular del engranaje de salida es la mitad de la del engranaje de entrada.",
    options: [
      "a) La velocidad angular del engranaje de salida es la mitad de la del engranaje de entrada.",
      "b) La velocidad angular del engranaje de salida es el doble de la del engranaje de entrada.",
      "c) La velocidad angular del engranaje de salida es la misma que la del engranaje de entrada.",
      "d) La velocidad angular del engranaje de salida es cuatro veces la del engranaje de entrada."
    ]
  }
];
