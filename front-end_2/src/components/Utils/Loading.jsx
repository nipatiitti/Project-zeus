import React, { Fragment } from 'react'

import { CircularProgress, LinearProgress } from '@material-ui/core'

const Loading = ({ progress = false, text = false }) => (
    <div className="loading">
        {progress ? (
            <Fragment>
                {text && <span className="bigtext">{text}</span>}
                <LinearProgress
                    variant="determinate"
                    value={progress * 100}
                    style={{
                        height: '0.375em',
                        width: '18em',
                        borderRadius: '4px'
                    }}
                />
            </Fragment>
        ) : (
            <CircularProgress size={30} style={{ color: 'white' }} />
        )}
    </div>
)

export default Loading
