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

export const startDateStyle = style({
    borderRadius: '10px 0 0 10px !important',
    backgroundColor: '#FF6B00',
});

export const endDateStyle = style({
    borderRadius: '0 10px 10px 0 !important',
    backgroundColor: '#FF6B00 !important',
    color: 'white',
});

export const middleDateStyle = style({
    borderRadius: '0 !important' ,
    backgroundColor: '#FF6B00',
});


globalStyle(
    '.react-calendar',{
        fontFamily: 'Gothic A1',
    }
);

globalStyle(
    '.react-calendar__month-view__weekdays',{
        fontSize: '16px',
        fontWeight: 'bold',
    }
);

globalStyle(
    '.react-calendar__tile',{
        fontSize: '14px',
        fontWeight: 'bold',
    }
);

globalStyle(
    '.react-calendar__tile--active',{
        backgroundColor: '#FF6B00',
        borderRadius: '10px',
    }
);

globalStyle(
    '.react-calendar__tile--hasActive',{
        backgroundColor: '#FF6B00',
        borderRadius: '10px',
        color: 'white',
    }
);



// globalStyle('led:hover', {
//     backgroundColor: '#FDA260', // 새로운 배경색 적용
// });

// globalStyle('calendar__tile:enabled:focus', {
//     backgroundColor: '#FDA260', // 새로운 배경색 적용
// });

globalStyle(
    '.react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus', {
        background: '#FF8F3E',
});

globalStyle(
    '.react-calendar__tile--hasActive:enabled:hover, .react-calendar__tile--hasActive:enabled:focus', {
        background: '#FDA260',
});

// globalStyle('.react-calendar--selectRange .react-calendar__tile--hover', {
//     backgroundColor: '#FDA260', // 새로운 배경색 적용
// });

globalStyle(
    '.react-calendar__month-view__days__day--neighboringMonth',{
        visibility: 'hidden',
    }
);

globalStyle(
    '.react-calendar__tile.hidden-tile',{
        visibility: 'hidden',
    }
);

globalStyle(
    '.react-calendar__tile:disabled',{
        background: 'white',
    }
);

globalStyle(
    'abbr[title]',{
        textDecoration: 'none',
    }
);

// 일요일 스타일 (빨간색)
globalStyle('.react-calendar__month-view__weekdays__weekday:nth-child(1) abbr', {
    color: 'red',
});

// 월요일부터 금요일 스타일 (검정색)
globalStyle(
'.react-calendar__month-view__weekdays__weekday:nth-child(n+2):nth-child(-n+6) abbr',
{
    color: 'black',
}
);

// 토요일 스타일 (파란색)
globalStyle('.react-calendar__month-view__weekdays__weekday:nth-child(7) abbr', {
    color: 'blue',
});

// 토요일 스타일 (파란색)
globalStyle('.react-calendar__month-view__days__day--weekend:nth-child(7n)', {
    color: 'blue',
});

globalStyle('.react-calendar__tile--now', {
    borderRadius: '10px',
});

