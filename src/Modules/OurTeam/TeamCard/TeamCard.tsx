import useWindowDimensions from '../../../Hooks/useWindowDimensions';
import { TeamCardType } from '../../../Types/TeamCardType';
import './TeamCard.scss';

export const TeamCard = ({ desc, job, name, links, image }: TeamCardType) => {
  const { width } = useWindowDimensions();
  links ?? (links = []);
  return (
    <article
      className='main-team-card'
      style={width < 1100 ? { width: '300px' } : {}}
    >
      <div
        className='main-team-card__image'
        style={{ backgroundImage: 'url(' + image + ')' }}
      ></div>
      <div className='main-team-card__text'>
        <h3>{name}</h3>
        <p>{job}</p>
        <span>{desc}</span>
      </div>
      <div className='main-team-card__links'>
        {links.map((link, index) => (
          <a href={link.link} key={index}>
            <img loading='lazy' src={link.icon} alt='alt' />
          </a>
        ))}
      </div>
    </article>
  );
};
