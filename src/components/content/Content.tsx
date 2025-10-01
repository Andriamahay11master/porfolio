import "./content.scss";

interface ContentProps {
  children: React.ReactNode;
  title: string;
}
export default function Content({ children, title }: ContentProps) {
  return (
    <div className="content">
      <div className="content-col">
        <h2 className="title-h1">{title}</h2>
      </div>
      <div className="content-col">{children}</div>
    </div>
  );
}
