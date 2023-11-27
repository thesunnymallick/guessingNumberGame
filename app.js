
  // random number genarate
  let randomNumber= parseInt(Math.random()*100+1)
 

  // select the dom

  const userInput=document.getElementById('userInput');
  const inputValid=document.getElementById('inputValid');
  const submitBtn=document.getElementById('submitBtn')
  const gameResult=document.getElementById("message")
  const resultPara=document.querySelector(".result")
  const previousGuess=document.querySelector("#previousGuess")
  const remmingSlot=document.querySelector("#remmingSlot");
  const messageResult=document.querySelector("#messageResult");
  const form =document.querySelector("form");



    


    let playGame=true;
    let PreviousGuessSolt=[];
    let limtGuess=1;


    let button =document.createElement('button');
     button.type="submit"
     button.innerHTML="Play new Game"
     button.id="newGame"
   

    if(playGame){
        submitBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            const guess=parseInt(userInput.value);
             ValidationInput(guess);
          })
    }
   
    // Chack input valid or not
    const ValidationInput=(guess)=>{
      
        if(isNaN(guess)){
            inputValid.innerHTML="Please enter a valid number !"
            inputValid.style.color="red";
        }
        else if(guess<1){
            inputValid.innerHTML="Please enter a number more then 1!"
            inputValid.style.color="red";
        }
        else if(guess>100){
            inputValid.innerHTML="Please enter a number less then 100!"
            inputValid.style.color="red";
        }
        else{
            inputValid.innerHTML="";
            PreviousGuessSolt.push(guess);
            if(limtGuess===10){
             upadteGuess(guess);
             displayMessage(`Game Over ! Random number was ${randomNumber}`)
             endGame();
            }else{
            upadteGuess(guess);
            checkGuess(guess)
            }
        }
    }


    const checkGuess=(guess)=>{
         console.group( "This is ",guess)
         console.log("Random number is", randomNumber)
        if(guess===randomNumber){
            displayMessage('You guessed it right', "green")
            endGame();
        }
        else if(guess>randomNumber){

             displayMessage('Number is to High', "red")
           
        }
        else if(guess<randomNumber){
            displayMessage('Number is to Low', "yellow")
        }
    }

    const upadteGuess=(guess)=>{
     userInput.value="";
     previousGuess.innerHTML+=`${guess},`
     limtGuess++;
     remmingSlot.innerHTML=`${11-limtGuess}`
    }

    const displayMessage=(message, color="red")=>{
     messageResult.innerHTML=message;
     messageResult.style.color=color;
    }

    const endGame=()=>{
      userInput.value="";
      userInput.setAttribute("disabled", '');
      submitBtn.style.display="none";
      form.appendChild(button); 
      playGame=false

    }

    const newGame=()=>{
      const newGameBtn=document.querySelector("#newGame")
        newGameBtn.addEventListener("click", (e)=>{
         newGameBtn.style.display="none"
         submitBtn.style.display="block"
         userInput.removeAttribute("disabled", )
         remmingSlot.innerHTML=`${11-limtGuess}`
         PreviousGuessSolt=[];
         limtGuess=1;
         playGame=true;

        })
    }