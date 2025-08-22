import { useRef, useState, useEffect } from 'react';
import './Header.scss';
import AnimateHeight from 'react-animate-height';
import Logo from '../../Assets/logo.png';

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
  const showMenuRef = useRef(showMenu);
  const transparentRef = useRef(transparent);

  useEffect(() => {
    showMenuRef.current = showMenu;
  }, [showMenu]);

  useEffect(() => {
    transparentRef.current = transparent;
  }, [transparent]);

  useEffect(() => {
    const resizeEvent = () => {
      setWindowWidth(window.innerWidth);
    };

    const scrollEvent = () => {
      if (forceColor) return;

      if (showMenuRef.current) {
        setTransparent(false);
      } else {
        if (window.scrollY >= scrollBreakpoint) {
          if (transparentRef.current) {
            setTransparent(false);
          }
        } else {
          if (!transparentRef.current) {
            setTransparent(true);
          }
        }
      }
    };

    const burger = burgerRef.current;
    if (burger) {
      burger.onclick = () => {
        if (!showMenuRef.current) {
          setTransparent(false);
        } else if (window.scrollY <= scrollBreakpoint) {
          setTransparent(true);
        }
        setShowMenu(!showMenuRef.current);
      };
    }

    window.addEventListener('resize', resizeEvent);
    window.addEventListener('scroll', scrollEvent, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeEvent);
      window.removeEventListener('scroll', scrollEvent);
      if (burger) burger.onclick = null;
    };
  }, [forceColor]);

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
          <img src={Logo} alt='Logo' />
          <h1 style={{ color: transparent ? 'white' : 'black' }}>
            OFFICE AM SEE
          </h1>
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
            <img className='image-mobile' src={Logo} alt='Logo' />
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
