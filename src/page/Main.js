import { useDispatch, useSelector } from "react-redux";
import { setKey, setEmail } from "../Store";
import EmailInput from "../components/EmailInput";
import '../css/Main.css';
import Button from "../components/Button";
import { useNavigate } from "react-router";

function Main() {
    const email = useSelector(state => state.main.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        dispatch(setEmail(e.target.value));
    };

    const handleCheck = async () => {
        // TODO: 임시, 확인 모달 작성해야함
        navigate('/update')
    };

    const mainStyle = {
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url(/images/blue.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    
    console.log('email',email);

    return (
        <div className="main" style={mainStyle}>
            <div className="content">
                <h1 className="mt-4 mb-4">Weather-Alarm</h1>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <EmailInput email={email} onChange={handleEmailChange} />
                    <div className="form-group" style={{ width: 300 }}>
                        <div className="mt-4 mb-4">
                            <Button label={'확인'} onClick={handleCheck} className={"btn-primary"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
