import React, { Component } from "react";
import { bootstrap } from "bootstrap";
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming';
// import { themes } from "theme";
import { DARK, LIGHT } from "../constant/theme";
// import { LIGHT } from "theme";

const boxBackgroundColor = theme('mode', {
  light: '#15f928',
  dark: '#000',
})

const Box = styled.div`
  background-color: ${boxBackgroundColor};
`;



class Dropdown extends Component {
    state = {
        visible: false,
        theme: DARK,
    }

    show = () => {
        this.setState({ visible: true });
    };
    
    hide = () => {
        this.setState({ visible: false });
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }))
    };
    handleClick = () => {
        // if (this.state.theme === LIGHT) {
        //     this.setState({
        //        theme: DARK,
        //    })
        // }
        // if (this.state.theme === DARK) {
        //     this.setState({
        //        theme: LIGHT,
        //    })
        // }
        
        this.setState((prevState) => 
               ({theme: prevState.theme === DARK ? LIGHT : DARK,})            
        )
};

    render() {
        // console.log(this.props);
        return (
            <ThemeProvider theme={{ mode: 'light' }}>
                <Box className="Dropdown">
                {/* <button type="button"
                    className="btn btn-primary btn-lg Dropdown__toggle"
                    onClick={this.show}>
                    Show
                </button>
                <button type="button"
                    className="btn btn-primary btn-lg Dropdown__toggle"
                    onClick={this.hide}>
                    Hide
                </button> */}
                 <button type="button"
                    className="btn btn-primary btn-lg Dropdown__toggle"
                    onClick={this.toggle}>
                    {this.state.visible ? 'Hide' : 'Show'}
                </button>
                
                    {this.state.visible && (<div className="Dropdown__menu">Bubble Menu</div>)}
                    <input type="text" onChange={this.handleChange} />
                    <p>{this.state.theme}</p>
                                     
                    <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={this.handleClick}>Theme
                </button>
                
            </Box>

            </ThemeProvider>
            
        )
    }
}

export default Dropdown;