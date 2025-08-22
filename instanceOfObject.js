// Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

// There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

 

// Example 1:

// Input: func = () => checkIfInstanceOf(new Date(), Date)
// Output: true
// Explanation: The object returned by the Date constructor is, by definition, an instance of Date.
// Example 2:

// Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
// Output: true
// Explanation:
// class Animal {};
// class Dog extends Animal {};
// checkIfInstanceOf(new Dog(), Animal); // true

// Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.

const isIntanceOfObject = (obj, classFunction) => {
    if(obj === null) return false;
    if(obj === undefined) return false;
    if(typeof classFunction !== 'function') return false;

    const classProto = classFunction.prototype
    let currentProto = Object.getPrototypeOf(obj)

    while(currentProto){
        if(currentProto === classProto) return true
        else currentProto = Object.getPrototypeOf(currentProto)
    }
    return false
}

console.log(isIntanceOfObject(new Date(),Date))
