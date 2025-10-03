import type { ProjectType } from "../../models/ProjectType";
import "./project.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ProjectProps {
  data: ProjectType;
}

export default function Project({ data }: ProjectProps) {
  return (
    <div className="project-content">
      <LazyLoadImage
        className="project-img"
        src={data.srcImage}
        width={data.width}
        height={data.height}
        alt={data.altImage}
        loading="lazy"
        title="project image"
      />
      <div className="project-info">
        <div className="project-info-top">
          <h2 className="title-h2 project-title">{data.title}</h2>
          <p className="project-desc">{data.desc}</p>
        </div>
        <div className="project-info-bottom">
          <a
            href={data.linkBtn}
            className="btn btn-primary"
            title="Project link"
            target="_blank"
          >
            {data.btn}
          </a>
        </div>
      </div>
    </div>
  );
}
