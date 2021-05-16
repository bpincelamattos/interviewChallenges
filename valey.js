/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here

    //create a variable to check the level of the sea and a counter to check
    //how many time you reached the sea level
    let level = 0;
    let seaLevel = 0;

    //iterate of each element of the array
    for (let element of path){
        //check to see if the element is D OR U
        if(element === 'D'){
            //if its D subtract 1 to the level varible
            level -= 1;
        } else if (element === 'U'){
            //if its U add 1 to the level variable
            level += 1;
        }
        //now check if you are in the level of the sea FROM A DOWNHILL
        if(element === 'U' && level === 0){
            seaLevel += 1;
        }      
    }
    return seaLevel;
    
}

let result = countingValleys(12, 'DDUUDDUDUUUD')
console.log(result);