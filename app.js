//  Chapter # 1

// //task 1
alert("Welcome to my Website");

// //task 2
alert("Error! Please enter a valid password.");

// //task 3
alert("Welcome to JS Land... \n Happy Coding!");

// //task 4
alert("Welcome to JS Land...");
alert("Happy Coding! \n ");

// //task 5
alert("Hello... I can run JS through my web browser's console");



//  Chapter # 2

// //task 1
var username;

// //task 2
var myName = "Arham Abeer Ahmed";

// //task 3
var message = "Hello World";
alert(message); 

// //task 4
var name = "Arham Abeer";
var age = "20 years old";
var course = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);


//task 5
var a = ["pizza" , "pizz" , "piz" , "pi", "p"];
var i;
for(i=0; i<a.length; i++){
document.write(a[i] + "<br>");
}


// //task 6
var email = "arhamabeerahmed@gmail.com";
alert("My email address is "+ email);

//task 7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book);

//task 8
document.write("Yah! I can write HTML content through JavaScript");

//task 9
var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(str);
document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");




//Chapter # 3

//task 1
var age = 20;
alert("I am " + age + " years old")

//task 2
var count = 0;
if(document.open)
{
    count++;
}

alert("You have visited this site " + count + " times.")

//task 3
var birthYear = 1999;
document.write("My birth year is " + birthYear + " <br> Data type of my declared variable is number");

//task 4
var vname;
var product;
var quantity;

vname=prompt("Your name?");
product=prompt("Enter product name.");
quantity=prompt("How many products you want to order?")
document.write(vname.bold() + " ordered " +  quantity.bold() + " " + product.bold() + "(s)  on ABC Store.");




//Chapter # 4

//task 1
var a,b,c;

//task 2
//legal
var arh;
var firstname;
var love_pak;
var at_gmail;
var $name;

// //illegal
var 1stname;
var brainly-in;
var @gmail;
var karachi.branch;
var #name;

//task 3
var heading = "Rules for naming JS variables";
document.write(heading.fontsize(32));
document.writeln(" <br><br>Variable names can only contain numbers, $ and _. For example: $my_1stVariable");
document.writeln("<br>Variables must begin with a letter, $ or _.  For example $name, _name or name");
document.writeln("<br>Variable names are case sensitive");
document.writeln("<br>Variable names should not be JS Keywords");





//Chapter # 5

//task 1
var num1 = +prompt("Enter 1st number");
var num2 = +prompt("Enter 2nd number");
var sum = num1 + num2;
document.write("Sum of "+ num1 + " and " + num2 +" is " + sum);

// task 2
var num1 = +prompt("Enter 1st number");
var num2 = +prompt("Enter 2nd number");
var sum = num1 - num2;
document.write("Subtraction of "+ num1 + " and " + num2 +" is " + sum);

var num1 = +prompt("Enter 1st number");
var num2 = +prompt("Enter 2nd number");
var sum = num1 * num2;
document.write("Multiplication of "+ num1 + " and " + num2 +" is " + sum);

var num1 = +prompt("Enter 1st number");
var num2 = +prompt("Enter 2nd number");
var sum = num1 / num2;
document.write("Division of "+ num1 + " and " + num2 +" is " + sum);

//task 3
var num;
document.write("<br>Value after variable declaration is: " + num);

num = 7;
document.write("<br>Initial value: " + num);

num++;
document.write("<br>Value after increment is: " + num);

num= num+7;
document.write("<br>Value after addition is: " + num);

num--;
document.write("<br>Value after decrement is: " + num);

num= num/3;
document.write("<br>The remainder is : " + num);


//task 4
var cost = 600;
var movie = 5;
var tcost = cost*movie;
document.write("Total cost to buy 5 tickets to a movie is: " + tcost +"PKR");

// task 5
var table_no = prompt("Enter table number");
document.write("Table of " + table_no + "<br>");
var i;
for(i=1; i<=10; i++){
    document.write(table_no + " * " + i + " = " + table_no*i + "<br>");
}


//task 6
var c = +prompt("Enter Celcius temperature");
var f = +prompt("Enter Fahrenheit temperature");

var fc = (f - 32)* (5/9);
var cf = (c * 9/5)+ 32; 

document.write(c+ "'C is " + cf + "'F <br>");
document.write(f + "'F is " + fc + "'C");


//task 7
var price1 = +prompt("Enter price of item 1");
var quantity1 = prompt("Enter quantity of item 1");
var price2 = +prompt("Enter price of item 2");
var quantity2 = prompt("Enter quantity of item 2");
var shipcharge = +prompt("Shipping Charges?");
var cost1, cost2;
var tcost;

document.write("<br>Price of Item 1 is: " + price1);
document.write("<br>Quantity of item 1 is: " + quantity1);
document.write("<br>Price of Item 2 is: " + price2);
document.write("<br>Quantity of item 2 is: " + quantity2);
document.write("<br>Shipping Charges: " + shipcharge);

cost1 = price1*quantity1;
cost2 = price2*quantity2;
tcost= cost1+cost2+shipcharge;
document.write("<br><br>Total cost of your order is: " + tcost);



