
import { useState } from "react";
import { Header } from "./components/Header";
import { StudentCard } from "./components/StudentCard";
import { SkillList } from "./components/SkillList";
import { LikeButton } from "./components/LikeButton";
import type { Student } from "./types";

export default function App() {
  const title: string = "Hồ sơ sinh viên"; // string
  const [likes, setLikes] = useState<number>(0); // number

  const student: Student = {
    // object
    name: "Nguyễn Văn An",
    age: 20,
    className: "WEB-K12",
  };

  const skills: string[] = ["HTML", "CSS", "JavaScript", "React"]; // array

  const handleLike = (): void => {
    // function
    setLikes(likes + 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* Truyền string */}
      <Header title={title} />

      {/* Truyền object */}
      <StudentCard student={student} />

      {/* Truyền array */}
      <SkillList skills={skills} />

      {/* Truyền number và function */}
      <LikeButton likes={likes} onLike={handleLike} />
    </div>
  );
}