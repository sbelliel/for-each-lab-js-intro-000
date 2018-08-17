function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
var animals = ["dog", "cat", "rhino"];
var copy = [];
animals.forEach(function callback(element) {
  copy.push(element)
})
console.log(copy)
}

function doToArray(array, callback) {
 array.forEach(function(element) {
callback(element)
 })
}
