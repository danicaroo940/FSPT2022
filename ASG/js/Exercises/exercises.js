

// const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

// const dni = (dni) => {
//     resto = dni%23;
//     console.log(`${dni}-${letters[resto]}`)
// }

// dni(24393441)


//FIZ BUZZ

// for (let i = 0; i <= 100; i++) {

//     if(i%3==0) {
//         console.log('Fizz');
//     }else if(i%5==0) {
//         console.log('Buzz');
//     }else if(i%15==0) {
//         console.log('FizzBuzz');
//     }else {
//         console.log(i);
//     }
// }

let rounds = prompt('Cuantas partidas quieres jugar?');
let result1 = 0;
let result2 = 0;


for(let i = 0; i<rounds; i++) {
    let player1 = prompt('Elige 1 para piedra, 2 para papel, 3 para tijera');
    let player2 = Math.round(Math.random() * (3 - 1) + 1);

    if(player1 == 1 && player2 == 1){
        console.log('Jugador 1: Piedra - Jugador 2: Piedra')
        console.log('Empate')
        console.log(`Marcador: Jugador 1: ${result1} Jugador 2: ${result2}`);
        console.log('***************************')

    } else if (player1 == 1 && player2 == 2){
        result2 = result2 + 1;
        console.log('Jugador 1: Piedra - Jugador 2: Papel')
        console.log('Punto para jugador 2')
        console.log(`Marcador: Jugador 1: ${result1} Jugador 2: ${result2}`);
        console.log('***************************')

    } else if (player1 == 1 && player2 == 3){
        result1 = result1 + 1;
        console.log('Jugador 1: Piedra - Jugador 2: Tijera')
        console.log('Punto para jugador 1')
        console.log(`Marcador: Jugador 1: ${result1} Jugador 2: ${result2}`);
        console.log('***************************')

    } else if(player1 == 2 && player2 == 1){
        result1 = result1 + 1;
        console.log('Jugador 1: Papel - Jugador 2: Piedra')
        console.log('Punto para jugador 1')
        console.log(`Marcador: Jugador 1: ${result1} Jugador 2: ${result2}`);
        console.log('***************************')

    } else if (player1 == 2 && player2 == 2){
        console.log('Jugador 1: Papel - Jugador 2: Papel')
        console.log('Empate')
        console.log(`Marcador: Jugador 1: ${result1} Jugador 2: ${result2}`);
        console.log('***************************')

    } else if (player1 == 2 && player2 == 3){
        result2 = result2 + 1;
        console.log('Jugador 1: Papel - Jugador 2: Tijera')
        console.log('Punto para jugador 2')
        console.log(`Marcador: Jugador 1: ${result1} Jugador 2: ${result2}`);
        console.log('***************************')

    } else if(player1 == 3 && player2 == 1){
        result2 = result2 + 1;
        console.log('Jugador 1: Tijera - Jugador 2: Piedra')
        console.log('Punto para jugador 2')
        console.log(`Marcador: Jugador 1: ${result1} Jugador 2: ${result2}`);
        console.log('***************************')

    } else if (player1 == 3 && player2 == 2){
        result1 = result1 + 1;
        console.log('Jugador 1: Tijera - Jugador 2: Papel')
        console.log('Punto para jugador 1')
        console.log(`Marcador: Jugador 1: ${result1} Jugador 2: ${result2}`);
        console.log('***************************')

    } else if (player1 == 3 && player2 == 3){
        console.log('Jugador 1: Tijera - Jugador 2: Tijera')
        console.log('Empate')
        console.log(`Marcador: Jugador 1: ${result1} Jugador 2: ${result2}`);
        console.log('***************************')
    }

}
    console.log(`Marcador: Jugador 1: ${result1} Jugador 2: ${result2}`)