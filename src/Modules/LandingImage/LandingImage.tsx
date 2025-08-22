import useScrollTop from "../../Hooks/useScrollTop";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import "./LandingImage.scss";

export const LandingImage = () => {
  const { scrollY } = useScrollTop();
  const { width } = useWindowDimensions();

  const text: { upper: string; lower: string } = {
    upper: "IHRE ZAHLEN IN BESTEN HÄNDEN",
    lower: "ENTLASTUNG FÜR IHR BÜRO",
  };

  const handleMouseEnter = (e: any) => {
    e.target.classList.add("char-hover");
  };

  const handleMouseLeave = (e: any) => {
    setTimeout(() => {
      e.target.classList.remove("char-hover");
    }, 500);
  };

  return (
    <main
      className="main-landing-image"
      style={{ backgroundPositionY: width >= 1150 ? scrollY / 2 + "px" : "" }}
      id="home"
    >
      <div className="main-landing-image__text-container">
        <div className="main-landing-image__text-container__upper">
          {text.upper.split(" ").map((word, key) => (
            <div style={{ display: "inline-block", margin: "0 8px" }}>
              {word.split("").map((letter, index) => (
                <span
                  onMouseEnter={(e) => handleMouseEnter(e)}
                  onMouseLeave={(e) => handleMouseLeave(e)}
                  key={index}
                  className="main-landing-image__text-container__upper__char"
                >
                  {letter}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="main-landing-image__text-container__lower">
          {text.lower.split(" ").map((word, key) => (
            <div style={{ display: "inline-block", margin: "0 8px" }}>
              {word.split("").map((letter, index) => (
                <span
                  onMouseEnter={(e) => handleMouseEnter(e)}
                  onMouseLeave={(e) => handleMouseLeave(e)}
                  key={index}
                  className="main-landing-image__text-container__upper__char"
                >
                  {letter}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
