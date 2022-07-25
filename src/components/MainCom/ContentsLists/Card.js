import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ href, src, alt }) => {
  return (
    <div className="card">
      {/* {href} */}
      <Link to="/watch">
        <img src={src} alt={alt} />
        <div>여기에 검은 박스 추가</div>
      </Link>
    </div>
  );
};

export default Card;
