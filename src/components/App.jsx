import { ThemeProvider } from "styled-components";
// import { Cards } from "./Cards/Cards";
import { Main } from "./Main/Main";
import bootstrap from 'bootstrap';
import { theme } from "./theme";
import { DARK, LIGHT } from "./constant/theme";
import Counter from "./Counter/Counter";
// import { Toggle } from "./Main/toggle";
import Dropdown from "./Dropdown/Dropdown";
import { Component } from "react";
// import { Product } from "./Cards/Card_test";


export class App extends Component {
  state = {
    theme: LIGHT,
  }

  themeTogler = (e) => {
    if (this.state.theme === e.target.name) return;

    this.setState((prevState) => ({
      theme: prevState.theme === LIGHT ? DARK : LIGHT,
    }))
}

render() {

  return(
      <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'start',
        fontSize: 40,
        // color: 'primery',
        // backgroundColor: 'secondary'
        //  font: '1rem/ 1.5 var(--bs - font - sans - serif)',
        // color: 'var(--bs - blue)'
   
}}>
    
        <Main
          onToggle={this.themeTogler}
          theme={this.state.theme}
        />
        {/* <Cards /> */}
        <Counter initialValue={10} />
        {/* <Toggle /> */}
        {/* <Dropdown text="Some text"/> */}
        {/* <Product/> */}
  

    </div>
  );
  }
}


