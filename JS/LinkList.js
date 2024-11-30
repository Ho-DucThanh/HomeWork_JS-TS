class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const mergeTwoList = function (list1, list2) {
  let dummy = new ListNode(); // Khởi tạo node dummy (nút giả)
  let current = dummy; // Khởi tạo con trỏ current trỏ đến dummy
  while (list1 && list2) {
    if (list1.data <= list2.data) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
};

console.log(mergeTwoList([1, 2]), [3, 4]);
