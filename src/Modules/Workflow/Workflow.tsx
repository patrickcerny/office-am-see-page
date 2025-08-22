import { createRef, useEffect, useRef } from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import "./Workflow.scss";

const ITEMS: { icon: any; label: string }[] = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063824.png",
    label: "Beratung",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    label: "Belegsammlung",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2331/2331947.png",
    label: "Buchung",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2103/2103665.png",
    label: "Auswertung",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1909/1909552.png",
    label: "Betreuung",
  },
];

export const Workflow = () => {
  const { width } = useWindowDimensions();
  const itemRefs = useRef([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
  ] as any);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section className="main-workflow">
      <h2 className="main-workflow__header">SO ARBEITEN WIR</h2>
      <div
        className="main-workflow__item-container"
        style={{
          flexDirection: width < 1250 ? "column" : "row",
        }}
      >
        {ITEMS.map(({ icon, label }, key) => (
          <div
            ref={itemRefs.current[key]}
            className="main-workflow__item-container__item"
            key={key}
            data-aos="fade-up"
          >
            <img
              loading="lazy"
              src={icon}
              alt="Icon"
              className="main-workflow__item-container__item__icon"
            />

            <h4 className="main-workflow__item-container__item__label">
              {label}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};
