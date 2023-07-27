import { createRef, useEffect, useRef } from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import "./NominationsAndAwards.scss";

const ITEMS: { icon: any; label: string }[] = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1688/1688488.png",
    label: "Konzeption",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4838/4838756.png",
    label: "Vor-Produktion",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2699/2699237.png",
    label: "Produktion",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/977/977597.png",
    label: "Post-Produktion",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1997/1997928.png",
    label: "Vermarktung",
  },
];

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
          className="main-laurels__laurel-container__laurel invert"
          src="https://cdn.discordapp.com/attachments/783334533613223946/1132280500891963413/Honorable_Mention_-_White.png"
          alt=""
        />
        <img
          className="main-laurels__laurel-container__laurel invert smaller"
          src="https://cdn.discordapp.com/attachments/783334533613223946/1132280500195708968/SESSIONS_2023_OS_LAUREL_W.png"
          alt=""
        />
        <img
          className="main-laurels__laurel-container__laurel"
          src="https://cdn.discordapp.com/attachments/783334533613223946/1134214064747323412/SemiFinalist_2023_AFF_weiss.jpg"
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
