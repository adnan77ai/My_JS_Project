num = [13, 50, 56, 4, 53, 15]
console.log(num.length)

// a = delete num[0]
// console.log(num)
// console.log(num.length) // Lenght of array doesn't change after using delete function

num_more = [25, 30, 52, 17, 19]
newArray = num.concat(num_more)
console.log(newArray)

function compare(a,b){
    return (a-b)
}
num = [13, 50, 56, 4, 53, 15]
num.sort(compare)
console.log(num)

num.reverse()
console.log(num)

num_more = [25, 30, 52, 17, 19, 16, 24, 35, 47]
deletedValues = num_more.splice(2, 4, 101, 102, 103, 108)
console.log(num_more)
console.log(deletedValues)

