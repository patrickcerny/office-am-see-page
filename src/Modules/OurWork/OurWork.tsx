import "./OurWork.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const VIDEOS: { link: string; desc: string }[] = [
  {
    link: "https://www.youtube.com/embed/SPPwFM4xIw8",
    desc: "Die Maturaformel - BG Blumenstraße 2022",
  },
  {
    link: "https://www.youtube.com/embed/naYT0v5tWVI",
    desc: "Österreichischer Klimarat - 2022",
  },
  {
    link: "https://www.youtube.com/embed/xfaLGnRPLsM",
    desc: "Wiener Blut, der Gin - 2021",
  },

  {
    link: "https://www.youtube.com/embed/5rIGGDtoUqw",
    desc: "Dokumentation Konferenz USA - 2022",
  },
  {
    //get out and add Hard Rocks
    link: "https://www.youtube.com/embed/NTV0AKNJFng",
    desc: "BG Blumenstraße - Maturavideo 2022",
  },
  {
    link: "https://www.youtube.com/embed/VelnqVTSYww",
    desc: "Österreichischer Klimarat - 2022",
  },
];

export const OurWork = () => {
  const row1 = VIDEOS.slice(0, 3);
  const row2 = VIDEOS.slice(3, 6);

  const { width } = useWindowDimensions();
  return (
    <section className="main-our-work">
      <h2 className="main-our-work__header">KÜRZLICHE ARBEITEN</h2>
      <div
        className="main-our-work__videos"
        style={width < 1000 ? { flexDirection: "column", height: "auto" } : {}}
      >
        {row1.map((video, index) => (
          <iframe
            style={
              width < 1000
                ? { width: "100%", aspectRatio: "16 / 9", marginTop: "30px" }
                : {}
            }
            key={index}
            className="main-our-work__videos__iframe"
            src={video.link}
            title={video.desc}
          ></iframe>
        ))}
      </div>
      <div
        className="main-our-work__videos"
        style={width < 1000 ? { flexDirection: "column", height: "auto" } : {}}
      >
        {row2.map((video, index) => (
          <iframe
            style={
              width < 1000
                ? { width: "100%", aspectRatio: "16 / 9", marginTop: "30px" }
                : {}
            }
            key={index}
            className="main-our-work__videos__iframe"
            src={video.link}
            title={video.desc}
          ></iframe>
        ))}
      </div>
    </section>
  );
};
