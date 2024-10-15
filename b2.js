function InHoaChuCaiDau(str) {
  let result = "";
  let result1 = str.split(" ");
  console.log(result1);
  for (var i = 0; i < str.length; i++) {
    if (i === 0) {
      result += str[i].toUpperCase();
    } else if (str[i] === " ") {
      result += " " + str[i + 1].toUpperCase();
      i++;
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(InHoaChuCaiDau("hello world abc"));