// task 8
var tmarks = +prompt("Enter total marks");
var omarks = +prompt("Enter obtained marks");
var per = (omarks/tmarks) * 100;
document.write("Total Marks: " + tmarks);
document.write("<br>Obtained Marks: "+ omarks);
document.write("<br>Percentage: " + per);


//task 9
var total_usd = 10;
var total_riyal = 25;
var usd = 104.8;
var riyal = 28;

var pkr = (total_riyal*riyal) + (total_usd*usd);
document.write("Currency in PKR".fontsize(35) + "<br>")
document.write("Total PKR: " + pkr);


//task 10
var i = +prompt("Enter number");
i= ((i+5) * 10) / 2; 
document.write(i);


// task 11
var cyear = 2020;
var byear = +prompt("Enter birth year");
var age = cyear - byear;
document.write("Current year: " + cyear);
document.write("<br>Birth year: " + byear);
document.write("<br>Age: "+ age + " or " ,age-1);


//task 12
var radius = +prompt("Enter radius of a circle");
var circum = 2 * 3.142 * radius;
var area = 3.142 * radius *radius;

document.write("<br>Radius of a circle: " + radius);
document.write("<br>Circumference: " + circum);
document.write("<br>Area: " + area);


//task 13
var snack = prompt("Enter your favorite snack");
var age = +prompt("Enter your age");
var max_age = +prompt("Enter estimated maximum age");
var perDay = +prompt("Enter estimated snack per day");
var total = (max_age - age) * perDay;

document.write("You will need " + total + " " + snack +" to last you until the ripe old age of " + max_age);


// Chapter # 6-9


//task 1
var a = +prompt("Enter number");
document.write("Result: <br>");
document.write("The value of a is: "+a+ "<br>................................<br><br>");
document.write("The value of ++a is: " + ++a);
document.write("<br>Now the value is: "+ a);
document.write("<br><br>The value of a++ is: " + a++);
document.write("<br>Now the value is: "+ a);
document.write("<br><br>The value of --a is: " + --a);
document.write("<br>Now the value is: "+ a);
document.write("<br><br>The value of a-- is: " + a--);
document.write("<br>Now the value is: "+ a);


//task 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a + " <br>b is "+ b + "<br>result is "+ result);

// OUTPUT a is 1     b is 0      result is 3

/*
--a;                        --> pre decrement at a
--a - --b;                  --> pre decrement at a SUBTRACTS pre decrement at b
--a - --b + ++b;            --> pre decrement at a SUBTRACTS pre decrement at b ADDS pre increment at b
--a - --b + ++b + b--;      --> pre decrement at a SUBTRACTS pre decrement at b ADDS pre increment at b ADDS post decrement at b
*/


//task 3
var name = prompt("Enter your Name");
alert("Welcome to our site "+ name);

//task 4
var table_no = +prompt("Enter table number");
var i;
if(table_no === 0){
    for(i=1; i<=10; i++){
        document.write("5" + " * " + i + " = " + 5*i + "<br>");
    }
}
else{
    for(i=1; i<=10; i++){
        document.write(table_no + " * " + i + " = " + table_no*i + "<br>");
    }
}


//task 5
var sub1 = prompt("Enter name of subject 1");
var sub2 = prompt("Enter name of subject 2");
var sub3 = prompt("Enter name of subject 3");
var tmarks = 100;
var omarks1 = +prompt("Enter obtained marks of subject 1");
var omarks2 = +prompt("Enter obtained marks of subject 2");
var omarks3 = +prompt("Enter obtained marks of subject 3");
var omarks = omarks1 + omarks2 + omarks3;
var per1 = (omarks1 / tmarks) * 100;
var per2 = (omarks2 / tmarks) * 100;
var per3 = (omarks3 / tmarks) * 100;
var per = (omarks / 300) * 100;

 document.write("Subject Total Marks Obtained Marks Percentage");
 document.write("<br>" + sub1 + "&emsp;&emsp;&emsp;" + tmarks + "&emsp&emsp;&emsp;;" + omarks1 + "  &emsp &emsp;&emsp;;   " + per1 + "%");
 document.write("<br>" + sub2 + "   &emsp&emsp;&emsp;; " + tmarks + "  &emsp;&emsp;&emsp; " + omarks2 + " &emsp &emsp;&emsp;;    " + per2 + "%");
 document.write("<br>" + sub3 + "   &emsp&emsp;&emsp;; " + tmarks + " &emsp;&emsp;&emsp;  " + omarks3 + " &emsp &emsp;&emsp;;    " + per3 + "%");
 document.write("<br>&emsp; &emsp;&emsp; " + "300" + "&emsp;&emsp;&emsp;" + omarks + "&emsp;&emsp;&emsp;" + per);




// Chapter # 9-11

//task 1
var city = prompt("Enter city name");
if(city == "karachi"){
    alert("Welcome to City of Lights");
}
else{
    alert("Welcome to " + city);
}


//task2
var gender = prompt("Enter gender");
if(gender == "male"){
    alert("Good Morning Sir");
}
else if(gender == "female"){
    alert("Good Morning Ma'am");
}


