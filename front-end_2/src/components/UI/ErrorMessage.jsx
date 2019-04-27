/**
 * Error message component
 * Display error message as a banner
 *
 * @author name <name@vertics.co>
 *
 * @copyright Vertics Co 2019
 */

import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

class ErrorMessage extends React.Component {
    state = { show: false }

    componentDidMount() {
        if (this.props.error) {
            this.setState({ show: true })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.error !== this.props.error && this.props.error) {
            this.setState({ show: true })
            // hide error message after 2s
            window.setTimeout(() => this.setState({ show: false }), 2000)
        }
    }

    render() {
        const { error } = this.props
        const { show } = this.state
        if (!error) {
            return null
        }
        return (
            <div className="error-message-container">
                <CSSTransition
                    in={show}
                    timeout={300}
                    classNames="error-message"
                    unmountOnExit
                >
                    <div className="message">{error.message}</div>
                </CSSTransition>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.errorReducer.message
})

export default connect(mapStateToProps)(ErrorMessage)
