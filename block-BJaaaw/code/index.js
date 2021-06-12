// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = Number( prompt("Enter the number"));
if (number % 2 == 0 ) {
  alert("The number is even");
} else {
  alert ("The number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let a = Number( prompt("Enter the first value!"));
let b = Number(prompt("Enter the secound value!"));
if (a > b) {
  alert(`The max value ${a}`);
} else  {
  alert(`the max value ${b}`);
}

// 3. Convert the above code using`?` terniary operator

(a > b) ? alert(`this is a max value ${a}`): alert(`this is a max value ${b}`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("Enter your house name!");
if (houseName == "stark") {
  alert("Winter is coming");
} else if(houseName == "lannister") {
  alert("A lannister always pays his debt");
} else {
  alert("all men must die");  
}

// 5. Convert the above code using`?` terniary operator


// Switch
switch(houseName) {
  case "stark":
    alert("Winter is coming");
    break;
  case "lannister":
    alert("A lannister always pays his debt");
    break;
  default:
    alert("all men must die");  
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthNumber = Number(prompt("Enter a month"));
switch(monthNumber) {
  case 1:
    alert("In this month 31 days are present.");
    break;
  case 2:
    alert("In this month 28 or 29 days are present.");
    break;
  case 3:
    alert("In this month 31 days are present.");
    break;
  case 4:
    alert("In this month 30 days are present.");
    break;
  case 5:
    alert("In this month 31 days are present.");
    break;
  case 6:
    alert("In this month 30 days are present.");
    break; 
  case 7:
    alert("In this month 31 days are present.");
    break;
  case 8:
    alert("In this month 31 days are present.");
    break;
  case 9:
    alert("In this month 30 days are present.");
    break;
  case 10:
    alert("In this month 31 days are present.");
    break;
  case 11:
    alert("In this month 30 days are present.");
    break;
  case 12:
    alert("In this month 31 days are present.");
    break;
  default:
    alert("There is no month.");  
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt("Enter your Salary!"));
if (salary <= 20000) {
  alert("Tax is 10 %");
} else if (salary <= 40000) {
  alert("Tax is 20 %");
} else if(salary > 50000) {
  alert("Tax is 30 %");
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number(prompt("Enter your marks!"));
if(marks > 100) {
  alert("Marks can't be greater than 100");
} else if(marks > 80 && marks < 100) {
  alert("Grade A");
} else if(marks > 50 && marks < 80) {
  alert("Grade B");
} else if(marks > 30 && marks < 50) {
  alert("Grade C");
} else {
  alert("Grade D");
} 

switch(marks) {
  case  marks > 100:
    alert("Marks can't be greater than 100");
    break;
  case marks > 80 && marks < 100:
    alert("Grade A");
    break;
  case marks > 50 && marks < 80:
    alert("Grade B");
    break;
  case marks > 30 && marks < 50:
    alert("Grade C");
    break;
  default:
    alert("Grade D"); 
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outside?");

if(weather == "sunny"){
  alert("Wear a T-shirt");
} else if(weather == "rainy") {
  alert("Don't forget to take your raincoat");
} else if(weather == "hot") {
  alert("Get a hanky");
} else if(weather == "freezing"){
  alert("Get your sweeter on");
} else {
  alert("Not a valid input");
}

switch(weather){
  case "sunny":
    alert("Wear a T-shirt");
    break;
  case "rainy":
    alert("Don't forget to take your raincoat");
    break;
  case "hot":
    alert("Get a hanky");
    break;
  case "freezing":
    alert("Get your sweeter on");
    break;
  default:
    alert("Not a valid input");        
}