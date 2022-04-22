import { useState } from 'react';
import { ServiceCardType } from '../../../Types/ServiceCardType';
import './ServiceCard.scss';

export const ServiceCard = ({
  title,
  image,
  mobile,
  description,
}: ServiceCardType) => {
  const [hover, setHover] = useState(false);

  const handleHover = (value: boolean) => {
    setHover(value);
  };

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className='main-service-card'
      style={{
        backgroundImage:
          ' linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' +
          image +
          ')',
        backgroundSize: mobile
          ? 'background-size:  100% 100%'
          : 'background-size: auto 100%',
        flex: mobile ? 'none' : '1 1 100%',
        width: mobile ? '300px' : '100%',
        margin: mobile ? '5px 0 ' : '',
      }}
    >
      <div
        className={`main-service-card__title ${hover ? 'title-hover' : ''} `}
      >
        <h3>{title}</h3>
      </div>
      <div className={`main-service-card__desc ${hover ? 'desc-hover' : ''}`}>
        <span>{description}</span>
      </div>
    </div>
  );
};
