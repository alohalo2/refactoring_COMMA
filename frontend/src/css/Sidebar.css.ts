import { style,globalStyle } from '@vanilla-extract/css';

export const LO_sidebar_box = style({
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '40px'
});

// ul 스타일 적용
globalStyle(`${LO_sidebar_box} img`, {
    width: '100px',
    height: '100px',

});

export const LO_sidebar_first = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
});

export const LO_sidebar_second = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
});

// ul 스타일 적용
globalStyle(`${LO_sidebar_second} ul`, {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    gap: '20px',
});

// ul 스타일 적용
globalStyle(`${LO_sidebar_second} ul li`, {
    fontSize: '24px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
});

globalStyle(`${LO_sidebar_second} ul li:hover`, {
    color: '#FF6B00',
    transform: 'scale(1.1)',
});


export const LO_sidebar_third = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
});

globalStyle(`${LO_sidebar_third} ul`, {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    gap: '10px',
});

globalStyle(`${LO_sidebar_third} ul li`, {
    fontSize: '14px'
});

globalStyle(`${LO_sidebar_third} div`, {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
});

globalStyle(`${LO_sidebar_third} span`, {
    color: '#FF6B00',
});
