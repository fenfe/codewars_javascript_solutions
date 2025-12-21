// You will be given a string of numbers and letters mixed up, you have to return 
// all the numbers in that string in the order they occur.
// make sure you return numbers
// input = [r3f1lw3]
// output = [313]

/////// pseudocode ///////////////
// go through the arr and check
// if item is the same as 0 until 9
// if yes push item into new arr 'onlyNums'
// return onlyNums
//////// solution Using the filter method ////////////
function filterNums2(str2){
    const onlyNums2 = str2.split('').filter((item) => item >= "0" && item <= "9" );
    return Number(onlyNums2.join(''))
}

// same solution without the filter method
function filterNums (str){
    let onlyNums = [];
    for(let item of str){
        if(item >= "0" && item <= "9"){
             onlyNums.push(item)
        }
    }
    return Number(onlyNums.join(""));
}
console.log(filterNums2('r3f1lw3'))
console.log(filterNums2('m41n5t4y'))


