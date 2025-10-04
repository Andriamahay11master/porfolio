import "./project.scss";
import Project from "./Project";
import type { ProjectType } from "../../models/ProjectType";
import { Link } from "react-router-dom";

interface ListProjectProps {
  list: ProjectType[];
}

export default function ListProject({ list }: ListProjectProps) {
  return (
    <div className="listProject">
      <div className="container">
        <div className="listProject-top">
          <h2 className="title-h1 title-shadow">Projects</h2>
          <Link
            to="/projects"
            className="btn btn-underline-primary"
            title="All projects"
          >
            All projects
          </Link>
        </div>
        <div className="listProject-bottom">
          {list.map((item, index) => (
            <Project key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
