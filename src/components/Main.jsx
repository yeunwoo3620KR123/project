import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();
    function loginClick () {
        navigate('/login')
    }
    function registClick () {
        navigate('/regist')
    }
    return (
        <div>
        <button onClick={loginClick}>로그인</button>
        <button onClick={registClick}>회원가입</button>


        </div>
    )
}

export default Main;