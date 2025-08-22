const isPalindrome = (arg) => {
     const argInArray = arg.toString().split('')
     const reversedArray = [...argInArray].reverse()

     const isMatch = argInArray.map((ele,i) => ele == reversedArray[i])
     const isFalse = isMatch.filter((ele) => ele === false)
     
     if(argInArray.length <=0 || arg<0 || isFalse.length>0) return false;
     return true;

}



// console.log(isPalindrome(1000021))      
console.log(isPalindrome(1221))      