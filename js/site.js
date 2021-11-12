// Get user inputted string aka Controller function
function getInputString() {
    document.getElementById("alertBox").classList.add("invisible");
    let inputString = document.getElementById("inputString").value;
    let revString = reverseString(inputString);
    displayString(revString);
}

// Reverse input string aka Logic function
function reverseString(inputString) {    
    // Since a string can be treated as an array,
    // use a for loop starting from the input string's end
    // and push each letter to a new reveredString array
    let reversedString = [];
    for (let i = inputString.length-1; i >= 0; i--) {
        reversedString += inputString[i];        
    }
    return reversedString
}

// Display reversed string in the DOM/alert message section
// aka View function
function displayString(revString) {
    // Display reversed string in the DOM
    document.getElementById("alertMsg").innerHTML = `Your string has been reversed to: <br> 
    <span class="fw-bold">${revString}</span>`
    // Show the alert box message
    document.getElementById("alertBox").classList.remove("invisible");
}
