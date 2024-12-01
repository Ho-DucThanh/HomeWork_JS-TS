var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums;
};

var removeDuplicates = function (nums) {
  let index = 1; // Con trỏ chỉ vị trí để đặt phần tử duy nhất
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i]; // Đặt phần tử duy nhất tại vị trí index
      index++;
    }
  }
  nums.length = index; // Cắt bỏ các phần tử dư thừa
  return nums;
};

console.log(removeDuplicates([1, 1, 1, 2])); // [1, 2]


console.log(removeDuplicates([1, 1, 1, 2])); // 2
