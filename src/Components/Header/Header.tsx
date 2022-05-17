import { useRef, useState, useEffect } from 'react';
import './Header.scss';
import AnimateHeight from 'react-animate-height';
import Logo from '../../Assets/logo_black.svg';

interface NavItem {
  text: string;
  to: string;
}

export interface HeaderProps {
  mobileBreakpoint: number;
  navItems: NavItem[];
  forceColor: boolean;
}

export const Header = ({
  mobileBreakpoint,
  navItems,
  forceColor,
}: HeaderProps) => {
  const scrollBreakpoint = 100 as const;
  const [transparent, setTransparent] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const burgerRef = useRef<HTMLDivElement>(null);

  const resizeEvent = () => {
    setWindowWidth(window.innerWidth);
  };

  const scrollEvent = () => {
    if (forceColor) return;

    if (showMenu) {
      setTransparent(false);
    } else {
      if (window.scrollY >= scrollBreakpoint) {
        if (transparent) {
          setTransparent(false);
        }
      } else {
        if (!transparent) {
          setTransparent(true);
        }
      }
    }
  };

  const componentDidMount = () => {
    if (burgerRef.current)
      burgerRef.current.onclick = () => {
        if (!showMenu) {
          setTransparent(false);
        } else if (window.scrollY <= scrollBreakpoint) setTransparent(true);

        setShowMenu(!showMenu);
      };
    window.addEventListener('resize', resizeEvent);
    window.addEventListener('scroll', scrollEvent);
  };

  const componentWillUnmount = () => {
    window.removeEventListener('resize', resizeEvent);
    window.removeEventListener('scroll', scrollEvent);
  };

  useEffect(() => {
    componentDidMount();
    return componentWillUnmount;
  });

  if (burgerRef.current)
    burgerRef.current.onclick = () => {
      if (!showMenu) {
        setTransparent(false);
      } else if (window.scrollY <= scrollBreakpoint) setTransparent(true);

      setShowMenu(!showMenu);
    };

  return windowWidth >= mobileBreakpoint ? (
    <nav
      className={`header ${transparent && !forceColor ? 'transparent' : ''}`}
    >
      <div className='header__image-container '>
        <script
          data-host='https://microanalytics.io'
          data-dnt='false'
          src='https://microanalytics.io/js/script.js'
          id='ZwSg9rf6GA'
          async
          defer
        ></script>
        <a href={`/`}>
          <img
            src={Logo}
            alt='Logo'
            style={!transparent ? {} : { filter: 'invert(100%)' }}
          />
        </a>
      </div>
      <ul className='header__navitem-container'>
        {navItems.map((_, key) => {
          return (
            <li key={key} className='header__navitem-container__item'>
              <a
                href={`/${navItems[key].to}`}
                style={{ color: transparent ? 'white' : 'black' }}
              >
                {navItems[key].text.toUpperCase()}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  ) : (
    <nav
      className={`header ${transparent && !forceColor ? 'transparent' : ''}`}
      style={{
        flexDirection: 'column',
        maxHeight: '1000px',
        height: 'auto',
      }}
    >
      <div className='header__upper-container'>
        <div className='header__upper-container__image-container '>
          <a href={`/`}>
            <img
              src={Logo}
              alt='Logo'
              style={!transparent ? {} : { filter: 'invert(100%)' }}
            />
          </a>
        </div>
        <div className='header__upper-container__burger_container'>
          <div
            id='nav-icon1'
            ref={burgerRef}
            className={`${showMenu ? 'open' : ''}`}
          >
            <span
              style={{ backgroundColor: transparent ? 'white' : 'black' }}
            ></span>
            <span
              style={{ backgroundColor: transparent ? 'white' : 'black' }}
            ></span>
            <span
              style={{ backgroundColor: transparent ? 'white' : 'black' }}
            ></span>
          </div>
        </div>
      </div>
      <ul className='header__lower-container__navitem-container'>
        <AnimateHeight duration={350} height={showMenu ? 'auto' : 0}>
          {navItems.map((_, key) => {
            return (
              <li
                key={key}
                className='header__lower-container__navitem-container__item'
              >
                <a
                  onClick={() => setShowMenu(false)}
                  href={`/${navItems[key].to}`}
                >
                  {navItems[key].text.toUpperCase()}
                </a>
              </li>
            );
          })}
        </AnimateHeight>
      </ul>
    </nav>
  );
};

export default Header;
