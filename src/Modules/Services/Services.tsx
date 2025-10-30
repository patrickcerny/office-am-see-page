import './Services.scss';
import { ServiceCard } from './ServiceCard/ServiceCard';
import useWindowDimensions from '../../Hooks/useWindowDimensions';

const SERVICES: { title: string; image: string; description: string }[] = [
  {
    title: 'Buchhaltung',
    image:
      'https://media.istockphoto.com/id/1432903655/de/foto/finanzen-buchhaltung-und-fintech-ein-mann-am-computer-und-taschenrechner-der-seine.jpg?s=612x612&w=0&k=20&c=RM00Op1J6B-VeddhZsYE4IEg5bw3TsVV6r6jQWYvszQ=',
    description:
      'Wir unterstützen Sie in Ihrer laufenden Buchhaltung und sorgen für klare Zahlen.',
  },
  {
    title: 'Office Management',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Wir strukturieren Abläufe und koordinieren Termine, damit Ihr Büro rund läuft.',
  },
  {
    title: 'Digitale Ablage',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    description:
      'Wir organisieren Ihre Dokumente digital und schaffen transparente Strukturen.',
  },
  {
    title: 'Lohnverrechnung',
    image:
      'https://media.istockphoto.com/id/1364970875/de/foto/gehaltsscheck-im-umschlag.jpg?s=612x612&w=0&k=20&c=CSy3Jf9zUs_MCD11cVr41-DsQnN-kzfjirlXyyMM9R8=',
    description: 'Coming Soon...',
  },
  {
    title: 'Steuererklärungen',
    image:
      'https://media.istockphoto.com/id/1002720376/de/foto/deutsche-steuererkl%C3%A4rung.jpg?s=612x612&w=0&k=20&c=NG2l1a2FZLchSKTCPbrInzqYm1GDzQMmUm2KX5JENkM=',
    description: 'Coming Soon...',
  },
  {
    title: 'Finanzplanung',
    image:
      'https://media.istockphoto.com/id/1729797005/de/foto/gesch%C3%A4ftstreffen-brainstorming-sitzungen-besprechen-die-analyse-des.jpg?s=612x612&w=0&k=20&c=hbkWZSvvVBm2PIz8PJY6AJGuBx71pwZRuehdr22jlJU=',
    description: 'Coming Soon...',
  },
];

export const Services = () => {
  const { width } = useWindowDimensions();

  return (
    <section className='main-services' id='services'>
      <h2 className='main-services__header'>UNSERE SERVICES</h2>
      <p>
        In einem persönlichen Beratungsgespräch analysieren wir Ihre
        Anforderungen und entwickeln maßgeschneiderte Lösungen. Neben der
        laufenden Buchhaltung unterstützen wir Sie auch bei individuellen
        Anliegen. Wir kümmern uns nicht nur um Zahlen: <br />
        <br /> Office am See sorgt ebenso für reibungslose Abläufe im Büro. Von
        digitaler Ablage bis zur Kommunikation mit Behörden – wir halten Ihnen
        den Rücken frei.
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
            aosType='fade-up'
            aosDelay='100'
            description={SERVICES[0].description}
            image={SERVICES[0].image}
            title={SERVICES[0].title}
            mobile={width < 1250}
          ></ServiceCard>
          <ServiceCard
            aosType='fade-up'
            aosDelay='100'
            description={SERVICES[1].description}
            image={SERVICES[1].image}
            title={SERVICES[1].title}
            mobile={width < 1250}
          ></ServiceCard>
          <ServiceCard
            aosType='fade-up'
            aosDelay='100'
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
            aosType='fade-up'
            aosDelay='100'
            description={SERVICES[3].description}
            image={SERVICES[3].image}
            title={SERVICES[3].title}
            mobile={width < 1250}
          ></ServiceCard>
          <ServiceCard
            aosType='fade-up'
            aosDelay='100'
            description={SERVICES[4].description}
            image={SERVICES[4].image}
            title={SERVICES[4].title}
            mobile={width < 1250}
          ></ServiceCard>
          <ServiceCard
            aosType='fade-up'
            aosDelay='100'
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
