import { style, globalStyle, styleVariants } from '@vanilla-extract/css';

export const PYTS2_Box = style({
    display: 'flex',
    width: '100%',
});

export const PYTS2_Left_Box = style({
    width: '30%',
});


export const PYTS2_Right_Box = style({
    width: '70%',
    backgroundColor: '#F4F4F4',
    borderRadius: '10px',
    marginTop: '20px',
    marginBottom: '20px',
    padding: '20px',
    boxSizing: 'border-box',
});
