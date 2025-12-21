function filteredList(arr){
    return arr.filter(item => typeof item === 'number')
}
console.log(filteredList([1,2,3,4,5,'a','b','c','d','e']))