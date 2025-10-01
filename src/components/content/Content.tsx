import "./content.scss";

interface ContentProps {
  children: React.ReactNode;
  title: string;
  classN?: string;
}
export default function Content({ children, title, classN }: ContentProps) {
  return (
    <div className={"content " + classN}>
      <div className="container">
        <div className="content-col">
          <h2 className="title-h1 title-shadow">{title}</h2>
        </div>
        <div className="content-col">{children}</div>
      </div>
    </div>
  );
}
