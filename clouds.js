
/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 * It is guaranteed that clouds c0 and c(n-1) are ordinary-clouds
 * [0, 0, 0, 1, 0, 0]
 */

function jumpingOnClouds(c) {
    // Write your code here
    //create variable to check how many jumps were taken
    let jumps = 0;
    //create a variable to check the array index
    let i = 0;

    //check the elements in the array while i is less then the array length
    while(i < c.length - 1){
        //check to see if cloud + 2 index is 0
        if (c[i + 2] === 0 && i + 2 < c.length){
            //if its, increment the jumps variable and increment the index by 2
            jumps++;
            i += 2
        } else {
            // if it's not 0 increment jumps and increment index only by 1
            jumps++;
            i++;
        }
    }
    return jumps
}

let result = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]); 
console.log(result);