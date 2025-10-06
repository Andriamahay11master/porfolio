import { scrollToTop } from "../../utils/scrollTop";
import "./footer.scss";
import { Link } from "react-router-dom";

interface FooterProps {
  desc: string;
  title: string;
  copyright: string;
}

export default function Footer({ copyright }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (event: MouseEvent) => {
    event.preventDefault();
    scrollToTop();
  };
  return (
    <footer className="footerPage">
      <div className="footerCopyright">
        <div className="cntCopyright">
          <div className="itemCol">
            <p>
              {currentYear} © {copyright}{" "}
              <Link
                to="/"
                className="copyRightLink"
                onClick={(event) => {
                  event.preventDefault();
                  handleScrollToTop(event.nativeEvent as MouseEvent);
                }}
              >
                IRIMANANA Henikaja Andriamahay{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
