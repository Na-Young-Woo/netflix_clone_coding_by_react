import { useRecoilState } from "recoil";
import { loginState } from "../../states/LoginState";
import { Link } from "react-router-dom";

const LoginBox = () => {
  const [nickName, setNickName] = useRecoilState(loginState);

  return (
    <div>
      <div className="login-box">
        <h2>로그인</h2>
        <input
          type="text"
          placeholder="이메일 주소 또는 전화번호"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        <input type="password" placeholder="비밀번호" />
        <Link to="/">
          <button>로그인</button>
        </Link>
        <div className="login-guid-text">
          <div>
            <input type="checkbox" defaultChecked />
            <span>로그인 정보 저장</span>
          </div>
          <a href="#">도움이 필요하신가요?</a>
        </div>
        <div className="login-guid-text2">
          <div>
            Netflix 회원이 아닌가요?
            <a href="#" className="now-sign-up">
              지금 가입하세요.
            </a>
          </div>
          <div className="secondary-text">
            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
            확인합니다.
            <a href="#" className="detail-knowing">
              자세히 알아보기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
