import "./GamingLibrary.css";
import {
  SectionWrapper,
  SectionHeader,
  GameCards,
} from "../../component/index";
import { gameItemData } from "../../Data/MostPupularData";

const GamingLibrary = () => {
  var n = 3;
  const cards = gameItemData.map((card) => {
    if (n) {
      n--;
      return (
        <GameCards
          key={card.key}
          name={card.name}
          category={card.category}
          img={card.img}
          date={card.date}
          state={card.state}
          active={card.active}
        />
      );
    } else return "";
  });

  return (
    <SectionWrapper>
      <SectionHeader title1="Your Gaming" title2="Library" />
      <div className="game-library-cards">{cards}</div>
    </SectionWrapper>
  );
};

export default GamingLibrary;
