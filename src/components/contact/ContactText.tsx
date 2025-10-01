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
        <a href={`tel:${data.phone}`} className="link contact-phone">
          {data.phone}
        </a>
        <a href={`mailto:${data.email}`} className="link contact-email">
          {data.email}
        </a>
      </div>
      <div className="contact-bottom">
        <Link
          className="btn btn-rs-icon"
          to={data.linkLkd}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon-linkedin"></i>
        </Link>
        <Link
          className="btn btn-rs-icon"
          to={data.linkGithub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon-github"></i>
        </Link>
      </div>
    </div>
  );
}
