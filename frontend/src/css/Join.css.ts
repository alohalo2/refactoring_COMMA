import { style, globalStyle } from '@vanilla-extract/css';

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

export const PW_CHECK_Input_Style = style({
    border: 'none',
    borderBottom: '2px solid #000',
    width: '50%',
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
    width: '80%',
    padding: '10px 5px',
    outline: 'none',
    fontSize: '16px',
    color: '#000',
    background: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 20'><style>@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@700');</style><text x='0' y='15' fill='black' font-size='6' font-family='Gothic A1' font-weight='bold'>NAME</text></svg>")`,
    backgroundPosition: '0px bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingLeft: '40px',
});

export const NAME_Input_Focus_Style = style({
    borderBottom: '2px solid #FF6B00',
});

export const WHERE_YOU_LIVE_Input_Style = style({
    border: 'none',
    borderBottom: '2px solid #000',
    width: '80%',
    padding: '10px 5px',
    outline: 'none',
    fontSize: '16px',
    color: '#000',
    background: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 20'><style>@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@700');</style><text x='0' y='15' fill='black' font-size='6' font-family='Gothic A1' font-weight='bold'>WHERE YOU LIVE</text></svg>")`,
    backgroundPosition: '0px bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingLeft: '40px',
});

export const WHERE_YOU_LIVE_Input_Focus_Style = style({
    borderBottom: '2px solid #FF6B00',
});

export const Join_Radio_Group = style({
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

export const Join_Radio_Label = style({
});
