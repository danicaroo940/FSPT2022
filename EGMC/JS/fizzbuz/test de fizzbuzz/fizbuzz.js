

for (i=1;i<=100;i++){

    const fizz = i%3===0;
    const buzz = i%5===0;

    
    if (i%15===0){
        console.log('fizzbuzz');
        continue;
    }
    if(i%3===0) {
        console.log('fizz');
        continue;
    }
    // console.log(i)
    if(i%5===0){
        console.log('buzz');
        continue;
    }
        
    console.log(i)
}