



function withdraw (x){
  let bills =[500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01]
  let coins=[0.1,0.2,0.5,]

  console.log(x)
  for (let i = 0; i < bills.length; i++){

    if(x>=bills[i]){
      x = x - bills[i]
      console.log ( 'te quedan ' + x  + '$')
      i--
    }
  }

}
withdraw(700)