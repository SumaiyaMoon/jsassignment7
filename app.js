///Chapter   21-40

//////////////Chapter 21 Changing Case//////////////////

//1
var userInput = "user Input" //can be a prompt
var allLower = userInput.toLowerCase();

//2
var x= "X";
x = x.toLowerCase();

//3
var y="Y";
y = y.toLowerCase();

//4
var l = "Variable";
var m = l.toLowerCase();

//5
var arr = ["var1" , "vAr2"]
var arrVar2 = arr[1].toLowerCase();

//6
var str = "hello";
var uppercaseStr = str.toUpperCase();
alert(uppercaseStr);

//7
var cityName = "kaRacHi";
cityName = cityName[0].toUpperCase() + cityName.slice(1).toLowerCase();

//////////////////Chhap 22-25 Strings//////////////

//1
var sameWords = "captain"
sameWords = sameWords.slice(1,3);

//2
var xyZ = "captain";
var numofCharacters = xyZ.length;
console.log(numofCharacters);

//3
var animal = "elephant";
var seg= animal.slice(2,6);

//4
var string = "abcdefghijklmnopqrstuvwxyz";
var numCharacters = string.length;
var secondVariable = numCharacters;
console.log(secondVariable);

//5
numCharacters = string.length;
var slicedString = string.slice(1, -3);

//6
var text = "To be or not to be.";
var indx = text.indexOf("be"); //3

//7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be"); //16

//8
var text = "go"
var indx = text.lastIndexOf("go");

//9
var  string = "xyz"
var indexNum = 2;
if(string.charAt(indexNum)){
    console.log(string.charAt(indexNum));
}

//10
var c = "abcde"
c.charAt(2); //c

//11
var text = "stringabcde"
var cha = text.charAt(9); //for 10th char index no. is 9

//12
var str = "string";
var x = str.charAt(str.length-1); //indicates 5th(last) index no. and 6th(last) char

//13
var str = "123456"
var cha = str.charAt(4);

//14
var cha3 = str.charAt(2);
// if(str.charAt(2))
if(cha3 == 3){
    console.log(cha3)
}


//15
var str = "123456"
var charArr = [];
for(var i=0 ; i<str.length ; i++){
charArr[i] = str.charAt(i)
// console.log(charArr)
}
console.log(charArr);

//15.2
var reply = "no"
var revisedReply = reply.replace("no","yes");

//16
var str = "1"
var newStr = str.replace("1","one");

//17
var fruit = "banana"
// var y = x.replace("a", "z");
var y = x.replace(/a/g, "z");
// var y = fruit.replace(/a/g, "z");

///////////////Chap 26 Rounding Numbers/////////

//1
var num = 3.6
num= Math.round(num);

//2
var origNum = 32.254;
var roundNum = Math.ceil(origNum);
console.log(roundNum);


//3
var origNum = 32.254;
var roundNum = Math.floor(origNum);
console.log(roundNum);

//4
var origNum = 32.254;
var roundNum = Math.round(origNum);
console.log(roundNum);

//5
var origNum = 0.5;
var roundNum = Math.floor(origNum);
console.log(roundNum);

////////////////////////Chap 27 Random Numbers////////////

//1
var num = parseInt(Math.random()*50);
// console.log(num)

//2
var num = Math.random();

//3
var dice = Math.ceil(Math.random()*6);
// console.log(dice);

//4
var toss = Math.round(Math.random()*1);
// console.log(toss);
if(toss === 1 ){
    console.log("head");
}
else{
    console.log("tail");
}


////////////Chap 28,29 Converting Strings/////////


//1

// parseInt();
// Nuumber();

//2
function strToInt (str){
console.log(typeof str);
str =Number(str);
console.log(str);
console.log(typeof str);
}
strToInt("3");


//3
var str = "7.04";
// var str="abc"; //NaN
var floatValue = Number(parseFloat(str));
console.log(floatValue);

