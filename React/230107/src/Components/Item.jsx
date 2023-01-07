import React from 'react'

export default function Item({ item, price }) {
  return (
    <div>
        <h2>{item}</h2>
        <p>{price}</p>
    </div>
  )
}
