import { style, globalStyle, styleVariants } from '@vanilla-extract/css';

export const PYH_Header_Box = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
});

export const PYH_Header_P = style({
    textAlign: 'center',
    fontSize: '18px',
});


export const PYH_Progress_Box = style({
    display:'flex',
    justifyContent:'space-between',
    width: '100%',
    boxSizing: 'border-box',
    margin: '20px 0'
});

export const PYH_Header_ProgressLine = styleVariants({
    active: {
        marginTop: '10px',
        height: '4px',
        width: '150px',
        backgroundColor: '#ff6600',
    },
    inactive: {
        marginTop: '10px',
        height: '4px',
        width: '150px',
        backgroundColor: '#ddd',
    },
});

export const PYH_Header_StepNumber = styleVariants({
    active: {
        marginTop: '5px',
        fontSize:'18px',
        fontWeight: 'bold',
        color: '#ff6600',
    },
    inactive: {
        marginTop: '5px',
        fontSize:'18px',
        fontWeight: 'bold',
        color: '#000000',
    },
});

export const PYH_Header_Label = styleVariants({
    active: {
        marginTop: '5px',
        fontSize: '14px',
        color: '#ff6600',
        fontWeight: 'bold',
    },
    inactive: {
        marginTop: '5px',
        fontSize: '14px',
        color: '#000000',
        fontWeight: 'bold',
    },
});

export const PYH_BreakLine = style({
    boxSizing: 'border-box',
    width: '100%',
    height: '2px',
    backgroundColor: '#ccc',
});