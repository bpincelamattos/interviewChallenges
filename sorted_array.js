// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, 
// with the first two elements of nums being 1 and 2 respectively. 
// It doesn't matter what you leave beyond the returned length.

var removeDuplicates = function(nums) {
//retur 0 if the given length is empty
if(nums.length === 0) return 0;

//Declare 2 pointers i and j and set them to 0 and 1, respectively
//j is going to loop over the entire array and i will place the non-duplicate element
let i = 0;
let j = 1;

//use a while loop to check if the number with index j is equal to the number with index i
while (j < nums.length){
    if(nums[j] !== nums[i]){
        //if not, increment i by 1 and copy the value of the number with index j to the element
        //at the index i and then increment j by 1
        i++;
        nums[i] = nums[j];
        j++
    // if they are increment j by 1 to skip the ducplicate number
    } else j++

}

//after the loop return the length of the unique numbers which is i+1

return i + 1


};
let nums = [0,0,1,1,1,2,2,3,3,4]
let result = removeDuplicates(nums); 
console.log(result)
