import React from 'react';
import { connect } from 'react-redux'
import * as userAction from '../store/userAction'
import PropTypes from 'prop-types'

class Greet extends React.Component {
    // state = {
    //     first: this.props.user.first,
    //     last: this.props.user.last,
    // }
    
    greetJawahar = () => {
        this.props.dispatch(userAction.setUser({first:'Jawahar', last: 'Jasti'}))
    }
    
    
    render() {
        return (
            <>
                <h1>{this.props.user.first} {this.props.user.last}</h1>
                <div><button onClick={this.greetJawahar}>Update State</button></div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Greet);