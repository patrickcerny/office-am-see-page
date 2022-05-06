import useWindowDimensions from '../../Hooks/useWindowDimensions';
import './Workflow.scss';

const ITEMS: { icon: any; label: string }[] = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1688/1688488.png',
    label: 'Konzeption',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/4838/4838756.png',
    label: 'Vor-Produktion',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/2699/2699237.png',
    label: 'Produktion',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/977/977597.png',
    label: 'Post-Produktion',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1997/1997928.png',
    label: 'Vermarktung',
  },
];

export const Workflow = () => {
  const { width } = useWindowDimensions();

  return (
    <section className='main-workflow'>
      <h2 className='main-workflow__header'>WIE MACHEN WIR'S?</h2>
      <div
        className='main-workflow__item-container'
        style={{
          flexDirection: width < 1250 ? 'column' : 'row',
        }}
      >
        {ITEMS.map(({ icon, label }, key) => (
          <div className='main-workflow__item-container__item' key={key}>
            <img
              loading='lazy'
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