//task 3
var color = prompt("Enter color of road traffic signal");
if(color == "red"){
    alert("Must Stop");
}
else if(color == "green"){
    alert("Move now");
}
else if(color== "yellow"){
    alert("Ready to move");
}


//task 4
var fuel = prompt("Enter fuel");
if(fuel < 0.25){
    alert("Please refill the fuel in your car");
}


//task 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}       //displayed

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}       //not displayed

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}       //2 alerts displayed

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}       //displayed

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }   //true displayed

if("car" < "cat"){
    alert("car is smaller than cat");
    }   //displayed


// task 6
var tmarks = +prompt("Enter total marks");
var omarks = +prompt("Enter obtained marks");
var per = (omarks/tmarks) * 100;
document.write("Total Marks: " + tmarks);
document.write("<br>Obtained Marks: "+ omarks);
document.write("<br>Percentage: " + per);

if(per >= 80){
    document.write("<br>Grade: A-One");
}
else if(per < 80 && per >=70){
    document.write("<br>Grade: A");
}
if(per >= 60 && per < 70){
    document.write("<br>Grade: B");
}
else if(per < 60){
    document.write("<br>Grade: Fail");
}


// //task 7
var num = 7;
var gnum = +prompt("Guess the number");
if(gnum === num){
    alert("“Bingo! Correct answer")
}
else if(gnum == 8){
    alert("Close enough to the correct answer");
}
else{
    alert("Wrong");
}


//task 8
var num = +prompt("Enter number");
if(num % 3 == 0){
    alert("Divisible by 3");
}
else{
    alert("not divisible");
}


// task 9
var num = prompt("Enter number");
if(num%2 == 0){
    alert("Even");
}
else{
    alert("odd");
}

//task 10
var temp = prompt("Enter temperature");
if(temp > 40){
    alert("“It is too hot outside.");
}
else if(temp > 30){
    alert("The Weather today is Normal.");
}
else if(temp > 20){
    alert("Today’s Weather is cool.");
}
else if(temp > 10){
    alert("OMG! Today’s weather is so Cool.");
}


//task 11
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter Second number");
var op = prompt("operation");
var r = 0;

if(op == '+'){
    r = num1 + num2;
    alert("Result is: " + r);
}
else if(op == '-'){
    r = num1 - num2;
    alert("Result is: " + r);
}
else if(op == '*'){
    r = num1 * num2;
    alert("Result is: " + r);
}
else if(op == '/'){
    r = num1 / num2;
    alert("Result is: " + r);
}



// Chapter # 12-13

//task 1
var v = prompt("Enter").charCodeAt;
if(v >=65 && v<=90){
    alert(" uppercase ");
}
else if(v >= 97 && v<= 122){
    alert("lowercase");
}
else{
    alert("number");
}


//task2
var num1 = prompt("Enter number 1");
var num2 = prompt("Enter number 2");
if(num1 > num2){
    alert("Number 1 is greater");
}
else if(num2 > num1){
    alert("number 2 is greater");
}
else{
    alert("Both are equal");
}


//task 3
var num = prompt("Enter number");
if(num > 0){
    alert("positive");
}
else if(num < 0){
    alert("negative");
}
else{
    alert("zero");
}


//task 4
var char = prompt("Enter character");
if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
    alert("true");
}
else{
    alert("false");
}


//task 5
var pass = "pakistan";
var user = prompt("enter password");
if(user === null){
    alert("Enter password")
}
else if(pass === user){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("wrong password");
}

//task 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
alert(greeting);


//task 7
var time = prompt("Enter time");
if(time >= 0000 && time < 1200){
    alert("Good Morning!");
}
else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!");
}
else if(time >= 1700 && time < 2100){
    alert("Good Evening!");
}
else if(time >= 2100 && time < 2359){
    alert("Good Night!");
}



//Chapter # 14-16

//task 1
var std_names = [];

//task 3
var str = ["arham " , "abeer", "ahmed"];

//task 4
var num = [1 , 2 , 3 , 4 , 5 , 6, 7, 8, 9, 10];

//task 5
Boolean = [true , false];


//task 6
var arr = ["arham" , 0123 , true];


//task 7
var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
var i;
document.write("QUALIFICATIONS".fontsize(35) + "<br>");
for(i=0;i<edu.length;i++){
    document.write(edu[i] + "<br>");
}


//task 8
var sname = ["arham", "ali", "babar"];
var scr = [320 , 225 , 450];
var i;
for(i=0;i<sname.length;i++){
document.write("<br> Score of " + sname[i] + " is " + scr[i] +". Percentage: " + (scr[i]/500)*100);
}



//task 9



//task 10 
var score = [320 , 230 , 480 , 120];
document.write(score + "<br>");
score.sort();
document.write(score);


// task 11
var city = ["Karachi" , "Islamabad", "Lahore", "Peshawar", "Quetta"];
var scity = city.slice(2 , 4);

document.write(city + "<br>");
document.write(scity);

