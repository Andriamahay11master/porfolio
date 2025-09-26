import { Link } from "react-router-dom";
import "./banner.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface BannerProps {
  $title: string;
  $desc: string;
  $btn: string;
  $linkBtn: string;
  $srcImage: string;
  $width: number;
  $height: number;
  $altImage: string;
}

export default function Banner({
  $title,
  $desc,
  $btn,
  $linkBtn,
  $srcImage,
  $width,
  $height,
  $altImage,
}: BannerProps) {
  return (
    <div className="banner">
      <LazyLoadImage
        className="banner-img"
        src={$srcImage}
        width={$width}
        height={$height}
        alt={$altImage}
        loading="lazy"
        title="banner image"
      />
      <div className="banner-content">
        <h1 className="banner-title">{$title}</h1>
        <p className="banner-desc">{$desc}</p>
        <Link to={$linkBtn} className="btn btn-primary" title="Banner link">
          {$btn}
        </Link>
      </div>
      <div className="mouse">
        <div className="scroll"></div>
      </div>
    </div>
  );
}
