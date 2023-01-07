import React from 'react'

export default function ListChild({ title, content }) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <hr />
    </div>
  )
}