//task 12 
var arr = ["this" , "is" , "my" , "cat"];
document.write("array: " + arr + "<br>");
var i;
document.write("String: ");
for(i=0; i<arr.length;i++){
    document.write(arr[i] + " ");
}


//task 13
var arr = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices: "+ arr);
var i;
for(i=0;i<arr.length;i++){
    document.write("<br> Out:<br>"+arr[i]);
}


//task 14
var arr = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices: "+ arr);
var i;
for(i=arr.length-1;i>=0;i--){
    document.write("<br> Out:<br>"+arr[i]);
}


//task 15
var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
var i;
document.write("<select> ")
for(i=0;i<phone.length;i++){
document.write("<option> " + phone[i]);
}



// Chapter # 17-20


//task 1
var arr1 = [];
var arr2 = [];
var arr2 = [];

var multi_arr = [arr1, arr2, arr3];


//task 2
var arr1 = [0,1,2,3];
var arr2 = [1,0,1,2];
var arr2 = [2,1,0,1];

var multi_arr = [arr1, arr2, arr3];
document.write(multi_arr + "<br>");


//task 3 
var i;
for(i=1;i<=10;i++){
    document.write("<br>" + i);
}

//task 4
var table_no = prompt("Enter table number");
var length = prompt("Enter lenght");
document.write("Table of " + table_no + " of length " + length + "<br>");
var i;
for(i=1; i<=length; i++){
    document.write(table_no + " * " + i + " = " + table_no*i + "<br>");
}


//task 5
var fruit = ["apple", "banana" , "mango", "orange", "strawberry"];
var i;
for(i=0;i<fruit.length;i++){
    document.write("<br>Element at index " + i + " is " + fruit[i]);
}


//task 6
var counting = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
var i;

document.write("Counting: ");
    document.write(counting);

document.write("<br>Reverse: ");
for(i=counting.length-1;i>=0;i--){
    document.write(counting[i]+", ");
}
document.write("<br>Even: ");
for(i=1; i<counting.length;i=i+2){ 
    document.write(counting[i] + ", ");
}
document.write("<br>Odd: ");
for(i=0; i<counting.length;i=i+2){
    document.write(counting[i] +", ");
}
document.write("<br>Series: ");
for(i=1; i<counting.length;i=i+2){
    document.write(counting[i] + "k ");
}



//task 7
var arr = ["cake", "pie", "cookie", "chips", "patties"];
var suser = prompt("Search");
var i;

for(i=0; i<arr.length;i++){
if(suser === arr[i]){
    alert(arr[i] + " is found");
    break;
    }
    
else{
    alert("sorry " + suser + " is not available");
    }
}


//task 8
var A = ["24", "53", "78", "91", "12"];
document.write("Array: " + A);
A.sort();
var i;
var l;
for(i=A.length-1; i<A.length;i++){
document.write("<br>Lagest is " + A[i]);
}


//task 9
var A = ["24", "53", "78", "91", "12"];
document.write("Array: " + A);
A.sort();
var i;
var l;
for(i=0; i==0;i++){
document.write("<br>Smallest is " + A[i]);
}


//task 10
var i;
var value;
for(i=1; i<100;i++){
    value = 5*i;
    document.write(value + "<br>");
if(value === 100){
    break;
}
}


//  Chap # 21-25

// Task 1
var fname = prompt("Enter First Name");
var lname = prompt("Enter Last Name")
var fullName = fname + lname;
alert("Hello " + fullName);



// // Task 2
var favMob = prompt("Enter your Favorite Mobile Phone Model");
var strLen = favMob.length;
alert("Your Favorite Mobile is: " + favMob + "\nLength of String: " + strLen);



// Task 3
var word = "Pakistani";
var indNum = word.indexOf("n");
alert("String: " + word + "\nIndex of n: "+ indNum);



// Task 4
var word = "Hello World";
var indNum = word.lastIndexOf("l");
alert("String: " + word + "\nLast Index of l: "+ indNum);



// Task 5
var word = "Pakistani";
var indChar = word.charAt(3);
alert("String: " + word + "\nCharacter at index 3: "+ indChar);



// Task 6
var fname = prompt("Enter First Name");
var lname = prompt("Enter Last Name")
var fullName = fname.concat(" " + lname)
alert("Hello " + fullName);



// Task 7
var city = "Hyderabad";
var indNum = city.indexOf("Hyder");
var fText = city.slice(0,indNum);
var repCity = "Islam";
var lText = city.slice(indNum + 5);
alert("City: " + city + "\nReplaced City: " + fText + repCity + lText);



// Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var RepMessage = message.replace(/and/g , "&");
alert("Message: " + message + "\nReplaced Message: " + RepMessage);



// Task 9
var str = "472";
var sType = "String";
var num = parseInt(str);
var nType = "Number";
document.write("Value: " + str + "<br>Type: "+ sType + "<br>Value: " + num + "<br>Type: "+ nType)



// Task 10
var word = prompt("Enter some word");
var Uword = word.toUpperCase();
alert("Input: " + word + "\nConverted: " + Uword);



