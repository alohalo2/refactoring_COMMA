import { style, globalStyle } from '@vanilla-extract/css';

export const Login_Box = style({
    width: '260px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const Login_Comma_Phrase = style({
    marginTop:'30px',
    fontSize: '16px',
    fontWeight: '400'
});

export const Login_Form = style({
    marginTop: '60px',
});

export const Login_Input_Id_Group = style({
});

export const Login_Input_Pw_Group = style({
    position: 'relative',
});

export const ID_Input_Style = style({
    border: 'none',
    borderBottom: '2px solid #000',
    width: '80%',
    padding: '10px 5px',
    outline: 'none',
    fontSize: '16px',
    color: '#000',
    background: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 20'><style>@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@700');</style><text x='0' y='15' fill='black' font-size='6' font-family='Gothic A1' font-weight='bold'>ID</text></svg>")`,
    backgroundPosition: '0px bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingLeft: '40px',
});

export const ID_Input_Focus_Style = style({
    borderBottom: '2px solid #FF6B00',
});

export const PW_Input_Style = style({
    border: 'none',
    borderBottom: '2px solid #000',
    width: '80%',
    padding: '10px 5px',
    outline: 'none',
    fontSize: '16px',
    color: '#000',
    background: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 20'><style>@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@700');</style><text x='0' y='15' fill='black' font-size='6' font-family='Gothic A1' font-weight='bold'>PW</text></svg>")`,
    backgroundPosition: '0px bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingLeft: '40px',
});

export const PW_Input_Focus_Style = style({
    borderBottom: '2px solid #FF6B00',
});

export const Login_Pw_Blind_Icon = style({
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: '8px',
    right: '5px',
    cursor: 'pointer',
});

export const Login_Button_Group = style({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    gap: '20px',
});

export const Button_Box = style({
    position: 'relative',
});

export const Login_Button_style = style({
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

export const Join_Button_style = style({
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