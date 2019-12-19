import React from 'react';
import { connect } from 'react-redux'
import * as userAction from '../store/userAction'

class GreetProps extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            first: props.user.first,
            last: props.user.last
        }
    }

    greetJawahar = () => {
        this.setState({first: 'Jawahar', last: 'Justice'});
    }

    render() {
        return (
            <>
                <h1>{this.state.first} {this.state.last}</h1>
                {/* <h1>{this.props.user.first} {this.props.user.last}</h1>  */}
                <div><button onClick={this.greetJawahar}>Update State</button></div>
            </>
        )
    }
}

export default GreetProps;