// Task 11
var word = prompt("Enter some word");
var fLetter = word.slice(0,1);
var upperLetter = fLetter.toUpperCase();
var lLetter = word.slice(1);
var Uword = upperLetter.concat(lLetter);
alert("Input: " + word + "\nConverted: " + Uword);



// Task 12
var num = 35.36;
var str = num.toString();
var ind = str.indexOf(".");
var fstr = str.slice(0,ind);
var lstr = str.slice(ind+1);
var repStr = fstr.concat(lstr);
alert("Number: " + num + "\nString: " + repStr)



// Task 13
var username = prompt("Enter Username")
var i,c=0;

for(i=0;i<username.length;i++){
    if(username[i] === String.fromCharCode(33)){
        c++;
        break;
    }
    else if(username[i] === String.fromCharCode(64)){
        c++;
        break;
    }
    else if(username[i] === String.fromCharCode(46)){
        c++;
        break;
    }
    else if(username[i] === String.fromCharCode(44)){
        c++;
        break;
    }
    else{
        c=0;
    }
}
if(c > 0){
    alert("Please enter a valid username...");
}
else{
    alert("Your Username is: " + username);
}



// Task 14
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Enter item...");
var user = input.toLowerCase();
var ind;
var item;
var c=0;

for(var i = 0; i < arr.length ; i++){
    if(user === arr[i]){
        c++;
        item = arr[i];
        ind = i;
        break;
    }
    else{
        c = 0;
    }
}

if(c > 0){
    alert(item + " is available at index " + ind + " in our bakery");
}

else{
    alert(user + " is not available in our bakery");
}



// Task 15
var pass = prompt("Enter Password");
var c=0;
var s = 0;
var n=0;

if(pass.length < 6){
    alert("Please enter at least 6-digit Password");
}

var firstLetter = pass.charAt(0);
if(firstLetter >= 0 && firstLetter <= 9){
    alert("Password cannot be begin with a number. Please enter a calid password.");
}

for(var i = 0 ; i < pass.length ; i++){
    if(pass[i] >= String.fromCharCode(65) && pass[i] <= String.fromCharCode(90)){
        c++;
    }
    else if(pass[i] >= String.fromCharCode(97) && pass[i] <= String.fromCharCode(122)){
        s++;
    }
    else if(pass[i] >= 0 && pass[i] <= 9){
        n++
    }
    else{
        c=0;
        s=0;
        n=0;
    }
}
if(c > 0 && s > 0 && n > 0){
    alert("saved");
}
else{
    alert("Please enter capital and small letters with numbers in your password")
}



// Task 16
var str = "University Of Karachi";
var spl =  str.split("");
for(var i = 0; i <= spl.length - 1; i++){
    document.write(spl[i] + "<br>");
}


// Task 17
var inp = prompt("Enter")
var ind = inp.length - 1;
var lChar = inp.charAt(ind);
alert("Input: " + inp + "\nLast Character: " + lChar);



// Task 18
var str = "The quick brown fox jumps over the lazy dog";
var lowStr = str.toLowerCase();
var ind = lowStr.replace(/the/g , "$");
var c=0;

for(var i=0; i<ind.length;i++){
    if(ind[i] === "$"){
        c++;
    }
}
alert("Text: " + str + "\nThere are " + c + " occurance(s) of word 'the'.");





//  Chap # 26-30

// Task 1
var num = prompt("Enter positive number");
var rOf = Math.round(num);
var ceil = Math.ceil(num);
var floor = Math.floor(num);

document.write("Number: " + num);
document.write("<br>Round OF: " + rOf);
document.write("<br>Ceil: " + ceil);
document.write("<br>Floor: " + floor);



// Task 2
var num = prompt("Enter Negative number");
var rOf = Math.round(num);
var ceil = Math.ceil(num);
var floor = Math.floor(num);

document.write("Number: " + num);
document.write("<br>Round OF: " + rOf);
document.write("<br>Ceil: " + ceil);
document.write("<br>Floor: " + floor);



// Task 3
var num = prompt("Enter number");
var abs = Math.abs(num);
alert("Number: " + num + "\nAbsolute: " + abs);



// Task 4
var dice = Math.random() * 5;
var round = Math.round(dice)
alert("Random dice value is: " + round);



// Task 5
var toss = Math.random() * 2;
var floor = Math.floor(toss);
document.write(floor);
if(floor === 0){
    alert(floor + "\nRandom value of toss: Heads");
}
else{
    alert(floor + "\nRandom value of toss: Tails");
}



// Task 6
var random = Math.random() * 101;
var round = Math.round(random)
alert("Random number is: " + round);



// Task 7
var weight = prompt("Enter your weight");
var num = parseInt(weight);
alert("Your Weight is: " + num + " kilograms");



// Task 8
var num = prompt("Enter random number between 1 to 10");
var random = Math.random() * 11;
var round = Math.round(random)
alert(round)
if(num == round){
    alert("Congrats you won!");
}
else{
    alert("Try Again!");
}




// Chap # 31-34


//Task 1
var date = new Date();
alert(date);



// Task 2
var curr = new Date();
var mon = curr.toString();
var mon1 = mon.slice(4,7)

