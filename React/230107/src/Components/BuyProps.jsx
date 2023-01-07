import React from 'react'
import { ElementFlags } from 'typescript'
import Item from './Item'

export default function BuyProps() {
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
    return(
        // props, map으로 데이터 전달
        <div>
        {items.map((el, index) => {
            return <Item item={el.item} price={el.price} key={index}/>
          })}

          <hr />
        {/* html 그리기 */}
          {items.map((el, index) => {
            return (
                <div key={index}>
                    <h2>{el.item}</h2>
                    <p>{el.price}</p>
                </div>
            )
          })}
        </div>

    )

}
