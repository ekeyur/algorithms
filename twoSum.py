

#  Because nums[0] + nums[1] = 2 + 7 = 9,
#  return [0, 1].

ARR = [2, 7, 11, 15]
tar = 9

def twosum(nums, target):
    storage = {}
    for i in range(0, len(nums)):
        if  target - nums[i] in storage:
            return [storage[target-nums[i]],i]
        else:
            storage[target-nums[i]] = i

print twosum(ARR, tar)
