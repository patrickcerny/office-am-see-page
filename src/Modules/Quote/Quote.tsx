import useScrollTop from "../../Hooks/useScrollTop";
import "./Quote.scss";

export const Quote = ({ quote }: { quote: string }) => {
  const { scrollY } = useScrollTop();
  return (
    <section
      className="main-quote"
      style={{ backgroundPositionY: 800 - scrollY / 6 + "px" }}
    >
      <div className="main-quote__text-container">
        <div className="main-quote__text-container__quote">"{quote}"</div>
      </div>
    </section>
  );
};