//4
// var str="abc"; //NaN  // false
// parseInt();
// Nuumber();
// var str = "7.04"; //true

var isInteger = !isNaN(parseInt(str));
var isDecimal = !isNaN(parseFloat(str));
console.log(isInteger);
console.log(isDecimal);

//5
// .toString();
str = 123
str = str.toString();
console.log(typeof str);

//6
str = 42
str = str.toString();
console.log(typeof str);

//7
//Yes
str = "3.14"
str = Number(str);
console.log(typeof str);

////////////Chap 30 Controlling the length of decimals////////////////

//1
var num = 3.29255689421036450001211
newNum = num.toFixed(4).toString();

//2
var num = 3.29255689421036450001211
num = num.toFixed(2).toString();
// console.log(typeof num)
num = Number(num);
// console.log(typeof num)

//3
var num = 3.29255689421036450001211;
if(num.toFixed(2).toString().length > 4){}

//4
var num = 3.29255689421036450001211
alert(num.toFixed(2).toString());


////////////////////////Chap 31 - 34 Date & Time/////////////////////

//1
var dObj = new Date();

//2
var dObj = new Date();
var dStr = dObj.toString();
// var dStr = dObj.toDateString();

//3
var d = new Date();
// var dDay = dObj.getUTCDay();
var day = dObj.getDay();

//4
var dayNames = ["Sun","Mon","tues","Wed","Thurs","Fri","Sat"]
alert(dayNames[day]);


//5
var currentDate = new Date();
/////////////////////////////////
var year = currentDate.getFullYear();
var month = currentDate.getMonth();
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var milliseconds = currentDate.getMilliseconds();
////////////////////////////
// var dateTime = {
//     year: currentDate.getFullYear(),
//     month: currentDate.getMonth(),
//     day: currentDate.getDate(),
//     hours: currentDate.getHours(),
//     minutes: currentDate.getMinutes(),
//     seconds: currentDate.getSeconds(),
//     milliseconds: currentDate.getMilliseconds()
//   };


//6
var date_2020 = new Date(2020, 11, 31);

//7
var date_1992 = new Date(1992, 1, 2);

//8
var currentDate = new Date();
var date_1980 = new Date(1980, 0, 1);
var millisec = currentDate - date_1980;

//9
var currentDate = new Date();
currentDate.setFullYear("2000");

//10
var currentDate = new Date();
currentDate.setMonth(0);

//11
//day and date passes accordingly we cannot change the day for a specific date!
// Sat 6 Dec 2003 can never be Sun 6 Dec 2003

//12
function changeMinutes(time) {
    var specificMinutes = parseInt(prompt("Enter the specific minute value:"));
    if (!isNaN(specificMinutes)) {
      time.setMinutes(specificMinutes);
    } else {
      console.log("Invalid minute value.");
    }
  }
  var currentTime = new Date();   
  changeMinutes(currentTime);


//13
function hourstoAdd(time,hours){
    var timeToChange = new Date(time.getTime());
      timeToChange.setHours(timeToChange.getHours()+hours);
     return timeToChange;
}
var currentTime = new Date();
var addedhours = hourstoAdd(currentTime,3);

//14
function ageCalc(birthDate){
    var nowDateObj = new Date();
    var birthDateObj = new Date(birthDate);
    var age = nowDateObj.getFullYear() - birthDateObj.getFullYear();
    var nowMonth = nowDateObj.getMonth();
    var birthMonth= birthDateObj.getMonth();
    if(birthMonth>nowMonth || (birthMonth==nowMonth && birthDateObj.getDate()>nowDateObj.getDate())){
        age--;
    }
return age;
}
var birthDateInp = prompt("Enter Date Of Birth","yyyy-mm-dd")
var yourAge = ageCalc(birthDateInp);
console.log(yourAge);

///////////Chap 35-37 Functions/////////////////

//1
function displayAlert(){
    alert("Displaying Alert")
}

