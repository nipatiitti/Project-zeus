import React from 'react'
import { render } from 'react-dom'

import Root from './routes/Root'

import {store, persistor} from './configStore'

import './styles/all.css'

render(
  <Root store={store} persistor={persistor} />,
  document.getElementById('root')
)
