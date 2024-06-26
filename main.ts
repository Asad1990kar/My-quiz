#! /usr/bin/env node

import inquirer from "inquirer";

let quizStart = await inquirer.prompt
(
    [
        {
            name: "playerName",
            type: "input",
            message: "Enter your name :"
        },
        {
            name: "playerId",
            type: "input",
            message: "Enter your ID :"
        },
        {
            name: "playerClass",
            type: "input",
            message: "Enter your class :"
        }
    ]
);


let quizResult : number = 0;



let myQuiz = await inquirer.prompt
(
    [  
        {
            name: "Q1",
            type: "list",
            message: "Question 1: What is the purpose of the any type in TypeScript?",
            choices: ["A) To represent a type that can be assigned any value",
                "B) To represent a type that cannot be assigned any value",
                "C) To represent a type that can only be assigned null or undefined",
                "D) To represent a type that can only be assigned a string value"
            ]
            
        },
        {
            name: "Q2",
            type: "list",
            message: "Question 2: Which of the following is a benefit of using TypeScript?",
            choices: ["A) It allows for more flexible syntax than JavaScript",
                "B) It provides better support for functional programming",
                "C) It helps catch errors early and improves code maintainability",
                "D) It is compatible with older browsers only"
            ]
        },
        {
            name: "Q3",
            type: "list",
            message: "Question 3: What is the difference between null and undefined in TypeScript?",
            choices: ["A) null represents an uninitialized variable, while undefined represents a variable with no value",
                "B) null represents a variable with no value, while undefined represents an uninitialized variable",
                "C) null and undefined are interchangeable terms",
                "D) null is a type, while undefined is a value",
            ]
        },
        {
            name: "Q4",
            type: "list",
            message: "Question 4: How do you declare a variable in TypeScript?",
            choices: ["A) Using the let keyword",
                "B) Using the var keyword",
                "C) Using the const keyword",
                "D) All of the above"
            ]
        },
        {
            name: "Q5",
            type: "list",
            message: "Question 5: What is the purpose of the tsconfig.json file in a TypeScript project?",
            choices: ["A) To specify the compiler options and settings",
                "B) To define the project's dependencies and modules",
                "C) To declare the project's variables and types",
                "D) To configure the project's build and deployment process"
            ]
        }
    ]
);

if (myQuiz.Q1 == "A) To represent a type that can be assigned any value")
    {
        console.log("Question 1: Correct answer");

        quizResult += 1;
    }
    else
    {
        console.log("Question 1: Wrong answer");
    };


if (myQuiz.Q2 == "C) It helps catch errors early and improves code maintainability")
    {
        console.log("Question 2: Correct answer");

        quizResult += 1;
    }
    else
    {
        console.log("Question 2: Wrong answerr");
    };

if ( myQuiz.Q3 == "B) null represents a variable with no value, while undefined represents an uninitialized variable")
    {
        console.log("Question 3: Correct answer");

        quizResult += 1;
    }
    else
    {
        console.log("Question 3: Wrong answer");
    };

if (myQuiz.Q4 == "D) All of the above")
    {
        console.log("Question 4: Correct answer");

        quizResult += 1;
    }
    else
    {
        console.log("Question 4: Wrong answer");
    };

if (myQuiz.Q5 == "A) To specify the compiler options and settings")
    {
        console.log("Question 5: Correct answer");

        quizResult += 1;
    }
    else
    {
        console.log("Question 5: Wrong answerr");
    };



// for (let i = 0; i < myQuiz.length; i++) {
//     console.log((myQuiz[i]));
// };


    
console.log("\n \t !YOUR RESULT! \t \n")

console.log("Player Name : " + quizStart.playerName);
console.log("Player ID : " + quizStart.playerId);
console.log("Player Class : " + quizStart.playerClass);

console.log(`\n \t Your final score Out of 5 is : ${quizResult}`);