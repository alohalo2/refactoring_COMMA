import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Join_Container,
    Join_Form_Container,
    Join_Form,
    Join_Header,
    Join_Input_Group,
    Join_Radio_Group,
    Label_box,
    Join_Radio_Label,
    Join_Radio_Input_Style,
    Join_Radio_Label_Selected,
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
    WHERE_YOU_LIVE_Second_Input_Style,
    WHERE_YOU_LIVE_Third_Input_Style,
    WHERE_YOU_LIVE_Input_Focus_Style,
    Button_Box,
    Join_Button,
    Cancle_Button,
    Join_Input_Style,
    Join_Pw_Blind_Icon,
} from '../css/Join.css';

declare global {
    interface Window {
        daum: any;
    }
}

const loadDaumPostcodeScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (window.daum && window.daum.Postcode) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Daum Postcode API 로드 실패'));
        document.body.appendChild(script);
    });
};

const JoinPage: React.FC = () => {

    const [selectedGender, setSelectedGender] = useState<string | null>(null);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isPwVisible, setIsPwVisible] = useState(false); // pw의 가시성 상태
    const [isPwCheckVisible, setIsPwCheckVisible] = useState(false); // pwCheck의 가시성 상태

    const navi = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        pw: '',
        pwCheck: '',
        name: '',
        gender: '',
        selectedAddress: '', // 선택된 주소
        detailedAddress: '', // 세부 주소
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    // Daum Address API 실행
    const handleAddressSearch = async () => {
        try {
            await loadDaumPostcodeScript();

            new window.daum.Postcode({
                oncomplete: (data: any) => {
                    setFormData((prev) => ({
                        ...prev,
                        selectedAddress: data.address,
                    }));
                },
            }).open();
        } catch (error) {
            alert('Daum 주소 API를 로드하지 못했습니다.');
            console.error(error);
        }
    };

    const handleGenderSelect = (value: string) => {
        setSelectedGender(value); // 선택된 성별 저장
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fullAddress = `${formData.selectedAddress} ${formData.detailedAddress}`; // 전체 주소 생성
        console.log('Form submitted:', { ...formData, fullAddress });
    };

    // ID, PW Focus 상태 관리
    const handleFocus = (field: string) => setFocusedField(field);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        // blur를 방지하려면 클릭된 요소를 확인
        const clickedElement = e.relatedTarget as HTMLElement;
        if (clickedElement?.classList.contains(Join_Pw_Blind_Icon)) {
        return; // 비밀번호 보기 버튼 클릭 시 blur 방지
        }
        setFocusedField(null); // blur 이벤트 정상 처리
    };

    const handleAddressBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setFocusedField(null); // blur 이벤트 정상 처리
    };

    const togglePwVisibility = () => {
        setIsPwVisible((prev) => !prev);
    };

    const togglePwCheckVisibility = () => {
        setIsPwCheckVisible((prev) => !prev);
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
                        onFocus={() => handleFocus('id')}
                        onBlur={handleBlur}
                        className={`${ID_Input_Style} ${
                            focusedField === 'id' ? ID_Input_Focus_Style : ''
                        }`}
                        required
                        />
                    </div>
                    <div className={Join_Input_Group}>
                        <input
                        type={isPwVisible ? 'text' : 'password'}
                        name="pw"
                        value={formData.pw}
                        onChange={handleChange}
                        onFocus={() => handleFocus('pw')}
                        onBlur={handleBlur}
                        className={`${PW_Input_Style} ${
                            focusedField === 'pw' ? PW_Input_Focus_Style : ''
                        }`}
                        required
                        />
                        <span
                        onMouseDown={(e) => e.preventDefault()} // 클릭 시 blur 방지
                        onClick={togglePwVisibility}
                        >
                            <img className={Join_Pw_Blind_Icon} 
                                src={isPwVisible ? '/images/blind_on_icon.svg' : '/images/blind_off_icon.svg'}
                            />
                        </span>
                    </div>
                    <div className={Join_Input_Group}>
                        <input
                        type={isPwCheckVisible ? 'text' : 'password'}
                        name="pwCheck"
                        value={formData.pwCheck}
                        onChange={handleChange}
                        onFocus={() => handleFocus('pwCheck')}
                        onBlur={handleBlur}
                        className={`${PW_CHECK_Input_Style} ${
                            focusedField === 'pwCheck' ? PW_CHECK_Input_Focus_Style : ''
                        }`}
                        required
                        />
                        <span
                        onMouseDown={(e) => e.preventDefault()} // 클릭 시 blur 방지
                        onClick={togglePwCheckVisibility}
                        >
                            <img className={Join_Pw_Blind_Icon} 
                                src={isPwCheckVisible ? '/images/blind_on_icon.svg' : '/images/blind_off_icon.svg'}
                            />
                        </span>
                    </div>
                    <div className={Join_Input_Group}>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        className={`${NAME_Input_Style} ${
                            focusedField === 'name' ? NAME_Input_Focus_Style : ''
                        }`}
                        required
                        />
                    </div>
                    <div className={Join_Radio_Group}>
                        <div className={Label_box}>
                            <label
                                className={Join_Radio_Label({ isSelected: selectedGender === 'male' })}
                            >
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    onChange={() => handleGenderSelect('male')}
                                    className={Join_Radio_Input_Style}
                                    required
                                />
                            MALE
                            </label>
                        </div>
                        <div className={Label_box}>
                            <label
                                className={Join_Radio_Label({ isSelected: selectedGender === 'female' })}
                            >
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    onChange={() => handleGenderSelect('female')}
                                    className={Join_Radio_Input_Style}
                                />
                            FEMALE
                            </label>
                        </div>
                    </div>
                    <div className={Join_Input_Group}>
                        <input
                        type="text"
                        name="location"
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        readOnly // 직접 입력을 방지
                        className={WHERE_YOU_LIVE_Input_Style}
                        required
                        />
                    </div>
                    <div className={Join_Input_Group}>
                        <textarea
                            name="selectedAddress"
                            value={formData.selectedAddress}
                            readOnly
                            onClick={handleAddressSearch} // 클릭 시 주소 검색 실행
                            rows={2} // 두 줄 표시
                            placeholder='주소'
                            onFocus={() => handleFocus('selectedAddress')}
                            onBlur={handleAddressBlur}
                            className={`${WHERE_YOU_LIVE_Second_Input_Style} ${
                                focusedField === 'selectedAddress' ? WHERE_YOU_LIVE_Input_Focus_Style : ''
                            }`}
                        />
                    </div>
                    <div className={Join_Input_Group}>
                        <input
                            type="text"
                            name="detailedAddress"
                            value={formData.detailedAddress}
                            onChange={handleChange}
                            onFocus={() => handleFocus('detailedAddress')}
                            onBlur={handleBlur}
                            placeholder='상세 주소를 입력하세요.'
                            className={`${WHERE_YOU_LIVE_Third_Input_Style} ${
                                focusedField === 'detailedAddress' ? WHERE_YOU_LIVE_Input_Focus_Style : ''
                            }`}
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