  
function RandomArray(arraylen) {
  var xrdarray = [];
  while(xrdarray.length < arraylen){
    var r = Math.floor(Math.random() * 10) + 1;
    if(xrdarray.indexOf(r) === -1) xrdarray.push(r);
  }
  var rdarray = xrdarray.map(function(element){
    return element - 1;
  });
  return rdarray;
}

function AssignCards() {
  var root = document.querySelector(':root');
  // var rootStyles = getComputedStyle(root);
  // var Por1 = rootStyles.getPropertyValue('--por1')
  // window.alert(Por1)

  const CardsURL = [
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

  var Arr1 = RandomArray(10,10);
  var Arr2 = RandomArray(10,10);
  var CardAssignment = Arr1.concat(Arr2);
  var StringURL = ""

  for (let i = 0; i < 20; i++) {
    StringURL = CardsURL[CardAssignment[i]];
    root.style.setProperty(VarID[i], StringURL)
  };
}

// function GameControl {

// }