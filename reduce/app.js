// implementation of reduce()

const numbers = [1, 20, 3, 4, 10];

// reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
function reduce(list, func){
    var total = 1;
    for (let i = 0; i < list.length; i++){
        total = func(total, list[i]);
    }
    return total;
}

// callback function that multiplies the array elements
function myfunc(total, current){
    return total * current;
}

//displays the product of array elements
const result = reduce(numbers, myfunc);
console.log(result);