if(mon1 === "Jan"){
    alert("Current Month: January")
}
else if(mon1 === "Feb"){
    alert("Current Month: February")
}
else if(mon1 === "Mar"){
    alert("Current Month: March")
}
else if(mon1 === "Apr"){
    alert("Current Month: April")
}
else if(mon1 === "Jun"){
    alert("Current Month: June")
}
else if(mon1 === "Jul"){
    alert("Current Month: July")
}
else if(mon1 === "Aug"){
    alert("Current Month: August")
}
else if(mon1 === "Sep"){
    alert("Current Month: September")
}
else if(mon1 === "Oct"){
    alert("Current Month: Octuber")
}
else if(mon1 === "Nov"){
    alert("Current Month: November")
}
else if(mon1 === "Dec"){
    alert("Current Month: December")
}




// Task 3
var date = new Date();
var str = date.toString();
var day = str.slice(0,3);
alert("Today is: " + day);



// Task 4
var date = new Date();
var str = date.toString();
var day = str.slice(0,3);

if(day === "Sat" || day === "Sun"){
    alert("It's Fun Day!")
}



// Task 5
var date = new Date();
var str = date.toString();
var day = str.slice(8,10);

if(day < 16){
    alert("First 15 days of the month");
}
else{
    alert("Last days of the month")
}



// Task 6
var curr = new Date();
var mili = curr.getTime();
var min = mili / (1000*60);
alert("Current Date: " + curr + "\nElapsed milliseconds since January 1970: " + mili + "\nElapsed minutes since January 1970:" +min)




// Task 7
var date = new Date();
var str = date.toString();
var time = str.slice(16,18);
if(time >= 00 && time < 12){
    alert("It's AM");
}
else{
    alert("It's PM");
}



// Task 8
var lDate = new Date("Dec 31, 2020");
var str = lDate.toString();
alert("Later Date: " + str)



// Task 9
var date = new Date("June 18, 2015");
var curr = new Date();
var dateMili = date.getTime();
var currMili = curr.getTime();
var diff = currMili - dateMili;
var diffDay = diff / (1000*60*60*24);
var accDay = Math.floor(diffDay);
alert(accDay + " days have passed since 1st Ramadan 2015");




// Task 10
var date = new Date("Jan 01, 2015");
var curr = new Date();
var dateMili = date.getTime();
var currMili = curr.getTime();
var diff = currMili - dateMili;
var diffSec = diff / (1000);
var accSec = Math.floor(diffSec);
alert("On the reference date " + curr + ", " + accSec + " seconds had passed since the beginning of 2015");



// Task 11
var date = new Date();
var str = date.toString();
var edit = str.slice(16,18);
var bef = edit - 01;
var fDate = str.slice(0,15);
var lDate = str.slice(18)
alert("1 hour ago, it was " + fDate + " " + bef + " " + lDate);



// Task 12
var today = new Date();
var d = new Date();
var pastYear = d.getFullYear() - 100;
d.setFullYear(pastYear);
alert("Today: " + today + "\n100 years ago: " + d);



// Task 13
var dob = new Date("Sep 4, 1999");
var dobMili = dob.getTime();
var today = new Date();
var todayMili = today.getTime();
var diff = todayMili - dobMili;
var diffAge = diff / (1000*60*60*24*30*12);
var accAge = Math.floor(diffAge);
var year = 2020 - accAge;
alert("Your age is: " + accAge + "\nYour birth Year is: " + year);



// Task 14
var name = prompt("Enter Customer Name");
var month = prompt("Enter billing month");
var unit = prompt("Enter Number of Units");
var charges = 16;
var netAmount = unit * charges;
var surCharge = 350;
var latePayment = netAmount + surCharge;

document.write("Customer name: " + name + "<br>");
document.write("Month: " + month + "<br>");
document.write("Number of Units: " + unit + "<br>");
document.write("Charges per Unit: " + charges + "<br><br>");
document.write("Net Amount Payable (within due date): " + netAmount +"<br>");
document.write("Late Payment  Surcharge: " + surCharge + "<br>");
document.write("Gross Amount Payable (after due date): " + latePayment);





// Chap # 35-38

// Task 1
var date;

function dateTime(){
    date = new Date();
    alert(date);
}
dateTime();



// Task 2
var fname, lname;
function greet(){
    fname = prompt("Enter First Name");
    lname = prompt("Enter last Name");
    alert("Welcome " + fname + " " + lname);
}
greet();



// Task 3
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var sum;

function sum(a,b){
    sum = a+b;
    return sum;
}
alert(sum(num1,num2));



// Task 4
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var opr = prompt("Enter Operation");

function calc(a,opr,b){
        if(opr === "+"){
            return a + b;
        }
        else if(opr === "/"){
            return a / b;
        }
        else if(opr === "-"){
            return a - b;
        }
        else if(opr === "*"){
            return a * b;
        }
        else{
            return "Incorrect Operator"
        }
    }
    
    var result = calc(num1,opr,num2);
    alert(result);



// Task 5
var num = prompt("Enter Number");

function square(a){
    return a*a;
}

