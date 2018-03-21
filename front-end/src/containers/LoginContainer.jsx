import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getToken } from '../actions/vertificationActions.js'

import LoggedIn from '../components/LoggedIn'

const mapStateToProps = state => {
  return {
    token: state.info.token,
    loading: state.loading.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getToken: ( code ) => (
      dispatch(getToken(code))
    )
  }
}

const LoginContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedIn))

export default LoginContainer
