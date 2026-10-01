//BÀI SỐ 1

// 1. Khai báo biến
const customerName: string = 'Nguyễn Văn An';
const kwhUsage: number = 120;

// 2. Hàm tính tiền điện
function calculateBill(kwh: number): number {
    let total: number = 0;

    if (kwh <= 50) {
        total = kwh * 1800;
    } else if (kwh <= 100) {
        total = 50 * 1800 + (kwh - 50) * 2000;
    } else {
        total = 50 * 1800 + 50 * 2000 + (kwh - 100) * 2500;
    }
    return total;
}

//3. Hàm check xem mức sử dụng cao hay thấp
function isHighUsage(kwh: number): boolean {
    return kwh > 200;
}

//4.Trả về kết quả mong đợi
const totalBill: number = calculateBill(kwhUsage);
const isHigh: boolean = isHighUsage(kwhUsage);

// console.log(`Chủ hộ: ${customerName}`);
// console.log(`Số điện: ${kwhUsage}`);
// console.log(`Tiền điện: ${totalBill}`);
// console.log(`Dùng nhiều điện: ${isHigh ? "có" : "Không"}`);

//BÀI SỐ 2

interface Student {
    name: string;
    age: number;
    gpa: number;
    phone?: string;
}

const students: Student[] = [
    { name: 'Nguyễn Văn An', age: 20, gpa: 7.8, phone: '0901111111' },
    { name: 'Trần Thị Bình', age: 20, gpa: 8.5, phone: '0901234567' },
    { name: 'Lê Văn Cường', age: 21, gpa: 4.5 },
    { name: 'Phạm Minh Đức', age: 22, gpa: 6.0, phone: '0903333333' },
    { name: 'Hoàng Anh Thư', age: 20, gpa: 9.2 },
];

function printStudent(student: Student): void {
    const phoneText = student.phone ? student.phone : 'Chưa cập nhật';

    console.log(
        `Họ tên: ${student.name} | Tuổi: ${student.age} | Điểm: ${student.gpa} | SĐT: ${phoneText}`,
    );
}

function getTopStudent(students: Student[]): Student | undefined {
    if (students.length === 0) {
        return undefined;
    }
    let topStudent: Student = students[0]!;

    for (let i = 1; i < students.length; i++) {
        if (students[i]!.gpa > topStudent.gpa) {
            topStudent = students[i]!;
        }
    }
    return topStudent;
}

function getPassedStudents(students: Student[]): Student[] {
    const passedList: Student[] = [];

    for (const student of students) {
        if (student.gpa >= 5) {
            passedList.push(student);
        }
    }
    return passedList;
}

function countByAge(students: Student[], ageToFind: number): number {
    let count: number = 0;

    for (const student of students) {
        if (student.age === ageToFind) {
            count = count + 1;
        }
    }
    return count;
}

// console.log(students.forEach(printStudent));

// const topStudent = getTopStudent(students);
// console.log(`Học viên cao điểm nhất: ${topStudent.name} (${topStudent.gpa})`);

// const passedList = getPassedStudents(students);
// console.log(`Số học viên đạt: ${passedList.length}`);

// const count = countByAge(students, 20);
// console.log(`Số học viên 20 tuổi: ${count}`)

//BÀI SỐ 3

type Size = 'S' | 'M' | 'L';

interface Drink {
    name: string;
    size: Size;
    quantity: number;
    hasTopping: boolean;
}

function getPriceBySize(size: Size): number {
    switch (size) {
        case 'S':
            return 25000;
        case 'M':
            return 30000;
        case 'L':
            return 35000;
    }
};


function calculateDrink(drink: Drink): number {
  // 1. Lấy giá cơ bản theo size
  const basePrice = getPriceBySize(drink.size);

  // 2. Nếu có topping thì cộng thêm 5.000 đ
  const toppingPrice = drink.hasTopping ? 5000 : 0;

  // 3. Giá 1 ly hoàn chỉnh
  const singlePrice = basePrice + toppingPrice;

  // 4. Nhân với số lượng ly
  return singlePrice * drink.quantity;
};

function calculateOrder (drinks: Drink[]):  { subtotal: number; discount: number; finalTotal: number } {
  let subtotal = 0;
// Cộng dồn tiền từng món
  for (const drink of drinks) {
    subtotal += calculateDrink(drink);
  }

  // Tính giảm giá 10% nếu từ 200.000 đ trở lên
  let discount = 0;
  if (subtotal >= 200000) {
    discount = subtotal * 0.1;
  }

  const finalTotal = subtotal - discount;

  return { subtotal, discount, finalTotal };
};

function formatMoney(amount: number): string {
  return `${amount.toLocaleString("vi-VN")} đ`;
}

const order: Drink[] = [
  { name: "Trà sữa trân châu", size: "M", quantity: 2, hasTopping: true },
  { name: "Trà đào", size: "L", quantity: 1, hasTopping: false },
  { name: "Matcha latte", size: "S", quantity: 3, hasTopping: true }
];

//Chi tiết đơn hàng
for (const item of order) {
  const itemTotal = calculateDrink(item);
  console.log(`${item.name} (${item.size}) x${item.quantity}: ${formatMoney(itemTotal)}`);
}


//Tổng tiền
const result = calculateOrder (order);
console.log(`Tổng tiền: ${formatMoney(result.subtotal)}`);
console.log(`Giảm giá: ${formatMoney(result.discount)}`);

//Thanh toán
console.log(`Thanh toán: ${formatMoney(result.finalTotal)}`);

