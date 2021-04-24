import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {increaseByTwoCounter} from '../redux/actions/counterActions'

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div className="btn-increase-by-two">
                <button onClick={e => {
                    this.props.dispatch(increaseByTwoCounter())
                }}>
                    2 arttır
                </button>
            </div>
        )
    }
}

function mapProplarlaEsle(dispatch) {
    return {
        actions: bindActionCreators(increaseByTwoCounter, dispatch)
    }
}

export default connect(mapProplarlaEsle)(IncreaseByTwoCounter)