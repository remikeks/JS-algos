function rot13(str) {
    const alphabetRegex = /[A-Za-z]/
    let originalStr = ""
    for (let i = 0; i < str.length; i++) {
      if (!alphabetRegex.test(str[i])) {
        originalStr += str[i]
      }
    
      else if(str.charCodeAt(i) - 13 < 65) {
    originalStr +=  String.fromCharCode((str.charCodeAt(i) - 13 + 26))
      }
  
  else{
      originalStr += String.fromCharCode((str.charCodeAt(i) - 13))
    }
    }
    console.log(originalStr)
    return originalStr;
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") // returns "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."