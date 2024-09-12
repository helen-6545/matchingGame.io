let matches = [":)",":D","&lt;3","o.O","&gt;.&lt;","*o*",":P","8D",":)",":D","&lt;3","o.O","&gt;.&lt;","*o*",":P","8D"];
let currentCards = ["", ""]
const cardNumber = 0;
const cardShown = arr => arr.every( v => v === arr[0] )
var flipSound = new Audio("cardFlip.mp3");
var matchSound = new Audio("success.mp3");
var score


function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
  
  // Used like so
  
  function randomize(array) {
  document.getElementById("1").style.display = "block"
  document.getElementById("score").innerHTML = "8 matches left!";
  score = 8
  shuffle(matches);
  console.log(matches);
  reset();
  }

  function show(cardNumber){
    document.getElementById(cardNumber).setAttribute('style', "width : 10px");
    document.getElementById(cardNumber).style.display = "block"
    flipSound.play();
    setTimeout( () => {
    getCurrentCards();
    console.log(currentCards);
    console.log(!(cardShown(currentCards)))
        let check = matchCheck(currentCards, matches[cardNumber-1])
        document.getElementById(cardNumber).setAttribute('style', "width : 50px");
        document.getElementById(cardNumber).style.display = "block"
        document.getElementById(cardNumber).innerHTML = matches[cardNumber-1];
        if (!(cardShown(currentCards))){ //if a card is face up
        getCurrentCards();
        if (check) {
           match(currentCards, matches[cardNumber-1]);
        }
        else{
            fail();
        }
    }
},
100
)
  }

  function matchCheck(cards, value){
      return cards.includes(value);
  }

  function match(cards, value){
    setTimeout( () => {
        let first = cards.indexOf(value)
        document.getElementById(first+1).innerHTML = "*-*-*-*"
        document.getElementById(first+1).style.display = "none";
        let second = (cards).lastIndexOf(value)
        document.getElementById(second+1).innerHTML = "*-*-*-*"
        document.getElementById(second+1).style.display = "none";
        score = score-1
        if(score==0){
            document.getElementById("score").innerHTML = "You win!";
        }
        else{
        document.getElementById("score").innerHTML = (score+" matches left!");
        }
        matchSound.play();
    },
    1000
    )


  }

  function getCurrentCards(){
    const card1 = document.getElementById("1").innerHTML
    const card2 = document.getElementById("2").innerHTML
    const card3 = document.getElementById("3").innerHTML
    const card4 = document.getElementById("4").innerHTML
    const card5 = document.getElementById("5").innerHTML
    const card6 = document.getElementById("6").innerHTML
    const card7 = document.getElementById("7").innerHTML
    const card8 = document.getElementById("8").innerHTML
    const card9 = document.getElementById("9").innerHTML
    const card10 = document.getElementById("10").innerHTML
    const card11 = document.getElementById("11").innerHTML
    const card12 = document.getElementById("12").innerHTML
    const card13 = document.getElementById("13").innerHTML
    const card14 = document.getElementById("14").innerHTML
    const card15 = document.getElementById("15").innerHTML
    const card16 = document.getElementById("16").innerHTML
    currentCards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16]
  }


  function fail(){
    setTimeout( () => {
        document.getElementById("1").innerHTML = "*-*-*-*"
        document.getElementById("2").innerHTML = "*-*-*-*"
        document.getElementById("3").innerHTML = "*-*-*-*"
        document.getElementById("4").innerHTML = "*-*-*-*"
        document.getElementById("5").innerHTML = "*-*-*-*"
        document.getElementById("6").innerHTML = "*-*-*-*"
        document.getElementById("7").innerHTML = "*-*-*-*"
        document.getElementById("8").innerHTML = "*-*-*-*"
        document.getElementById("9").innerHTML = "*-*-*-*"
        document.getElementById("10").innerHTML = "*-*-*-*"
        document.getElementById("11").innerHTML = "*-*-*-*"
        document.getElementById("12").innerHTML = "*-*-*-*"
        document.getElementById("13").innerHTML = "*-*-*-*"
        document.getElementById("14").innerHTML = "*-*-*-*"
        document.getElementById("15").innerHTML = "*-*-*-*"
        document.getElementById("16").innerHTML = "*-*-*-*"

    },
    1000
    )

  }

  function reset(){
        document.getElementById("1").innerHTML = "*-*-*-*"
        document.getElementById("2").innerHTML = "*-*-*-*"
        document.getElementById("3").innerHTML = "*-*-*-*"
        document.getElementById("4").innerHTML = "*-*-*-*"
        document.getElementById("5").innerHTML = "*-*-*-*"
        document.getElementById("6").innerHTML = "*-*-*-*"
        document.getElementById("7").innerHTML = "*-*-*-*"
        document.getElementById("8").innerHTML = "*-*-*-*"
        document.getElementById("9").innerHTML = "*-*-*-*"
        document.getElementById("10").innerHTML = "*-*-*-*"
        document.getElementById("11").innerHTML = "*-*-*-*"
        document.getElementById("12").innerHTML = "*-*-*-*"
        document.getElementById("13").innerHTML = "*-*-*-*"
        document.getElementById("14").innerHTML = "*-*-*-*"
        document.getElementById("15").innerHTML = "*-*-*-*"
        document.getElementById("16").innerHTML = "*-*-*-*"
        document.getElementById("1").style.display = "block"
        document.getElementById("2").style.display = "block"
        document.getElementById("3").style.display = "block"
        document.getElementById("4").style.display = "block"
        document.getElementById("5").style.display = "block"
        document.getElementById("6").style.display = "block"
        document.getElementById("7").style.display = "block"
        document.getElementById("8").style.display = "block"
        document.getElementById("9").style.display = "block"
        document.getElementById("10").style.display = "block"
        document.getElementById("11").style.display = "block"
        document.getElementById("12").style.display = "block"
        document.getElementById("13").style.display = "block"
        document.getElementById("14").style.display = "block"
        document.getElementById("15").style.display = "block"
        document.getElementById("16").style.display = "block"

  }

  