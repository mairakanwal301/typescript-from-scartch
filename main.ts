//print hellow world
console.log("hello world");

// value stored in variable ya declearation of variable
let message = "hello world";
console.log(message);

// // let keyword can reassignable  and can be changed their value..
let userName = "maira";
userName = "kanwal";
userName = "zona khan"

// // const keyword is fixed the value and cannot changed thier value.. const keyword's value decleartion is not reassignable.
const fruitName = "mango";
// fruitName=mango... (its  througn an error here)
console.log(fruitName);


// // phle block scope k console.log ko prority degi typescript phr koi or sa console ko degi 
let age = 50
if (true) {
    let age = 16
    console.log("age:", age);

}
console.log(age);

// // data types  / premitive type
let user_name = "maira kanwal";    //string
let dob = 56                      // number
let isLeadFaculty = true        //boolean
let favourite_fruit;           // undefined
                            // null
// // variable k andar variable decleared krna .. means ik daraz k andar ham dusri daraz m value stored krhy hain.                        
let friend_name = "zainab"
let friend = friend_name + " khan "; // value k andar dusri value declear krna.
console.log("My friend name is:", friend);   // here we do concatenation
console.log(`My friend name is: ${friend_name}`);   // here we use template litral

// // non primitive types
let obj ={} ;  //object
let array= [];   // array use for multiole item like listing
function greetings(){

}               // function
const wishing = ()=>{

}               //arrow  function
 
// // strong typing
let faceComplextion: string = "fair"; // jisme type bhi sath btadi jae
console.log(faceComplextion);

// // type inference
let faceComplextion1 = "fair"; 
console.log(faceComplextion1);


// 


//  arrays.

let arr= ["maira", "zainu","shazu","ali"]
console.log(arr.length) //you can use index for the accessing of array values and index start with 0.
console.log(arr[3])


//ERRORS: 
// syntax error:reserve keyword use krne ko ham sytax error kahenge..for example :let,const,function etc
//  typing error: agr typing me ya type declearation me mistake ho to typing error kehlaega.
// assignablity error: agr ap blocked scope k bahar koi value console kren jbk apka wo variable block scope m decleared hai to ye assignablity error kehlaega.











