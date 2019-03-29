
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

module.export = max