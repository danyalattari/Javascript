/*alert ("hello world");

var a = prompt("Enter Your Table Num", "Enter Num e.i.. 2");

if (a > 1, a < 3 ) {
    document.write("02*01=02<br>02*02=04<br>02*03=06<br>02*04=08<br>02*05=10<br>02*06=12<br>02*07=14<br>02*08=16<br>02*09=18<br>02*10=20")
}
else if (a > 2) {
    document.write("03*01=03<br>03*02=06<br>03*03=09<br>03*04=12<br>03*05=15<br>03*06=18<br>03*07=21<br>03*08=24<br>03*09=27<br>03*10=30")
}
else if (a > 60) {
    document.write("Congratulation You Have <b>B</b> Grade")

}
else if (a > 50){
    document.write("Congratulation You Have <b>C</b> Grade")
}
else {
    document.write("You are failed")
};*/
/***************************************program*1*****************************************/
/*var input = prompt("Enter your Name");
    alert ("Hi! "+input);*/

/***************************************program*2*****************************************/
/*var input = prompt("Enter Your Table Num",5);
n = 1
    document.write("Multiplication table of "+num+"<br>");
    document.write(num+" x 1 = "+num*1+"<br>");
    document.write(num+" x 2 = "+num*2+"<br>");
    document.write(num+" x 3 = "+num*3+"<br>");
    document.write(num+" x 4 = "+num*4+"<br>");
    document.write(num+" x 5 = "+num*5+"<br>");
    document.write(num+" x 6 = "+num*6+"<br>");
    document.write(num+" x 7 = "+num*7+"<br>");
    document.write(num+" x 8 = "+num*8+"<br>");
    document.write(num+" x 9 = "+num*9+"<br>");
    document.write(num+" x 10 = "+num*10+"<br>");
*/
/***************************************program*3*****************************************/
/*var input = prompt("Enter your City");
if ( input === "karachi"){
    alert ("welcome to city of lights");
}*/
/***************************************program*4*****************************************/
/*var m="Good Morning Sir"
var f="Good Morning Ma,am"
var input = prompt("Gender:");
if (input === "male"){
    alert (m);
}
else if (input === "female"){
    alert (f);
}
else {
    alert ("You Get Lost");
}*/
/***************************************program*5*****************************************/
/*var r="vehicles must stop"
var y="vehicles should get ready to move"
var g="vehicles can move now"
var input = prompt("Select Signals colour");
if (input === "red"){
    alert (r);
}
else if (input === "yellow"){
    alert (y);
}
else if (input === "green"){
    alert (g);
}
else {
    alert ("You wrote wrong");
}*/
/***************************************program*6*****************************************/
/*var m = prompt("Please Enter Max Age");
var c = prompt("Please Enter Current Age");
if (m >= c){
    alert ("You Are Welcome");
}
else{
    alert ("Something goes wrong");
}*/
/***************************************program*7*****************************************/
/*var f = prompt("Please input remaining fuel in car (in litres)");
if ( f < 0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert ("Carry On");
}*/
/***************************************program*8*****************************************/
/*var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
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
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}*/
/***************************************program*9*****************************************/
/*var u = +prompt("Marks In Urdu")
var e = +prompt("Marks In English")
var m = +prompt("Marks In Maths")
o = u + e + m
t = 300
p = (o*100)/t
if (p >= 80 && p <= 100 ){
document.write("<h1>Marksheet</h1>"+"<br>"+
            "Total marks"+" = "+t+"<br>"+ 
            "Marks obtained"+" = "+o+"<br>"+
            "Percentage"+" = "+p+"<br>"+
            "Grade"+" = "+"A-One"+"<br>"+
            "Remarks"+" = "+"Excellent"+"<br>");
}
else if (p >= 70 && p <=79 ){
document.write("<h1>Marksheet</h1>"+"<br>"+
            "Total marks"+" = "+t+"<br>"+ 
            "Marks obtained"+" = "+o+"<br>"+
            "Percentage"+" = "+p+"<br>"+
            "Grade"+" = "+"A"+"<br>"+
            "Remarks"+" = "+"Good"+"<br>");
}
else if (p >=60 && p <=69 ){
document.write("<h1>Marksheet</h1>"+"<br>"+
            "Total marks"+" = "+t+"<br>"+ 
            "Marks obtained"+" = "+o+"<br>"+
            "Percentage"+" = "+p+"<br>"+
            "Grade"+" = "+"B"+"<br>"+
            "Remarks"+" = "+"You need to Improve"+"<br>");
}
else {
document.write("<h1>Marksheet</h1>"+"<br>"+
            "Total marks"+" = "+t+"<br>"+ 
            "Marks obtained"+" = "+o+"<br>"+
            "Percentage"+" = "+p+"<br>"+
            "Grade"+" = "+"Fail"+"<br>"+
            "Remarks"+" = "+"Sorry"+"<br>");
}*/
/***************************************program*10*****************************************/
/*var i1 = prompt("Please Input Item No 1")
var i2 = prompt("Please Input Item No 2")
var p1 = +prompt("Please Input Price For Item 1")
var p2 = +prompt("Please Input Price For Item 2")
var o1 = +prompt("Please Input Ordered Quantity For Item 1")
var o2 = +prompt("Please Input Ordered Quantity For Item 2")
var s  = +prompt("Please Input Shipping Charges")
t = p1*o1+p2*o2+s
if (t < 2000){
    document.write("<h1>Shopping Cart</h1>"+"<br>"+
        "Price Of "+i1+" is "+p1+'<br>'+
        "Quantity Of "+i1+" is "+o1+'<br>'+
        "Price Of "+i2+" is "+p2+'<br>'+
        "Quantity Of "+i2+" is "+o2+"<br>"+"<br>"+
        "Shipping Charges "+s+"<br>"+"<br>"+    
        "Total Cost Of Your "+t);
}
else {
    document.write("<h1>Shopping Cart</h1>"+"<br>"+
        "Price Of "+i1+" is "+p1+'<br>'+
        "Quantity Of "+i1+" is "+o1+'<br>'+
        "Price Of "+i2+" is "+p2+'<br>'+
        "Quantity Of "+i2+" is "+o2+"<br>"+"<br>"+
        "Shipping Charges "+s+"<br>"+"<br>"+    
        "Total Cost Of Your "+t+"<br>"+
        "10% Discount "+(t*90)/100);
}*/
/***************************************program*11*****************************************/
/*var s = prompt('GUESS GAME:Select Secret Number (from 1 to 10)')
a = 7
if (s!=7){
    alert('Close enough to the correct answer')
}
else {
    alert('Bingo! Correct Answer');
}*/
/***************************************program*12*****************************************/
/*var n = prompt('Enter a number');
if((n%3)===0){
    alert ('divisible by 3');
}
else{
    alert ('not divisible by 3');
}*/
/***************************************program*13*****************************************/
/*var t1 = prompt('Please Input The Name Of Team 1')
var t2 = prompt('Please Input The Name Of Team 2')
var s1 = prompt('Please Input The Total Scores Of Team 1')
var s2 = prompt('Please Input The Total Scores Of Team 2')
if (s1>s2){
    alert (t1+" has won the game")
}
else if (s1<s2){
    alert (t2+" has won the game")
}
else {
    alert ('The Match has Tie');
}*/
/***************************************program*14*****************************************/
var s = prompt('Enter a string');
var n = +prompt('Enter a number');
var b= prompt('Enter a booleon');
if( s===s){
    alert(s+ " is a string");
}


