import type { BlockContent } from "../../models/BlockContent";

interface BlockContentRightProps {
  data: BlockContent;
}
export default function BlockContentRight({ data }: BlockContentRightProps) {
  return (
    <div className="block-content-right">
      <div className="block-left">
        {data.srcImage && (
          <img
            src={data.srcImage}
            width={data.width}
            height={data.height}
            alt={data.altImage}
          />
        )}
      </div>
      <div className="block-right">
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        {data.linkBtn && (
          <a href={data.linkBtn} className="btn btn-primary">
            {data.valBtn}
          </a>
        )}
      </div>
    </div>
  );
}
