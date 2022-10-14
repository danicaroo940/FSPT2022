function atm(amount) {
  
  let importe = amount
  let monedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.02, 0.01];
  let cambio = [0, 0,0,0,0,0,0,0,0,0,]

  console.log('Vas a sacar ' + amount + ' €');

  for (let i = 0; i < monedas.length; i++) {

    if (importe >= monedas[i]) {
      cambio[i] = (importe - (importe % monedas[i])) / monedas[i];
      importe = (importe % monedas[i]).toFixed(2);
      // importe = (importe % monedas[i])

      if (monedas[i] < 5) {
        console.log('Se han retirado ' + cambio[i] + ' monedas de ' + monedas[i] + ' €');
        console.log('Quedan por sacar ' + importe + ' €');
      } else {
        console.log('Se han retirado ' + cambio[i] + ' billetes de ' + monedas[i] + ' €');
        console.log('Quedan por sacar ' + importe + ' €');
      }
    }
  }
}
atm(40.40);