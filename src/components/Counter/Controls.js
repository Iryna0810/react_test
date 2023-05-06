import React  from "react";

const Controls = ({onIncrement, onDecrement}) => (
    <div className="counter__controls">
        <button type="button" className='btn btn-primary btn-lg' onClick={
            onIncrement} >Збільшити на 1</button>
        <button type="button" className='btn btn-primary btn-lg' onClick={
            onDecrement}>Зменьшити на 1</button>
    </div>
);

export default Controls;