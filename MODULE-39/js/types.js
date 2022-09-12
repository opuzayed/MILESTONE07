let a = 12;
let b = 'opu';
let age = [12, 14, 17];
let student = {age : 12, name : 'mofiz'};
//console.log(typeof a, typeof b, Array.isArray(age), typeof student);

//----------re-assign-value----------
let x = 10;
let y = x;
//console.log(x, y);
y = 12;
//console.log(x, y);

/* -------------8 ways to get undefined-------------
    
    1.variable declared but not assign will give undefined
    2.function declared but no return will give undefined
    3.function parameter not pass will give undefined
    4.if condition return nothing on the right side will give undefined
    5.property that doesn't exist on an object will give undefined.
    6.accessing array element outide of the index rnge will give undefined
    7.delete an element inside an array will give undefined.
    8.where is no value but we set a value then we should use null instead of undefined
 
*/

/* ----------------------truthy or false----------------
                        truthy
                        1.pos or neg number
                        2.any string with ' '
                        3.'0'
                        4.[]
                        5.{}
                        6.check truthy(!!variable name)

                        false
                        1.0
                        2.''
                        3.undefined
                        4.null
                        5.check false(!variabl name)
 */

/* ---------------------difference between (== or ===)-------------------
                            (==)
                            1.value equal kina check Kore
                            2.vitore vitore convert kore it's called coercion
                            (=== most of time use ===)
                            1.value and type check kore equal kina

*/ 

//------------------callback-function------------------------
function greetings(person, name)
{
    //console.log(greetingsHandler());
    //greetingsHandler(name);
    //goodEvening(name);
}
//const name = {name : 'mofiz', age : 54};
function greetingsHandler(name)
{
    //console.log('Hello', name);
}
function goodEvening(name)
{
console.log('good evening', name);
}
greetings(greetingsHandler, 'opu');
greetings(greetingsHandler, 'dipu');
greetings(greetingsHandler, 'topu');
greetings(goodEvening, 'taposh');

//--------------function - arguments------------
function add(a, b, c, d)
{
    //arguments-arraylikeobject
    //array -akare-arguments-paite-hole
    const args = [...arguments];
    console.log(args);
    console.log(arguments[5]);
    let result = a + b + c + d;
    return result;
}
let addValue = add(1,2,3,4,5,6,7,8);
console.log(addValue);
//check function parameter number
console.log(add.length);

//------------------------ primitive type pass by value-------------------
let num1 = 12;
let num2 = 12;
function multifly(a, b)
{
     a = 10;
    let result = a * b;
    return result;
}
console.log(num1);
let multiResult = multifly(num1, num2);
console.log(multiResult);
//------------------another-example(object and array pass by reference)-----------------------
let student1 = {name : 'jalil', partner : 'borsha'};
let student2 = {name : 'sakib', partner : 'biswash'};

function makeMovie(couple1, couple2)
{
    student1.name = 'ononto';
    student2.partner = 'sabnur';
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);
//----------------mcq--------




