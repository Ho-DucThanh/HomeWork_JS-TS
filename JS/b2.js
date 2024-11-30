function InHoaChuCaiDau(str) {
  let result = "";
  let words = str.split(" ");

  words.forEach((word, index) => {
    result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    if (index < words.length - 1) {
      result += " ";
    }
  });
  return result;
}

console.log(InHoaChuCaiDau("hello world abc"));
