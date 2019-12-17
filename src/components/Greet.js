import React from 'react';

class Greet extends React.Component {
    // state = {
    //     first: this.props.user.first,
    //     last: this.props.user.last,
    // }
    
    render() {
        return (
            <>
                <h1>{this.props.user.first} {this.props.user.last}</h1>
            </>
        )
    }
}

export default Greet;