import React, { Fragment } from 'react'

import { CircularProgress, LinearProgress } from '@material-ui/core'

const Loading = ({ progress = false, text = false }) => (
    <div className="loading">
        <CircularProgress size={30} style={{ color: 'white' }} />
    </div>
)

export default Loading
