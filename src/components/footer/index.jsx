import "./index.css";
import {
  BsGithub,
  BsYoutube,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaReact } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        Build by <a href="https://github.com/shehza-d/news"> Shehzad</a>
        {"  "}
        with <FaReact />
        React
      </div>
      <ul className="iconsContainer">
        <li>
          <a
            href="https://twitter.com/Shehza_d_"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/shehza-d"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shehzadd/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/shehza.d"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCUTMs216kmgY9lOgBFDckAQ"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube />
          </a>
        </li>
        <li>
          <a href="mailto:shehzad.dev@pm.me" target="_blank" rel="noreferrer">
            <HiOutlineMail />
          </a>
        </li>
      </ul>
    </div>
  );
}