if(n===n){
    alert(n+ " is a number");

}


if(b===b){
    alert(b+ " is a boolean");

}
/***************************************program*15*****************************************/
/*var a = prompt("Enter your number");
if((a%2)==0){
    alert (a+' is even');
}
else{
    alert (a+' is odd');
}*/
/***************************************program*16*****************************************/
/*var w = prompt('Please Input a Todays Karachi Weather')
if (w > 40){
    alert ('It is too hot outside.')
}
else if(w > 30){
    alert ("The Weather today is Normal.")
}
else if (w > 20){
    alert ('Today’s Weather is cool.')
}
else if (w > 10){
    alert ('OMG! Today’s weather is so Cool.')
}
else {
    alert ('It is too cool outside.')
}*/
/***************************************program*17*****************************************/
/*var f = +prompt('Please Input First Number')
var s = +prompt('Please Input Second Number')
var o = prompt('Please input the Operation Sign +,-,*,/,%')

if (o === '+'){
    alert (f+'+'+s+' = '+(f+s))
}
else if (o === '/'){
    alert (f+'/'+s+' = '+(f/s))
}
else if (o === '*'){
    alert (f+'*'+s+' = '+(f*s))
}
else if (o === '-'){
    alert (f+'-'+s+' = '+(f-s))
}
else if (o === '%'){
    alert (f+'%'+s+' = '+((f*100)/s))
}
else {
    alert ('Something goes wrong');
}*/
/***************************************program*18*****************************************/
/*var d = prompt('Please input a Day Name')
var h = 'sunday'
var s = 'saturday'
var f = 'friday'
var t = 'thursday'
var w = 'wednesday'
var y = 'tuesday'
var m = 'monday'
if (d == m || d == y || d==w || d==t || d==f){
    alert ('It’s a week day”.')
}
else if (d == s){
    alert ('It’s Weekend')
}
else if (d == h){
    alert ('Yay! It’s a holiday')
}
else {
    alert ('Something goes wrong');
}*/
/***************************************program*19*****************************************/
/*var s = prompt ('Please Input your Scores')
if (s > 50){
    alert ('You are passed')
}
else {
    alert ('Try Again');
}*/
/***************************************program*20*****************************************/
/*var i1 = prompt('Please Input Number 1')
var i2 = prompt('Please Input Number 2')
if (i1 > i2){
    alert ('The Greater Number of '+ i1)
}
else if (i1 < i2){
    alert ('The Greater Number of '+ i2)
}
else {
    alert ('Both Numbers are Equals '+i1+' is '+i2);
}*/
/***************************************program*21*****************************************/
/*var l = prompt('Please Enter a Language Code')
if (l == 'es'){
    alert ('Saluton mondo')
}
else if (l == 'fr'){
    alert ('Bonjour le Monde')
}
else if (l == 'sp'){
    alert ('Hola Mundo')
}
else {
    alert ('Hello World')
}*/
/***************************************program*22*****************************************/
/*var a = prompt ('Please Enter a Number')
if (a < 1){
    alert ('It’s a Negative Number')
}
else if (a >= 1){
    alert ('It’s a Positive Number')
}
else {
    alert ('Something goes wrong');
}*/
/***************************************program*23*****************************************/
/*var n = prompt('Please Enter a Noun')
var a = prompt('Please Enter a Number')
if (a > 1){
    alert (a+' '+n+'s')
}
else if (a == 1){
    alert (a+' '+n)
}
else {
    alert ('Something goes wrong');
}*/