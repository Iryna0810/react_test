// @import-normalize;
import { ThemeProvider } from "styled-components";
import { Cards } from "./Cards/Cards";
import { Main } from "./Main/Main";
import bootstrap from 'bootstrap';
import { light } from "theme";
import Counter from "./Counter/Counter";


function App() {
  return (
    <div
      style={{

        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101'
        //  font: '1rem/ 1.5 var(--bs - font - sans - serif)',
        // color: 'var(--bs - blue)'
   
}}>
      <ThemeProvider theme={light}>
      <Main />
        {/* <Cards /> */}
        <Counter />
      </ThemeProvider> 

    </div>
  );
}

export { App };
