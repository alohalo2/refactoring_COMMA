import { style,globalStyle } from '@vanilla-extract/css';

export const LJ_Box = style({
    width: '850px',
    height: '650px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
});

export const LJ_Box_First = style({

});

export const LJ_Box_Logo_Image = style({
    width: '70px',
    height: '70px',
});

globalStyle(`${LJ_Box_First} img`, {
    width: '385px',
    height: '610px',
    padding: '20px',
});

export const LJ_Box_Second = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1',
    justifyContent: 'center',
});

globalStyle(`${LJ_Box_Second} h3`, {
    fontSize: '24px',
    margin: '10px 0'
});