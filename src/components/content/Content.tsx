import "./content.scss";

interface ContentProps {
  id?: string;
  children: React.ReactNode;
  title: string;
  classN?: string;
}
export default function Content({ children, title, classN, id }: ContentProps) {
  return (
    <div className={"content " + classN} id={id}>
      <div className="container">
        <div className="content-col">
          <h2 className="title-h1 title-shadow">{title}</h2>
        </div>
        <div className="content-col">{children}</div>
      </div>
    </div>
  );
}
