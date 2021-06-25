import React, { Component } from 'react';

class Counter extends Component {

    render() { 

        return (
            <div>

                <span 
                    className = { this.getClasses() }>
                    {this.formatCount()}
                </span>

                <button
                    onClick = { () => this.props.onIncrement(this.props.counter) }
                    className = "btn btn-warning btn-lg m-2">
                        +
                </button>

                <button
                    onClick = { () => this.props.onDecrement(this.props.counter) }
                    className = "btn btn-warning btn-lg m-2">
                        -
                </button>

                <button 
                    onClick = { () => this.props.onDelete(this.props.counter.id) } 
                    className = "btn btn-danger btn-md m-2">
                        Remove  
                </button>

            </div>
        );
    }

    getClasses () {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "danger" : "success";
        return classes;
    }

    formatCount() {
        const {value: count}  = this.props.counter;
        const x = <span>Zero</span>;
        return count === 0 ? x : count;
    }
}
 
export default Counter;