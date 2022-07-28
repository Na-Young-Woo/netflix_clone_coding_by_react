import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ href, src, alt }) => {
  return (
    <div className="card">
      {/* {href} */}
      <Link to="/watch">
        <img src={src} alt={alt} />

        <div className="card-description">
          <div className="icon-wrapper"></div>
          <div className="content-description">
            <div>
              <span>94% 일치</span>
              <span>15세</span> <span>시즌 4개</span>
              <span>HD</span>
            </div>
          </div>
          <div>
            <span>키워드들</span>
            <span>키워드들</span>
            <span>키워드들</span>
            <span>키워드들</span>
            <span>키워드들</span>
          </div>
        </div>
        {/* <div>여기에 검은 박스 추가</div> */}
      </Link>
    </div>
  );
};

export default Card;
