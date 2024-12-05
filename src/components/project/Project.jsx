import React from 'react'
'use client';
import styles from './style.module.css'

const Project = ({index, title, setModal}) => {
  return (
    <div className={styles.project}>
        <h2>{title}</h2>
        <p>Design & Development</p>
      
    </div>
  )
}

export default Project
