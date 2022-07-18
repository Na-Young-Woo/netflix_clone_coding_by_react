import ContnetImageData from "../../../jsons/ContnetImageData.json";

const Card = (props) => {
  return (
    <div className="card">
      <a href={props.href}>
        <img src={props.src} alt={props.alt} />
      </a>
    </div>
  );
};

export default Card;
