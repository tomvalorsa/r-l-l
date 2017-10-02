import React from 'react'
import styles from './index.scss'

const Header = ({ title }) => (
  <div className={styles.header}>
    {title}
  </div>
)

export default Header
