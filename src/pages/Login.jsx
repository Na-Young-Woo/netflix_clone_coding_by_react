import LoginBox from "../components/LoginCom/LoginBox";
import LoginLogo from "../components/LoginCom/LoginLogo";
import "./Login.css";

// 여기에서 필요한 것만 불러오고

const Login = () => {
  return (
    <div>
      <div className="login-wrapper">
        <div className="blackBack"></div>
        <div className="login-box-wrapper">
          <LoginLogo></LoginLogo>
          <LoginBox></LoginBox>
        </div>
        <div className="login-footer-wrapper">
          <footer className="login-footer">
            <div className="footer-wrapper">
              <div className="question">
                질문이 있으신가요? 문의 전화: 080-001-9587
              </div>
              <div className="link-wrapper">
                <ul>
                  <li>
                    <a href="">자주 묻는 질문</a>
                  </li>
                  <li>
                    <a href="">고객 센터</a>
                  </li>
                  <li>
                    <a href="">이용 약관</a>
                  </li>
                  <li>
                    <a href="">개인 정보</a>
                  </li>
                  <li>
                    <a href="">쿠키 설정</a>
                  </li>
                  <li>
                    <a href="">회사 정보</a>
                  </li>
                </ul>
              </div>
              <button className="service-code language">한국어</button>
              <div className="copy-text">
                <div className="copy-text-block">
                  넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
                  제2018-서울종로-0426호 전화번호: 080-001-9587
                </div>
                <div className="copy-text-block">대표: 레지널드 숀 톰프슨</div>
                <div className="copy-text-block">
                  이메일 주소: korea@netflix.com
                </div>
                <div className="copy-text-block">
                  주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동
                  20층 우편번호 03161
                </div>
                <div className="copy-text-block">
                  사업자등록번호: 165-87-00119
                </div>
                <div className="copy-text-block">
                  클라우드 호스팅: Amazon Web Services Inc.
                </div>
                <div>
                  <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1658700119">
                    공정거래위원회 웹사이트
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default Login;
