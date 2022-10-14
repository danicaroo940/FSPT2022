function cashier() {
  /////////////////////////////////////////////////////////////
  const moneyToExtract = 1131.21; // DINERO QUE SE DESEA RETIRAR
  ////////////////////////////////////////////////////////////
  const bill = [500, 200, 100, 50, 20, 10, 5];
  const coin = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  /////VARIABLES

  let bill500 = (moneyToExtract - (moneyToExtract % bill[0])) / bill[0];
  let rest500 = moneyToExtract % bill[0];
  let bill200 = (rest500 - (rest500 % bill[1])) / bill[1];
  let rest200 = rest500 % bill[1];
  let bill100 = (rest200 - (rest200 % bill[2])) / bill[2];
  let rest100 = rest200 % bill[2];
  let bill50 = (rest100 - (rest100 % bill[3])) / bill[3];
  let rest50 = rest100 % bill[3];
  let bill20 = (rest50 - (rest50 % bill[4])) / bill[4];
  let rest20 = rest50 % bill[4];
  let bill10 = (rest20 - (rest20 % bill[5])) / bill[5];
  let rest10 = rest20 % bill[5];
  let bill5 = (rest10 - (rest10 % bill[6])) / bill[6];
  let rest5 = rest10 % bill[6];
  let coin2 = (rest5 - (rest5 % coin[0])) / coin[0];
  let rest2 = rest5 % coin[0];
  let coin1 = (rest2 - (rest2 % coin[1])) / coin[1];
  let rest1 = rest2 % coin[1];
  let coin05 = (rest1 - (rest1 % coin[2])) / coin[2];
  let rest05 = rest1 % coin[2];
  let coin02 = (rest05 - (rest05 % coin[3])) / coin[3];
  let rest02 = rest05 % coin[3];
  let coin01 = (rest02 - (rest02 % coin[4])) / coin[4];
  let rest01 = rest02 % coin[4];
  let coin005 = (rest01 - (rest01 % coin[5])) / coin[5];
  let rest005 = rest01 % coin[5];
  let coin002 = (rest005 - (rest005 % coin[6])) / coin[6];
  let rest002 = rest005 % coin[6];
  let coin001 = (rest002 - (rest002 % coin[7])) / coin[7];
  let rest001 = rest002 % coin[7];
  ////////
  let total500 = bill500 * bill[0];
  let total200 =  bill200 * bill[1];
  let total100 =  bill100 * bill[2];
  let total50 = bill50 * bill[3];
  let total20 = bill20 * bill[4];
  let total10 = bill10 * bill[5];
  let total5 = bill5 * bill[6]; 
  let total2 = coin2 * coin[0];
  let total1 = coin1 * coin[1];
  let total05 = coin05 * coin[2];
  let total02 = coin02 * coin[3];
  let total01 = coin01 * coin[4];
  let total005 = coin005 * coin[5];
  let total002 = coin002 * coin[6];
  let total001 = coin001 * coin[7];


  console.log('Vas a sacar ' + moneyToExtract + '€');
 
  //BILLETES 500

  for (let i = 0; i < bill500; i++) {
    if (i >= 0) {
      console.log('Has sacado un billete de 500 €');
    }
    
  }
  if (moneyToExtract >= 500) {
    console.log('Has sacado en total ' + total500 + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500) + '€');
  }

  
  //BILLETES 200

  for (let i = 0; i < bill200; i++) {
    if (i >= 0) {
      console.log('Has sacado un billete de 200 €');
    }
  }
  if (rest500 >= 200) {
    console.log('Has sacado en total ' + (total500 + total200) + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sadsdcar ' + (moneyToExtract - total500 - total200) + '€');
  }
  

  //BILLETES 100

  for (let i = 0; i < bill100; i++) {
    if (i >= 0) {
      console.log('Has sacado un billete de 100 €');
    } 
  }
  if (rest200 >= 100) {
    console.log('Has sacado en total ' + (total500 + total200 + total100) + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500 - total200 - total100) + '€');
  }

  //BILLETES 50

  for (let i = 0; i < bill50; i++) {
    if (i >= 0) {
      console.log('Has sacado un billetes de 50 €');
    }
  }
  if (rest100 >= 50) {
    console.log('Has sacado en total ' + (total500 + total200 + total100 + total50) + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500 - total200 - total100 - total50) + '€');
  }


  //BILLETES 20

  for (let i = 0; i < bill20; i++) {
    if (i >= 0) {
      console.log('Has sacado un billete de 20 €');
    }
  }
  if (rest50 >= 20) {
    console.log('Has sacado en total ' + (total500 + total200 + total100 + total50 + total20) + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500 - total200 - total100 - total50 - total20) + '€');
  }

  //BILLETES 10

  for (let i = 0; i < bill10; i++) {
    if (i >= 0) {
      console.log('Has sacado un billete de 10 €');
    }
  }

  if (rest20 >= 10) {
    console.log('Has sacado en total ' + (total500 + total200 + total100 + total50 + total20 + total10)+ '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500 - total200 - total100 - total50 - total20 - total10) + '€');
  }

  //BILLETES 5

  for (let i = 0; i < bill5; i++) {
    if (i >= 0) {
      console.log('Has sacado un billete de 5 €');
    }
  }

  if (rest10 >= 5) {
    console.log('Has sacado en total ' + (total500 + total200 + total100 + total50 + total20 + total10 + total5) + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500 - total200 - total100 - total50 - total20 - total10 - total5) + '€');
  }

  //MONEDAS 2

  for (let i = 0; i < coin2; i++) {
    if (i >= 0) {
      console.log('Has sacado una moneda de 2 €');
    }
  }

  if (rest5 >= 2) {
    console.log('Has sacado en total ' + (total500 + total200 + total100 + total50 + total20 + total10 + total5 + total2) + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500 - total200 - total100 - total50 - total20 - total10 - total5 - total2) + '€');
  }

  //MONEDAS 1

  for (let i = 0; i < coin1; i++) {
    if (i >= 0) {
      console.log('Has sacado una moneda de 1€');
    }
  }

  if (rest2 >= 1) {
    console.log('Has sacado en total ' + (total500 + total200 + total100 + total50 + total20 + total10 + total5 + total2 + total1) + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500 - total200 - total100 - total50 - total20 - total10 - total5 - total2 - total1) + '€');
  }


  //MONEDAS 0.5

  for (let i = 0; i < coin05; i++) {
    if (i >= 0) {
      console.log('Has sacado una moneda de 0.50€');
    }
  }

  if (rest1 >= 0.5) {
    console.log('Has sacado en total ' + (total500 + total200 + total100 + total50 + total20 + total10 + total5 + total2 + total1 + total05) + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500 - total200 - total100 - total50 - total20 - total10 - total5 - total2 - total1 - total05) + '€');
  }

  //MONEDAS 0.2

  for (let i = 0; i < coin02; i++) {
    if (i >= 0) {
      console.log('Has sacado una moneda de 0.20€');
    }
  
  }

  if (rest05 >= 0.2) {
    console.log('Has sacado en total ' + (total500 + total200 + total100 + total50 + total20 + total10 + total5 + total2 + total1 + total05 + total02) + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500 - total200 - total100 - total50 - total20 - total10 - total5 - total2 - total1 - total05 - total02) + '€');
  }

  //MONEDAS 0.1

  for (let i = 0; i < coin01; i++) {
    if (i >= 0) {
      console.log('Has sacado una moneda de 0.10€');
    }
  }

  if (rest02 >= 0.1) {
    console.log('Has sacado en total ' + (total500 + total200 + total100 + total50 + total20 + total10 + total5 + total2 + total1 + total05 + total02 + total01) + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500 - total200 - total100 - total50 - total20 - total10 - total5 - total2 - total1 - total05 - total02 - total01) + '€');
  }
  //MONEDAS 0.05

  for (let i = 0; i < coin005; i++) {
    if (i >= 0) {
      console.log('Has sacado una moneda de 0.05€');
    }

  }

  if (rest01 >= 0.05) {
    console.log('Has sacado en total ' + (total500 + total200 + total100 + total50 + total20 + total10 + total5 + total2 + total1 + total05 + total02 + total01 + total005) + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500 - total200 - total100 - total50 - total20 - total10 - total5 - total2 - total1 - total05 - total02 - total01 - total005) + '€');
  }

  //MONEDAS 0.02

  for (let i = 0; i < coin002; i++) {
    if (i >= 0) {
      console.log('Has sacado una moneda de 0.02€');
    }
  }

  if (rest005 >= 0.02) {
    console.log('Has sacado en total ' + (total500 + total200 + total100 + total50 + total20 + total10 + total5 + total2 + total1 + total05 + total02 + total01 + total005 + total002) + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500 - total200 - total100 - total50 - total20 - total10 - total5 - total2 - total1 - total05 - total02 - total01 - total005 - total002) + '€');
  }

  //MONEDAS 0.01

  for (let i = 0; i < coin001; i++) {
    if (i >= 0) {
      console.log('Has sacado una moneda de 0.01€');
    }
  }

  if (rest002 >= 0.01) {
    console.log('Has sacado en total ' + (total500 + total200 + total100 + total50 + total20 + total10 + total5 + total2 + total1 + total05 + total02 + total01 + total005 + total002 + total001) + '€ de ' + moneyToExtract + '€');
    console.log('Quedan por sacar ' + (moneyToExtract - total500 - total200 - total100 - total50 - total20 - total10 - total5 - total2 - total1 - total05 - total02 - total01 - total005 - total002 - total001) + '€');
  }
}
cashier();
