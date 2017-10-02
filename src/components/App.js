import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './index.scss'

import Header from './Header'
import LeafletMap from './LeafletMap'

export default class App extends Component {
  render() {
    return (
      <div className={styles.fullscreen}>
        <div className={styles.headerContainer}>
          <Header title="Map Demo" />
        </div>
        <div className={styles.mapContainer}>
          <LeafletMap />
        </div>
      </div>
    )
  }
}
