import { useState } from "react";
import LocationSelect from "../components/LocationSelect";
import TimeSelect from "../components/TimeSelect";
import '../css/Main.css'

function Main() {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleLocationSelect = (locationId) => {
        setSelectedLocation(locationId);
    };

    const handleTimeSelect = (hour) => {
        setSelectedTime(hour);
    };

    const handleSubmit = () => {
        // TODO: 선택된 내용 처리 메소드 작성 
    };

    return (
        <div className="Main container">
            <h1 className="mt-4 mb-4">Weather-Alarm</h1>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <LocationSelect onSelect={handleLocationSelect} />
                <TimeSelect onSelect={handleTimeSelect} />
                <button className="btn btn-primary mt-4" onClick={handleSubmit}>
                    저장
                </button>
            </div>
        </div>
    );
}

export default Main;