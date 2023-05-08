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
import { DARK, LIGHT } from "./constant/theme.js";

const dark = {
    currentTheme: DARK,
    colors: {
        primery: "#fff",
        secondary: "#000",
        accent: "#ccc",
        danger: "tomato",
        success: "green",
    },
};

const light = {
  currentTheme: LIGHT,
  colors: {
    primary: "#000",
    secondary: "#fff",
    accent: "#999",
    danger: "#ff0000",
    success: "#008000",
  },
};

export const theme = {
  LIGHT: light,
  DARK: dark,
};

