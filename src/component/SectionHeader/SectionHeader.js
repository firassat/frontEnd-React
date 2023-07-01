import "./SectionHeader.css";

const SectionHeader = (props) => {
  return (
    <div className="section-header">
      <h4>
        {props.title1} <span> {props.title2}</span>
      </h4>
    </div>
  );
};

export default SectionHeader;
