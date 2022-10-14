function retrieveMoney(amount) {
  if (isNaN(amount) || amount < 0 || ((amount * 1000) % 10) != 0 ) {console.warn('Introduzca una cantidad válida.'); return;}

  const coins = [50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  const hr = '----------------------------------------------------------------------';

  let remaining = amount * 100;
  let total = 0;
  let totalbills = [
    {value: 500, qty: 0},
    {value: 200, qty: 0},
    {value: 100, qty: 0},
    {value: 50, qty: 0},
    {value: 20, qty: 0},
    {value: 10, qty: 0},
    {value: 5, qty: 0},
    {value: 2, qty: 0},
    {value: 1, qty: 0},
    {value: 0.5, qty: 0},
    {value: 0.2, qty: 0},
    {value: 0.1, qty: 0},
    {value: 0.05, qty: 0},
    {value: 0.02, qty: 0},
    {value: 0.01, qty: 0}
  ];

  console.log(hr + '\n' + `Cantidad solicitada: ${amount}€.` + '\n' + hr);

  for (let i = 0; i < coins.length; i++) {
      let bills = ((remaining - (remaining % coins[i])) / coins[i]);
      remaining %= coins[i];
      total += bills * coins[i] / 100;
      totalbills[i].qty = bills;

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
  // console.log(totalbills);
};

retrieveMoney(1839.48);