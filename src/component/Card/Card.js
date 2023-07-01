import "./Card.css";
import { FaStar, FaDownload } from "react-icons/fa";
const Card = (props) => {
  return (
    <div className="most-pupular-item">
      <div className="card-wrapper">
        <img className="most-pupular-item-img" src={props.img} alt="" />
        <div className="most-pupular-content">
          <h4 className="most-pupular-item-title">
            {props.name}
            <br />
            {props.category}
          </h4>
          <ul>
            <li>
              <span style={{ color: "yellow" }}>
                <FaStar />
              </span>
              <span>{` 4.5`}</span>
            </li>
            <li>
              <span style={{ color: "var(--main-color)" }}>
                <FaDownload />
              </span>
              <span>{` 2.4M`}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
