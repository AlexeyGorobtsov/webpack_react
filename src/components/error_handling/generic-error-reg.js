import React, { Component } from 'react';

export class GenericErrorReq extends Component {

    callBackend = () => fetch('api/city').then(res => {
        console.log(res);
    }).catch(err => {
        if (err.response.data.error === 'GENERIC') {
            this.props.setError(err.response.data.description)
        } else {
            // it is a specific error
        }
    });

    render() {
        return (
            <div>
                <button onClick={this.callBackend}>Cause a global Error</button>
            </div>
        );
    }
}