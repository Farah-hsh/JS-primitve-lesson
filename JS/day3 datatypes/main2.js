
// day4 completing lesson datatype

// conversion types


let Str2=String();
let Num=Number();
let Bool=Boolean();


// converting ways:

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 1   converting to string
// string to string
const Str= "text";
const StrToStr2=String(Str);
console.log(`${typeof Str} : ${Str}`);
console.log(`${typeof StrToStr2}:${StrToStr2}`);



// number to string
const num_1=20;
const numToStr2= String(num_1);
console.log(`${typeof num_1}:${num_1}`);
console.log(`${typeof numToStr2}: ${numToStr2}`);


// boolean to string
const bool_1=true;
const BoolToStr2=String(bool_1);
console.log(`${typeof bool_1}:${bool_1}`);
console.log(`${typeof BoolToStr2}:${BoolToStr2}`);



// undefined to string
const un=undefined;
const unToStr2=String(un);
console.log(`${typeof un}:${un}`);
console.log(`${typeof unToStr2}:${unToStr2}`);


// null to string
const null_1= null;
const null_1ToStr2=String(null_1);
console.log(`${typeof null_1}:${null_1}`);
console.log(`${typeof null_1ToStr2}:${null_1ToStr2}`);


// Bigint to string
const big= 100n;
const bigToStr2=String(big);
console.log(`${typeof big}:${big}`);
console.log(`${typeof bigToStr2}:${bigToStr2}`);

// end of string converting
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2   converting to numbers

// number to number
const N_um=4;
const N_umToNum= Number(N_um);
console.log(`${typeof N_um}:${N_um}`);
console.log(`${typeof N_umToNum}:${N_umToNum}`);


// string to number ("text")
const string_1="11";
const string_1ToNum= Number(string_1);
console.log(`${typeof string_1}:${string_1}`);
console.log(`${typeof string_1ToNum}:${string_1ToNum}`)  // NaN because its a string cannot be changed


// bigint to number
const bigint_3= 10000n;
const bigint_3ToNum= Number(bigint_3);
console.log(`${typeof bigint_3}:${bigint_3}`);
console.log(`${typeof bigint_3ToNum}:${bigint_3ToNum}`);



// boolean to number
const boolean=false;
const booleanToNum=Number(boolean);
console.log(`${typeof boolean}:${boolean}`);
console.log(`${typeof booleanToNum}:${booleanToNum}`);



// undefined to number
const un2=undefined;
const un2ToNum=Number(un2);
console.log(`${typeof un2}:${un2}`);
console.log(`${typeof un2ToNum}:${un2ToNum}`);


// null to number
const null3=null;
const null3ToNum=Number(null3);
console.log(`${typeof null3}:${null3}`);
console.log(`${typeof null3ToNum}:${null3ToNum}`);

// end of number converting
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 3   converting to boolean

// boolean to boolean
const booleann=false;
const booleannToBool= Boolean(booleann);
console.log(`${typeof booleann}:${booleann}`);
console.log(`${typeof booleannToBool}:${booleannToBool}`);

// num to boolean 0
const numbers=0;
const numbersToBool= Boolean(numbers);
console.log(`${typeof numbers}:${numbers}`);
console.log(`${typeof numbersToBool}:${numbersToBool}`);


// number to boolean any number
const numberss2=20;
const numberss2ToBool= Boolean(numberss2);
console.log(`${typeof numberss2}:${numberss2}`);
console.log(`${typeof numberss2ToBool}:${numberss2ToBool}`);


// undefined to boolean
const unnn=undefined;
const unnnToBool= Boolean(unnn);
console.log(`${typeof unnn}:${unnn}`);
console.log(`${typeof unnnToBool}:${unnnToBool}`);


// null to boolean
const null6= null;
const null6ToBool= Boolean(null6);
console.log(`${typeof null6}:${null6}`);
console.log(`${typeof null6ToBool}:${null6ToBool}`);

// string to boolean
const string9= "text1";
const string9ToBool= Boolean(string9);
console.log(`${typeof string9}:${string9}`);
console.log(`${typeof string9ToBool}:${string9ToBool}`);


// empty to boolean (" ")
const empty="";
const emptyToBool= Boolean(empty);
console.log(`${typeof empty}:${empty}`);
console.log(`${typeof emptyToBool}:${emptyToBool}`);




// end of boolean converting
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//  4  automatic conversion

// (22 +"1")
let math= 22 +"1";

// (22 -"1")
let math2= 22 -"1";
 
console.log(math);
console.log(math2);


// end of automatic conversion
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

























