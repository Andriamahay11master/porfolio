import "./content.scss";

interface ContentProps {
  children: React.ReactNode;
  title: string;
  bgcolor?: string;
}
export default function Content({ children, title, bgcolor }: ContentProps) {
  return (
    <div className={"content " + bgcolor}>
      <div className="container">
        <div className="content-col">
          <h2 className="title-h1 title-shadow">{title}</h2>
        </div>
        <div className="content-col">{children}</div>
      </div>
    </div>
  );
}
