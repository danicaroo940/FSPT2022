function ATM(moneyToExtract)
{
     typeBill = Array(500, 200, 100, 50, 20, 10, 5 , 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01);
     
     takeRest = moneyToExtract;
     for (i=0, i=length(typeBill), i++)
     {
        number=parseint(takeRest/typeBill[i]);
        if number>0
        {
            console.log("Queda por sacar " + takeRest);
            if (i>=7)
                console.log(number + " monedas de " + typeBill[i] + " €";
            else
                console.log(number + " billetes de " + typeBill[i] + " €";
                    
            moneyExtract = typeBill[i]*number;
            console.log("Se han sacado " + moneyExtract);    
            
            takeRest = moneyToExtract - moneyExtract;
        }
     }    
}