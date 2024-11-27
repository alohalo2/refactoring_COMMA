import { style,globalStyle } from '@vanilla-extract/css';

export const LJ_Box = style({
    width: '800px',
    height: '600px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    margin: 'auto',
    display: 'flex',
});

export const LJ_Box_First = style({
});

// ul 스타일 적용
globalStyle(`${LJ_Box_First} img`, {
    width: '360px',
    height: '560px',
    padding: '20px',

});

export const LJ_Box_Second = style({

});