import type { Student } from "../types";

type StudentCardProps = {
  student: Student;
};

export function StudentCard({ student }: StudentCardProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", margin: "10px 0" }}>
      <h2>Thông tin sinh viên</h2>
      <p><strong>Họ tên:</strong> {student.name}</p>
      <p><strong>Tuổi:</strong> {student.age}</p>
      <p><strong>Lớp:</strong> {student.className}</p>
    </div>
  );
}