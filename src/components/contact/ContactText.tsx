import { Link } from "react-router-dom";
import "./contactText.scss";
import type { ContactInfo } from "../../models/ContactInfo";

interface ContactTextProps {
  data: ContactInfo;
}
export default function ContactText({ data }: ContactTextProps) {
  return (
    <div className="contact-body">
      <div className="contact-top">
        <p className="contact-address">{data.address}</p>
        <p className="contact-phone">{data.phone}</p>
        <a href={`mailto:${data.email}`} className="contact-email">
          {data.email}
        </a>
      </div>
      <div className="contact-bottom">
        <div className="contact-link">
          <Link to={data.linkLkd} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to={data.linkGithub} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
