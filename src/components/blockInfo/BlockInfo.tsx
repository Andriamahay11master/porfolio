import "./blockinfo.scss";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface BlockInfoProps {
  title: string;
  desc: string;
  linkBtn: string;
  valBtn: string;
  image?: string;
  altImage?: string;
}

export default function BlockInfo({
  title,
  desc,
  linkBtn,
  valBtn,
  image,
  altImage,
}: BlockInfoProps) {
  return (
    <div className="block-info">
      <h2 className="title-h2 block-info-title">{title}</h2>
      {image && (
        <LazyLoadImage
          className="block-info-img"
          src={image}
          alt={altImage ? altImage : "image user"}
          title={altImage}
          width={200}
          height={200}
        />
      )}
      <p
        className="block-info-desc"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
      <Link to={linkBtn} className="btn btn-primary" title="Info link">
        {valBtn}
      </Link>
    </div>
  );
}
