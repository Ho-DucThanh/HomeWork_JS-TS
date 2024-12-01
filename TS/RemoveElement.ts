var removeElement_C1 = function (nums: number[], val: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
};

var removeElement_C2 = function (nums: number[], val: number): number[] {
  let index = nums.indexOf(val);
  while (index !== -1) {
    nums.splice(index, 1);
    index = nums.indexOf(val);
  }

  return nums;
};

console.log(removeElement_C2([3, 2, 2, 3], 3));
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
