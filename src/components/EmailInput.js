const EmailInput = ({ email, onChange }) => {
    return (
        <div className="form-group" style={{ width: 300 }}>
            <label>이메일 주소</label>
            <input
                type="email"
                className="form-control"
                value={email}
                onChange={onChange}
                placeholder="이메일을 입력해주세요"
            />
        </div>
    );
};

export default EmailInput;