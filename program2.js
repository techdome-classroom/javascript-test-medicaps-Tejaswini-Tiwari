function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer
  const positiveNums = nums.filter(num => num > 0);

    // Create a set to store positive integers
    const numSet = new Set(positiveNums);

    // Start checking from 1 and find the smallest positive integer missing in the set
    let smallestMissing = 1;
    while (numSet.has(smallestMissing)) {
        smallestMissing++;
    }

    return smallestMissing;

}

module.exports = smallestMissingPositiveInteger;
