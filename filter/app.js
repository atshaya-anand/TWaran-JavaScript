// implementation of filter()

const numbers = [1, 2, 3, 4, 5];

// filter() method creates a new array filled with elements that pass a test provided by a function.
function filter(list, func){
    var newList = [];
    for (let i = 0; i < list.length; i++){
        if (func(list[i])){
            newList.push(list[i]);
        }
    }
    return newList;
}

// call back function to return only odd numbers
function isOdd(num){
    if (num % 2 != 0){
        return true;
    }else{
        return false;
    }
}

// displays a new array that containing only odd numbers from old array
const newnumbers = filter(numbers, isOdd);
console.log(newnumbers);