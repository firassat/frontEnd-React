import "./Button.css";

const Button1 = (props) => {
  return (
    <div className="bottun1">
      <a href="/#">{props.title}</a>
    </div>
  );
};

const Button2 = (props) => {
  return (
    <div className={`bottun2 ${props.active}`}>
      <a href="/#">{props.title}</a>
    </div>
  );
};

export default Button1;
export { Button2 };
