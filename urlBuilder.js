
class UrlBuilder{
    constructor (url, option){
        this.url = url
        this.option = option
    }
    static checkNullDefine (value) {
        let temp = !!value // falsy value ! Cannot tell if it is a boolean type
    
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
                let checkValidProperties = UrlBuilder.checkNullDefine(this.option[propt])
                if (checkValidProperties != false) {
                    result = result + propt + "=" + this.option[propt] + "&"
                }
            }
        }
        return result.substr(0 , result.length - 1)
    }

    static changeType(char, tmp) {
        if (char == "?" || char == "&") return 1;
        if (char == "=") return 2;
        return tmp;
    }

    extractUrl() {
        let objUrl = {}
        var tmp = 0;
        var str1 = "pathname";
        var str2 = "";
        for (var i = 0; i < this.url.length; i++) {
            // no reset tmp
            tmp = UrlBuilder.changeType(this.url[i], tmp)

          	if (this.url[i] == "=") continue // ??????

            if (this.url[i]=="?" || this.url[i]=="&") { //bug ???
                if (str1 == "sort") {
                    if (str2 == "asc") {objUrl[str1]=true}
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
                    str2 = str2 + this.url[i]
                }

                if (tmp == 1) {
                    str1 = str1 + this.url[i]
                }

                if (tmp == 2) {
                    str2 = str2 + this.url[i]
                }
            }

        }
  		objUrl[str1] = str2
  		return objUrl
    }
}

// let option = {
//     name : 'dasfdasf',
//     sort : true,
//     adfasdf: 'fdfdfdf'
//   }
//   let anotherBuilder = new UrlBuilder ('http://uptrade.com', option)

//   let output = anotherBuilder.buildUrl()

//   let aBuilder = new UrlBuilder(output)

//   let aa = aBuilder.extractUrl()

//   console.log (aa)