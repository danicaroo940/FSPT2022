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