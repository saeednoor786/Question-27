// Q:27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed 
//  for the appropriate color alien.


let alienColour: string = "green";

if(alienColour === "green"){
console.log("ccongratulation! you juct earned 5 points.");
}
else if(alienColour === "yellow") {
console.log("congratulation! you are  juct earned 10 points.");
}
else{
    console.log("congratulation! you are juct earned 15 points.");
}

// 2nd version

alienColour = 'yellow';

if(alienColour === "green"){
    console.log("ccongratulation! you juct earned 5 points.");
    }
    else if(alienColour === "yellow") {
    console.log("congratulation! you are  juct earned 10 points.");
    }
    else{
        console.log("congratulation! you are juct earned 15 points.");
    }
    
// 3rd version

alienColour = 'Red';

if(alienColour === "green"){
    console.log("ccongratulation! you juct earned 5 points.");
    }
    else if(alienColour === "yellow") {
    console.log("congratulation! you are  juct earned 10 points.");
    }
    else{
        console.log("congratulation! you are juct earned 15 points.");
    }








