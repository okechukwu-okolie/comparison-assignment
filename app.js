// javascript to compare two user inputs

// prompts to accept user inputs
// let userInput1 = parseInt(prompt("Please input the first number for comparing."))
// let userInput2 = parseInt(prompt("Please input the second number for comparing."))

// let comparison = userInput1 > userInput2 ? `User1 input value of ${userInput1} is greater than User2 input value of ${userInput2}`:`User1 input value of ${userInput1} is less than User2 input value of ${userInput2}`;

// alert(comparison);

// javascript to compare three user inputs

let userInput_1= parseInt(prompt("Please input the first number for comparing."));
let userInput_2 = parseInt(prompt("Please input the second number for comparing."));
let userInput_3 = parseInt(prompt("Please input the third number for comparing."));


// this block of code compares with the user 1 input being the highest
if ((userInput_1 > userInput_2) && (userInput_1>userInput_3)) {
    console.log(`User1 number of ${userInput_1} is the highest.`)

    if (userInput_2>userInput_3) {
    console.log(`User2 input of ${userInput_2} is the second highest while \nUser3 input of ${userInput_3} is the smallest`);
    }
    if (userInput_3>userInput_2) {
        console.log(`User3 input of ${userInput_3} is the second highest while \nUser2 input of ${userInput_2} is the smallest`);
    }
}

// this block of code compares with the user 2 input being the highest

if ((userInput_2>userInput_1 )&&(userInput_2>userInput_3)) {
     console.log(`User2 number of ${userInput_2} is the highest.`)

     if (userInput_1>userInput_3) {
    console.log(`User1 input of ${userInput_1} is the second highest while\n User3 input of ${userInput_3} is the smallest`);
    }
    if (userInput_3>userInput_1) {
        console.log(`User3 input of ${userInput_3} is the second highest while \nUser1 input of ${userInput_1} is the smallest`);
    }
}

// this block of code compares with the user 3 input being the highest

if ((userInput_3>userInput_1 )&&(userInput_3>userInput_2)) {
     console.log(`User3 number of ${userInput_3} is the highest.`)

     if (userInput_1>userInput_2) {
    console.log(`User1 input of ${userInput_1} is the second highest while\n User2 input of ${userInput_2} is the smallest`);
    }
    if (userInput_2>userInput_1) {
        console.log(`User2 input of ${userInput_2} is the second highest while \nUser1 input of ${userInput_1} is the smallest`);
    }
}

// this block of code is the exception if any of the inputs provided isn't the recommended inputs.

else{
    alert(`You are suppose to enter only numbers. These are your inputs, make sure they are all numbers:\n Input1: ${userInput_1},\nInput2: ${userInput_2},\nInput3:${userInput_3}`)
}



