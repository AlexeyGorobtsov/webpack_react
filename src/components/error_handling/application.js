import React, { Component } from 'react';

import { GlobalError } from './global-error';
import { GenericErrorReq } from './generic-error-reg';
import { SpecificErrorRequest } from './specific-error-req';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }

    resetError = () => this.setState({error: ''});

    setError = newError => this.setState({error: newError});

    render() {
        const {error} = this.state;
        return (
            <div className={'container'}>
                <GlobalError error={error} resetError={this.resetError}/>
                <h1>Handling Errors</h1>
                <GenericErrorReq setError={this.setError}/>
                <hr/>
                <SpecificErrorRequest setError={this.setError}/>
            </div>
        );
    }
}

export default Application;