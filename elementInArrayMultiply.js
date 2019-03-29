function elementsInArrayMultiply (array) {
  if(Array.isArray() == false) {
    return null
  }  
  var length = array.length
    if (length == 0) {
      return null
    }
    var result = 1
    for (let i = 0; i < length; i++) {
      result = result * array[i]
    }
    return result
}