// REVERSE EVERY WORD IN A STRING...................................

const data="Hello i am vikas"

// function reverseEveryWord(str){
//     let supportStr="";
//     let finalstr="";
//     for(let i=0;i<str.length;i++){
//         if(str[i]==" " || i==str.length-1){
//         let newValue=supportStr.split('').reverse().join("")
//         newValue+=str[i]
//           finalstr+=newValue;
//           supportStr="";
//         }else{
//             supportStr+=str[i]
//         }
//     }
//   return finalstr; 
// }

// using Reduce Method............
function reverseEveryWord(str) {
    return str.split('').reduce((acc, char, index, array) => {
        if (char === ' ' || index === array.length - 1) {
            // If the character is a space or the last character, reverse the accumulated word
            let reversedWord = acc.currentWord.split('').reverse().join('');
            // Append the reversed word and the space (or the last character if it's not a space)
            acc.finalStr += reversedWord + char;
            // Reset the current word accumulator
            acc.currentWord = '';
        } else {
            // Accumulate characters for the current word
            acc.currentWord += char;
        }
        return acc;
    }, { currentWord: '', finalStr: '' }).finalStr;
}


console.log(reverseEveryWord(data));
