import "./project.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ProjectProps {
  title: string;
  desc: string;
  btn: string;
  linkBtn: string;
  srcImage: string;
  width: number;
  height: number;
  altImage: string;
}

export default function Project({
  title,
  desc,
  btn,
  linkBtn,
  srcImage,
  width,
  height,
  altImage,
}: ProjectProps) {
  return (
    <div className="project-content">
      <div className="project-col">
        <LazyLoadImage
          className="project-img"
          src={srcImage}
          width={width}
          height={height}
          alt={altImage}
          loading="lazy"
          title="project image"
        />
      </div>
      <div className="project-col">
        <div className="project-info">
          <h2 className="title-h2 project-title">{title}</h2>
          <p className="project-desc">{desc}</p>
          <a
            href={linkBtn}
            className="btn btn-primary"
            title="Project link"
            target="_blank"
          >
            {btn}
          </a>
        </div>
      </div>
    </div>
  );
}
