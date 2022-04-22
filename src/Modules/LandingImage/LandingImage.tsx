import useScrollTop from '../../Hooks/useScrollTop';
import './LandingImage.scss';

interface LandingImageProps {
  text: string;
}

export const LandingImage = ({ text }: LandingImageProps) => {
  const { scrollY } = useScrollTop();

  return (
    <main
      className='main-landing-image'
      style={{ backgroundPositionY: scrollY / 2 + 'px' }}
      id='home'
    >
      <div className='main-landing-image__text-container'>
        <span className='main-landing-image__text-container__text'>{text}</span>
      </div>
    </main>
  );
};
