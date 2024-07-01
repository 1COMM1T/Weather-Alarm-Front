import { useState } from "react";
import LocationSelect from "../components/LocationSelect";
import TimeSelect from "../components/TimeSelect";
import EmailInput from "../components/EmailInput";
import axios from 'axios';
import '../css/Main.css';
import Button from "../components/Button";

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

    const handleSave = async () => {
        // TODO: 저장 버튼 클릭 시 동작
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
                    <LocationSelect onSelect={handleLocationSelect} />
                    <TimeSelect onSelect={handleTimeSelect} />
                    <div className="form-group" style={{ width: 300 }}>
                        <div className="d-flex justify-content-between mt-4">
                            <Button label={'저장'} onClick={handleSave} className={"btn-primary"}/>
                            <Button label={'수정'} onClick={handleUpdate} className={"btn-secondary"}/>
                            <Button label={'삭제'} onClick={handleDelete} className={"btn-danger"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
