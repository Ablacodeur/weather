import React from 'react'
import Browser from './components/Browser/Browser'
import s from './style.module.css'

export default function App() {
  return (
    <div className={s.container}>
      <Browser />
    </div>
  )
}
