import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKey, setEmail } from "../Store";
import { useNavigate } from "react-router";
import EmailInput from "../components/EmailInput";
import Button from "../components/Button";
import axios from 'axios';
import CheckModal from "../components/CheckModal";
import '../css/Main.css';

function Main() {
    const email = useSelector(state => state.main.email);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        dispatch(setEmail(e.target.value));
    };

    const handleCheck = async () => {
        try {
            console.log(email);
            const response = await axios.get(`http://localhost:8080/v1/weather-mappings/key`, {
                params: { email: email }
            });

            // 이메일로 조회되는 키값이 있으면 업데이트, 없으면 등록 여부 확인 모달
            response.data
                ? navigate('/update')
                : setIsModalOpen(true)

        } catch (error) {
            setIsModalOpen(true)
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onConfirm = () => {
        navigate('/save');
    }

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
            <CheckModal isOpen={isModalOpen} onClose={closeModal} onConfirm={onConfirm} />
        </div>
    );
}

export default Main;
