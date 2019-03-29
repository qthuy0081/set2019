function arrayMax () {
    var len = arguments.length

    var i = 0;

    var sumMax = -Infinity;

    for (i; i < len; i++) {

        var result = elementInArraySum(arguments[i])

        if (sumMax < result){
            sumMax = result
        }
    }

    return sumMax;
}