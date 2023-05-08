// export const white = {
//     colors : {
//         primery: '#000',
//         secondary: '#b0dfec'
//     }
//     // font- size: {
//     //     small: '12px',
//     //     medium: '18px',
//     // }
// }
import { DARK, LIGHT } from "./components/constant/theme";

const dark = {
    colors: {
        primery: '#fff',
        secondary: '#000',
        accent: '#ccc',
        danger: 'tomato',
        success: 'green',
    },
};

const light = {
    colors: {
        primery: '#000',
        secondary: '#fff',
        accent: '#999',
        danger: 'tomato',
        success: 'green',
    }
};


export const theme = {
    [LIGHT]: light,
    [DARK]: dark,
}; 

