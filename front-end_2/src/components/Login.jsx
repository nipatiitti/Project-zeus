/**
 * Login component
 *
 * @author name <Niilo@vertics.co>
 *
 * @copyright Vertics Co 2019
 */

import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { login, register } from 'actions'
import { LOGIN_SUCCESS } from 'actions/types'
import { getUser, getLoading } from 'reducers'

import { Route } from 'react-router-dom'

import { Link } from 'react-router-dom'

import BgImage from 'assets/images/bg.jpg'

import {
    required,
    validateEmail,
    validatePasswordLength
} from './Form/validation'

import Form from './Form'

import { Checkbox, Button, Loading } from './Utils'

const loginData = {
    email: {
        type: 'email',
        placeholder: 'Email',
        validate: [required, validateEmail]
    },
    password: {
        type: 'password',
        placeholder: 'Password',
        validate: [required]
    }
}

const registerData = {
    firstName: {
        placeholder: 'First name',
        validate: [required]
    },
    lastName: {
        placeholder: 'Last name',
        validate: [required]
    },
    username: {
        placeholder: 'Username',
        validate: [required]
    },
    email: {
        type: 'email',
        placeholder: 'Email',
        validate: [required, validateEmail]
    },
    password: {
        type: 'password',
        placeholder: 'Password',
        validate: [required, validatePasswordLength]
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            checked: false
        }
    }

    componentDidMount = () => {
        if (this.props.user !== null) {
            this.props.history.replace('/')
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.user !== null) {
            this.props.history.replace('/')
        }
    }

    login = user => {
        this.props
            .dispatch(login(user))
            .then(
                ({ type }) =>
                    type === LOGIN_SUCCESS && this.props.history.replace('/')
            )
    }

    register = user => {
        this.props
            .dispatch(register(user))
            .then(
                ({ type }) =>
                    type === LOGIN_SUCCESS &&
                    this.props.history.replace('/login')
            )
    }

    handleChange = name => value =>
        this.setState({
            [name]: value
        })

    loginForm = () => (
        <Fragment>
            <h1>Please login to your account</h1>
            <Form className="login" formData={loginData} onSubmit={this.login}>
                <Fragment>
                    <div className="login-texts">
                        <Checkbox
                            checked={this.state.checked}
                            onChange={this.handleChange('checked')}
                        >
                            Remember me
                        </Checkbox>
                        <Link to="/login/passwordreset">Forgot password?</Link>
                    </div>
                    <Button type="submit">Login</Button>
                </Fragment>
            </Form>
            <div>
                <span className="login-registerText">
                    Don't have account?
                    <Link to={'/login/register'}>Create account</Link>
                </span>
            </div>
        </Fragment>
    )

    registerForm = () => (
        <Fragment>
            <h1>Welcome to Pallo.io</h1>
            <Form
                className="login"
                formData={registerData}
                onSubmit={this.register}
            >
                <Button type="submit">Create an account</Button>
            </Form>
            <div>
                <span className="login-registerText">
                    Already had an account?
                    <Link to={'/login'}>Back to login</Link>
                </span>
            </div>
        </Fragment>
    )

    render() {
        return (
            <div className="login-container">
                {this.props.loading && <Loading />}
                <Helmet>
                    <title>Login</title>
                    <meta
                        name="description"
                        content="Insite Finland please login"
                    />
                </Helmet>
                <div className="login-left">
                    <img src={BgImage} alt="Background image" />
                </div>
                <div className="login-right">
                    <div className="right-container">
                        <Route exact path="/login" component={this.loginForm} />
                        <Route
                            path="/login/register"
                            component={this.registerForm}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: getUser(state.loginReducer),
    loading: getLoading(state.loginReducer)
})

export default connect(mapStateToProps)(Login)