var res = square(num);
alert("Square: " + res)




// Task 6
var n =prompt("Enter Number");
function factorial(n){
    var ans = 1;
    if (n == 0 || n == 1){
        return ans;
    }
    else{
        for(var i = n; i >= 1; i--){
        ans = ans * i;
        }
        return ans;
    }
}

ans = factorial(n)
alert("The factorial of " + n + " is " + ans);





// Task 7
var snum = prompt("Enter start number");
var lnum = prompt("Enter end number");

function count(a,b){
    for(var i = a ; i <= b ; i++){
        document.write(i + " ");
    }
}
count(snum,lnum);



// Task 8
var base = prompt("Enter base");
var perp = prompt("Enter Perpendicular");
var hyp;
function calculateHypotenuse(a,b){
    var bs;
    var hs;
    function sqr(x,y){
        bs = x*x;
        hs = y*y;
    }
    sqr(a,b)

    hyp = bs * hs;
    return hyp;
}

var res = calculateHypotenuse(base,perp);
alert("Hypotenuse: " + res);



// Task 9
    // Method 1
var w = 12;
var h = 6;
function area(a,b){
    return a*b;
}
    alert("Area of the Rectangle is: " + area(w,h));


    // Method 2
var w = prompt("Enter width");
var h = prompt("Enter height");

function area(a,b){
    return a*b;
}
alert("Area of the Rectangle is: " + area(w,h));



// Task 10
var word = prompt("Enter any Word");
function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return alert("Not a Palindrome");
        }
    }

    return alert("Palindrome");
}
var res = palindrome(word);


// Task 11 
var word = prompt("Enter String");

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' '); 
}
 
alert(titleCase(word));



// Task 12
var str = prompt("Enter");    
function longest(a)
{
  var arr = a.split(" ");
  var result = arr[0];

  for(var x = 1 ; x < arr.length ; x++)
  {
    if(result.length < arr[x].length)
    {
    result = arr[x];
    } 
  }
  return result;
}
alert(longest(str));



// Task 13
var str = prompt("Enter String");
var letter = prompt("Enter letter");
var lowStr = str.toLowerCase();
var lowLet = letter.toLowerCase();
var c=0; 

function check(a,b){
    for(var i=0; i<a.length;i++){
        if(lowStr[i] === lowLet){
            c++;
        }
    }
    return c;
}
var res = check(lowStr,lowLet);
alert("Text: " + str + "\nThere are " + res + " occurance(s) of letter " + letter + " in the String");




// Task 14
var rad = prompt("Enter Radius");

function calcCircumference(r){
    var circum = 2 * 3.142 * r;
    alert("The circumference is " + circum);
}

function calcArea(r){
    var area = 3.142 * r * r;
    alert("The area is " + area);
}

calcCircumference(rad);
calcArea(rad);



// Chap # 38-42

// Task 1
var num = 0;

function power(a,b){
    num = Math.pow(a,b)
    return num;
}
var inpNum = prompt("Enter number");
var inpPow = prompt("Enter Power");

var res = alert(power(inpNum,inpPow))



// Task 2
var year = prompt("Enter year")

function leap(y){
    if(y%4 === 0){
        alert("Leap Year")
    }
    else{
        alert("Not a leap year")
    }
}

leap(year);



// Task 3
var a = +prompt("Enter 1st side")
var b = +prompt("Enter 2nd side")
var c = +prompt("Enter 3rd side");
var area = 0, s = 0;

function sides(x,y,z){
    return s = (x+y+z)/2;
}

function areaOfTriangle(s ,x ,y, z){
    area = s*(s-x)*(s-y)*(s-z);
    return area;
}

var side = sides(a,b,c);
var resArea = areaOfTriangle(side, a ,b,c);
alert(resArea);



// Task 4
var s1 = +prompt("Enter subject 1 marks")
var s2 = +prompt("Enter subject 2 marks")
var s3 = +prompt("Enter subject 3 marks")

function average(a,b,c){
    return (a+b+c)/3;
}
function percent(a,b,c){
    var t = a+b+c;
    var per = (t/300)*100
    return per;
}
function main(a,b,c){
    console.log("Average: " + average(a,b,c));
    console.log("Percentage: " +percent(a,b,c));
}

main(s1,s2,s3);



// Task 5
var text = prompt("Enter any string");
var ch = prompt("Enter checking character");

function check(a,b){
    var res = a.indexOf(b);
    alert(res);
}

check(text,ch);



// // Task 6   
var strings = ["bongo drums", "guitar", 
  "flute", "double bass", "xylophone","piano"];                          

   string = strings.map(x=>x.replace( /[aeiou]/g, '' ));              

  console.log(string); 


// Task 7
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
  console.log(findOccurrences());


// Task 8
var dis = +prompt("Enter distance (in KMs)");

console.log("In KM: "+ dis)
function meter(a){
    console.log("In Meter: " + a*1000);
}
function feet(a){
    console.log("In Feet: " + a*3280.84);
}
function inch(a){
    console.log("In Inch: " + a*39370.1);
}
function cm(a){
    console.log("In CM: " + a*100000);
}

