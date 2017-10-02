import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './index.scss'

const initialCenter = [51.52, -0.14]
const initialZoom = 12

export default class LeafletMap extends Component {
  render() {
    const markers = [
      { id: 0, text: 'Emirates Stadium', position: [51.554888, -0.108438] },
      { id: 1, text: 'Stamford Bridge', position: [51.481663, -0.190956] }
    ]

    const basemapURL = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png'

    return (
      <Map center={initialCenter} zoom={initialZoom} className={styles.map}>
        <TileLayer url={basemapURL} />
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
    )
  }
}