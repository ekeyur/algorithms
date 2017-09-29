var nums = [2, 7, 11, 15];
var target = 9;

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums,target) {
    var compliment_list = {};
    var answer = [];
    for(var i=0;i<nums.length;i++){
        if(str(nums[i]) in compliment_list){
            answer =[compliment_list[nums[i]],nums[i]]
        } else {
            compliment_list[nums[i]] = target - nums[i];
        }
    }
    return answer;
}

console.log(twoSum(nums),target);