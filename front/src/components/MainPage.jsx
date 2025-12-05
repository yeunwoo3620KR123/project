import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
   
    function settingsClcik () {
        navigate('/settings')
    }
    return (
        <div>
        <button onClick={settingsClcik}>회원정보 수정</button>


        </div>
    )
}

export default MainPage