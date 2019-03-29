function maxInArray(){
    var max = require("max.js")
    var n = arguments.length, result = max(arguments[0])
    var i = 1
    for (i; i < n; ++i){
        var maxArguments = max(arguments[i])
        if (result < maxArguments){
            result= maxArguments
        }
    }
    return result;
}