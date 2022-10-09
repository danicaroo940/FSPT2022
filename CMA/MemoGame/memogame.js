let cardStatusArray = [
  {ID:"card1", match:false, turn:false, img:'', bdr: '--card1Border'},
  {ID:"card2", match:false, turn:false, img:'', bdr: '--card2Border'},
  {ID:"card3", match:false, turn:false, img:'', bdr: '--card3Border'},
  {ID:"card4", match:false, turn:false, img:'', bdr: '--card4Border'},
  {ID:"card5", match:false, turn:false, img:'', bdr: '--card5Border'},
  {ID:"card6", match:false, turn:false, img:'', bdr: '--card6Border'},
  {ID:"card7", match:false, turn:false, img:'', bdr: '--card7Border'},
  {ID:"card8", match:false, turn:false, img:'', bdr: '--card8Border'},
  {ID:"card9", match:false, turn:false, img:'', bdr: '--card9Border'},
  {ID:"card10", match:false, turn:false, img:'', bdr: '--card10Border'},
  {ID:"card11", match:false, turn:false, img:'', bdr: '--card11Border'},
  {ID:"card12", match:false, turn:false, img:'', bdr: '--card12Border'},
  {ID:"card13", match:false, turn:false, img:'', bdr: '--card13Border'},
  {ID:"card14", match:false, turn:false, img:'', bdr: '--card14Border'},
  {ID:"card15", match:false, turn:false, img:'', bdr: '--card15Border'},
  {ID:"card16", match:false, turn:false, img:'', bdr: '--card16Border'},
  {ID:"card17", match:false, turn:false, img:'', bdr: '--card17Border'},
  {ID:"card18", match:false, turn:false, img:'', bdr: '--card18Border'},
  {ID:"card19", match:false, turn:false, img:'', bdr: '--card19Border'},
  {ID:"card20", match:false, turn:false, img:'', bdr: '--card20Border'}
];

const limit = cardStatusArray.length;

function randomArray() {
  let xrdarray = [];
  while(xrdarray.length < 10){
    let r = Math.floor(Math.random() * 10) + 1;
    if(xrdarray.indexOf(r) === -1) xrdarray.push(r);
  }
  let rdarray = xrdarray.map(function(element){
    return element - 1;
  });
  return rdarray;
};

function assignCards() {
  const root = document.querySelector(':root');

  const imgURL = [
    'URL(Images/Poro1.jpg)',
    'URL(Images/Poro2.jpg)',
    'URL(Images/Poro3.jpg)',
    'URL(Images/Poro4.jpg)',
    'URL(Images/Poro5.jpg)',
    'URL(Images/Poro6.jpg)',
    'URL(Images/Poro7.jpg)',
    'URL(Images/Poro8.jpg)',
    'URL(Images/Poro9.jpg)',
    'URL(Images/Poro10.jpg)'
  ];

  const VarID = [
    '--por1',
    '--por2',
    '--por3',
    '--por4',
    '--por5',
    '--por6',
    '--por7',
    '--por8', 
    '--por9', 
    '--por10', 
    '--por11', 
    '--por12', 
    '--por13', 
    '--por14', 
    '--por15', 
    '--por16', 
    '--por17', 
    '--por18', 
    '--por19', 
    '--por20'
  ];

  let Arr1 = randomArray();
  let Arr2 = randomArray();
  let cardAssignment = Arr1.concat(Arr2);
  let stringURL = "";

  for (let i = 0; i < 20; i++) {
    stringURL = imgURL[cardAssignment[i]];
    root.style.setProperty(VarID[i], stringURL);
    cardStatusArray[i].img = stringURL;
  };

};

function pushCard(num) {
  document.getElementById(cardStatusArray[num].ID).disabled = true;
  document.getElementById(cardStatusArray[num].ID).checked = true;
  cardStatusArray[num].turn = true;

  let cardsTurned = 0;
  let cardsMatched = 0;

  for (let i = 0; i < limit; i++) {
    if (cardStatusArray[i].turn === true) {cardsTurned += 1;};
    if (cardStatusArray[i].match === true) {cardsMatched += 1;};
  };

  if (cardsTurned === cardsMatched + 2) {
    for (let i = 0; i < limit; i++) {document.getElementById(cardStatusArray[i].ID).disabled = true;};
    gameControl();
  };
};

function gameControl() {
  const root = document.querySelector(':root');
  let cardA = '';
  let cardB = '';
  let imgA = '';
  let imgB = '';
  let correctMatch = false;

  for (let i = 0; i < limit; i++) {
    if (cardStatusArray[i].turn === true && cardStatusArray[i].match === false) {
      if (imgA === '') {
        imgA = cardStatusArray[i].img;
        cardA = i;
      } else {
        imgB = cardStatusArray[i].img;
        cardB = i;
      };
    };
  };

  correctMatch = imgA === imgB;
  
  if (correctMatch === true) {
    cardStatusArray[cardA].match = true;
    root.style.setProperty(cardStatusArray[cardA].bdr, '2.5px solid green');
    cardStatusArray[cardB].match = true;
    root.style.setProperty(cardStatusArray[cardB].bdr, '2.5px solid green');
    scoreControl(1);
  } else {
    root.style.setProperty(cardStatusArray[cardA].bdr, '2.5px solid red');
    root.style.setProperty(cardStatusArray[cardB].bdr, '2.5px solid red');
    scoreControl(-1);
  }

  setTimeout(() => {
    for (let i = 0; i < limit; i++) {
      if (cardStatusArray[i].match === false) {
        document.getElementById(cardStatusArray[i].ID).disabled = false;
        document.getElementById(cardStatusArray[i].ID).checked = false;
        cardStatusArray[i].turn = false;
      };
    };
    root.style.setProperty(cardStatusArray[cardA].bdr, '2.5px solid goldenrod');
    root.style.setProperty(cardStatusArray[cardB].bdr, '2.5px solid goldenrod');
  }, 1000);

  // console.log('Carta A :' + cardA + '\n' + 'Imagen A :' + imgA + '\n' + 'Carta B :' + cardB + '\n' + 'Imagen B :' + imgB + '\n' + 'Coinciden: ' + correctMatch);
  
};

let score = 0;
let fails = 0;

function scoreControl(match) {
  let cardsLeft = 20;
  switch (match) {
    case 1:
      score += (5 + fails);
      fails = 0;
      break;
    case -1:
      fails -= 1;
      break;
  };
  for (let i = 0; i < limit; i++) {
    if (cardStatusArray[i].match === true) {cardsLeft -= 1;};
  };
  if (cardsLeft === 0) {window.alert('Final Score: ' + score);};
};