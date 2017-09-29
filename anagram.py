def anagram(str1, str2):
    str1 = str1.replace(' ','').lower() 
    str2 = str2.replace(' ','').lower()
    
    # Edge Case
    if len(str1) != len(str2):
        return False
    counter = {}
    
    # frequency of each letter in str1
    for letter in str1:
        if letter in counter:
            counter[letter] += 1
        else:
            counter[letter] = 1
            
    # decrease the frequency of each letter in str2        
    for letter in str2:
        if letter in counter:
            counter[letter] -= 1
        else:
            counter[letter] = 1
    
    for letter in counter:
        if counter[letter] != 0:
            return False
    
    return True        
            

print anagram('clint eastwo2d','old west action')    