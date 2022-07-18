import ContnetImageData from "../../../jsons/ContnetImageData.json";
import Card from "./Card";
const Row = (props) => {
  return (
    <div className="row">
      <h3>{props.title}</h3>
      <div className="list">
        <div className="carousel_container">
          <div className="container">
            <ul>
              {ContnetImageData.map((item) => (
                <li key={item.id}>
                  <Card src={item.src} alt={item.alt} href={item.href}></Card>
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
        <button className="arrow-next">
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
