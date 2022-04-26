import useWindowDimensions from '../../Hooks/useWindowDimensions';
import './NavBar.scss';
import logo from '../../Assets/logo_black.svg';
const NavBar = () => {
  const { mobile } = useWindowDimensions();

  const navItems: { id: string; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'aboutUs', label: 'About Us' },
    {
      id: 'services',
      label: 'Our Services',
    },
    { id: 'contact', label: 'Contact Us' },
  ];
  return (
    <nav className='main-navbar'>
      <div
        className='main-navbar__image-container'
        style={
          mobile
            ? { justifyContent: 'center' }
            : {
                justifyContent: 'start',
                marginLeft: '40px',
              }
        }
      >
        <img src={logo} alt='Otiosum Logo'></img>
      </div>
      {mobile ? null : (
        <ul className='main-navbar__item-container'>
          {navItems.map(({ id, label }, key) => (
            <li className='main-navbar__item-container__item'>
              <a key={key} href={'/#' + id}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
