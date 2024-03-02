import "./InfiniteSlider.scss";

export const InfiniteSlider = () => {
  const images: { link: string; inverted?: boolean }[] = [
    {
      link: "https://media.discordapp.net/attachments/783334533613223946/1134801638993952832/LaurelTransparent.png?ex=65f57ae2&is=65e305e2&hm=e7f5bdec06d764bc21398c2264e527d4ed0d13e7f2edf2d100e4dc4802ec0be8&=&format=webp&quality=lossless",
    },
    {
      link: "https://media.discordapp.net/attachments/783334533613223946/1135872919470346301/AFF_Laurels_transparent2_Official2023.png?ex=65f02617&is=65ddb117&hm=40ca923b79092024c22aee206122029550537c948f91951a8acc2ee416556080&=&format=webp&quality=lossless",
    },
    {
      link: 'https://media.discordapp.net/attachments/783334533613223946/1132280500195708968/SESSIONS_2023_OS_LAUREL_W.png?ex=65f58964&is=65e31464&hm=83c5180f1093e7343e64205d5be50158cb44b2c74cb3ac0edf7e27cc3f52650e&=&format=webp&quality=lossless',
      inverted: true,
    },
    {
      link: "https://media.discordapp.net/attachments/783334533613223946/1132280500891963413/Honorable_Mention_-_White.png?ex=65f58964&is=65e31464&hm=075155a60d5c04010ddaf14639b001f9c42a1df44e644ebc7c6e9d3a93f25a0d&=&format=webp&quality=lossless",
      inverted: true,
    },
    {
      link: "https://media.discordapp.net/attachments/783334533613223946/1132280500531232788/Official_Selection_-_White.png?ex=65f58964&is=65e31464&hm=108693c79006fc39386d113a8663df1d2b4ca5f2ff45f5d1fa7a065f822aad8d&=&format=webp&quality=lossless",
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
