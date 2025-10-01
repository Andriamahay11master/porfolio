import "./listskills.scss";

interface ListSkillsProps {
  data: string[];
}

export default function ListSkills({ data }: ListSkillsProps) {
  return (
    <div className="list-skills">
      <div className="list-skills-block">
        {data.map((item, index) => (
          <div key={index} className="list-skills-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
