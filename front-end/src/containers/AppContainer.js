import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import App from '../routes/App'

const mapStateToProps = state => {
  return {
    state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//
//   }
// }

const AppContainer = withRouter(connect(
  mapStateToProps
)(App))

export default AppContainer
