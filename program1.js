function longestSubstring(s) {
    // Implementation of longestSubstring function
    let longest = 0; 
    let start = 0; 
    let charIndexMap = {}; 
    
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        
        
        if (charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }
        
        
        charIndexMap[currentChar] = end;
        
        
        longest = Math.max(longest, end - start + 1);
    }
    
    return longest;

}

module.exports = { longestSubstring };



