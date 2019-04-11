function checkNullDefine (value) {
    let temp = !!value
    // check if sent false

    if (value === 0) {
      return 0
    }
    if (value === true) {
      return true
    }
    if (temp === false ) {
        return false
    }
    return value
}  
class UrlBuilder{
    constructor (url, option){
        this.url = url
    }

    buildUrl() {
        var result = this.url+"?"
        for (var propt in option) {
            if (propt=="sort") {
                if (option[propt] == "true") {
                    result = result + propt + "=asc&"
                }
                else {
                    result = result + propt + "=desc&"
                }
            }
            else {
                if (checkNullDefine(option[propt]) != false) {
                    result = result + propt + "=" + option[propt] + "&"
                }
            }
        }
        return result.substr(0 , result.length - 1)
    }

    changeType(char, tmp) {
        if (char == "?" || char == "&") return 1;
        if (char == "=") return 2;
        return tmp;
    }

    extractUrl() {
        class objUrl {}
        var tmp = 0;
        var str1 = "pathname";
        var str2 = "";
        for (var i = 0; i < url.length; i++) {
            
            tmp = this.changeType(url[i], tmp)

          	if (url[i] == "=") continue

            if (url[i]=="?" || url[i]=="&") {
                if (str1 == "sort") {
                    if (str2="asc") {objUrl[str1]=true}
                    else {objUrl[str1]=false}
                }
                else {
                    objUrl[str1] = str2
                    str1 = ""
                    str2 = ""
                }
            }
            else{
                if (tmp == 0) {
                    str2 = str2 + url[i]
                }

                if (tmp == 1) {
                    str1 = str1 + url[i]
                }

                if (tmp == 2) {
                    str2 = str2 + url[i]
                }
            }

        }
  		objUrl[str1] = str2
  		return objUrl
    }
}