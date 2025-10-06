import { useEffect, useState } from "react";
import "./scrolltotop.scss";
import { scrollToTop } from "../../utils/scrollTop";

export default function ScrollToTop() {
  const [scrollValue, setScrollValue] = useState(0);

  const calcScrollValue = () => {
    const pos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);

    setScrollValue(scrollValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", calcScrollValue);
    window.addEventListener("load", calcScrollValue);

    return () => {
      window.removeEventListener("scroll", calcScrollValue);
      window.removeEventListener("load", calcScrollValue);
    };
  }, []);

  const handleScrollToTop = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    scrollToTop();
  };
  return (
    <div
      className={`scrolltop ${scrollValue > 5 ? "show" : ""}`}
      onClick={handleScrollToTop}
      style={{
        background: `conic-gradient(#0058e7 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`,
      }}
    >
      <span className="scrolltop-value">
        <i className="icon-arrow-up"></i>
      </span>
    </div>
  );
}
