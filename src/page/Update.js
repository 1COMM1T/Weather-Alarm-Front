import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setKey, setEmail } from "../Store";
import LocationSelect from "../components/LocationSelect";
import TimeSelect from "../components/TimeSelect";
import EmailInput from "../components/EmailInput";
import axios from 'axios';
import '../css/Main.css';
import Button from "../components/Button";

function Update() {
    const email = useSelector(state => state.main.email);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const navigate = useNavigate();

    const handleLocationSelect = (locationId) => {
        setSelectedLocation(locationId);
    };

    const handleTimeSelect = (hour) => {
        setSelectedTime(hour);
    };

    const handleSave = async () => {
        try {
            const jsonData = {
                email,
                location: selectedLocation,
                time: selectedTime
            }

            const response = await axios.post('/v1/weather-mappings', jsonData);

            console.log('저장 성공', response.data)
        } catch (error) {
            console.log('저장 실패', error)
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleDelete = () => {
        // TODO: 삭제 버튼 클릭 시 동작
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

    console.log('email', email);

    return (
        <div className="main" style={mainStyle}>
            <div className="content">
                <h1 className="mt-4 mb-4">Weather-Alarm</h1>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <EmailInput email={email} disabled />
                    <LocationSelect onSelect={handleLocationSelect} />
                    <TimeSelect onSelect={handleTimeSelect} />
                    <div className="form-group" style={{ width: 300 }}>
                        <div className="d-flex justify-content-between mt-4 mb-4">
                            <Button label={'수정'} onClick={handleSave} className={"btn-primary"} />
                            <Button label={'취소'} onClick={handleCancel} className={"btn-secondary"} />
                            <Button label={'삭제'} onClick={handleDelete} className={"btn-danger"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Update;
