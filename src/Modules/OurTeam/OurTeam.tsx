import useWindowDimensions from '../../Hooks/useWindowDimensions';
import { TeamCardType } from '../../Types/TeamCardType';
import './OurTeam.scss';
import { TeamCard } from './TeamCard/TeamCard';
import Leo from '../../Assets/Team/leo.jpg';
import Patrick from '../../Assets/Team/patrick.jpg';
import Marvin from '../../Assets/Team/marvin.jpg';
const TEAM: TeamCardType[] = [
  {
    name: 'Leonhard Ohneberg',
    image: Leo,
    job: 'Schnitt, Regie',
    desc: '',
    links: [
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png',
        link: 'https://www.linkedin.com/in/patrick-cerny-70692b1b1/',
      },
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png',
        link: 'https://www.instagram.com/leonhard.ohneberg/',
      },
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Whatsapp_svg-512.png',
        link: 'https://wa.me/06644600114',
      },
    ],
  },
  {
    name: 'Marvin Heine',
    image: Marvin,
    job: 'Kamera, Produktion',
    desc: '',
    links: [
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png',
        link: 'https://www.linkedin.com/in/patrick-cerny-70692b1b1/',
      },
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png',
        link: 'https://www.instagram.com/marvin.heine/',
      },
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Whatsapp_svg-512.png',
        link: 'https://wa.me/06766207122',
      },
    ],
  },
  {
    name: 'Patrick Cerny',
    image: Patrick,
    job: 'Produktionsassistenst, Web-Development',
    desc: '',
    links: [
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png',
        link: 'https://www.linkedin.com/in/patrick-cerny-70692b1b1/',
      },
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png',
        link: 'https://www.instagram.com/patrick.cerny/',
      },
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Whatsapp_svg-512.png',
        link: 'https://wa.me/067682551906',
      },
    ],
  },
];
export const OurTeam = () => {
  const { width } = useWindowDimensions();

  return (
    <section
      className='main-our-team'
      style={
        width < 1150
          ? {
              height: 'auto',
            }
          : {}
      }
    >
      <h2 className='main-our-team__header'>ÜBER UNS</h2>
      <div className='main-our-team__text'>
        <p>
          Als Schüler der Handelsakademie für Digital Business und
          Wirtschaftsinformatik haben wir jahrelange einschlägige Ausbildungs-
          und Berufserfahrung. Unsere Expertise ermöglicht es uns für Sie
          konkurrenzfähige Resultate zu produzieren, mit denen Sie am Markt
          hervorstechen werden.
        </p>
      </div>

      <div
        className='main-our-team__content'
        style={
          width < 1150
            ? {
                flexDirection: 'column',
                alignItems: 'center',
              }
            : {}
        }
      >
        {TEAM.map(({ desc, job, name, links, image }, key) => (
          <TeamCard
            key={key}
            image={image}
            desc={desc}
            job={job}
            name={name}
            links={links}
          ></TeamCard>
        ))}
      </div>
    </section>
  );
};
