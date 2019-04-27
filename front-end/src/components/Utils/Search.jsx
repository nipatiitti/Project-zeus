import React, { Component, Fragment } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            focus: false
        }
    }

    handleChange = state => () => {
        const { value } = this.props
        const focus = value === '' ? state : true

        this.setState({
            focus
        })
    }

    render = () => (
        <div className="input-container">
            <label
                className={`input-label input-label-${
                    this.state.focus || this.props.value !== '' ? 'focus' : 'default'
                }`}
            >
                {`Search${this.state.focus ? ':' : '...'}`}
            </label>
            <input
                ref={r => (this.props.setRef ? this.props.setRef(r) : () => {})}
                type={this.props.type ? this.props.type : 'text'}
                className="input-input"
                value={this.props.value}
                onChange={this.props.onChange}
                onFocus={this.handleChange(true)}
                onBlur={this.handleChange(false)}
            />
        </div>
    )
}

export default Input
