import useWindowDimensions from "../../Hooks/useWindowDimensions";
import "./NominationsAndAwards.scss";

export const NominationsAndAwards = () => {
  const { width } = useWindowDimensions();

  return (
    <section className="main-laurels">
      <h2 className="main-laurels__header">NOMINATIONS AND AWARDS</h2>
      <div
        className="main-laurels__laurel-container"
        style={{
          flexDirection: width < 1250 ? "column" : "row",
        }}
      >
        <img
          className="main-laurels__laurel-container__laurel"
          src="https://media.discordapp.net/attachments/783334533613223946/1134801638993952832/LaurelTransparent.png?width=624&height=468"
          alt=""
        />
        <img
          className="main-laurels__laurel-container__laurel "
          src="https://cdn.discordapp.com/attachments/783334533613223946/1135872919470346301/AFF_Laurels_transparent2_Official2023.png"
          alt=""
        />
        <img
          className="main-laurels__laurel-container__laurel invert smaller"
          src="https://cdn.discordapp.com/attachments/783334533613223946/1132280500195708968/SESSIONS_2023_OS_LAUREL_W.png"
          alt=""
        />
        <img
          className="main-laurels__laurel-container__laurel invert"
          src="https://cdn.discordapp.com/attachments/783334533613223946/1132280500891963413/Honorable_Mention_-_White.png"
          alt=""
        />
        <img
          className="main-laurels__laurel-container__laurel invert"
          src="https://cdn.discordapp.com/attachments/783334533613223946/1132280500531232788/Official_Selection_-_White.png"
          alt=""
        />
      </div>
    </section>
  );
};
