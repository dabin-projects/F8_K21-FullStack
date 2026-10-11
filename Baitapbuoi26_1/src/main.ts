//Bài tập 1

class LibraryItem {
    protected title: string;
    protected year: number;
    private isBorrowed: boolean;

    constructor(title: string, year: number) {
    this.title = title;
    this.year = year;
    this.isBorrowed = false; // Mặc định chưa ai mượn

}

// Phương thức mượn sách

public borrow(): boolean {
    if(!this.isBorrowed) {
        this.isBorrowed = true;
        return true;
    }
    return false;
}

// Phương thức trả sách
returnItem(): void {
    this.isBorrowed = false;
}


// Lấy trạng thái hiện tại
  public getStatus(): string {
    return this.isBorrowed ? "Đang được mượn" : "Còn trong kho";
  }


// Lấy thông tin cơ bản
  public getInfo(): string {
    return `${this.title} (${this.year})`;
  }
};


class Book extends LibraryItem {
    private author: string;

    constructor(title: string, year: number, author: string) {
    super(title, year);
    this.author = author;
    }
// Override getInfo để thêm thông tin tác giả
public override getInfo(): string {
    return `[Book] ${this.title} (${this.year}) - ${this.author}`;
}

}

class Magazine extends LibraryItem {
    private issueNumber: number;

    constructor(title: string, year: number, issueNumber: number) {
           super(title, year);

        this.issueNumber = issueNumber;
    }
    // Override getInfo để thêm số phát hành
  public override getInfo(): string {
    return `[Magazine] ${super.getInfo()} - Số ${this.issueNumber}`;
  }
}

class Library {
    private items: LibraryItem[] = [];

    public addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    //tìm theo tên để mượn
    public borrowItem(title: string): void {
        const item = this.items.find(
            (i) => i.getInfo().includes(title)
        );

        if(!item) {
            console.log(`Không tìm thấy sách: ${title}`);
            return;
        }

        const success = item.borrow();
        if (success) {
            console.log(`Mượn thành công: ${title}`);
        } else {
            console.log(`Không mượn được: ${title} đang có người mượn`);
        }
    }

    //Im danh sách các item kèm trạng thái
    public printAll(): void {
        this.items.forEach((item) => {
            console.log(`${item.getInfo()} - ${item.getStatus()}`)
        });
    }
}


// main.ts

// 1. Khởi tạo thư viện
const myLibrary = new Library();

// 2. Tạo 2 Book và 1 Magazine
const book1 = new Book("Clean Code", 2008, "Robert C. Martin");
const book2 = new Book("Đắc Nhân Tâm", 1936, "Dale Carnegie");
const magazine1 = new Magazine("Tech Today", 2024, 12);

// 3. Thêm vào thư viện
myLibrary.addItem(book1);
myLibrary.addItem(book2);
myLibrary.addItem(magazine1);

// 4. Mượn 1 cuốn (Clean Code)
myLibrary.borrowItem("Clean Code");

// 5. Thử mượn lại chính cuốn đó (Clean Code) lần nữa
myLibrary.borrowItem("Clean Code");

// 6. In danh sách toàn bộ thư viện
console.log("\n--- DANH SÁCH THƯ VIỆN ---");
myLibrary.printAll();



//Bài tập 2

interface Payable {
    calculateSalary(): number;

}

abstract class Employee implements Payable {
        protected id: number;
    protected name: string;

    constructor(id: number, name: string ) {
         this.id = id;
    this.name = name;
   
    }

    public abstract calculateSalary(): number;
    public getInfo(): string {
        const salary = this.calculateSalary();
        // Định dạng số tiền có dấu phẩy ngăn cách (vd: 15,000,000)
    const formattedSalary = salary.toLocaleString("en-US");
        return `#${this.id} ${this.name} - Lương:${formattedSalary} VNĐ`;
    }
}

class FullTimeEmployee extends Employee {
    private baseSalary: number;

    constructor(id: number, name: string, baseSalary: number) {
    super(id, name);
    this.baseSalary = baseSalary;
    }
// Override getInfo để thêm thông tin tác giả
public calculateSalary(): number {
    return this.baseSalary;
}

}

class PartTimeEmployee extends Employee {
  private hoursWorked: number;
  private hourlyRate: number;

  constructor(id: number, name: string, hoursWorked: number, hourlyRate: number) {
    super(id, name);
    this.hoursWorked = hoursWorked;
    this.hourlyRate = hourlyRate;
  }

  public calculateSalary(): number {
    return this.hoursWorked * this.hourlyRate;
  }
}

// 4. Khởi tạo mảng nhân viên
const employees: Employee[] = [
  new FullTimeEmployee(1, "Nguyễn Văn An", 15000000),
  new FullTimeEmployee(2, "Trần Thị Bình", 12000000),
  new PartTimeEmployee(3, "Lê Văn Cường", 80, 50000), // 80 giờ * 50,000 = 4,000,000
  new PartTimeEmployee(4, "Phạm Thu Dung", 60, 50000)  // 60 giờ * 50,000 = 3,000,000
];

// In thông tin từng nhân viên (Tính đa hình: gọi chung getInfo() nhưng tự động gọi đúng hàm tính lương của từng đối tượng)
employees.forEach((emp) => {
  console.log(emp.getInfo());
});

// Tính tổng quỹ lương bằng reduce
const totalSalary = employees.reduce(
  (sum, emp) => sum + emp.calculateSalary(),
  0
);

console.log(`Tổng quỹ lương: ${totalSalary.toLocaleString("en-US")} VNĐ`);



//Bài số 3
