function atm(amount) {
  
  let quantity = amount
  let currency = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.02, 0.01];
  let change = [0, 0,0,0,0,0,0,0,0,0,]

  console.log('Monto a retirar ' + amount + ' €');

  for (let i = 0; i < currency.length; i++) {

    if (quantity >= currency[i]) {
      change[i] = (quantity - (quantity % currency[i])) / currency[i];
      quantity = (quantity % currency[i]).toFixed(2);
      // quantity = (quantity % monedas[i]);

      if (currency[i] < 5) {
        console.log('Se han retirado ' + change[i] + ' monedas de ' + currency[i] + ' €');
        console.log('Has sacado ' + (currency[i])*change[i] + ' €');
        console.log('Quedan por sacar ' + quantity + ' €');
      } else {
        console.log('Se han retirado ' + change[i] + ' billetes de ' + currency[i] + ' €');
        console.log('Has sacado ' + (currency[i])*change[i] + ' €');
        console.log('Quedan por sacar ' + quantity + ' €');
      }
    }
  }
}
atm(1340.43);