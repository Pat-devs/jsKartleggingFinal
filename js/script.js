// conditionals (betingelser)

if (true) {
    // this will happen if above statement is truthy 
}
else
{
    // this will happen if above statement is not truthy 
}


// bit more complicated statements:


// greeting based on time of day...

// mellom kl 05.00 - 11.00 = morning
// mellom. 12.00 - 15.00 = afternoon
// mellom 16.00 - 23.00 = evening
// resten dvs. 24.00 - 04.00 = natt

// time of day, in hours since midnight
let hour = 5

// logical AND statement is written by usings a double &, eks: &&
// > means larger than
// == means equal to
// >= means larger OR equal to


// if (hour >= 5 && hour <= 11) { // should only run if hour is 5 or more AND 11 or less
//     console.log("good morning")
// }
// else if (hour >= 12 && hour <= 15) {
//     console.log("good afternoon")
// }
// else if (hour >= 16 && hour <= 23) {
//     console.log("good evening")
// }
// else {
//     console.log("Good night")
// }

// solition using logical or statements
// syntax for logical or in JS is double pipe symbol

// if (hour == 24 || hour == 0 || hour == 1 || hour == 2 || hour == 3 || hour == 4) {
//     console.log("good night")
// }


// imagine we have two dices
// normal dices, a dice can have a value of 1,2,3,4,5 or 6
let diceA = 1
let diceB = 1

// best combination is 6 and 6
// 2nd best, 5 and 5
// 3rd best is any combination 5 and 6
// If neither of the dices is not 1 you win a miniprize!

if (diceA == 6 && diceB == 6) {
    console.log("congrats, you won the main prize!")
}
else if (diceA == 5 && diceB == 5) {
    console.log("congrats, you won the 2nd prize!")
}
else if ( (diceA == 5 || diceA == 6) && (diceB == 5 || diceB == 6) ) {
    console.log("congrats you won the 3rd prize with any combination of 5 / 6")
}
else if (diceA != 1 && diceB != 1) {
    console.log("congrats you won the miniprize because none of the dices were a 1")
}