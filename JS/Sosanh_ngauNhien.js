var check = function (str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  console.log(str1.split("").sort());
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

console.log(check("coder", "cdore")); // true
console.log(check("coding", "ingcodg")); // true
