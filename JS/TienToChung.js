function longestCommonPrefix(strs) {
  if (strs.length === 0) return ""; // Trường hợp mảng rỗng

  // Lấy chuỗi đầu tiên làm tiền tố ban đầu
  let prefix = strs[0];
  console.log(prefix);

  // So sánh với từng chuỗi trong mảng
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      // Cắt dần tiền tố nếu không khớp
      prefix = prefix.slice(0, -1);
      if (prefix === "") return ""; // Không có tiền tố chung
    }
  }

  return prefix;
}

// Test cases
console.log(longestCommonPrefix(["flow", "flower", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(longestCommonPrefix(["interstellar", "internet", "internal"])); // Output: "inte"
console.log(longestCommonPrefix([])); // Output: ""