//2
function askName(){
    var inputPrompt = prompt("Enter Name");
    var userName= inputPrompt;
    alert(userName)
}
askName();

//3
function Call2Functions(){
    displayAlert();
    askName();
}
Call2Functions();

//4
function namePrompt(){
    var namePrompt = prompt("Enter Name");
    alert(namePrompt);
}
namePrompt();

//5
var a = "a"
function concat(a,b,c){

}
concat(a, "b", 3);

//6
function conCatinate(name,surname){
var fullName = name+ " " +surname;
console.log(fullName);
}
conCatinate("Sumaiya","Moon");

//7
function multiplication(num1, num2, num3){
    var product = num1*num2*num3;
    console.log(product);
}
multiplication(2,3,6);

//8
// var numArr = [1,2,3,6,4,9,];
// var input = +prompt("Enter number");
// numArr.push(input);
// console.log(numArr);
////Copied
function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; 
    }
  
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum / numbers.length;
  }
  var numbers = [2, 4, 6, 8, 10];
  var average = calculateAverage(numbers);
  console.log(average);     





//9
function sum(a,b){
    var sum = a + b;
    return sum;
}
var sumof2parameters = sum(1,3);
console.log(sumof2parameters);

//10

// same as //8

//11
function returnVal(){
    var g = 2 + 3
    return g;
}
var returnedFn = returnVal();

//12
function letterCount(word){
    var letterCount = word.length
}
letterCount("alphabet");

//13
function setYear(year){
    var nowDate = new Date();
    nowDate.setFullYear(year);
    console.log(nowDate);
}
setYear(2000);

//14
function dOB(dateOfBirth){
    var nowDateObj = new Date();
    var birthDateObj = new Date(dateOfBirth);
    var age = nowDateObj.getFullYear() - birthDateObj.getFullYear();
    var nowMonth = nowDateObj.getMonth();
    var birthMonth= birthDateObj.getMonth();
    if(birthMonth>nowMonth || (birthMonth==nowMonth && birthDateObj.getDate()>nowDateObj.getDate())){
        age--;
    }
return age;
}
var dOfB = dOB("2003-12-06");
console.log(dOfB);


//15
function include(word){
   var array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
   
   if(array.includes(word)){
   return(true);
   }
   else{
    return(false);
   }
}
var presence= include("raza");
console.log(presence);

//16
function repeat(letter){
   
    console.log(letter.repeat(10));
}
repeat("abcde");

//17
function reverse(){
   var array = ['a','b','c','d','e'];
   var arr = array.reverse();
   return arr;
}
var reversedArr = reverse();
console.log(reversedArr);

/////////////////////Chap 38 Local Vs. Global Variables//////////////

//1
function demonstrateLocalVariable() {
    var localVariable = 'This is a local variable.';
    console.log(localVariable);
  }
  demonstrateLocalVariable();

//2
var globalVariable = 'This is a global variable.';

function accessGlobalVariable() {
  console.log(globalVariable);
}

accessGlobalVariable();

//////////////Chap 39, 40 Switch Statements///////////////

//1
function performActionBasedOnVisit(patientVisit) {
    switch (patientVisit) {
      case 'routine':
        console.log("Perform routine checkup.");
        break;
      case 'urgent':
        console.log("Handle urgent medical attention.");
        break;
      case 'follow-up':
        console.log("Conduct follow-up examination.");
        break;
      default:
        console.log("Invalid visit type.");
        break;
    }
  }
performActionBasedOnVisit("urgent");
  
//2
function checkCity(cityName) {
    switch (cityName) {
      case 'Karachi':
        alert('You entered Karachi!');
        break;
      case 'Lahore':
        alert('You entered Lahore!');
        break;
      case 'Islamabad':
        alert('You entered Islamabad!');
        break;
      default:
        alert('City not recognized.');
        break;
    }
  }
checkCity("Undefined");


/////////////////THE END//////////////////////


