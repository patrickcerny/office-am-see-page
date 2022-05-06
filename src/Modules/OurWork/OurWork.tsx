import './OurWork.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useWindowDimensions from '../../Hooks/useWindowDimensions';

const VIDEOS: { link: string; desc: string }[] = [
  {
    link: 'https://www.youtube.com/embed/xfaLGnRPLsM',
    desc: 'Wiener Blut, der Gin - 2021',
  },
  {
    link: 'https://www.youtube.com/embed/VelnqVTSYww',
    desc: 'Österreichischer Klimarat - 2022',
  },
  {
    link: 'https://youtube.com/embed/2HaciSB8M8o',
    desc: 'BG Gallus Maturavideo - 2021',
  },
];

export const OurWork = () => {
  const { width } = useWindowDimensions();
  return (
    <section className='main-our-work'>
      <h2 className='main-our-work__header'>KÜRZLICHE ARBEITEN</h2>
      <div
        className='main-our-work__videos'
        style={width < 1000 ? { flexDirection: 'column', height: 'auto' } : {}}
      >
        {VIDEOS.map((video, index) => (
          <iframe
            style={
              width < 1000
                ? { width: '100%', aspectRatio: '16 / 9', marginTop: '30px' }
                : {}
            }
            key={index}
            className='main-our-work__videos__iframe'
            src={video.link}
            title={video.desc}
          ></iframe>
        ))}
      </div>
    </section>
  );
};
