import { Link } from "react-router-dom";

const Card = ({ href, src, alt }) => {
  return (
    <div className="card">
      {/* {href} */}
      <Link to="/watch">
        <img src={src} alt={alt} />
      </Link>
    </div>
  );
};

export default Card;
