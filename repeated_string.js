/*
 * Complete the 'repeatedString' function below.
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    //repeating the string untill the length is equal to n ITS NOT EFFICIENT.
    //better approach, check how many time the string fits in the n number

    //create a variable to track how many 'a' there are in the string.
    let counter = 0;
    
    //find how many strings fit inside of the new lenght (if the new length is 10 character and your
    //current string has 2 character if fits 5 times in the new length = 10/2)
    let repetition =Math.floor(n/s.length);

    //check the main string to see how many 'a' are in there
    for (let i=0; i < s.length; i++){
        if(s[i] === 'a'){
            counter++;
        }
    }
    //multiple the amount of 'a' by the number of times that the whole string will repeat
    //counter = counter * repetition
    counter *= repetition;

    //check to see if the new string has any character left out of repetition (because was not a whole string)
    //subtract from the new strin length the current string length * how many times will repeat
    let residualString = n - s.length * repetition;
    //iterate over the string for number of times according with the resiidualString
    for (let i=0; i < residualString; i++){
        console.log(s[i])
        if(s[i] === 'a'){
            counter++;
        }
    }
    return counter

}

let result = repeatedString('aba', 10) //abaabaabaa
console.log(result);