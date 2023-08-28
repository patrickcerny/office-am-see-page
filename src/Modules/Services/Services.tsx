import "./Services.scss";
import { ServiceCard } from "./ServiceCard/ServiceCard";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const SERVICES: { title: string; image: string; description: string }[] = [
  {
    title: "Imagefilme",
    image:
      "https://cdn.discordapp.com/attachments/783334533613223946/1143845705929207919/Website_Imagefilm.png",
    description:
      "Warum brauchen Sie einen Imagefilm? Ein Imagefilm gibt einen authentischen Einblick in Ihr Unternehmen und hilft Ihnen Ihre gewünschte Zielgruppe zu erreichen.",
  },
  {
    title: "Veranstaltungsfilme",
    image:
      "https://cdn.discordapp.com/attachments/783334533613223946/1143845760891363378/Website_veranstaltungsvideos.png",
    description:
      "Ob Messen, Events oder Maturabälle – wir fangen einzigartige Momente ein und bewahren sie für die Ewigkeit in bewegenden Filmen.",
  },
  {
    title: "Werbefilme",
    image:
      "https://cdn.discordapp.com/attachments/783334533613223946/1143845848023834725/Website_Werbevideos.png",
    description:
      "Mit unseren Werbefilmen geben wir Ihre Werbebotschaft kurz und knackig wieder. Dabei achten wir auf eine klare Kernaussage und eine Reduzierung auf das Wesentliche.",
  },
  {
    title: "Produktfilme",
    image:
      "https://cdn.discordapp.com/attachments/783334533613223946/1143845718373703691/Website_Produktvideo.png",
    description:
      "Egal ob als Eye-Catcher bei Messen oder für Social-Media-Kanäle. Wecken Sie nicht nur Interesse bei Ihren Kunden, sondern präsentieren Sie Ihr Produkt auf spannende und verständliche Weise.",
  },
  {
    title: "Musikvideos",
    image:
      "https://cdn.discordapp.com/attachments/783334533613223946/1143845740796448798/Website_Musikvideo.png",
    description:
      "Hip-Hop, Jazz oder Klassik. Egal welches Genre Sie bevorzugen, wir finden die passenden Shots zu Ihrer Musik.  ",
  },
  {
    title: "Websites",
    image:
      "https://cdn.discordapp.com/attachments/783334533613223946/1145749048054259842/websites.jpeg",
    description:
      "Damit Ihr fertiges Produkt auch die entsprechende Zielgruppe trifft, bieten wir Ihnen einen kompletten Web-Auftritt an. Wir führen Sie vom ersten Design bis zur fertigen Website, damit Ihr Web-Auftritt gleich einzigartig wie Ihr Produkt ist.",
  },
];

export const Services = () => {
  const { width } = useWindowDimensions();

  return (
    <section className="main-services" id="services">
      <h2 className="main-services__header">UNSERE SERVICES</h2>
      <p>
        In einem ausführlichen Beratungsgespräch erstellen wir Konzepte und
        festigen die gelieferten Ideen. Auf dieser Grundlage entwickeln wir Ihr
        gewünschtes Produkt. Neben unserem Allround-Service, welcher die
        Pre-Produktion, als auch den Dreh und die komplette Post-Produktion
        inkludiert, helfen wir gerne auch bei individuellen Wünschen weiter.
        Doch wir produzieren nicht nur Filme: <br />
        <br /> Otiosum sorgt auch dafür, dass Ihre Filme gesehen werden. Nach
        der Fertigstellung des Videoprojektes, bieten wir Ihnen einen
        vollständigen Web-Auftritt an. Unser Web-Developement führt Sie vom
        Web-Design bis zur fertigen Webseite, damit Ihr Video auch die Kunden
        erreicht, die Sie erreichen wollen.
      </p>
      <div
        className="main-services__card-container"
        style={{
          alignItems: width < 1250 ? "center" : "",
          justifyContent: width < 1250 ? "center" : "flex-start",
        }}
      >
        <div
          className="main-services__card-container__cards"
          style={{
            flexDirection: width < 1250 ? "column" : "row",
            width: width < 1250 ? "70%" : "auto",
          }}
        >
          <ServiceCard
            aosType="fade-up"
            aosDelay="100"
            description={SERVICES[0].description}
            image={SERVICES[0].image}
            title={SERVICES[0].title}
            mobile={width < 1250}
          ></ServiceCard>
          <ServiceCard
            aosType="fade-up"
            aosDelay="100"
            description={SERVICES[1].description}
            image={SERVICES[1].image}
            title={SERVICES[1].title}
            mobile={width < 1250}
          ></ServiceCard>
          <ServiceCard
            aosType="fade-up"
            aosDelay="100"
            description={SERVICES[2].description}
            image={SERVICES[2].image}
            title={SERVICES[2].title}
            mobile={width < 1250}
          ></ServiceCard>
        </div>
        <div
          className="main-services__card-container__cards"
          style={{
            flexDirection: width < 1250 ? "column" : "row",
            width: width < 1250 ? "70%" : "auto",
          }}
        >
          <ServiceCard
            aosType="fade-up"
            aosDelay="100"
            description={SERVICES[3].description}
            image={SERVICES[3].image}
            title={SERVICES[3].title}
            mobile={width < 1250}
          ></ServiceCard>
          <ServiceCard
            aosType="fade-up"
            aosDelay="100"
            description={SERVICES[4].description}
            image={SERVICES[4].image}
            title={SERVICES[4].title}
            mobile={width < 1250}
          ></ServiceCard>
          <ServiceCard
            aosType="fade-up"
            aosDelay="100"
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
