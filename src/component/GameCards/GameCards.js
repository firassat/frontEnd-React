import "./GameCards.css";
import { Button2 } from "../index";
const GameCards = (props) => {
  return (
    <div className="game-library-card">
      <ul>
        <li className="img">
          <img src={props.img} alt="" />
        </li>
        <li>
          {props.name}
          <br />
          <span>{props.category}</span>
        </li>
        <li>
          Date Added <br />
          <span> {props.date}</span>
        </li>
        <li>
          Currently <br />
          <span>{props.state}</span>
        </li>
        <li className="btn">
          <Button2 title="Download" active={props.active} />
        </li>
      </ul>
    </div>
  );
};

export default GameCards;
