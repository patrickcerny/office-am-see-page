import './OurWork.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactPlayer from 'react-player/youtube';
import useWindowDimensions from '../../Hooks/useWindowDimensions';

const VIDEOS: { link: string; desc: string }[] = [
  {
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    desc: 'Пример видео',
  },
  {
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    desc: 'Пример видео',
  },
];

export const OurWork = () => {
  const { width } = useWindowDimensions();
  return (
    <section className='main-our-work'>
      <h2 className='main-our-work__header'>Our Work</h2>
      {width > 1200 ? (
        <Carousel
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          autoPlay
          interval={5000}
          swipeable={true}
          className='main-our-work__carousel'
          dynamicHeight
        >
          {VIDEOS.map((video, index) => (
            <div className='carousel-container'>
              <ReactPlayer url={video.link}></ReactPlayer>
              <div className='carousel-container__text-container'>
                <span>{video.desc}</span>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        VIDEOS.map((video, index) => (
          <div
            key={index}
            className='carousel-container'
            style={{ width: width - 100 + 'px', marginBottom: '50px' }}
          >
            <ReactPlayer url={video.link} width={width - 100}></ReactPlayer>
            <div className='carousel-container__text-container'>
              <span>{video.desc}</span>
            </div>
          </div>
        ))
      )}
    </section>
  );
};
