import ContnetImageData from "../../../jsons/ContnetImageData.json";
import Card from "./Card";
import "./Row.css";
const Row = ({ title, array }) => {
  //   // carousel start
  // const prevBtn = document.querySelector(".arrow-prev");
  // const nextBtn = document.querySelector(".arrow-next");
  // // 5개씩 보여줄 때 width 값

  // const lis5Width =
  //   document.querySelector(".carousel_container ul li:nth-child(1)").clientWidth *
  //   5;
  // // alert(lis5Width);
  // const c = document.querySelector(".carousel_container").clientWidth;
  // // alert(c);
  // // next btn 클릭 시
  // nextBtn.addEventListener("click", function () {
  //   const container = document.querySelector(".container");
  //   let container_width = lis5Width + 2;
  //   console.log(`container_width : ${container_width}`);
  //   container.style.transform = `translateX(${-container_width}px)`;
  // });
  // prevBtn.addEventListener("click", function () {
  //   const container = document.querySelector(".container");
  //   let container_width = lis5Width + 2;
  //   console.log(`container_width : ${container_width}`);
  //   container.style.transform = `translateX(${0}px)`;
  // });
  // // carousel 둥

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="list">
        <div className="carousel_container">
          <div className="container">
            <ul>
              {array.map((item) => (
                <li key={item.id}>
                  <Card src={item.src} alt={item.alt} href={item.href} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="arrow-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </button>
        <button className="arrow-next" id="test">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Row;
