# Reverse - A Coding Project
A JavaScript program that takes an input string, reverses it, and then displays it in the page/DOM.

# Live Demo
https://jorysmith.github.io/Reverse/

# Description
The code is structured in three functions: getInputString(), reverseString(), and displayString().

First, an event listener is placed on the button to submit a user's string. Then the program gets the user inputted string and passes it as a parameter to the reverseString function.

Since a string can be treated as an array, the program applies a for loop starting from the input string's end and pushes each letter to a new reveredString array during each iteration of the loop.

The resulting reversed string is then passed to the displayString function where it displays the reversed string in the DOM/alert message section of the App Code page.
