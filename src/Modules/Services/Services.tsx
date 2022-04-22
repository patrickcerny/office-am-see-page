import { ServiceCardType } from '../../Types/ServiceCardType';
import './Services.scss';
import { ServiceCard } from './ServiceCard/ServiceCard';
import useWindowDimensions from '../../Hooks/useWindowDimensions';

const SERVICES: ServiceCardType[] = [
  {
    title: 'Filming',
    image:
      'https://images.unsplash.com/photo-1493134799591-2c9eed26201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMHNreWxpbmV8ZW58MHx8MHx8&w=1000&q=80',
    description:
      'Filming is our passion - and also one of our services. We will film your vision into reality. Filming is our passion - and also one of our services. We will film your vision into reality. Filming is our passion - and also one of our services. We will film your vision into reality. Filming is our passion - and also one of our services. We will film your vision into reality.',
  },
  {
    title: 'Color Grading',
    image:
      'data:image/jpeg;base64,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',
    description:
      'Filming is our passion - and also one of our services. We will film your vision into reality.',
  },
  {
    title: 'Editing',
    image:
      'https://images.unsplash.com/photo-1493134799591-2c9eed26201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMHNreWxpbmV8ZW58MHx8MHx8&w=1000&q=80',
    description:
      'Filming is our passion - and also one of our services. We will film your vision into reality.',
  },
  {
    title: 'Photography',
    image:
      'https://images.unsplash.com/photo-1493134799591-2c9eed26201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMHNreWxpbmV8ZW58MHx8MHx8&w=1000&q=80',
    description:
      'Filming is our passion - and also one of our services. We will film your vision into reality.',
  },
  {
    title: 'Videography',
    image:
      'https://images.unsplash.com/photo-1493134799591-2c9eed26201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMHNreWxpbmV8ZW58MHx8MHx8&w=1000&q=80',
    description:
      'Filming is our passion - and also one of our services. We will film your vision into reality.',
  },
  {
    title: 'Motion Graphics',
    image:
      'https://images.unsplash.com/photo-1493134799591-2c9eed26201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMHNreWxpbmV8ZW58MHx8MHx8&w=1000&q=80',
    description:
      'Filming is our passion - and also one of our services. We will film your vision into reality.',
  },
];

export const Services = () => {
  const { width } = useWindowDimensions();

  return (
    <section className='main-services'>
      <h2 className='main-services__header'>Our Services</h2>
      <div
        className='main-services__card-container'
        style={{
          alignItems: width < 1250 ? 'center' : '',
          justifyContent: width < 1250 ? 'center' : 'flex-start',
        }}
      >
        <div
          className='main-services__card-container__cards'
          style={{
            flexDirection: width < 1250 ? 'column' : 'row',
            width: width < 1250 ? '70%' : 'auto',
          }}
        >
          <ServiceCard
            description={SERVICES[0].description}
            image={SERVICES[0].image}
            title={SERVICES[0].title}
            mobile={width < 1250}
          ></ServiceCard>
          <ServiceCard
            description={SERVICES[1].description}
            image={SERVICES[1].image}
            title={SERVICES[1].title}
            mobile={width < 1250}
          ></ServiceCard>
          <ServiceCard
            description={SERVICES[2].description}
            image={SERVICES[2].image}
            title={SERVICES[2].title}
            mobile={width < 1250}
          ></ServiceCard>
        </div>
        <div
          className='main-services__card-container__cards'
          style={{
            flexDirection: width < 1250 ? 'column' : 'row',
            width: width < 1250 ? '70%' : 'auto',
          }}
        >
          <ServiceCard
            description={SERVICES[3].description}
            image={SERVICES[3].image}
            title={SERVICES[3].title}
            mobile={width < 1250}
          ></ServiceCard>
          <ServiceCard
            description={SERVICES[4].description}
            image={SERVICES[4].image}
            title={SERVICES[4].title}
            mobile={width < 1250}
          ></ServiceCard>
          <ServiceCard
            description={SERVICES[5].description}
            image={SERVICES[5].image}
            title={SERVICES[5].title}
            mobile={width < 1250}
          ></ServiceCard>
        </div>
      </div>
    </section>
  );
};
