import { setGlobalHash } from "../../hooks/useCurrentHash";
import "./footer.scss";
import { Link } from "react-router-dom";

interface FooterProps {
  desc: string;
  title: string;
  copyright: string;
}

export default function Footer({ copyright }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerPage">
      <div className="footerCopyright">
        <div className="cntCopyright">
          <div className="itemCol">
            <p>
              {currentYear} © {copyright}{" "}
              <Link
                to="/#home"
                className="copyRightLink"
                onClick={() => setGlobalHash("/#home")}
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
