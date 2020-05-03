const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
//title
{
    message: "What is the title of your repo?",
    name: "title",
},
//Desecription
{
    message: "what is the description of your repo?",
    name: "decsription",

},
//TOC
//Install
{
    message: "Please provide an example of the code's usage",
    name: "usage",
},
//License
{
    type: "list",
    message: "What is the license of your repo",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
},
//Contributing
{
    message: "Please Explain how to contribute to your repo?",
    name: "contributing",
},
//tests
{
    message: "Please epxlain how to test your repo",
    name: "tests",
},
//questions
{
   message: "What is your github username?",
   name: "userName", 
},
];
let filename = data.name.toLowerCase().splipt('').join('') + ".json";
function writeToFile(fileName, data) {
}

function init() {
    inquirer

}

init();


//https://api.github.com/users/pmarti9
