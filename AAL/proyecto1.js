
function money (amount) {
    const bills = [500,200,100,50,20,10,5,2,1]
    let remainder = amount;
    for( let bill of bills){
         amountBill_total = remainder/bill;
         amountBill = Math.floor(amountBill_total);
         remainder = remainder - (amountBill*bill);
         console.log("The amount of " + bill + " bills in amount is "+ amountBill);
    }
}
// money('Hola')