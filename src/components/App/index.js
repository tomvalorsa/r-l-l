import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './index.scss'

const initialCenter = [51.505, -0.09]
const initialZoom = 10

export default class App extends Component {
  render() {
    const markers = [
      { id: 0, text: 'Emirates Stadium', position: [51.554888, -0.108438] },
      { id: 1, text: 'Stamford Bridge', position: [51.481663, -0.190956] }
    ]

    return (
      <div className={styles.fullscreen}>
        <Map center={initialCenter} zoom={initialZoom} className={styles.map}>
          <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
          {markers.map(marker => {
            return (
              <Marker position={marker.position} key={marker.id}>
                <Popup>
                  <div>{marker.text}</div>
                </Popup>
              </Marker>
            )
          })}
        </Map>
      </div>
    )
  }
}
