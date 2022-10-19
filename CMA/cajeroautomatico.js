function retrieveMoney(amount) {
  if (isNaN(amount) || amount < 0 || ((amount * 1000) % 10) != 0 ) {console.warn('Introduzca una cantidad válida.'); return;}

  const coins = [50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  const hr = '----------------------------------------------------------------------';

  let remaining = amount * 100;
  let total = 0;

  console.log(hr + '\n' + `Cantidad solicitada: ${amount}€.` + '\n' + hr);

  for (let i = 0; i < coins.length; i++) {
      let bills = ((remaining - (remaining % coins[i])) / coins[i]);
      remaining %= coins[i];
      total += bills * coins[i] / 100;

      switch (true) {
        case (i <= 5 && bills == 1):
          console.log(`Sacado: ${bills} billete de ${coins[i]/100}€. Total expedido: ${total}€. ${remaining/100}€ restantes`);
          break;
        case (i <= 5 && bills > 1):
          console.log(`Sacado: ${bills} billetes de ${coins[i]/100}€. Total expedido: ${total}€. ${remaining/100}€ restantes`);
          break;
        case (i > 5 && bills == 1):
          console.log(`Sacado: ${bills} moneda de ${coins[i]/100}€. Total expedido: ${total}€. ${remaining/100}€ restantes`);
          break;
        case (i > 5 && bills > 1):
          console.log(`Sacado: ${bills} monedas de ${coins[i]/100}€. Total expedido: ${total}€. ${remaining/100}€ restantes`);
          break;
      };
  };
  console.log(hr);
};

retrieveMoney(1239.48);