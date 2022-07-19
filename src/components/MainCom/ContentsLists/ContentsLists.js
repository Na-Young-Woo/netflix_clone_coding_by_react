import "./contentsLists.css";
import Row from "./Row";
import RowTitle from "../../../jsons/ContentTitleData.json";

import ContentData1 from "../../../jsons/ContnetImageData.json";
import ContentData2 from "../../../jsons/ContnetImageData2.json";
import ContentData3 from "../../../jsons/ContnetImageData3.json";
import ContentData4 from "../../../jsons/ContnetImageData4.json";
import ContentData5 from "../../../jsons/ContnetImageData5.json";
import RowRank from "./RowRank";
const ContentsLists = () => {
  return (
    <div>
      <section className="contents-lists p-50">
        <Row array={ContentData1} title={RowTitle[0].title} />
        <Row array={ContentData3} title={RowTitle[1].title} />
        <div className="row">
          <h3>넷플릭스 인기 콘텐츠</h3>
          <div className="list">
            <div className="carousel_container">
              <div className="container">
                <ul>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfeVfO5gAUDeqoqObHSforfnPzC2JfonpiTvQ9EC-Hz2BL-gc3nPU8hbCEjYPi5oOlgMG45yqr6O_2W6gpX4NJEq571LB2ULhb-nw3C3m23wKCcq4WXXcIsQxadSCQL_1weUnYrTcUwOOdJ0X-BjyezKXYUUil8LL5y-Uwqrk8tn-d9-uo2pRpmfi0tHTVI-xj6f.webp?r=54c"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdUY2aktoXodYbhA61ChrZXBelpMjR48xYI4Ck1_vJ4N9BdwnXX_HhkUZe8x-Fq0sn7Nw-cpFIaghA_7KuZEijO1T8c43QHoGCRQf2RqMbis5-_HhXl_o1rDOIDBhsKj9f6UOse9Va5RR49Nt7cIgPvi75A5yLNYgPr44Gn_CZaKBJM4MmTT1Cwqm_SBQSbUcwqoFKxya7OAZlwp1VTb6hJbeOPLZloH.jpg?r=169"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQppu8TL1VD3W36oexh2C1DmptZNPW-4bNlxEBM71bJZ5yO3fFMFcAJrPzxUAxtfTXvMfsofmR56vugm2-055192eX7VQ3gTUWxa-qH9pfh-7YaBqvaZoP1jdBFIaAfIjMBK.jpg?r=094"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZvOPuOzKSLpQZpIqBW7atUlfT_vjFnoiYvlrA0fEkJvBw7ZFJIxcPPDjvSvLJBx3K90ivkgIP0gX6VlLAXPdeTooB89Ycz4ANASY_Heh_hLkK67KbuZ8mSEd2vv55IBL68h.jpg?r=f28"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUXCrBV7pX_0xdE8JPmTIuNxwrLtVy47R0Xq2wFYXjMKtWR17YzK5_Mk-v5Zeioir7_69P6LwBRJ8mkYPr9hM2taXkMDDahGcabBP-5BuugNzY-vLsiBioBInKc9ffczhv4V2VgDcXN0smKoUERLYc_9rvwWWKX5P7cfxhK4yDmM9CDUi4Retyr0r7MLL20.jpg?r=dd5"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
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
        <RowRank array={ContentData3} title={RowTitle[4].title} />

        <div className="row">
          <h3>오직 넷플릭스에서</h3>
          <div className="list">
            <div className="carousel_container">
              <div className="container">
                <ul>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXrvnwg7RT3DrYjLLW6j3oItc0w4UM4j1yfk1CI9JlqSIiMUtYyUrCcsLM_Z8YUW-sOH8DEIhTtRk9khJhCptSD7Sff_Q1Ha1Uc-uRcUBaZJzOWDdwrqkXE8mR6fc-jUqE-l.jpg?r=6c0"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRR3JDcWdH18bBUwKDZtxd9dTnp1Q4Z-jOvvVVenbkW-YaU9lmSon0lq8jPR-ct8bo-mGTsUyq4SEz6R1hZ6LLNrUBWbf6CIPvAlVY2rxQY_lel9HMDjNxL6lLB1n35Z_4s6.jpg?r=68a"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWNnZaL9Nh1mXgPkCQAbRhlYJKcRShYn2UmRlwdl_znHGTfOC8a8kTdkkNOBS0hzsS0SmEpVfpm8jiTtYMaTKZMS1IzJeo6CeH3oS0J0Xq-xmJHMXGyFq0upGpQQy7w_6-jA.jpg?r=4bd"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRuU7TNGpxbpud7mjDvNS-fYQBgMWSW3LKrPM1vEBXBvEoQYWa-MGzvABIs6YiDz-YoT9Vv4aFm7HWVaQZZRzqFtNRKqiEWYXqV0L7c4HtdGnfoADwRmspjQLwUFpRi1m6M0.jpg?r=de2"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZJ0a5IH-NRjvb4vNlQVslkMMyjumFVLHr4lVcBAU_S2wWPjgglN4F4-a6zaOFw3-LKkZAtYHLNGbsJc5nkt1ecbmrHwDSqHbjPjrckgMszHKvzoiQmHmVoaE8C9-S8f6wup.jpg?r=3b7"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
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
        <div className="row">
          <h3>새로 올라온 콘텐츠</h3>
          <div className="list">
            <div className="carousel_container">
              <div className="container">
                <ul>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa3tPVS-KI_iBNbrOp3vy0Xc1Kd6j1VbyHklplABSCaTOiYi29fGM2c1BHkQ24VGGuvvNYSfATnrACKO8EmUjL3Tyh9pNoSoG2IqJPp0JVlR8-6tqIfQmsooj17NvJ09BKx-.jpg?r=3df"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbKRFQURxJptj7hydFGnhvKFPe-5EjS3-fhesCeKmP448gTSfi4t3OzxM1GdFhc83ib_t1FgB_3xZKhcwE0LslJtnK_dnpauqSziRlFPhO5diWqm874AoCw1lO06Ot2L9pyV.jpg?r=be1"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXctYILP8nNwkfrEmhA1r7ycYt8Gk0AFiXYcYqz4vpkh9wmVaXoVnb6IppueAioletKq3mXf5fW9PzNgEY0T2LEt5F2Pi2MhYlV4LvtlC_bA0c_ByVVIsK2ktXO7BOIGlBBX.jpg?r=0e3"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfvIR3_BuSKDc-LN5kvYkShFCE8AJOw0j7d37Rt2K8Z0vze_qC-F2ojDbHgElgKaH23EaCZhj7XxYxWd3Y7dC5l5imzyYhESA7M1mr1pkIqO-PrByLX4Xgfly1qWQCeC-vsrjfMtUQ.webp?r=f0b"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <a href="/watch.html">
                        <img
                          src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSmuJFaIHEwVl0zCmd9LTTZOxkb-rW3XUb6hNOmaLhdW3Af0A1lknyX8RAFTipOWlMhx_o9_qKGl86EvWeghsCbtrC2HLB0IXzKvoT3qHKfo4chuH0SppB6wCjgo7cEW3NYk6Mf5h0pvHGEfWGLvcuozwauYkqIhHewMSfrHDRfA0a6dMLdiT_2q41ENIyc.jpg?r=8ee"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
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
      </section>
    </div>
  );
};
export default ContentsLists;
