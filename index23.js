alert("om namah shivaay")


// 23 dec assignments
// check from the object.js file g_class.give list of students which have marks greater than or equal to 85

var g_class = {
  'name': "Dec21WebFundamentals",
  'instructor': {
    'name': "Aayush Sinha",
    'subject': "MERN"
  },
  'students': [{
      'name': 'Aniket Verma',
      'marks': 100,
    },
    {
      'name': 'Anshul',
      'marks': 89,
    },
    {
      'name': 'Lasya',
      'marks': 77,
    },
    {
      'name': 'Ayush',
      'marks': 70,
    },
    {
     'name': 'Gourav',
     'marks': 90,
    },
    {
     'name': 'Niladri',
     'marks': 85,
    },
    {
     'name': 'Ugrasen',
     'marks': 87,
    }
  ],
};

for(i=0;i<g_class.students.length;i++) {
if(g_class.students[i].marks >= 85) {
console.log(g_class.students[i].name)}
}









//program to print list of all even number less than or equal to n(n is input taken from user usin prompt)
/*user se no. input krenge prompt ki help se maan lo 10 kiya
parse int karke usko integr men bnayenge
for(i=0;i<=n;i++){
if(i%2 == 0 ){
console.log(i)*/
/*
var n = prompt("enter your number");
var n = parseInt(n);
for(i=0;i<=n;i++){
if(i%2 == 0) {
console.log(i); 
}}*/

//program to enter a num from user and check if its is prime or not
/* sbse pehle no. input karaya prompt se
uske baad parseint() method ka use kiya


50 = 50%2=0
50\2 = 25*/
//program to check whether the entered number is prime or not
var num = prompt("enter the number");
var num = parseInt(num);
for(i=2;i<num;i++) {
if(num%i == 0){
alert("it is not prime");}
else{
alert("it is the prime number");
}}




//program to find the factors of a num entered by thge user
/*
var number = prompt("enter the number");
var number = parseInt(number);
for(i=2;i<=number;i++){
if(number%i == 0){
console.log(i);}}*/





	