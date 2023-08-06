import useScrollTop from "../../Hooks/useScrollTop";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import "./Quote.scss";

export const Quote = ({ quote }: { quote: string }) => {
  const { scrollY } = useScrollTop();
  const { width } = useWindowDimensions();

  return (
    <section
      className="main-quote"
      style={{
        backgroundPositionY: width >= 1150 ? 800 - scrollY / 6 + "px" : "",
      }}
    >
      <div className="main-quote__text-container">
        <div className="main-quote__text-container__quote">"{quote}"</div>
      </div>
    </section>
  );
};
