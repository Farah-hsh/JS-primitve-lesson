// day3 DataTypes lesson
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// primitive includes types like: boolean, symbols, null, undefined, number, bigint, string




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//  1 boolean 
let test1= false;
let test2= true;

console.log(test1);
console.log(test2);
console.log(typeof test1);
// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//  2 symbols
let id=Symbol(4);

console.log(id);
console.log(typeof id);
// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 3 null

let test5= null;
console.log(test5);
console.log(typeof test5);

// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 4 undefined

let test6;
console.log(test6);
console.log(typeof text6);

// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 5 number


// integer
let x=100;
console.log(x);
console.log(typeof x);


// double
let x2=50.5;
console.log(x2);
console.log(typeof x2);

// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 6 bigint

let big1= 1234567890n;
console.log(big1);
console.log(typeof big1);

// can we do mathmatical eqautions with numbers and bigint? no they have to be in the same datatype
// let x3= 20n -10;
// console.log(x3);

// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>






// challenge

// integer
let tuwaiq=10;
console.log(tuwaiq);
console.log(typeof tuwaiq);



// bigint
let tuwaiq2=10000n;
console.log(tuwaiq2);
console.log(typeof tuwaiq2);

// done




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//  7 string 

let farah="girl";
console.log(farah);
console.log(typeof farah);

// using number inside a string will make its datatype a string(anything between qoutations is considered a string)
let age="15";
console.log(age);
console.log(typeof age);

// using single qoutation inside a double qoutation
let texts="hello from'javascript'bootcamp";
console.log(texts);
console.log(typeof texts);

// using double qoutation inside a single qouation
let texts1='hello from"javascript"bootcamp';
console.log(texts1);
console.log( typeof texts1);

//another way to do like the 2 previous practices
let f= "web\ 'design\' development";
console.log(f);
console.log(typeof f);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// tring eqautions with string

let path="windows"-"windows";
console.log(path); // the interpreter tries to see them as numbers because of the minus sign but they are a string so it doesn't work

let test9= "100"-"10";
console.log(test9);   // the interpreter will see them as number and will do the math
console.log(typeof test9)


let test0="100"+"10";
console.log(test0);  // will join them without adding
console.log(typeof test0)



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// interpolation

let country="riyadh";
let continent="asia";

console.log(`${country} located in ${continent}`)



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// string properties

// string length
let str="java script language";
console.log(str.length);
// string index
console.log(str.charAt(3));
// string slice
console.log(str.slice(0,4));
// string split
console.log(str.split(" ", 2));

// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// challenge 2

let str1=" java script language";

console.log(str.length);
console.log('test',length);


console.log(str.charAt(0));
console.log('abc'.charAt(1));
console.log(str.slice(0,4));
console.log('test'.slice(1,3));


console.log(str.split(' '));
console.log('192.168.1.1'.split('.'));








