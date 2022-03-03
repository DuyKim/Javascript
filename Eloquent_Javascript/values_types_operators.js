NaN == NaN // false

// conditional operator
true ? 1 : 2
false ? 1 : 2

// type coercion
// Implicit vs explicit coercion

// implicit type coercion is a double edge sword.


/**
 * the first rule to know is there are only three types of conversion in Js
 *three types of coercion
 * to string
 * to boolean
 * to number
 **/

 /**
  * Secondly, conversion logic for primitives and objects works differently, but both primitives and objects can only be converted in those three ways
  **/

 // Let's start with primitives first

 // String conversion
    // to explicitly convert values to a string apply the String() function.
    // implicit coercion is triggered by the binary + operator, when any operand is a string
    String(123) // '123'
    123 + "" // "123"

    // Symbol coversion is a bit tricky, because it can only be converted explicitly, but not implicitly
    String(Symbol('my symbol')) // 'Symbol(my symbol)'
    "" + Symbol('my symbol') // TypeError is thrown

// Boolean conversion
    // to explicitly convert a value to a boolean apply the Boolean() function.
    // Implicit conversion happens in logical context, or is triggered by logical operator ( || && !)

    Boolean(2) // true
    if(2) {}
    !!2 // true
    2 || 'hello' // hello

    // Note: Logical operators such as || and && do boolean conversions internally, but actually return the value of original operands, even if they are not boolean

    // list of falsy values
    Boolean('')
    Boolean(0)
    Boolean(-0)
    Boolean(NaN)
    Boolean(undefined)
    Boolean(null)
    Boolean(false)
    // any value that is not in the list is converted to true, including object, function, Array, Date, user-defined type and so on.

// Numeric conversion
    // note, that binary + does not trigger numeric conversion, when any operand is a string.
    // unary + operator
    // loose equality operator == (incl !=). note that == dose not trigger numeric conversion when both operands are strings.

    Number('123')
    +'123'
    123 == '123' // true
    123 == '456' // false
    4 > '5' // false
    5 / null // Infinity
    true | 0

    Number(null) // 0
    Number(undefined) // NaN
    Number(true) // 1
    Number(false) // 0
    Number(" 12 ") // 12
    Number("-12.32") // -12.32
    Number("\n") // 0
    Number("") // 0
    Number(" 12s ") // NaN
    Number(123) // 123

    // when comparing a number to a string, try to convert the string to a number, when converting a string to a number, the engine first trims leading and trailing whitespace, \n, \t characters, returning NaN if the trimmed string does not represent a valid number. If string is empty, it returns 0.
    // null and undefined are handled differently: null becomes 0, whereas undefined becomes NaN
    Number(Symbol('my symbol')) // TypeError is thrown
    +Symbol('123') // ....

    /**
     * there are 2 special rules to remember
     * 1. when applying == to null or undefined, numeric conversion does not happen. null equals only to null or undedined, and does not equal to anything else.
     * 2. NaN does not equal to anything even itself
    **/


    true + false // 1
    12 / "6" // 2
    "number" + 15 + 3 // "number153"
    15 + 3 + "number" // "18number"
    [1] > null // true Number([1]) > Number(null) 1 > 0 true
    "foo" + +"bar" // 'fooNaN'
    'true' == true // false
    false == 'false' // false
    null == '' // false
    !!"false" == !!"true" // true
    ['x'] == 'x' // true
    //[] + null + 1 // 'null1'
    [1, 2] == [1, 2] // false
    {} + [] + {} + 1 // 'objectobject1'
    !+[]+[]+![] // !+"" + "" + !"" => !false + "" + flase => "truefalse"
    new Date(0) - 0 // 0
    new Date(0) + 0 // 'sfasd0'


// Equality ==

// description

// the equality operators (== and !=) use the Abstract Equality Comparison Algorithm to compare two operands. This can be roughly summarized as follows: 
/**
 * if the operands are both objects, return true only if both operands reference the same object.
 * if one operands is null and the other is undedfined, return true
 * if the operands are of different types, try to convert them to the same type before comparing:
 * 1. when comparing a number to a string, try to convert the string a numeric value.
 * 2. if one of the operands is a boolean, convert the boolean operand to 1 if it is true and 0 if it is false.
 * 3. if one of the operands is an object and the other is a number or a string, try to convert the object to a primitive using the object's valueOf() and toString() methods.
 * If the opearands have the same type, they are compared as follows: 
 * 1. String: return true only if both operands have the same chacracters in the same order.
 * 2. Number: return true only if both operands have the same value. If either operand is NaN, return false.
 * 3. Boolean: return true only if operands are both true or both false.
*/

"true" == true // NaN == 1 => false
"" == true // 0 == 1 => false
"" == false // 0 == 0 => true
[1] == 1 // true

0 == null // false
0 == undefined // false
0 == !!null // 0 == !true => 0 == false => 0 == 0 => true
0 == !! undefined // true
const number1 = new Number(1);
const number2 = new Number(1);
number1 == '1' // true
number1 == 1 // true
number1 == number2 // false

const string2 = String('string') // typeof string2 // string
const string3 = new String('string') // typeof string3 // object
string2 == string3 // string == string3.toString() // true

const date = new Date();
const s = d.toString();
date == s // date.toString() == s // true

// Strict equality ===
/**
 * Description
 * 
 * If the operands are of different types, return false.
 * If both operands are objects, return true only if they refer to the same object.
 * If both operands are null or both operands are undefined, return true.
 * If either operand is NaN, return false.
 * Otherwise, compare the two operand's values:
 * 1. Numbers must have the same numeric values, +0 and -0 are considered to be the same value.
 * 2. Strings must have the same characters in the same order.
 * 3. Booleans must be both true or both false.
*/

null === undefined // flase
null === null // false
NaN === NaN // false