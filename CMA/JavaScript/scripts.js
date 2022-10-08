function Saludo() {
  let i;
  for (i = 1.0; i <= 20; i = i + 0.1) {
    console.log('Variable X:' + Math.round(i * 100) / 100)
  };
  console.warn('WARNING: Pelotillas');
  console.error('ERROR: Pelotillas')
  console.info('Pelotillas');
}