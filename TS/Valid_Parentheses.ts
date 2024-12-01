function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (const char of s) {
    if (char in map) {
      // Lấy phần tử trên đỉnh ngăn xếp (hoặc giá trị đặc biệt nếu stack rỗng)
      const topElement = stack.length > 0 ? stack.pop()! : "#";
      if (topElement !== map[char]) {
        return false;
      }
    } else {
      // Nếu là dấu ngoặc mở, đưa vào stack
      stack.push(char);
    }
  }

  // Kiểm tra ngăn xếp có rỗng không
  return stack.length === 0;
}

console.log(isValid("()[]{}"));
