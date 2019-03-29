function elementsInArraySum (Array) {
    var i = 0

    var sum = 0

    var len = Array.length

    for (i; i < len; i++) {
        sum = sum + Array[i]
    }

    return sum
}

module.exports = elementsInArraySum