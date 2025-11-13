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
let hour = 6

// logical AND statement is written by usings a double &, eks: &&
// > means larger than
// == means equal to
// >= means larger OR equal to


if (hour >= 5 && hour <= 11) { // should only run if hour is 5 or more AND 11 or less
    console.log("good morning")
}
else if (hour >= 12 && hour <= 15) {
    console.log("good afternoon")
}
else if (hour >= 16 && hour <= 23) {
    console.log("good evening")
}
else {
    console.log("Good night")
}