meter(dis);
inch(dis);
cm(dis);
feet(dis);



// Task 9 
var hrs = prompt("Enter total hours");

function overtime(a){
    if(a < 41){
        alert("No overtime!");
    }
    else{
        var ovr = a-40;
        var pay = ovr * 12;
        alert("Overtime Pay: " + pay)
    }
}

overtime(hrs);



// Task 10
var wd = prompt("Enter withdraw amount");
var len;
function withdraw(a){
    var hund = a%100;
    var fifty = (a%100)/50;
    var ten = ((a%100)&50)/10;  

    console.log("You will have " + hund + " hundred notes " + fifty +" fifty notes " + ten + " ten notes")
}

withdraw(wd);



// Chap # 43-48

// Task 1
function alertFun(){
    alert("You just clicked on the click...")
}


// Task 2
function alertFun(){
    alert("Thanks for purchasing a phone from us...")
}


// Task 3 
function deleteFun1(){
    var tr = document.getElementById('tr1');
    tr.innerHTML = "";
}
function deleteFun2(){
    var tr = document.getElementById('tr2');
    tr.innerHTML = "";
}
function deleteFun3(){
    var tr = document.getElementById('tr3');
    tr.innerHTML = "";
}
function deleteFun4(){
    var tr = document.getElementById('tr4');
    tr.innerHTML = "";
}



// Task 4
function changeImg(id,ref){
    var img = document.getElementById(id);
    img.src = ref;
}



// Task 5
var c = 0;

function increase(){
    var con = document.getElementById('count');
    c++;
    con.innerHTML = c;
}

function decrease(){
    var con = document.getElementById('count');
    c--;
    con.innerHTML = c;
}




// Chap # 49-52

// Task 1
function submit(){
        var email = document.getElementById('email').value
        var pass = document.getElementById('pass').value
        var phone = document.getElementById('ph').value
        var dob = document.getElementById('dob').value
    
        var info = document.getElementsByClassName('info')
        info[0].innerHTML = email;
        info[1].innerHTML = pass;
        info[2].innerHTML = phone
        info[3].innerHTML = dob;
    }




// Task 2
function read(){
    var t = document.getElementById('text');
    var p = document.getElementById('full').innerHTML
    t.innerHTML = p;
}



// Task 3
function submit(){
    var name = document.getElementById('email').value
    var cl = document.getElementById('pass').value
    var phone = document.getElementById('ph').value
    var dob = document.getElementById('dob').value
    var depart = document.getElementById('depart').value

    var info = document.getElementsByClassName('info')
    info[0].innerHTML = name;
    info[1].innerHTML = cl;
    info[2].innerHTML = phone;      
    info[3].innerHTML = dob;
    info[4].innerHTML = depart;
}
function del(){
var tr = document.getElementById('tr');
tr.innerHTML = "";
}
function edit(){
    var tr = document.getElementById('tr');
tr.innerHTML = "";
}



// Chap # 53-58

// Task 1
function show1(){
    var s1 = document.getElementById('s1');
    s1.display = true
}   




// Task 2
function zoomIn(){
    var p = document.getElementById('para').style.fontSize;
    p +=p ;
}




// Chap # 58-67

// Task 1
var main = document.getElementById('main-content');
console.log(main.childNodes);

var rend = document.getElementsByClassName('render');
for(var i = 0; i<rend.length;i++)
    console.log(rend[i].innerHTML);

var fName = document.getElementById('first-name')
var fn = document.createTextNode("Arham");
fName.appendChild(fn);

var lName = document.getElementById('last-name')
var ln = document.createTextNode("Abeer");
lName.appendChild(ln);

var email = document.getElementById('email')
var em = document.createTextNode("arhamabeerahmed@gmail.com");
email.appendChild(em);




// Task 2
var main = document.getElementById('main-content');
console.log(main.childNodes);

var rend = document.getElementsByClassName('render');
for(var i = 0; i<rend.length;i++)
    console.log(rend[i].innerHTML);

var fName = document.getElementById('first-name')
var fn = document.createTextNode("Arham");
fName.appendChild(fn);

var lName = document.getElementById('last-name')
var ln = document.createTextNode("Abeer");
lName.appendChild(ln);

var email = document.getElementById('email')
var em = document.createTextNode("arhamabeerahmed@gmail.com");
email.appendChild(em);




var fc = document.getElementById('form-content')
console.log(fc.nodeType)

var ln = document.getElementById('lastName');
console.log(ln.nodeType)
var cn = ln.childNodes;
console.log(cn[0].nodeType)

var txt = document.createTextNode('banker')

ln.appendChild(txt);
console.log(ln)



var main = document.getElementById('main-content')
var fChild  = main.firstChild
var lChild = main.lastChild
console.log(fChild)
console.log(lChild)

var cname = document.getElementById('lastName')
var nsib = cname.nextSibling;
var psib = cname.previousSibling;
console.log(nsib,psib)



var em = document.getElementById('email')
var pnode= em.parentNode;
var ntype = em.nodeType;

console.log(pnode)
console.log(ntype)
