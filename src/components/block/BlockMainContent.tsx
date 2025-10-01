import { Link } from "react-router-dom";
import type { BlockContent } from "../../models/BlockContent";
import "./block_content.scss";
import { useState } from "react";
interface BlockMainContentProps {
  data: BlockContent;
}
export default function BlockMainContent({ data }: BlockMainContentProps) {
  const [mouseEnterButton, setMouseEnterButton] = useState(false);
  return (
    <div className="block-content">
      <div className="container">
        <div className="block-col">
          {data.srcImage && (
            <div
              className={mouseEnterButton ? "block-img animated" : "block-img"}
            >
              <img
                src={data.srcImage}
                width={data.width}
                height={data.height}
                alt={data.altImage}
              />
            </div>
          )}
        </div>
        <div className="block-col">
          <div className="block-body">
            <h1 className="title-h1 title-shadow">{data.title}</h1>
            {data.subtitle && <h2 className="title-h2">{data.subtitle}</h2>}
            <p>{data.desc}</p>
            {data.linkBtn && (
              <Link
                to={data.linkBtn}
                className="btn btn-primary"
                onMouseEnter={() => setMouseEnterButton(true)}
                onMouseLeave={() => setMouseEnterButton(false)}
              >
                {data.valBtn}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
