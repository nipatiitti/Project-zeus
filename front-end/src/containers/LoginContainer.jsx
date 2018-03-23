import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getToken, getUser, getChannels } from '../actions/vertificationActions.js'
import { changeChannelAcces } from '../actions/addAndDeleteActions.js'

import LoggedIn from '../components/LoggedIn'

const mapStateToProps = state => {
  return {
    removeRole: state.info.removeRole,
    token: state.info.token,
    loading: state.loading.loading,
    user: state.user,
    channels: state.channels.channels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getToken: ( code ) => (
      dispatch(getToken(code))
    ),
    getUser: () => (
      dispatch(getUser())
    ),
    getChannels: () => (
      dispatch(getChannels())
    ),
    changeChannelAcces: (id, bool) => (
      dispatch(changeChannelAcces(id, bool))
    )
  }
}

const LoginContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedIn))

export default LoginContainer
