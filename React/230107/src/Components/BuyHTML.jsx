import React from 'react'

export default function BuyHTML() {

    const items = [
        {
            item: "PS5",
            price: "685,000원"
        },
        {
            item: "에어 프라이어",
            price: "50,000원"
        },
        {
            item: "사세 치킨윙",
            price: "11,500원"
        }

    ]

  return (
    <div>
        <h2>{items[0].item}</h2>
        <p>{items[0].price}</p>
        <hr />
        <h2>{items[1].item}</h2>
        <p>{items[1].price}</p>
        <hr />
        <h2>{items[2].item}</h2>
        <p>{items[2].price}</p>
        <hr />
    </div>
  )
}
