function palindrome(str) {
    const testRegex = /[A-Za-z0-9]/;
    const alphaNumStr = str.split("")
                        .filter(char => testRegex.test(char))
                        .join("");
    
    let reversedWord = "";
    for (let i = alphaNumStr.length - 1; i >= 0; i--){
      reversedWord += alphaNumStr[i];
    }
    
    if(alphaNumStr.toLowerCase() === reversedWord.toLowerCase()) {
      return true;
    }
    
      return false;
    }
    
    palindrome("never odd or even") // returns true
    palindrome("A man, a plan, a canal. Panama"); // returns true
    palindrome("My age is 0, 0 si ega ym."); // returns true