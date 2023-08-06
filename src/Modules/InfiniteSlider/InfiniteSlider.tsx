import "./InfiniteSlider.scss";

export const InfiniteSlider = () => {
  const images: { link: string; inverted?: boolean }[] = [
    {
      link: "https://media.discordapp.net/attachments/783334533613223946/1134801638993952832/LaurelTransparent.png?width=624&height=468",
    },
    {
      link: "https://cdn.discordapp.com/attachments/783334533613223946/1135872919470346301/AFF_Laurels_transparent2_Official2023.png",
    },
    {
      link: "https://cdn.discordapp.com/attachments/783334533613223946/1132280500195708968/SESSIONS_2023_OS_LAUREL_W.png",
      inverted: true,
    },
    {
      link: "https://cdn.discordapp.com/attachments/783334533613223946/1132280500891963413/Honorable_Mention_-_White.png",
      inverted: true,
    },
    {
      link: "https://cdn.discordapp.com/attachments/783334533613223946/1132280500531232788/Official_Selection_-_White.png",
      inverted: true,
    },
  ];
  return (
    <main className="infinite-slider">
      <div className="infinite-slider__container">
        {images.map((image, index) => (
          <img
            key={index}
            className={
              "infinite-slider__container__image" +
              (image.inverted ? " invert" : "")
            }
            src={image.link}
            alt=""
          />
        ))}
      </div>
      <div className="infinite-slider__container">
        {images.map((image, index) => (
          <img
            key={index}
            className={
              "infinite-slider__container__image" +
              (image.inverted ? " invert" : "")
            }
            src={image.link}
            alt=""
          />
        ))}
      </div>
    </main>
  );
};
