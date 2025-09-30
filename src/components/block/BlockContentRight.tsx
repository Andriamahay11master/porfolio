import { Link } from "react-router-dom";
import type { BlockContent } from "../../models/BlockContent";
import "./block_content.scss";
interface BlockContentRightProps {
  data: BlockContent;
}
export default function BlockContentRight({ data }: BlockContentRightProps) {
  return (
    <div className="block-content content-right">
      <div className="block-left">
        {data.srcImage && (
          <div className="block-img">
            <img
              src={data.srcImage}
              width={data.width}
              height={data.height}
              alt={data.altImage}
            />
          </div>
        )}
      </div>
      <div className="block-right">
        <h2 className="block-title">{data.title}</h2>
        <p>{data.desc}</p>
        {data.linkBtn && (
          <Link to={data.linkBtn} className="btn btn-primary">
            {data.valBtn}
          </Link>
        )}
      </div>
    </div>
  );
}
