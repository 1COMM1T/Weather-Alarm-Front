const generateHours = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
        hours.push(i);
    }
    return hours;
};

const TimeSelect = ({ onSelect }) => {
    const hours = generateHours();

    return (
        <div className="form-group" style={{ width: 300 }}>
            <label>알림 받을 시간</label>
            <select className="form-control" onChange={(e) => onSelect(e.target.value)}>
                <option value="">시간을 선택해주세요</option>
                {hours.map((hour) => (
                    <option key={hour} value={hour}>
                        {hour}:00
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TimeSelect;