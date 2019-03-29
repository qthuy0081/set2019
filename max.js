
function max () {
    var lengthArguments = arguments.length
    if (lengthArguments == 0 || lengthArguments > 1) {
        return -1
     }
    for (var i = 0 ; i < lengthArguments;i++) {
        if (!Array.isArray(arguments[i])) {
            return -1
        }
    }
    
    Array = arguments[0]
    var lengthArray = Array.length
    var currentElement
    if (length === 0) { 
        return 0 
    }
    var maxElement = Array[0]
    for (var i = 1; i < lengthArray; i++) {
        currentElement = Array[i]
        if (currentElement > maxElement) {
            maxElement = currentElement
        }
    }
    return maxElement
}
module.export = max