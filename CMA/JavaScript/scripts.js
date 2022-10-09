function Saludo() {
  let i;
  for (i = 1.0; i <= 20; i = i + 0.1) {
    console.log('Variable X:' + Math.round(i * 100) / 100)
  };
  console.warn('WARNING: Pelotillas');
  console.error('ERROR: Pelotillas')
  console.info('Pelotillas');
}

function Fibonacci(number) {
  let fibonacci = 0;
  let index1 = 0;
  let index2 = 1;
  for (let i = 1; fibonacci < number; i++) {
    fibonacci = index1 + index2;
    console.log(fibonacci);
    index2 = index1;
    index1 = fibonacci;   
  }
}

function FibonacciArray(number) {
  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  let limit = 0;

  for (let i = 2; limit < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    limit = fibonacci[i];
  }
  
  return fibonacci;
}

function FibonacciArray2(number) {
  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;

  for (let i = 2; fibonacci[i - 1] < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  
  return fibonacci;
}

function isAFibonacciNumber(number) {
  const TmpArray = FibonacciArray(number);
  const limit = TmpArray.length;
  let isInArray = false;

  for (let i = 0; i < limit; i++) {
    isInArray = number === TmpArray[i];
  }

  if (isInArray) {
    console.log("El número " + number + " está en la secuencia de Fibonacci.")
  } else {
    console.log("El número " + number + " no está en la secuencia de Fibonacci.")
  }
}

function Calendar(year) {
  // Comprobamos si el año es bisiesto (si es divisible por 4 es bisiesto)
  const isLeapYear = year%4 === 0;
  // Asignamos 29 dias a la variable febrero si el año es bisiesto (isLeapYear = True)
  let february;
  if (isLeapYear) {
    february = 29;
  } else {
    february = 28;
  }
  // Asignamos una matriz con los nombres de los meses y el número de dias de cada mes
  const months = [
    {monthname: 'Enero', monthdays: 31},
    {monthname: 'Febrero', monthdays: february},
    {monthname: 'Marzo', monthdays: 31},
    {monthname: 'Abril', monthdays: 30},
    {monthname: 'Mayo', monthdays: 31},
    {monthname: 'Junio', monthdays: 30},
    {monthname: 'Julio', monthdays: 31},
    {monthname: 'Agosto', monthdays: 31},
    {monthname: 'Septiembre', monthdays: 30},
    {monthname: 'Octubre', monthdays: 31},
    {monthname: 'Noviembre', monthdays: 30},
    {monthname: 'Diciembre', monthdays: 31}
  ];
  // Asignamos una matriz con los nombres de los días
  const weekdays = [
    'Lunes',
    'Martes', 
    'Miércoles', 
    'Jueves', 
    'Viernes', 
    'Sábado', 
    'Domingo'
  ];

  // Comprobamos en que día de la semana empieza el año
  const datestring = "01/01/" + year; // Definimos fecha del primer día del año
  const firstDayOfYear = new Date(datestring); // La función Date() nos permite usar el método getDay()
  const firstWeekdayOfYear = firstDayOfYear.getDay(); // El método .getDay() nos devuelve el día de la semana del primer día del año (firstDayOfYear) 1 para lunes y 7 para domingo
  let firstWeekdayOfMonth = firstWeekdayOfYear;

  for (let x = 0; x < months.length; x++) { // Recorremos la matriz de los meses desde el inicio al último registro (months.length) *<array>.length nos devuelve el tamaño de la matriz
    let nMonth = []; // Definimos una matriz para el mes
    console.log(months[x].monthname) // Mostramos el nombre del mes

    for (let i = 0; i < months[x].monthdays; i++) { // Hacemos un bucle que asigne los valores desde 0 hasta los días que tenga el mes de esta iteración (months[x].monthdays)
      let weekday = (i - 1 + firstWeekdayOfMonth)%7; // i - 1 --> Las matrices empiezan en 0 y .getDay() va del 1 al 7 por lo que restamos uno para alinear ambos // Luego sumamos firstWeekOfMonth para alinear el primer día con el día de la semana que toca // Luego hacemos módulo (%) lo que resulta en dividir el numero entre 7 y nos saca el resto de la división, para que al llegar a 7 nos devuelva 0 y coincida con el índice.
      nMonth[i] = {numday: i + 1, dayweek: weekdays[weekday]}; // Asignamos a la matriz registros con el número de día (numday:) y el día de la semana (weekdays:) en cada uno de los días que recorre el bucle. Sumamos 1 a i para que el día empiece en 1 y no en 0 (que es donde empieza la matriz).
    };

    firstWeekdayOfMonth = (firstWeekdayOfMonth + months[x].monthdays) % 7; // Sacamos el día de la semana con el que empieza el siguiente mes

    console.table(nMonth); // Mostramos en cada iteración la matriz nMonth resultante en formato de tabla.
  }
}