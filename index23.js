alert("om namah shivaay")


// 23 dec assignments
// ASSIGNMENT 1 ->check from the object.js file g_class.give list of students which have marks greater than or equal to 85

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









// ASSIGNMENT 2 --> program to print list of all even number less than or equal to n(n is input taken from user usin prompt)
/*
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

// ASSIGNMENT 3 -->program to enter a num from user and check if its is prime or not

//program to check whether the entered number is prime or not
/*
var num = prompt("enter the number");
var num = parseInt(num);
for(i=2;i<num;i++) {
if(num%i == 0){
alert("it is not prime");}
else{
alert("it is the prime number");
}
*/








	