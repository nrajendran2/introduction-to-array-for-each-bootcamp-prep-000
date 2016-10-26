var evens = [0, 2, 4, 6, 8, 10]

evens.forEach(even => {
  console.log(`${even} is not odd!`)
})

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

function doToElementsInArray(array,callback){
  evens.forEach(callback)
}
