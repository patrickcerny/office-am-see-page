import { Link } from 'react-router-dom';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import './Footer.scss';

const Footer = () => {
  const { mobile } = useWindowDimensions();
  return (
    <footer className='main-footer'>
      <div className='main-footer__container'>
        <div
          className='main-footer__container__upper'
          style={{ flexDirection: mobile ? 'column' : 'row' }}
        >
          <span>
            <Link to='/impressum'>Impressum</Link>
          </span>

          <span>
            <a href='tel:+4367682551905'>+43 676 82 55 19 05</a>
          </span>
          <span>
            <a href='mailto:hello@officeamsee.com'>hello@officeamsee.com</a>
          </span>
        </div>
        <div className='main-footer__container__lower'>
          <span>© 2025 Office am See. All rights reserved.</span>
          <span>
            Made with ❤️ by <a href='https://cerny.app/'>Patrick Cerny</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
