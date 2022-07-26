import CardRank from "./CardRank";
const RowRank = ({ title, array }) => {
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="list">
        <div className="carousel_container">
          <div className="container">
            <ul>
              {array.map((item) => {
                return (
                  <li key={item.id}>
                    <CardRank
                      viewBox={item.viewBox}
                      d={item.d}
                      src={item.src}
                      alt={item.alt}
                    />
                  </li>
                );
              })}
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

export default RowRank;
