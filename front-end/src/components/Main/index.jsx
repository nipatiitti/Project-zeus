import React, { Component } from "react"

import CircularProgress from "@material-ui/core/CircularProgress"
import { withStyles } from "@material-ui/core/styles"

const style = theme => ({
    loading: {
        color: "#fff"
    }
})

class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        this.props.login()
    }

    render() {
        return (
            <div className='mainView'>
                <CircularProgress
                    className={this.props.classes.loading}
                    size={70}
                />
            </div>
        )
    }
}

export default withStyles(style)(Main)
