// Khởi tạo mảng nhân viên ban đầu với 3 nhân viên
let employees = ["Nguyen Van A", "Le Thi B", "Tran Van C"];

// Hàm hiển thị danh sách nhân viên (Read)
function readEmployees() {
  console.log("Danh sách nhân viên:");
  employees.forEach((employee, index) => {
    console.log(`${index + 1}. ${employee}`);
  });
}

// Hàm thêm nhân viên mới (Create)
function createEmployee(newEmployee) {
  employees.push(newEmployee);
  console.log(`Đã thêm nhân viên: ${newEmployee}`);
}

// Hàm cập nhật thông tin nhân viên (Update)
function updateEmployee(index, updatedName) {
  if (index >= 0 && index < employees.length) {
    console.log(
      `Đã cập nhật nhân viên: ${employees[index]} thành ${updatedName}`
    );
    employees[index] = updatedName;
  } else {
    console.log("Không tìm thấy nhân viên với chỉ số này.");
  }
}

// Hàm xóa nhân viên (Delete)
function deleteEmployee(index) {
  if (index >= 0 && index < employees.length) {
    console.log(`Đã xóa nhân viên: ${employees[index]}`);
    employees.splice(index, 1);
  } else {
    console.log("Không tìm thấy nhân viên với chỉ số này.");
  }
}

// Gọi các chức năng của chương trình
console.log("1. Hiển thị danh sách nhân viên ban đầu:");
readEmployees(); // Hiển thị nhân viên ban đầu

console.log("\n2. Thêm một nhân viên mới:");
createEmployee("Phan Thi D"); // Thêm nhân viên mới
readEmployees(); // Hiển thị lại danh sách nhân viên

console.log("\n3. Cập nhật thông tin nhân viên thứ 2:");
updateEmployee(1, "Le Thi X"); // Cập nhật nhân viên ở vị trí thứ 2
readEmployees(); // Hiển thị lại danh sách nhân viên

console.log("\n4. Xóa nhân viên thứ 3:");
deleteEmployee(2); // Xóa nhân viên thứ 3
readEmployees(); // Hiển thị lại danh sách nhân viên
