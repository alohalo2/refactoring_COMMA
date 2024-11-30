import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import
import { Login_Box, 
        Login_Form, 
        Login_Comma_Phrase,
        Login_Input_Id_Group, 
        Login_Input_Pw_Group, 
        Login_Pw_Blind_Icon, 
        Login_Button_Group,
        Login_Button_style,
        Join_Button_style,
        Button_Box,
        ID_Input_Style,
        PW_Input_Style,
        ID_Input_Focus_Style,
        PW_Input_Focus_Style,
} from '../css/Login.css';

// Form 데이터 타입 정의
interface LoginFormData extends Record<string, string> {
    id: string;
    pw: string;
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        id: '',
        pw: '',
    });

    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const navi = useNavigate(); // useNavigate 사용

    // 입력 필드 값 변경 핸들러
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
    };

    // 폼 제출 핸들러
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 동작 방지

    try {
        const response = await fetch('https://example.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
        });

        if (!response.ok) {
        throw new Error('Login failed');
        }

        const data = await response.json();
        console.log('Login successful:', data);
        // 로그인 성공 후 처리 로직
    } catch (error) {
        console.error('Error:', error);
    }
    };

    // ID, PW Focus 상태 관리
    const handleFocus = (field: string) => setFocusedField(field);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        // blur를 방지하려면 클릭된 요소를 확인
        const clickedElement = e.relatedTarget as HTMLElement;
        if (clickedElement?.classList.contains(Login_Pw_Blind_Icon)) {
        return; // 비밀번호 보기 버튼 클릭 시 blur 방지
        }
        setFocusedField(null); // blur 이벤트 정상 처리
    };

    const togglePasswordVisibility = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsPasswordVisible((prev) => !prev);
    };

    const handleJoinClick = () => {
        navi('/login/join'); // Join Page로 이동
    };

    return (
        <div className={Login_Box}>
            <div>
                <p className={Login_Comma_Phrase}>당신의 일상에 ‘쉼표’를 선물하세요.</p>
            </div>
            <form className={Login_Form} onSubmit={handleSubmit}>
                <div className={Login_Input_Id_Group}>
                    <input
                    type="text"
                    id="id"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    onFocus={() => handleFocus('id')}
                    onBlur={handleBlur}
                    required
                    className={`${ID_Input_Style} ${
                        focusedField === 'id' ? ID_Input_Focus_Style : ''
                    }`}
                    />
                </div>
                <div className={Login_Input_Pw_Group}>
                    <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    id="pw"
                    name="pw"
                    value={formData.pw}
                    onChange={handleChange}
                    onFocus={() => handleFocus('pw')}
                    onBlur={handleBlur}
                    required
                    className={`${PW_Input_Style} ${
                        focusedField === 'pw' ? PW_Input_Focus_Style : ''
                    }`}
                    />
                    <span
                        onMouseDown={(e) => e.preventDefault()} // 클릭 시 blur 방지
                        onClick={togglePasswordVisibility}
                    >
                        <img className={Login_Pw_Blind_Icon} 
                            src={isPasswordVisible ? '/images/blind_on_icon.svg' : '/images/blind_off_icon.svg'}
                        />
                    </span>
                </div>
                <div className={Login_Button_Group}>
                    <div className={Button_Box}>
                        <button type="submit" className={Login_Button_style}>LOGIN</button>
                    </div>
                    <div className={Button_Box}>
                        <button type="button" 
                                className={Join_Button_style}
                                onClick={handleJoinClick}
                        >
                        JOIN
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;