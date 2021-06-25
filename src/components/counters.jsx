import React, { Component } from 'react';
import Counter from "./counter";

const Counters = ({ onIncrement, onReset, onDelete, counters, onDecrement }) => {
    return (
        <div>
            <button className = "btn btn-primary btn-lg m-2" onClick = { onReset }>Reset</button>
            { counters.map( counter =>
                <Counter 
                    key = { counter.id } 
                    counter = { counter } 
                    onDelete = { onDelete } 
                    onIncrement = { onIncrement } 
                    onDecrement = { onDecrement } />
            )}
        </div> 
    );
}
 
export default Counters;