import { Paragraph } from "../Paragraph/Paragraph";
import { Button } from "./styled";
import React, { Component } from "react";
import { DARK, LIGHT } from "../constant/theme";

export class Main extends Component {

    handleClick = (e) => {
        if (this.state.theme === e.target.name) return;

        this.setState((prevState) => ({
            theme: prevState.theme === LIGHT ? DARK : LIGHT,
            customText: "Custom text",
        }));
    };

    render() {
        const { onToggle, theme } = this.props;
        
        return (
            <div>
                <Paragraph className="par_class">Hello world</Paragraph>
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab suscipit odit quod natus eum temporibus quis ad eligendi quia consectetur. Modi deleniti fuga hic, autem eaque commodi culpa pariatur repellendus dolore fugit quos obcaecati dicta minus voluptates consequuntur iusto esse velit, voluptate excepturi inventore qui totam. Ut impedit optio iste.
                </div>
                <button isActive={theme === DARK} name={DARK} onClick={onToggle}>Dark</button>
                <button isActive={theme === LIGHT} name={LIGHT} onClick={onToggle}>Light</button>
            </div >
        );
    };
}

