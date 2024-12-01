import { style, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes'; 

export const Join_Container = style({
    width: '300px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const Join_Form_Container = style({
});

export const Join_Form = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const Join_Header = style({
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '0',
});

export const Join_Input_Group = style({
});

export const ID_Input_Style = style({
    border: 'none',
    borderBottom: '2px solid #000',
    width: '200px',
    padding: '10px 5px',
    outline: 'none',
    fontSize: '16px',
    color: '#000',
    background: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 20'><style>@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@700');</style><text x='0' y='15' fill='black' font-size='6' font-family='Gothic A1' font-weight='bold'>ID</text></svg>")`,
    backgroundPosition: '0px bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingLeft: '30px',
});

export const ID_Input_Focus_Style = style({
    borderBottom: '2px solid #FF6B00',
});

export const PW_Input_Style = style({
    border: 'none',
    borderBottom: '2px solid #000',
    width: '200px',
    padding: '10px 5px',
    outline: 'none',
    fontSize: '16px',
    color: '#000',
    background: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 20'><style>@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@700');</style><text x='0' y='15' fill='black' font-size='6' font-family='Gothic A1' font-weight='bold'>PW</text></svg>")`,
    backgroundPosition: '0px bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingLeft: '30px',
});

export const PW_Input_Focus_Style = style({
    borderBottom: '2px solid #FF6B00',
});

export const PW_CHECK_Input_Style = style({
    border: 'none',
    borderBottom: '2px solid #000',
    width: '150px',
    padding: '10px 5px',
    outline: 'none',
    fontSize: '16px',
    color: '#000',
    background: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 20'><style>@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@700');</style><text x='0' y='15' fill='black' font-size='6' font-family='Gothic A1' font-weight='bold'>PW CHECK</text></svg>")`,
    backgroundPosition: '0px bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingLeft: '80px',
});

export const PW_CHECK_Input_Focus_Style = style({
    borderBottom: '2px solid #FF6B00',
});

export const NAME_Input_Style = style({
    border: 'none',
    borderBottom: '2px solid #000',
    width: '180px',
    padding: '10px 5px',
    outline: 'none',
    fontSize: '16px',
    color: '#000',
    background: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 20'><style>@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@700');</style><text x='0' y='15' fill='black' font-size='6' font-family='Gothic A1' font-weight='bold'>NAME</text></svg>")`,
    backgroundPosition: '0px bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingLeft: '50px',
});

export const NAME_Input_Focus_Style = style({
    borderBottom: '2px solid #FF6B00',
});

export const Join_Radio_Group = style({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom:'10px',
    gap: '20px',
});

export const Label_box = style({
    position: 'relative',
});

export const Join_Radio_Label = recipe({
    base: {
    position: 'relative',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out',
    selectors: {
        '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '2px',
        backgroundColor: '#FF6B00',
        transform: 'scaleX(0)',
        transformOrigin: 'center',
        transition: 'transform 0.3s ease-in-out',
        },
        '&:hover::after': {
        transform: 'scaleX(1)',
        },
        '&:hover': {
        color: '#FF6B00',
        },
    },
    },
    variants: {
    isSelected: {
        true: {
        color: '#FF6B00', // 선택 시 텍스트 색상
        selectors: {
            '&::after': {
            transform: 'scaleX(1)', // 선택 시 밑줄 표시
            },
        },
        },
        false: {},
    },
    },
});

export const Join_Radio_Input_Style = style({
    display: 'none', // 기본 라디오 버튼 숨김
    fontSize: '16px',
});

export const Join_Radio_Label_Selected = style({
    backgroundColor: 'black', // 선택 시 배경색
    color: 'white', // 선택 시 글자색
    borderColor: 'black', // 선택 시 테두리 색 변경
});

export const WHERE_YOU_LIVE_Input_Style = style({
    border: 'none',
    borderBottom: '2px solid #000',
    width: '100px',
    padding: '10px 5px',
    outline: 'none',
    fontSize: '16px',
    color: '#000',
    background: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 20'><style>@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@700');</style><text x='0' y='15' fill='black' font-size='6' font-family='Gothic A1' font-weight='bold'>WHERE YOU LIVE</text></svg>")`,
    backgroundPosition: '0px bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingLeft: '130px',
});

export const WHERE_YOU_LIVE_Second_Input_Style = style({
    border: 'none',
    borderBottom: '2px solid #000',
    width: '225px',
    height: '25px',
    padding: '10px 5px',
    outline: 'none',
    fontSize: '16px',
    color: '#000',
    background: 'none',
    resize: 'none',
    fontFamily: 'Gothic A1, sans-serif', // 글꼴
    fontWeight: '400',
    textAlign: 'center', // 텍스트 가운데 정렬
    selectors: {
        '&::placeholder': {
            color: 'gray',         // placeholder 색상
            fontSize: '14px',      // 글자 크기
            textAlign: 'left', 
            fontFamily: 'Gothic A1, sans-serif', // 글꼴
        },
    }, 
});

export const WHERE_YOU_LIVE_Third_Input_Style = style({
    border: 'none',
    borderBottom: '2px solid #000',
    width: '225px',
    padding: '10px 5px',
    outline: 'none',
    fontSize: '16px',
    color: '#000',
    background: 'none',
    selectors: {
        '&::placeholder': {
            color: 'gray',         // placeholder 색상
            fontSize: '14px',      // 글자 크기
            textAlign: 'left', 
            fontFamily: 'Gothic A1, sans-serif', // 글꼴
        },
    }, 
});

export const WHERE_YOU_LIVE_Input_Focus_Style = style({
    borderBottom: '2px solid #FF6B00',
});

export const Join_Button_Group = style({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    gap: '20px',
});

export const Button_Box = style({
    position: 'relative',
});

export const Join_Button = style({
    background: 'none',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    selectors: {
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '2px',
            backgroundColor: '#FF6B00',
            transform: 'scaleX(0)',
            transformOrigin: 'center',
            transition: 'transform 0.3s ease-in-out',
        },
        '&:hover::after': {
            transform: 'scaleX(1)',
        },
        '&:hover': {
            color: '#FF6B00',
        },
    },
});

export const Cancle_Button = style({
    background: 'none',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    selectors: {
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '2px',
            backgroundColor: '#FF6B00',
            transform: 'scaleX(0)',
            transformOrigin: 'center',
            transition: 'transform 0.3s ease-in-out',
        },
        '&:hover::after': {
            transform: 'scaleX(1)',
        },
        '&:hover': {
            color: '#FF6B00',
        },
    },
});

export const Join_Input_Style = style({
});
