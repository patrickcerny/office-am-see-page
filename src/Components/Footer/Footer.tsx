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
          <span>© 2022 OTIOSUM. All rights reserved.</span>
          <span>
            <Link to='/dsgvo'>Datenschutz</Link>
          </span>
        </div>
        <div className='main-footer__container__lower'>
          <span>
            Made with ❤️ by <a href='https://patrickcerny.at/'>Patrick Cerny</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
