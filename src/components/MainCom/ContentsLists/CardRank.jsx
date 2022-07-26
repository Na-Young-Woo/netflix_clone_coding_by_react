import { Link } from "react-router-dom";

const CardRank = ({ href, src, alt, viewBox, d }) => {
  return (
    <div className="boxart">
      {/* href */}
      <Link to="/watch">
        <div>
          <svg width="100%" height="100%" viewBox={viewBox}>
            <path
              stroke="#595959"
              strokeLinejoin="square"
              strokeWidth="4"
              d={d}
            ></path>
          </svg>
        </div>
        <img src={src} alt={alt} />
      </Link>
    </div>
  );
};

export default CardRank;
