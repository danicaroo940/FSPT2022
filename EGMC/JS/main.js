



function withdraw (x) {
  let bills =[500,200,100,50,20,10,5]
  let coins=[0.1,0.2,0.5,]

  console.log(x)
  for (let i = 0; i < bills.length; i++){

    if(x>=bills[i]){
      let resta1= x - bills[i]
      console.log ( 'te quedan ' +resta1  + '$')
    }

  }

}
withdraw(700)


