import { Link } from "react-router-dom";
import "./contactText.scss";
export default function ContactText({
  address,
  phone,
  email,
  linkLkd,
  linkGithub,
}: any) {
  return (
    <div className="contact-body">
      <div className="contact-top">
        <p className="contact-address">{address}</p>
        <p className="contact-phone">{phone}</p>
        <a href={`mailto:${email}`} className="contact-email">
          {email}
        </a>
      </div>
      <div className="contact-bottom">
        <div className="contact-link">
          <Link to={linkLkd} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to={linkGithub} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
