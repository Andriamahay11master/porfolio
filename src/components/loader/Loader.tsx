import "./loader.scss";

//Composant loader
export default function Loader() {
  return (
    <div className="loader">
      <svg className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none"></circle>
      </svg>
    </div>
  );
}
