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
    greetingsHandler(name);
    goodEvening(name);
}
//const name = {name : 'mofiz', age : 54};
function greetingsHandler(name)
{
    console.log('Hello', name);
}
function goodEvening(name)
{
console.log('good evening', name);
}
greetings(greetingsHandler, 'opu');
greetings(greetingsHandler, 'dipu');
greetings(greetingsHandler, 'topu');
greetings(goodEvening, 'taposh');


