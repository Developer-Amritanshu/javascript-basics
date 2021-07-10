// 09 - Array Methods

const numbers = ['one','two','three','four','five','six']

console.log(numbers)



// start of the array
numbers.shift() // remove the first element and also returns the number ('one')
console.log(numbers)

numbers.unshift('NEW') // add at the start
console.log(numbers)



// end of the array
numbers.pop() // remove from last
console.log(numbers)

numbers.push('NEW') // add at the end
console.log(numbers)



// at specific posn
numbers.splice(2,1,'NEW') // 2 - at which posn, 1- how many elements to delete, 'NEW' What to put
console.log(numbers)

