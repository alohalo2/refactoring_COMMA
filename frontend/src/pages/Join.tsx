import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Join_Container,
    Join_Form_Container,
    Join_Form,
    Join_Header,
    Join_Input_Group,
    Join_Radio_Group,
    Join_Button_Group,
    ID_Input_Style,
    ID_Input_Focus_Style,
    PW_Input_Style,
    PW_Input_Focus_Style,
    PW_CHECK_Input_Style,
    PW_CHECK_Input_Focus_Style,
    NAME_Input_Style,
    NAME_Input_Focus_Style,
    WHERE_YOU_LIVE_Input_Style,
    WHERE_YOU_LIVE_Input_Focus_Style,
    Button_Box,
    Join_Button,
    Cancle_Button,
    Join_Input_Style,
    Join_Radio_Label,
} from '../css/Join.css';

const JoinPage: React.FC = () => {
const navi = useNavigate();
const [formData, setFormData] = useState({
    id: '',
    pw: '',
    pwCheck: '',
    name: '',
    gender: '',
    location: '',
});

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
    ...prev,
    [name]: value,
    }));
};

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
};

const handleCancel = () => {
    navi('/login'); // 메인 화면으로 이동
};

return (
    <div className={Join_Container}>
        <div className={Join_Form_Container}>
            <form className={Join_Form} onSubmit={handleSubmit}>
                <h3 className={Join_Header}>JOIN THE MEMBERSHIP</h3>
                <div className={Join_Input_Group}>
                    <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    className={ID_Input_Style}
                    required
                    />
                </div>
                <div className={Join_Input_Group}>
                    <input
                    type="password"
                    name="pw"
                    value={formData.pw}
                    onChange={handleChange}
                    className={PW_Input_Style}
                    required
                    />
                </div>
                <div className={Join_Input_Group}>
                    <input
                    type="password"
                    name="pwCheck"
                    value={formData.pwCheck}
                    onChange={handleChange}
                    className={PW_CHECK_Input_Style}
                    required
                    />
                </div>
                <div className={Join_Input_Group}>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={NAME_Input_Style}
                    required
                    />
                </div>
                <div className={Join_Radio_Group}>
                    <label className={Join_Radio_Label}>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                        required
                    />
                    MALE
                    </label>
                    <label className={Join_Radio_Label}>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                    />
                    FEMALE
                    </label>
                </div>
                <div className={Join_Input_Group}>
                    <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={WHERE_YOU_LIVE_Input_Style}
                    required
                    />
                </div>
                <div className={Join_Button_Group}>
                    <div className={Button_Box}>
                        <button type="submit" className={Join_Button}>
                        JOIN
                        </button>
                    </div>
                    <div className={Button_Box}>
                        <button type="button" className={Cancle_Button} onClick={handleCancel}>
                        CANCEL
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
);
};

export default JoinPage;