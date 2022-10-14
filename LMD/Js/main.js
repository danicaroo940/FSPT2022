function atm(amount) {
  
  let importe = amount
  let currency = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.02, 0.01];
  let change = [0, 0,0,0,0,0,0,0,0,0,]

  console.log('Monto a retirar ' + amount + ' €');

  for (let i = 0; i < currency.length; i++) {

    if (importe >= currency[i]) {
      change[i] = (importe - (importe % currency[i])) / currency[i];
      importe = (importe % currency[i]).toFixed(2);
      // importe = (importe % monedas[i])

      if (currency[i] < 5) {
        console.log('Se han retirado ' + change[i] + ' monedas de ' + currency[i] + ' €');
        console.log('Has sacado ' + (currency[i])*change[i] + ' €');
        console.log('Quedan por sacar ' + importe + ' €');
      } else {
        console.log('Se han retirado ' + change[i] + ' billetes de ' + currency[i] + ' €');
        console.log('Has sacado ' + (currency[i])*change[i] + ' €');
        console.log('Quedan por sacar ' + importe + ' €');
      }
    }
  }
}
atm(40.40);