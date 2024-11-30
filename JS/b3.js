// function PhanTuTrungLap(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         arr.splice(j, 1);
//         j--;
//       }
//     }
//   }
//   return arr;
// }

function PhanTuTrungLap1(arr) {
  const result = {};
  const result1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result[arr[i]]) {
      result[arr[i]] = true;
      result1.push(arr[i]);
    }
  }
  return result1;
}

function PhanTuTrungLap2(arr) {
  return [...new Set(arr)];
}

arr = ["a", "b", "c", "a", 1, 1, 2];

console.log(PhanTuTrungLap1(arr));
console.log(PhanTuTrungLap2(arr));
