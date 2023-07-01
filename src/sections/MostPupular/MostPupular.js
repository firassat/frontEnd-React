import "./MostPupular.css";
import { Card, SectionHeader, SectionWrapper } from "../../component/index";
import itemData from "../../Data/MostPupularData";

const MostPupular = () => {
  const cards = itemData.map((card) => {
    return (
      <Card
        key={card.key}
        name={card.name}
        category={card.category}
        img={card.img}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <SectionHeader title1="Most Popular" title2="Right Now" />
        <div className="most-pupular-items">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default MostPupular;
