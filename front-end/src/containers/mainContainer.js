import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { login } from '../actions/mainActions'

import Main from '../components/Main'

const mapStateToProps = state => {
  return {
    info: state.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => (
      dispatch(login())
    )
  }
}

const MainContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main))

export default MainContainer
