import useWindowDimensions from '../../Hooks/useWindowDimensions';
import { TeamCardType } from '../../Types/TeamCardType';
import './OurTeam.scss';
import { TeamCard } from './TeamCard/TeamCard';
const TEAM: TeamCardType[] = [
  {
    name: 'Leonhard Ohneberg',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    job: 'CEO',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At dolores magni illo ad sequi quas quos dignissimos corporis quod modi doloremque et incidunt laudantium corrupti autem ea maxime, officia commodi.',
    links: [
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png',
        link: 'https://twitter.com/leonhard_ohneberg',
      },
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png',
        link: 'https://twitter.com/leonhard_ohneberg',
      },
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Whatsapp_svg-512.png',
        link: 'https://twitter.com/leonhard_ohneberg',
      },
    ],
  },
  {
    name: 'Marvin Heine',
    image:
      'https://preview.redd.it/v0caqchbtn741.jpg?auto=webp&s=c5d05662a039c031f50032e22a7c77dfcf1bfddc',
    job: 'CEO',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At dolores magni illo ad sequi quas quos dignissimos corporis quod modi doloremque et incidunt laudantium corrupti autem ea maxime, officia commodi.',
    links: [
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png',
        link: 'https://twitter.com/leonhard_ohneberg',
      },
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png',
        link: 'https://twitter.com/leonhard_ohneberg',
      },
    ],
  },
  {
    name: 'Patrick Cerny',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbfDzNPtnPQF6u02N9c4z9QvRUPlIFGu91A&usqp=CAU',
    job: 'CEO',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At dolores magni illo ad sequi quas quos dignissimos corporis quod modi doloremque et incidunt laudantium corrupti autem ea maxime, officia commodi.',
    links: [
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png',
        link: 'https://twitter.com/leonhard_ohneberg',
      },
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Whatsapp_svg-512.png',
        link: 'https://twitter.com/leonhard_ohneberg',
      },
      {
        icon: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png',
        link: 'https://twitter.com/leonhard_ohneberg',
      },
    ],
  },
];
export const OurTeam = () => {
  const { width } = useWindowDimensions();

  return (
    <section className='main-our-team'>
      <h2 className='main-our-team__header'>THIS IS US</h2>
      <div className='main-our-team__text'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          exercitationem pariatur omnis sed commodi in aliquid numquam quis.
          Odit voluptatibus maiores sed deserunt molestias fuga, quam voluptatum
          omnis amet magnam.
        </p>
      </div>

      <div
        className='main-our-team__content'
        style={
          width < 1150
            ? {
                flexDirection: 'column',
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
