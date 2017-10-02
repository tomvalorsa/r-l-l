import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet'
import styles from './index.scss'
import 'leaflet/dist/leaflet.css'

Leaflet.Icon.Default.imagePath = 'leaflet-images/'

export default class App extends Component {
  render() {
    return (
      <div className={styles.fullscreen}>
        <Map center={[51.505, -0.09]} zoom={13} className={styles.map}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              <span>A pretty CSS3 popup.<br />Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}
