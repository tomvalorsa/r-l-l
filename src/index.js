import React from 'react'
import { render } from 'react-dom'
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
Leaflet.Icon.Default.imagePath = 'leaflet-images/'

import App from './components/App'
import './index.scss'
import './favicon.ico'

render(<App />, document.getElementById('root'))
