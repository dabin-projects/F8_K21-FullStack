type SkillListProps = {
  skills: string[];
};

export function SkillList({ skills }: SkillListProps) {
  return (
    <div>
      <h3>Danh sách kỹ năng</h3>
      {skills.length === 0 ? (
        <p>Chưa có kỹ năng</p>
      ) : (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
}