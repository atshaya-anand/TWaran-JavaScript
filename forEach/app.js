// implementation of forEach()

const numbers = [10, 20, 30, 40, 50];
var sum = 0;

// forEach() method calls a function for each element in an array.
function forEach(list, func){
    for (let i = 0; i < list.length; i++){
        func(list[i]);
    }
}

// callback function that adds the array elements
function addListValues(num){
    sum += num;
}

// displays the sum of array element
forEach(numbers, addListValues);
console.log(sum);