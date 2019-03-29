function arraySum() {
    var len = arguments.length

    var i = 0;

    var sumAll = 0;

    for (i; i < len; i++) {
        sumAll = sumAll + elementInArraySum(arguments[i])
    }

    return sumAll;
}

module.exports = arraySum