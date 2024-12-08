import { style } from '@vanilla-extract/css';

export const Layout_Box = style({
    maxWidth: '100vw',
    overflowX: 'hidden',
    width: '100%',
    height: '100%',
    display: 'flex',
    flex: '1',
});

export const Layout_Contents = style({
    width: '75%',
    background: 'white',
    paddingRight: '50px',
});
