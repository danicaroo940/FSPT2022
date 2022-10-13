function atm(i) {
  console.log('Vas a retirar ' + i + ' €');
  console.log('*****************');
  i = i * 100;
  let take = i;

  for (; i > 0;) {
    
    if(i>=50000){
      i = i - 50000;
      console.log('Has sacado un billete de 500 €');
      console.log('Te quedan por sacar: ' + (i/100) + ' €');
      console.log('Total sacado: ' + ((take - i)/100) + ' €');
      console.log('*****************');
    }else if(i>=20000){
      i = i - 20000;
      console.log('Has sacado un billete de 200 €');
      console.log('Te quedan por sacar: ' + (i/100) + ' €');
      console.log('Total sacado: ' + ((take - i)/100) + ' €');
      console.log('*****************');
    }else if(i>=10000){
      i = i - 10000;
      console.log('Has sacado un billete de 100 €');
      console.log('Te quedan por sacar: ' + (i/100) + ' €');
      console.log('Total sacado: ' + ((take - i)/100) + ' €');
      console.log('*****************');
    }else if(i>=5000){
      i = i - 5000;
      console.log('Has sacado un billete de 50 €');
      console.log('Te quedan por sacar: ' + (i/100) + ' €');
      console.log('Total sacado: ' + ((take - i)/100)+ ' €');
      console.log('*****************');
    }else if(i>=2000){
      i = i - 2000;
      console.log('Has sacado un billete de 20 €');
      console.log('Te quedan por sacar: ' + (i/100) + ' €');
      console.log('Total sacado: ' + ((take - i)/100) + ' €');
      console.log('*****************');
    }else if(i>=1000){
      i = i - 1000;
      console.log('Has sacado un billete de 10 €');
      console.log('Te quedan por sacar: ' + (i/100) + ' €');
      console.log('Total sacado: ' + ((take - i)/100) + ' €');
      console.log('*****************');
    }else if(i>=500){
      i = i - 500;
      console.log('Has sacado un billete de 5 €');
      console.log('Te quedan por sacar: ' + (i/100) + ' €');
      console.log('Total sacado: ' + ((take - i)/100) + ' €');
      console.log('*****************');
    }else if(i>=200){
      i = i - 200;
      console.log('Has sacado una moneda de 2 €');
      console.log('Te quedan por sacar: ' + (i/100) + ' €');
      console.log('Total sacado: '+ ((take - i)/100) + ' €');
      console.log('*****************');
    }else if(i>=100){
      i = i - 100;
      console.log('Has sacado una moneda de 1 €');
      console.log('Te quedan por sacar: ' + (i/100) + ' €');
      console.log('Total sacado: ' + ((take - i)/100) + ' €');
      console.log('*****************');
    }else if(i>=50){
      i = i - 50;
      console.log('Has sacado una moneda de 50 centimos');
      console.log('Te quedan por sacar: ' + i + ' centimos');
      console.log('Total sacado: ' + ((take - i)/100) + ' €');
      console.log('*****************');
    }else if(i>=20){
      i = i - 20;
      console.log('Has sacado una moneda de 20 centimos');
      console.log('Te quedan por sacar: ' + i + ' centimos');
      console.log('Total sacado: ' + ((take - i)/100) + ' €');
      console.log('*****************');
    }else if(i>=10){
      i = i - 10;
      console.log('Has sacado una moneda de 10 centimos');
      console.log('Te quedan por sacar: ' + i + ' centimos');
      console.log('Total sacado: ' + ((take - i)/100) + ' €');
      console.log('*****************');
    }else if(i>=5){
      i = i - 5;
      console.log('Has sacado una moneda de 5 centimos');
      console.log('Te quedan por sacar: ' + i + ' centimos');
      console.log('Total sacado: ' + ((take - i)/100) + ' €');
      console.log('*****************');
    }else if(i>=2){
      i = i - 2;
      console.log('Has sacado una moneda de 2 centimos');
      console.log('Te quedan por sacar: ' + i + ' centimos');
      console.log('Total sacado: ' + ((take - i)/100) + ' €');
      console.log('*****************');
    }else if(i>=1){
      i = i - 1;
      console.log('Has sacado una moneda de 1 centimo');
      console.log('Te quedan por sacar: ' + i + ' centimos');
      console.log('Total sacado: '+ ((take - i)/100) + ' €');
    };
  };
  };
  
  atm(500.67);