import { useState } from "react";
import LocationSelect from "../components/LocationSelect";
import TimeSelect from "../components/TimeSelect";
import EmailInput from "../components/EmailInput";
import '../css/Main.css';

function Main() {
    const [email, setEmail] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleLocationSelect = (locationId) => {
        setSelectedLocation(locationId);
    };

    const handleTimeSelect = (hour) => {
        setSelectedTime(hour);
    };

    const handleSave = () => {
        // TODO: 선택된 내용 처리 메소드 작성 
    };

    const handleUpdate = () => {
        // TODO: 수정 버튼 클릭 시 동작
    };

    const handleDelete = () => {
        // TODO: 삭제 버튼 클릭 시 동작
    };

    const mainStyle = {
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url(/images/blue.jpg)', // 배경 이미지 경로 설정
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const contentStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
    };

    return (
        <div className="Main" style={mainStyle}>
            <div className="Content" style={contentStyle}>
                <h1 className="mt-4 mb-4">Weather-Alarm</h1>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <EmailInput email={email} onChange={handleEmailChange} />
                    <LocationSelect onSelect={handleLocationSelect} />
                    <TimeSelect onSelect={handleTimeSelect} />
                    <div className="form-group" style={{ width: 300 }}>
                    <div className="d-flex justify-content-between mt-4">
                        <button className="btn btn-primary mx-2" onClick={handleSave}>
                            저장
                        </button>
                        <button className="btn btn-secondary mx-2" onClick={handleUpdate}>
                            수정
                        </button>
                        <button className="btn btn-danger mx-2" onClick={handleDelete}>
                            삭제
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
