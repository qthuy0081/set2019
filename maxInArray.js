function max (Array) {
    var length = Array.length
    var currentElement
    if (length === 0) { 
        return 0 
    }
    var maxElement = Array[0]
    for (var i = 1; i < length; i++) {
        currentElement = Array[i]
        if (currentElement > maxElement) {
            maxElement = currentElement
        }
    }
    return maxElement
}




function maxInArray() {
    var length = arguments.length
    var currentArray
    if (length === 0) { 
        return 0 
    }
    var maxCurrent = max(arguments[0])
    for (var i = 1; i < length;i++) {
        currentArray = arguments[i]
        var maxOfCurrent = max(currentArray)
        if (maxCurrent < maxOfCurrent) {
            maxCurrent = maxOfCurrent
        }
    }
    return maxCurrent
    
}