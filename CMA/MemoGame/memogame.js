function randomArray(arraylen) {
  let xrdarray = [];
  while(xrdarray.length < arraylen){
    let r = Math.floor(Math.random() * 10) + 1;
    if(xrdarray.indexOf(r) === -1) xrdarray.push(r);
  }
  let rdarray = xrdarray.map(function(element){
    return element - 1;
  });
  return rdarray;
}

function assignCards() {
  const root = document.querySelector(':root');
  // var rootStyles = getComputedStyle(root);
  // var Por1 = rootStyles.getPropertyValue('--por1')
  // window.alert(Por1)

  const cardsURL = [
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
    "--por1",
    "--por2",
    "--por3",
    "--por4",
    "--por5",
    "--por6",
    "--por7",
    "--por8", 
    "--por9", 
    "--por10", 
    "--por11", 
    "--por12", 
    "--por13", 
    "--por14", 
    "--por15", 
    "--por16", 
    "--por17", 
    "--por18", 
    "--por19", 
    "--por20"
  ];

  let Arr1 = randomArray(10,10);
  let Arr2 = randomArray(10,10);
  let cardAssignment = Arr1.concat(Arr2);
  let stringURL = ""

  for (let i = 0; i < 20; i++) {
    stringURL = cardsURL[cardAssignment[i]];
    root.style.setProperty(VarID[i], stringURL)
  };
}

function gameControl() {
  let cardTurned = 0;
  let cardsTurnedNow = 0;
  const maxCardsTurned = 2;

  let cardStatusArray = [
    {cardID:"card1", cardStatus:0},
    {cardID:"card2", cardStatus:0},
    {cardID:"card3", cardStatus:0},
    {cardID:"card4", cardStatus:0},
    {cardID:"card5", cardStatus:0},
    {cardID:"card6", cardStatus:0},
    {cardID:"card7", cardStatus:0},
    {cardID:"card8", cardStatus:0},
    {cardID:"card9", cardStatus:0},
    {cardID:"card10", cardStatus:0},
    {cardID:"card11", cardStatus:0},
    {cardID:"card12", cardStatus:0},
    {cardID:"card13", cardStatus:0},
    {cardID:"card14", cardStatus:0},
    {cardID:"card15", cardStatus:0},
    {cardID:"card16", cardStatus:0},
    {cardID:"card17", cardStatus:0},
    {cardID:"card18", cardStatus:0},
    {cardID:"card19", cardStatus:0},
    {cardID:"card20", cardStatus:0}
  ]
}