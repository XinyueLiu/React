import React, { Component } from 'react';

const X = 1;
const O = 2;

class Square extends Component {
    render() {
        let mark = "";
        if (this.props.mark === X) {
            mark = 'X';
        } else if (this.props.mark === O) {
            mark = 'O';
        }
        return (
            <button className="square" onClick={() => this.props.click()}>
                { mark }
            </button>
        );
    }
}

    

export default Square
export { X, O }
