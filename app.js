const max = prompt("Enter the Max Number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the Number");

while(true){
    if (guess == "quit"){
        console.log("User Quit the Game");
         break;
    }

    else if(guess == random){
        console.log("You are Right !! Random was", random);
        break;
    }

    else if(guess < random){
        guess = prompt("Your Guess Number was too Small. Please Try Again");
    }

    else{
        guess = prompt("Your Guess Number was too Large. Please Try Again");
    }
}