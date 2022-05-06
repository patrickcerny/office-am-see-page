import { ServiceCardType } from '../../Types/ServiceCardType';
import './Services.scss';
import { ServiceCard } from './ServiceCard/ServiceCard';
import useWindowDimensions from '../../Hooks/useWindowDimensions';

const SERVICES: ServiceCardType[] = [
  {
    title: 'Maturavideos',
    image:
      'https://cdn.pixabay.com/photo/2018/05/13/10/34/skyline-3395893_960_720.jpg',
    description:
      'Damit Ihnen eine Erinnerung an die besondere Schulzeit bleibt, fertigen wir für Sie einmalige Maturavideos an, mit denen Sie auf ewig in den Erinnerungen vergangener Tage schwelgen können.',
  },
  {
    title: 'Imagefilme',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    description:
      'Warum brauchen Sie einen Imagefilm? Ein Imagefilm gibt einen authentischen Einblick in Ihr Unternehmen und hilft Ihre Zielgruppe und deren Aufmerksamkeit zu erreichen.',
  },
  {
    title: 'Veranstaltungsfilme',
    image:
      'https://images.unsplash.com/photo-1493134799591-2c9eed26201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMHNreWxpbmV8ZW58MHx8MHx8&w=1000&q=80',
    description:
      'Ob Messen, Events oder Maturabälle. Wir verewigen einmalige Vorkommnisse. Mit einem Veranstaltungsvideo wollen wir genau das bewirken.',
  },
  {
    title: 'Werbefilme',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZ7ppYIlotkeVk_HuQsURuwDxzB8rsJVOPg&usqp=CAU',
    description:
      'Mit unseren Werbefilmen geben wir Ihre Werbebotschaft kurz und knackig wieder. Dabei achten wir auf eine klare Kernaussage und eine Reduzierung auf das Wesentliche.',
  },
  {
    title: 'Produktfilme',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    description:
      'Egal ob als Eye-Catcher bei Messen oder für Social-Media-Kanäle. Wecken Sie nicht nur Interesse bei Ihrem Kunden, sondern präsentieren Sie Ihr Produkt auf spannende und verständliche Weise.',
  },
  {
    title: 'Vermarktung',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    description:
      'Damit Ihr fertiges Produkt auch die entsprechende Zielgruppe trifft, bieten wir Ihnen einen kompletten Web-Auftritt an. Wir führen Sie vom ersten Design bis zur fertigen Website, damit auch Ihr Web-Auftritt gleich einzigartig wie Ihr Produkt ist.',
  },
];

export const Services = () => {
  const { width } = useWindowDimensions();

  return (
    <section className='main-services' id='services'>
      <h2 className='main-services__header'>UNSERE SERVICES</h2>
      <p>
        In einem ausführlichen Beratungsgespräch erstellen wir Konzepte und
        festigen die gelieferten Ideen. Auf dieser Grundlage entwickeln wir Ihr
        gewünschtes Produkt. Neben unserem Allround-Service, welcher die
        Vorproduktion, als auch den Dreh und die komplette Post Produktion
        inkludiert, helfen wir gerne auch bei individuellen Wünschen weiter.
        Doch wir produzieren nicht nur Filme: <br />
        <br /> Otiosum sorgt auch dafür, dass Ihre Filme gesehen werden. Nach
        der Fertigstellung des Videoprojektes, bieten wir Ihnen einen
        vollständigen Web-Auftritt an. Unser Web-Developement führt Sie vom
        Web-Design bis zur fertigen Webseite, damit Ihr Video auch die Kunden
        finden kann, welche Sie ansprechen wollen.
      </p>
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
