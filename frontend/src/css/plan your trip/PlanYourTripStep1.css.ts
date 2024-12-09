import { style, globalStyle, styleVariants } from '@vanilla-extract/css';

export const PYTS1_Box = style({
    width: '100%',
    backgroundColor: '#F4F4F4',
    borderRadius: '10px',
    marginTop: '20px',
    marginBottom: '20px',
    padding: '20px',
    boxSizing: 'border-box',
});

export const PYTS1_Contents_Title = style({
    width: '150px',
});


export const PYTS1_Trip_Title_Box = style({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
});

export const PYTS1_Trip_Title_Input = style({
    width: '500px',
    height: '40px',
    borderRadius: '5px',
    border: '1px solid #ccc',
});

export const PYTS1_Trip_Calendar_Box = style({
    display: 'flex',
    // alignItems: 'center',
    marginBottom: '20px',
});

export const PYTS1_Trip_Calendar = style({
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '20px',
});

export const PYTS1_Trip_Select_Box = style({
    display: 'flex',
    // alignItems: 'center',
});

export const PYTS1_Trip_Select = style({
    width: '500px',
    display: 'flex',
    justifyContent: 'space-between',
});

export const PYTS1_Trip_Select_Label = style({
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const PYTS1_Trip_Select_Checkbox = style({
    width: '15px',
    height: '15px',
});

export const PYTS1_Button_Box = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px',
    // marginBottom: '10px',
});

export const PYTS1_Button = style({
    width: '',
    height: '',
    backgroundColor: '#ccc',
    border: 'none',
    borderRadius: '10px',
    padding: '8px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    selectors: {
        '&:hover': {
            backgroundColor: '#FF6B00',
        }
    }

});

globalStyle(
    '.react-calendar__tile.react-calendar__month-view__days__day--neighboringMonth',
    {
        display: 'none', 
    }
);

globalStyle(
    '.react-calendar',{
        fontFamily: 'Gothic A1',
    }
);

globalStyle(
    '.react-calendar',{
        fontFamily: 'Gothic A1',
    }
);