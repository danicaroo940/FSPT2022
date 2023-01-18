function suma(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else {
    return 'No operator';
  }
}















function test1() {
  const result = suma(1, 1, '+');
  if (result !== 2) {
    console.error('ERROR!');
  } else {
    console.info('OK!');
  }
}

function test2() {
  const result = suma(2, 3, '+');
  if (result !== 5) {
    console.error('ERROR!');
  } else {
    console.info('OK!');
  }
}

function test3() {
  const result = suma(1, 3, '+');
  if (result !== 4) {
    console.error('ERROR!');
  } else {
    console.info('OK!');
  }
}

function test4() {
  const result = suma(1, -1, '+');
  if (result !== 0) {
    console.error('ERROR!');
  } else {
    console.info('OK!');
  }
}

function test5() { // num - num
  const result = suma(1, 1, '-');
  if (result === 'No operator') {
    console.info('OK!');
  } else {
    console.error('ERROR!');
  }
}

function test6() {
  const result = suma(1, 1);
  if (result === 'No operator') {
    console.info('OK!');
  } else {
    console.error('ERROR!');
  }
}

test1();
test2();
test3();
test4();
test5();
test6();