import useWindowDimensions from '../../Hooks/useWindowDimensions';
import { TeamCardType } from '../../Types/TeamCardType';
import './OurTeam.scss';
import { TeamCard } from './TeamCard/TeamCard';
import Patrick from '../../Assets/Team/patrick.jpg';
import Dalibor from '../../Assets/Team/Dalibor.jpg';

const TEAM: TeamCardType[] = [
  {
    name: 'Dalibor Cerny',
    image: Dalibor,
    job: 'Buchhaltung & Finanzen',
    desc: '',
    links: [
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png',
        link: 'https://www.linkedin.com/in/dalibor-cerny-50214b286/',
      },
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png',
        link: 'https://www.instagram.com/dalibor.cerny/',
      },
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Whatsapp_svg-512.png',
        link: 'https://wa.me/+4367682551905',
      },
    ],
  },
  {
    name: 'Patrick Cerny',
    image: Patrick,
    job: 'Buchaltung, IT & Digitalisierung',
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
        link: 'https://wa.me/+4367682551906',
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
          Als erfahrenes Team im Rechnungswesen und Office-Management bringen
          wir Struktur in Ihre Zahlen und Abläufe. Mit präziser Arbeit und
          moderner Software sorgen wir dafür, dass Sie sich auf Ihr Kerngeschäft
          konzentrieren können.
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
