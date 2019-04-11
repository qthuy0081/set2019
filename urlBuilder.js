class UrlBuilder{
    constructor (url, option){
        this.url = url
        this.option = option
    }

    buildUrl() {
        var result = this.url+"?"
        for (var propt in this.option) {
            if (propt=="sort") {
                if (this.option[propt] == "true") {
                    result = result + propt + "=asc&"
                }
                else {
                    result = result + propt + "=desc&"
                }
            }
            else {
                result = result + propt + "=" + this.option[propt] + "&"
            }
        }
        return result.substring(0, result.length - 1)
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