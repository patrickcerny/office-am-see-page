import { Link } from "react-router-dom";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import "./Footer.scss";

const Footer = () => {
  const { mobile } = useWindowDimensions();
  return (
    <footer className="main-footer">
      <div className="main-footer__container">
        <div
          className="main-footer__container__upper"
          style={{ flexDirection: mobile ? "column" : "row" }}
        >
          <span>
            <Link to="/impressum">Impressum</Link>
          </span>

          <span>
            <a href="tel:+4367682551906">+43 676 82 55 19 06</a>
          </span>
          <span>
            <a href="mailto:hello@office-am-see.com">
              hello@office-am-see.com
            </a>
          </span>
        </div>
        <div className="main-footer__container__lower">
          <span>© 2023 Office am See. All rights reserved.</span>
          <span>
            Made with ❤️ by <a href="https://patrickcerny.at/">Patrick Cerny</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
