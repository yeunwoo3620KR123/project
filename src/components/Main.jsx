import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();
    function loginClick () {
        navigate('/login')
    }
    function registClick () {
        navigate('/regist')
    }
    function settingsClcik () {
        navigate('/settings')
    }
    return (
        <div>
        <button onClick={loginClick}>로그인</button>
        <button onClick={registClick}>회원가입</button>
        <button onClick={settingsClcik}>회원정보 수정</button>


        </div>
    )
}

export default Main;