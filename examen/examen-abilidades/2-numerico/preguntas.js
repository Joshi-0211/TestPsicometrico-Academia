let questions = [
  {
    numb: 1,
    question: "¿Cuál es el resultado de 15 + 27?",
    answer: "a) 42",
    options: [
      "a) 42",
      "b) 44",
      "c) 40",
      "d) 41"
    ]
  },
  {
    numb: 2,
    question: "Si un tren viaja a 80 km/h, ¿cuánto tiempo tarda en recorrer 200 km?",
    answer: "b) 2.5 horas",
    options: [
      "a) 2 horas",
      "b) 2.5 horas",
      "c) 3 horas",
      "d) 4 horas"
    ]
  },
  {
    numb: 3,
    question: "¿Cuál es el resultado de 9 x 6?",
    answer: "c) 54",
    options: [
      "a) 45",
      "b) 50",
      "c) 54",
      "d) 60"
    ]
  },
  {
    numb: 4,
    question: "En un conjunto de datos, los números son 5, 8, 12, 20, ¿cuál es la media?",
    answer: "d) 11.25",
    options: [
      "a) 10",
      "b) 11",
      "c) 12",
      "d) 11.25"
    ]
  },
  {
    numb: 5,
    question: "¿Cuál es el siguiente número en la secuencia: 2, 4, 8, 16, ...?",
    answer: "b) 32",
    options: [
      "a) 24",
      "b) 32",
      "c) 64",
      "d) 48"
    ]
  },
  {
    numb: 6,
    question: "Si tienes 3 manzanas y compras 5 más, ¿cuántas manzanas tienes en total?",
    answer: "a) 8",
    options: [
      "a) 8",
      "b) 7",
      "c) 9",
      "d) 6"
    ]
  },
  {
    numb: 7,
    question: "¿Qué porcentaje es 25 de 200?",
    answer: "c) 12.5%",
    options: [
      "a) 10%",
      "b) 15%",
      "c) 12.5%",
      "d) 20%"
    ]
  },
  {
    numb: 8,
    question: "Resuelve: 48 ÷ 6 + 3 × 2",
    answer: "b) 19",
    options: [
      "a) 20",
      "b) 19",
      "c) 17",
      "d) 21"
    ]
  },
  {
    numb: 9,
    question: "Si un artículo cuesta $150 y está en descuento del 20%, ¿cuál es el precio después del descuento?",
    answer: "a) $120",
    options: [
      "a) $120",
      "b) $130",
      "c) $140",
      "d) $110"
    ]
  },
  {
    numb: 10,
    question: "Si el perímetro de un cuadrado es 36 cm, ¿cuál es la longitud de uno de sus lados?",
    answer: "d) 9 cm",
    options: [
      "a) 8 cm",
      "b) 7 cm",
      "c) 10 cm",
      "d) 9 cm"
    ]
  },

  {
    numb: 11,
    question: "¿Cuál es el valor de 7^2 - 3 × 4?",
    answer: "a) 37",
    options: [
      "a) 37",
      "b) 29",
      "c) 43",
      "d) 45"
    ]
  },
  {
    numb: 12,
    question: "Si la relación entre dos variables es de 3:5 y una de las variables mide 18, ¿cuánto mide la otra variable?",
    answer: "b) 30",
    options: [
      "a) 24",
      "b) 30",
      "c) 36",
      "d) 28"
    ]
  },
  {
    numb: 13,
    question: "¿Cuál es el área de un triángulo con base de 12 cm y altura de 5 cm?",
    answer: "c) 30 cm²",
    options: [
      "a) 25 cm²",
      "b) 20 cm²",
      "c) 30 cm²",
      "d) 35 cm²"
    ]
  },
  {
    numb: 14,
    question: "Si un rectángulo tiene un perímetro de 50 cm y una longitud de 15 cm, ¿cuál es su ancho?",
    answer: "d) 10 cm",
    options: [
      "a) 5 cm",
      "b) 8 cm",
      "c) 12 cm",
      "d) 10 cm"
    ]
  },
  {
    numb: 15,
    question: "En una bolsa hay 3 bolas rojas, 2 bolas verdes y 5 bolas azules. ¿Cuál es la probabilidad de sacar una bola azul?",
    answer: "b) 0.5",
    options: [
      "a) 0.3",
      "b) 0.5",
      "c) 0.6",
      "d) 0.8"
    ]
  },
  {
    numb: 16,
    question: "Resuelve: 2 × (5 + 3) - 7",
    answer: "a) 9",
    options: [
      "a) 9",
      "b) 10",
      "c) 11",
      "d) 12"
    ]
  },
  {
    numb: 17,
    question: "Si el precio de un artículo aumenta en un 15% y el nuevo precio es $115, ¿cuál era el precio original?",
    answer: "c) $100",
    options: [
      "a) $105",
      "b) $110",
      "c) $100",
      "d) $120"
    ]
  },
  {
    numb: 18,
    question: "¿Cuál es el resultado de 100 ÷ (5 + 5)?",
    answer: "b) 10",
    options: [
      "a) 5",
      "b) 10",
      "c) 15",
      "d) 20"
    ]
  },
  {
    numb: 19,
    question: "En una serie numérica, el primer número es 2 y cada número siguiente es el doble del anterior. ¿Cuál es el quinto número?",
    answer: "d) 32",
    options: [
      "a) 16",
      "b) 20",
      "c) 24",
      "d) 32"
    ]
  },
  {
    numb: 20,
    question: "Si el ángulo interno de un triángulo es de 60 grados, ¿cuál es el ángulo restante si es un triángulo equilátero?",
    answer: "a) 60 grados",
    options: [
      "a) 60 grados",
      "b) 90 grados",
      "c) 45 grados",
      "d) 30 grados"
    ]
  },
  {
    numb: 21,
    question: "¿Qué número completa la serie: 3, 9, 27, 81, ...?",
    answer: "b) 243",
    options: [
      "a) 162",
      "b) 243",
      "c) 324",
      "d) 405"
    ]
  },
  {
    numb: 22,
    question: "Si una computadora cuesta $1200 y tiene un descuento del 10%, ¿cuál es el precio final?",
    answer: "c) $1080",
    options: [
      "a) $1100",
      "b) $1150",
      "c) $1080",
      "d) $1200"
    ]
  },
  {
    numb: 23,
    question: "Resuelve: (8 + 2) × (6 - 3)",
    answer: "a) 30",
    options: [
      "a) 30",
      "b) 25",
      "c) 20",
      "d) 15"
    ]
  },
  {
    numb: 24,
    question: "En una encuesta, el 40% de los participantes prefieren el color rojo. Si hay 80 participantes, ¿cuántos prefieren el color rojo?",
    answer: "d) 32",
    options: [
      "a) 30",
      "b) 40",
      "c) 25",
      "d) 32"
    ]
  },
  {
    numb: 25,
    question: "Si un número se multiplica por 5 y luego se le suma 8, el resultado es 33. ¿Cuál es el número?",
    answer: "b) 5",
    options: [
      "a) 6",
      "b) 5",
      "c) 4",
      "d) 7"
    ]
  },
  {
    numb: 26,
    question: "¿Cuál es el área de un círculo con radio de 7 cm? (Usa π = 3.14)",
    answer: "a) 153.86 cm²",
    options: [
      "a) 153.86 cm²",
      "b) 140 cm²",
      "c) 154 cm²",
      "d) 150 cm²"
    ]
  },
  {
    numb: 27,
    question: "Si un libro se lee en 4 días y se lee 1/3 del libro cada día, ¿cuánto del libro queda por leer en el cuarto día?",
    answer: "d) 1/3",
    options: [
      "a) 1/2",
      "b) 1/4",
      "c) 1/6",
      "d) 1/3"
    ]
  },
  {
    numb: 28,
    question: "Resuelve: 12 + (6 × 2) ÷ 3",
    answer: "b) 14",
    options: [
      "a) 16",
      "b) 14",
      "c) 12",
      "d) 18"
    ]
  },
  {
    numb: 29,
    question: "¿Cuál es el valor de 3 × (4 + 2) ÷ 2?",
    answer: "c) 9",
    options: [
      "a) 10",
      "b) 8",
      "c) 9",
      "d) 12"
    ]
  },
  {
    numb: 30,
    question: "Si un objeto se mueve a una velocidad de 15 m/s durante 8 segundos, ¿cuál es la distancia recorrida?",
    answer: "d) 120 m",
    options: [
      "a) 100 m",
      "b) 110 m",
      "c) 130 m",
      "d) 120 m"
    ]
  },

  {
    numb: 31,
    question: "¿Cuál es el resultado de 1000 - (75 × 8)?",
    answer: "a) 400",
    options: [
      "a) 400",
      "b) 300",
      "c) 350",
      "d) 450"
    ]
  },
  {
    numb: 32,
    question: "¿Qué número completa la serie: 1, 4, 9, 16, ...?",
    answer: "b) 25",
    options: [
      "a) 20",
      "b) 25",
      "c) 30",
      "d) 36"
    ]
  },
  {
    numb: 33,
    question: "Si un tren viaja a 90 km/h, ¿cuántos kilómetros recorre en 3 horas?",
    answer: "d) 270 km",
    options: [
      "a) 240 km",
      "b) 260 km",
      "c) 250 km",
      "d) 270 km"
    ]
  },
  {
    numb: 34,
    question: "¿Cuál es el resultado de 8 × (7 - 4) ÷ 2?",
    answer: "c) 12",
    options: [
      "a) 14",
      "b) 16",
      "c) 12",
      "d) 10"
    ]
  },
  {
    numb: 35,
    question: "Si el precio de un producto es $180 y se aplica un descuento del 25%, ¿cuál es el precio después del descuento?",
    answer: "a) $135",
    options: [
      "a) $135",
      "b) $150",
      "c) $140",
      "d) $160"
    ]
  },
  {
    numb: 36,
    question: "¿Cuál es la raíz cuadrada de 144?",
    answer: "b) 12",
    options: [
      "a) 10",
      "b) 12",
      "c) 14",
      "d) 16"
    ]
  },
  {
    numb: 37,
    question: "En una clase, hay 24 estudiantes. Si 1/3 de ellos son mujeres, ¿cuántos hombres hay en la clase?",
    answer: "d) 16",
    options: [
      "a) 8",
      "b) 10",
      "c) 12",
      "d) 16"
    ]
  },
  {
    numb: 38,
    question: "¿Cuál es el valor de 15% de 200?",
    answer: "a) 30",
    options: [
      "a) 30",
      "b) 25",
      "c) 35",
      "d) 40"
    ]
  },
  {
    numb: 39,
    question: "Si una tienda ofrece un 20% de descuento sobre un artículo que cuesta $90, ¿cuánto tendrás que pagar?",
    answer: "b) $72",
    options: [
      "a) $70",
      "b) $72",
      "c) $75",
      "d) $80"
    ]
  },
  {
    numb: 40,
    question: "¿Cuál es el valor de (5 × 6) - (4 × 3)?",
    answer: "a) 18",
    options: [
      "a) 18",
      "b) 22",
      "c) 24",
      "d) 20"
    ]
  },
  {
    numb: 41,
    question: "En una caja hay 50 bolas, de las cuales 10 son verdes, 20 rojas y el resto azules. ¿Cuál es el número de bolas azules?",
    answer: "c) 20",
    options: [
      "a) 15",
      "b) 18",
      "c) 20",
      "d) 25"
    ]
  },
  {
    numb: 42,
    question: "¿Cuál es el valor de 2 × (9 ÷ 3) + 6?",
    answer: "b) 12",
    options: [
      "a) 10",
      "b) 12",
      "c) 14",
      "d) 16"
    ]
  },
  {
    numb: 43,
    question: "Si tienes $200 y gastas $120, ¿cuánto dinero te queda?",
    answer: "d) $80",
    options: [
      "a) $70",
      "b) $60",
      "c) $90",
      "d) $80"
    ]
  },
  {
    numb: 44,
    question: "¿Qué número completa la serie: 5, 10, 20, 40, ...?",
    answer: "a) 80",
    options: [
      "a) 80",
      "b) 70",
      "c) 90",
      "d) 100"
    ]
  },
  {
    numb: 45,
    question: "Si un automóvil consume 8 litros de gasolina para recorrer 100 km, ¿cuántos litros necesitará para recorrer 250 km?",
    answer: "c) 20 litros",
    options: [
      "a) 18 litros",
      "b) 22 litros",
      "c) 20 litros",
      "d) 25 litros"
    ]
  },
  {
    numb: 46,
    question: "¿Cuál es el área de un rectángulo con largo de 10 cm y ancho de 5 cm?",
    answer: "b) 50 cm²",
    options: [
      "a) 45 cm²",
      "b) 50 cm²",
      "c) 55 cm²",
      "d) 60 cm²"
    ]
  },
  {
    numb: 47,
    question: "Resuelve: 24 ÷ (4 + 2)",
    answer: "a) 4",
    options: [
      "a) 4",
      "b) 6",
      "c) 5",
      "d) 3"
    ]
  },
  {
    numb: 48,
    question: "¿Cuál es el resultado de 7 × 3 - 4 ÷ 2?",
    answer: "b) 20",
    options: [
      "a) 18",
      "b) 20",
      "c) 22",
      "d) 24"
    ]
  },
  {
    numb: 49,
    question: "¿Cuál es la raíz cúbica de 27?",
    answer: "c) 3",
    options: [
      "a) 2",
      "b) 4",
      "c) 3",
      "d) 5"
    ]
  },
  {
    numb: 50,
    question: "Si un libro se vende en 3 partes iguales, y cada parte cuesta $12, ¿cuál es el precio total del libro?",
    answer: "a) $36",
    options: [
      "a) $36",
      "b) $30",
      "c) $40",
      "d) $32"
    ]
  },
  {
    numb: 51,
    question: "En una bolsa hay 10 canicas rojas y 15 canicas azules. Si se saca una canica al azar, ¿cuál es la probabilidad de que sea roja?",
    answer: "b) 2/5",
    options: [
      "a) 1/2",
      "b) 2/5",
      "c) 3/5",
      "d) 1/3"
    ]
  },
  {
    numb: 52,
    question: "Resuelve: (15 - 3) ÷ (2 × 4)",
    answer: "c) 1",
    options: [
      "a) 2",
      "b) 1.5",
      "c) 1",
      "d) 3"
    ]
  },
  {
    numb: 53,
    question: "¿Cuál es el siguiente número en la serie: 1, 3, 6, 10, ...?",
    answer: "d) 15",
    options: [
      "a) 12",
      "b) 14",
      "c) 13",
      "d) 15"
    ]
  },
  {
    numb: 54,
    question: "Si el área de un cuadrado es 64 cm², ¿cuál es la longitud de uno de sus lados?",
    answer: "b) 8 cm",
    options: [
      "a) 6 cm",
      "b) 8 cm",
      "c) 10 cm",
      "d) 12 cm"
    ]
  },
  {
    numb: 55,
    question: "Si tienes 12 manzanas y las divides equitativamente entre 4 amigos, ¿cuántas manzanas recibe cada amigo?",
    answer: "a) 3",
    options: [
      "a) 3",
      "b) 2",
      "c) 4",
      "d) 5"
    ]
  },
  {
    numb: 56,
    question: "¿Cuál es el valor de 4 × (7 + 3) - 12?",
    answer: "c) 28",
    options: [
      "a) 24",
      "b) 30",
      "c) 28",
      "d) 32"
    ]
  },
  {
    numb: 57,
    question: "¿Cuál es la suma de los ángulos internos de un hexágono?",
    answer: "b) 720 grados",
    options: [
      "a) 540 grados",
      "b) 720 grados",
      "c) 600 grados",
      "d) 360 grados"
    ]
  },
  {
    numb: 58,
    question: "Si el precio de un artículo es $120 y se aplica un descuento del 15%, ¿cuál es el precio después del descuento?",
    answer: "a) $102",
    options: [
      "a) $102",
      "b) $108",
      "c) $110",
      "d) $115"
    ]
  },
  {
    numb: 59,
    question: "¿Cuál es el resultado de 5^3 - 20?",
    answer: "d) 105",
    options: [
      "a) 120",
      "b) 115",
      "c) 110",
      "d) 105"
    ]
  },
  {
    numb: 60,
    question: "¿Qué número completa la serie: 2, 5, 10, 17, ...?",
    answer: "b) 26",
    options: [
      "a) 24",
      "b) 26",
      "c) 28",
      "d) 30"
    ]
  },
  {
    numb: 61,
    question: "Si un objeto se mueve a 25 m/s y viaja durante 10 segundos, ¿cuál es la distancia recorrida?",
    answer: "a) 250 m",
    options: [
      "a) 250 m",
      "b) 200 m",
      "c) 300 m",
      "d) 350 m"
    ]
  },
  {
    numb: 62,
    question: "¿Cuál es el valor de (7 × 6) - (2 × 5)?",
    answer: "b) 32",
    options: [
      "a) 30",
      "b) 32",
      "c) 35",
      "d) 40"
    ]
  },
  {
    numb: 63,
    question: "¿Qué número completa la serie: 1, 8, 27, 64, ...?",
    answer: "c) 125",
    options: [
      "a) 100",
      "b) 110",
      "c) 125",
      "d) 144"
    ]
  },
  {
    numb: 64,
    question: "Si un artículo tiene un costo de $500 y se aplica un impuesto del 8%, ¿cuál es el precio final?",
    answer: "d) $540",
    options: [
      "a) $520",
      "b) $530",
      "c) $550",
      "d) $540"
    ]
  },
  {
    numb: 65,
    question: "¿Cuál es el área de un triángulo con base de 8 cm y altura de 6 cm?",
    answer: "a) 24 cm²",
    options: [
      "a) 24 cm²",
      "b) 30 cm²",
      "c) 28 cm²",
      "d) 32 cm²"
    ]
  },
  {
    numb: 66,
    question: "¿Cuál es la raíz cuadrada de 81?",
    answer: "b) 9",
    options: [
      "a) 8",
      "b) 9",
      "c) 10",
      "d) 11"
    ]
  },
  {
    numb: 67,
    question: "Si un libro cuesta $45 y hay una oferta del 20% de descuento, ¿cuánto pagas por el libro?",
    answer: "c) $36",
    options: [
      "a) $30",
      "b) $38",
      "c) $36",
      "d) $40"
    ]
  },
  {
    numb: 68,
    question: "¿Cuál es el valor de 6 × (4 + 5) - 3?",
    answer: "d) 57",
    options: [
      "a) 52",
      "b) 54",
      "c) 56",
      "d) 57"
    ]
  },
  {
    numb: 69,
    question: "En una encuesta, el 60% de los encuestados prefieren el cine sobre el teatro. Si se encuestaron 120 personas, ¿cuántas prefieren el cine?",
    answer: "b) 72",
    options: [
      "a) 70",
      "b) 72",
      "c) 80",
      "d) 90"
    ]
  },
  {
    numb: 70,
    question: "¿Cuál es el valor de 5 × (8 ÷ 2) + 6?",
    answer: "a) 26",
    options: [
      "a) 26",
      "b) 28",
      "c) 30",
      "d) 32"
    ]
  },
  {
    numb: 71,
    question: "Si una pizza se divide en 8 porciones y has comido 5 porciones, ¿cuántas porciones quedan?",
    answer: "c) 3",
    options: [
      "a) 2",
      "b) 4",
      "c) 3",
      "d) 5"
    ]
  },
  {
    numb: 72,
    question: "¿Cuál es el resultado de 45 ÷ 9 + 6?",
    answer: "b) 11",
    options: [
      "a) 10",
      "b) 11",
      "c) 12",
      "d) 13"
    ]
  },
  {
    numb: 73,
    question: "En una carrera, un corredor termina en 3 horas. ¿Cuántos minutos son 3 horas?",
    answer: "d) 180 minutos",
    options: [
      "a) 150 minutos",
      "b) 160 minutos",
      "c) 170 minutos",
      "d) 180 minutos"
    ]
  },
  {
    numb: 74,
    question: "Si una botella contiene 1.5 litros de agua y cada vaso contiene 250 ml, ¿cuántos vasos puedes llenar con el agua de la botella?",
    answer: "a) 6",
    options: [
      "a) 6",
      "b) 5",
      "c) 4",
      "d) 7"
    ]
  },
  {
    numb: 75,
    question: "¿Cuál es el resultado de 9 × (2 + 1) - 6?",
    answer: "b) 21",
    options: [
      "a) 18",
      "b) 21",
      "c) 24",
      "d) 27"
    ]
  },
  {
    numb: 76,
    question: "¿Cuál es el valor de 10% de 250?",
    answer: "c) 25",
    options: [
      "a) 20",
      "b) 22",
      "c) 25",
      "d) 30"
    ]
  },
  {
    numb: 77,
    question: "Si un libro cuesta $50 y hay una oferta de 10% de descuento, ¿cuál es el precio con descuento?",
    answer: "b) $45",
    options: [
      "a) $40",
      "b) $45",
      "c) $48",
      "d) $50"
    ]
  },
  {
    numb: 78,
    question: "¿Cuál es la suma de los ángulos internos de un octágono?",
    answer: "a) 1080 grados",
    options: [
      "a) 1080 grados",
      "b) 900 grados",
      "c) 720 grados",
      "d) 540 grados"
    ]
  },
  {
    numb: 79,
    question: "¿Cuál es el valor de 3^3 - 2 × 4?",
    answer: "c) 19",
    options: [
      "a) 20",
      "b) 18",
      "c) 19",
      "d) 22"
    ]
  },
  {
    numb: 80,
    question: "¿Cuál es el siguiente número en la serie: 2, 6, 12, 20, ...?",
    answer: "b) 30",
    options: [
      "a) 28",
      "b) 30",
      "c) 32",
      "d) 34"
    ]
  },
  {
    numb: 81,
    question: "Si el área de un círculo es 78.5 cm², ¿cuál es el radio del círculo? (Usa π = 3.14)",
    answer: "d) 5 cm",
    options: [
      "a) 4 cm",
      "b) 6 cm",
      "c) 7 cm",
      "d) 5 cm"
    ]
  },
  {
    numb: 82,
    question: "¿Cuál es el resultado de (10 - 2) × (8 ÷ 4)?",
    answer: "a) 16",
    options: [
      "a) 16",
      "b) 18",
      "c) 20",
      "d) 22"
    ]
  },
  {
    numb: 83,
    question: "En una caja hay 25 bolas, de las cuales 10 son rojas, 5 verdes y el resto son azules. ¿Cuántas bolas azules hay en la caja?",
    answer: "b) 10",
    options: [
      "a) 5",
      "b) 10",
      "c) 12",
      "d) 15"
    ]
  },
  {
    numb: 84,
    question: "¿Cuál es el resultado de 6 × (8 ÷ 2) + 5?",
    answer: "b) 29",
    options: [
      "a) 27",
      "b) 29",
      "c) 30",
      "d) 32"
    ]
  },
  {
    numb: 85,
    question: "Si un artículo tiene un costo de $200 y se aplica un impuesto del 12%, ¿cuál es el precio total?",
    answer: "a) $224",
    options: [
      "a) $224",
      "b) $230",
      "c) $240",
      "d) $250"
    ]
  },
  {
    numb: 86,
    question: "¿Cuál es la diferencia entre el doble de 15 y 8?",
    answer: "c) 22",
    options: [
      "a) 20",
      "b) 18",
      "c) 22",
      "d) 24"
    ]
  },
  {
    numb: 87,
    question: "¿Qué número completa la serie: 3, 6, 11, 18, ...?",
    answer: "b) 29",
    options: [
      "a) 27",
      "b) 29",
      "c) 31",
      "d) 33"
    ]
  },
  {
    numb: 88,
    question: "Si un automóvil recorre 150 km con 12 litros de gasolina, ¿cuántos litros se necesitan para recorrer 300 km?",
    answer: "d) 24 litros",
    options: [
      "a) 20 litros",
      "b) 22 litros",
      "c) 26 litros",
      "d) 24 litros"
    ]
  },
  {
    numb: 89,
    question: "¿Cuál es el área de un triángulo con base de 10 cm y altura de 12 cm?",
    answer: "b) 60 cm²",
    options: [
      "a) 50 cm²",
      "b) 60 cm²",
      "c) 70 cm²",
      "d) 80 cm²"
    ]
  },
  {
    numb: 90,
    question: "¿Cuál es el valor de 8 × 7 - (6 ÷ 3)?",
    answer: "a) 50",
    options: [
      "a) 50",
      "b) 52",
      "c) 48",
      "d) 54"
    ]
  },
  {
    numb: 91,
    question: "Si un producto cuesta $80 y tiene un descuento del 15%, ¿cuál es el precio después del descuento?",
    answer: "b) $68",
    options: [
      "a) $70",
      "b) $68",
      "c) $72",
      "d) $75"
    ]
  },
  {
    numb: 92,
    question: "¿Cuál es el siguiente número en la serie: 4, 9, 16, 25, ...?",
    answer: "c) 36",
    options: [
      "a) 30",
      "b) 32",
      "c) 36",
      "d) 40"
    ]
  },
  {
    numb: 93,
    question: "Si el precio de una cena es $120 y das una propina del 18%, ¿cuál es el total que pagarás?",
    answer: "d) $141.60",
    options: [
      "a) $130",
      "b) $135",
      "c) $140",
      "d) $141.60"
    ]
  },
  {
    numb: 94,
    question: "¿Cuál es el resultado de 9^2 - 3 × 5?",
    answer: "a) 54",
    options: [
      "a) 54",
      "b) 56",
      "c) 58",
      "d) 60"
    ]
  },
  {
    numb: 95,
    question: "¿Qué número completa la serie: 7, 14, 28, 56, ...?",
    answer: "c) 112",
    options: [
      "a) 100",
      "b) 105",
      "c) 112",
      "d) 120"
    ]
  },
  {
    numb: 96,
    question: "¿Cuál es el valor de 15 × 3 - (8 ÷ 2)?",
    answer: "b) 43",
    options: [
      "a) 40",
      "b) 43",
      "c) 45",
      "d) 47"
    ]
  },
  {
    numb: 97,
    question: "¿Cuál es la suma de los primeros 10 números naturales?",
    answer: "c) 55",
    options: [
      "a) 50",
      "b) 52",
      "c) 55",
      "d) 60"
    ]
  },
  {
    numb: 98,
    question: "Si un tren sale a las 3 PM y llega a su destino a las 7 PM, ¿cuánto tiempo ha durado el viaje?",
    answer: "d) 4 horas",
    options: [
      "a) 3 horas",
      "b) 5 horas",
      "c) 6 horas",
      "d) 4 horas"
    ]
  },
  {
    numb: 99,
    question: "¿Cuál es el resultado de (20 ÷ 4) + 7?",
    answer: "a) 12",
    options: [
      "a) 12",
      "b) 14",
      "c) 16",
      "d) 18"
    ]
  },
  {
    numb: 100,
    question: "¿Qué número completa la serie: 1, 2, 6, 24, ...?",
    answer: "b) 120",
    options: [
      "a) 100",
      "b) 120",
      "c) 144",
      "d) 150"
    ]
  }
]
