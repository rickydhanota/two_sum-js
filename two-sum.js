//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Output: Because nums[0] + nums[1] == 9, we return [0, 1]

function twoSum(arr, target){
    for (var i=0; i<arr.length; i++){
        for (var j=0; j<arr.length; j++){
            if(i == j){
                continue;
            }
            else if(arr[i] + arr[j] == target){
                return [i,j];
            }
        }
    }
}
console.log(twoSum([3,3], 6));