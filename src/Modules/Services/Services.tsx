import "./Services.scss";
import { ServiceCard } from "./ServiceCard/ServiceCard";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const SERVICES: { title: string; image: string; description: string }[] = [
  {
    title: "Buchhaltung",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
    description:
      "Wir übernehmen Ihre laufende Finanzbuchhaltung und sorgen für klare Zahlen.",
  },
  {
    title: "Lohnverrechnung",
    image:
      "https://images.unsplash.com/photo-1567784177951-6fa58317e16c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Pünktliche und korrekte Gehaltsabrechnungen für Ihre Mitarbeiter.",
  },
  {
    title: "Steuererklärungen",
    image:
      "https://images.unsplash.com/photo-1554224155-1693c31f0133?auto=format&fit=crop&w=1200&q=80",
    description:
      "Wir bereiten Ihre Steuererklärungen vor und begleiten Sie durch das Steuerjahr.",
  },
  {
    title: "Finanzplanung",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
    description:
      "Gemeinsam entwickeln wir Budgets und Prognosen für nachhaltigen Erfolg.",
  },
  {
    title: "Office Management",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Wir strukturieren Abläufe und koordinieren Termine, damit Ihr Büro rund läuft.",
  },
  {
    title: "Digitale Ablage",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Wir organisieren Ihre Dokumente digital und schaffen transparente Strukturen.",
  },
];

export const Services = () => {
  const { width } = useWindowDimensions();

  return (
    <section className="main-services" id="services">
      <h2 className="main-services__header">UNSERE SERVICES</h2>
      <p>
        In einem persönlichen Beratungsgespräch analysieren wir Ihre
        Anforderungen und entwickeln maßgeschneiderte Lösungen. Neben der
        laufenden Buchhaltung unterstützen wir Sie auch bei individuellen
        Anliegen. Wir kümmern uns nicht nur um Zahlen: <br />
        <br /> Office am See sorgt ebenso für reibungslose Abläufe im Büro.
        Von digitaler Ablage bis zur Kommunikation mit Behörden – wir halten
        Ihnen den Rücken frei.
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
