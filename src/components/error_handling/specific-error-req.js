import React, {Component} from 'react';

import {InlineError} from './inline-error';

export class SpecificErrorRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            city: ''
        }
    }

    changeCity = e => this.setState({error: '', city: e.target.value});

    validate = () => {
        if (this.state.city.length) throw new Error('Please provide a city name.')
    };

    callBackend = () => {
        this.setState({error: ''});
        try {
            this.validate()
        } catch (e) {
            return this.setState({error: e.message})
        }
        fetch('/api/city').then(res => res.json())
            .then(myJson => console.log(JSON.stringify(myJson)))
            .catch(e => {
                if (e.response.data.error === 'GENERIC') {
                    this.props.setError(e.response.data.description)
                } else {
                    this.setState({error: e.response.data.description})
                }
            });


    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.city}
                    onChange={this.state.error}
                />
                <button onClick={this.callBackend}>Delete you city</button>
                <InlineError error={this.state.error} />
            </div>
        )
    }
}