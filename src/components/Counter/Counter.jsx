import React from "react";
import PropTypes from "prop-types";
import './counter.css';
import Controls from "./Controls";
import { Button } from "bootstrap";

class Counter extends React.Component {
    /*------------------------конструктор---------------------------------*/
    // constructor() {
    //     super();
    //     this.state = {
    //         value: 500,
    //     }
    // }
/*якщо не передано значення props використовуємо значення за default, яке прописуємо в 
статичній властивості defaultProps*/
      
    static defaultProps = {
        initialValue: 0,
    }
    /*також можна прописати і propTypes в статичній властивості*/
    
    static propTypes = {
    initialValue: PropTypes.number.isRequired,
}

    state = {
        value: this.props.initialValue,
    }; /*публічна властивість*/



    /*-----------------публічна властивість класу-----------------*/
    handleIncrement = () => {
        console.log('Click on increase');
        // console.log(this);
        // this.state.value = 1000; /*так робити не можна!!!*/
        /*------------метод setState (update, callback)-------------*/
        /*для того, щоб оновити state від попереднього стану, наприклад додати/відняти якесь число
        ми маємо передавати в setState не параметр, а функцію, параметр оновить повністю. react в параметр такої 
        функції prevState запише поточний стан state */
        
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            };
            
        });
        /* wuthout return*/
            this.setState(prevState => ({
             value: prevState.value + 1,
            })
            
        );
            this.setState(prevState => {
            return {
                value: prevState.value + 1,
            };
            
        });
    
    }
        
        // currState = {
        //     value: 10,
        //     a: 1,
        //     b: 10,
        // };

        // update = {
        //     value: 123,
        // };
        // newState = {
        //     ...currState, ...update} 
   
    handleDecrement = (event) => {
        console.log('Click on decrease');

        // const target = event.target;
        
        // const { target } = event;

        // setTimeout(() => {
        //     console.log(target);
        // }, 1000)
        
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            };
            
        });
    }
    /*------------------------------------------------------------*/
    render() {
        return (
            <div className="counter">
                <span className="counter__value">{ this.state.value}</span>
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
        </div> 
    )
}
}


export default Counter;