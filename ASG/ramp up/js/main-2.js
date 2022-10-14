function atm(i) {
    console.log('Vas a retirar ' + i + ' €');
    let take = i;
    for (; i > 0;) {
      
      if(i>=500){
        i = i - 500;
        i = Math.round(i*100)/100;
        console.log('Has sacado un billete de 500 €');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=200 && i<500){
        i = i - 200;
        i = Math.round(i*100)/100;
        console.log('Has sacado un billete de 200 €');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=100 && i<200){
        i = i - 100;
        i = Math.round(i*100)/100;
        console.log('Has sacado un billete de 100 €');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=50 && i<100){
        i = i - 50;
        i = Math.round(i*100)/100;
        console.log('Has sacado un billete de 50 €');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=20 && i<50){
        i = i - 20;
        i = Math.round(i*100)/100;
        console.log('Has sacado un billete de 20 €');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=10 && i<20){
        i = i - 10;
        i = Math.round(i*100)/100;
        console.log('Has sacado un billete de 10 €');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=5 && i<10){
        i = i - 5;
        i = Math.round(i*100)/100;
        console.log('Has sacado un billete de 5 €');
        console.log('Te quedan ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=2 && i<5){
        i = i - 2;
        i = Math.round(i*100)/100;
        console.log('Has sacado una moneda de 2 €');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=1 && i<2){
        i = i - 1;
        i = Math.round(i*100)/100;
        console.log('Has sacado una moneda de 1 €');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=0.50 && i<1){
        i = i - 0.5;
        i = Math.round(i*100)/100;
        console.log('Has sacado una moneda de 50 centimos');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=0.20 && i<0.5){
        i = i - 0.2;
        i = Math.round(i*100)/100;
        console.log('Has sacado una moneda de 20 centimos');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=0.10 && i<0.2){
        i = i - 0.1;
        i = Math.round(i*100)/100;
        console.log('Has sacado una moneda de 10 centimos');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=0.050 && i<0.1){
        i = i - 0.05;
        i = Math.round(i*100)/100;
        console.log('Has sacado una moneda de 5 centimos');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=0.020 && i<0.050){
        i = i - 0.02;
        i = Math.round(i*100)/100;
        console.log('Has sacado una moneda de 2 centimos');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      }else if(i>=0.010 && i<0.02){
        i = i - 0.01;
        i = Math.round(i*100)/100;
        console.log('Has sacado una moneda de 1 centimo');
        console.log('Quedan por retirar ' + i + ' €');
        console.log('Has sacado ' + (take - i));
      };
    };
    };
    
    atm(1410.23);