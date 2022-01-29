//  implementation of map()

const numbers = [10, 20, 30, 40, 50];

// map() creates a new array from calling a function for every array element.
function map(list, func){
    var newList = [];
    for (let i = 0; i < list.length; i++){
        newList.push(func(list[i]));
    }
    return newList;
}

// function to be called for every array element
function multipliesBy2(num){
    return num * 2;
}


// displays a new array containing values of old array multiplied by 2
const newnumbers = map(numbers, multipliesBy2);
console.log(newnumbers);