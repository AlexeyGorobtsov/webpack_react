import React, { Component } from 'react';

export class GlobalError extends Component {
    render() {
        const { error } = this.props;

        return (
            <div>
                {error}
                &nbsp;
                <i onClick={this.props.resetError} >
                    close
                </i>
            </div>
        );
    }
}