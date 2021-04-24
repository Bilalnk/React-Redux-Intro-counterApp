import React, {Component} from 'react'
import {connect} from "react-redux"

/*interface IProps {
    counter: Number;
}*/

class Counter extends Component {
    render() {

        return (
            <div className="CounterText">
                <h1>{this.props.counter}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.myCounterReducer
    }
//     counter: state.hakan
}


export default connect(mapStateToProps)(Counter);