import { style, globalStyle, styleVariants } from '@vanilla-extract/css';

export const NM_Search_Box = style({
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    gap: '20px',

});

export const NM_Search_Input_Box = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
});

export const NM_Search_Input = style({
    width: '300px',
    height: '30px',
    border: 'none',
    borderRadius: '10px',
    padding: '5px',
    fontSize: '16px',
    
});

export const NM_Search_Button = style({
    position: 'absolute',
    top: '8px',
    right: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
});