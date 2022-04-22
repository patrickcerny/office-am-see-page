import useWindowDimensions from '../../Hooks/useWindowDimensions';
import './Workflow.scss';

const ITEMS: { icon: any; label: string }[] = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/45/45010.png',
    label: 'Aufnehmen',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/45/45010.png',
    label: 'Aufnehmen',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/45/45010.png',
    label: 'Aufnehmen',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/45/45010.png',
    label: 'Aufnehmen',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/45/45010.png',
    label: 'Aufnehmen',
  },
];

export const Workflow = () => {
  const { width } = useWindowDimensions();
  return (
    <section
      className='main-workflow'
      style={{
        backgroundImage:
          width < 1000
            ? 'none'
            : "linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('https://collection.cdn-pictorem.com/collection/900_Stockpix_black-and-white-city-skyline-buildings.jpg')",
      }}
    >
      <h2 className='main-workflow__header'>How do we do it?</h2>
      <div
        className='main-workflow__item-container'
        style={{
          flexDirection: width < 1000 ? 'column' : 'row',
        }}
      >
        {ITEMS.map(({ icon, label }, key) => (
          <div className='main-workflow__item-container__item' key={key}>
            <img
              src={icon}
              alt='Icon'
              className='main-workflow__item-container__item__icon'
            />

            <h4 className='main-workflow__item-container__item__label'>
              {label}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};
