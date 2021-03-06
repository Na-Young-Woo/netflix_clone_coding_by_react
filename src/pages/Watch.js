import Video from "../assets/videos/유령인데 어쩌라고 _ 공식 예고편 _ 넷플릭스.mp4";
import "./Watch.css";

const Watch = () => {
  return (
    <div>
      <div className="watch-video">
        <div className="backspace">
          <span className="material-icons"></span>
        </div>
        <div className="flag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path d="M17.246 4.042c-3.36 0-3.436-2.895-7.337-2.895-2.108 0-4.075.98-4.909 1.694v-2.841h-2v24h2v-9.073c1.184-.819 2.979-1.681 4.923-1.681 3.684 0 4.201 2.754 7.484 2.754 2.122 0 3.593-1.359 3.593-1.359v-12.028s-1.621 1.429-3.754 1.429zm1.754 9.544c-.4.207-.959.414-1.593.414-.972 0-1.498-.363-2.371-.964-1.096-.755-2.596-1.79-5.113-1.79-1.979 0-3.71.679-4.923 1.339v-7.488c1.019-.902 2.865-1.949 4.909-1.949 1.333 0 1.894.439 2.741 1.103.966.756 2.288 1.792 4.596 1.792.627 0 1.215-.086 1.754-.223v7.766z" />
          </svg>
        </div>
        <video controls width="100%" height="100%" autoPlay src={Video}>
          문제 발생
        </video>
      </div>
    </div>
  );
};

export default Watch;
