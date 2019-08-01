import React, { Component } from 'react';

export class InlineError extends Component {

    render() {
        const { error } = this.props;
        if (!error) return null;

        return(
            <div>
                {error}
            </div>
        )
    }
}