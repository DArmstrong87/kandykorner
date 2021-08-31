import React, { useEffect, useState } from "react"
import { getMyOrders } from "../ApiManager"
import './Customers.css'

export const Purchases = () => {
    const [purchases, setPurchases] = useState([])

    useEffect(
        () => {
            getMyOrders()
                .then(purchases => {
                    setPurchases(purchases)
                })
        },
        []
    )

    const deleteOrder = (id) => {
        fetch(`http://localhost:8088/purchases/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                getMyOrders()
                    .then(purchases => {
                        setPurchases(purchases)
                    })
            }, []
            )
    }

    const createNewLineItem = () => {
        const purchaseMap = new Map()
        for (const purchase of purchases) {
            let key = { id: purchase.product.id, price: purchase.product.price }
            let value = 1
            purchaseMap.set(key, value)
        }

        return purchaseMap
    }

    const result = createNewLineItem()
    console.log(result)

    return (
        <>
            <h2>My Orders</h2>
            <ul className='myOrders'>
                {purchases.map(purchase => {
                    return <li key={`purchase--${purchase.id}`}>{purchase.product.name} - ${purchase.product.price.toFixed(2)}
                        <button className='cancelOrderButton'
                            onClick={() => {
                                deleteOrder(purchase.id)
                            }}
                        >Cancel</button>
                    </li>
                })}
            </ul>

            {/* <table>
                <thead>
                    <td>Candy</td>
                    <td>Quantity</td>
                    <td>Price per Unit</td>
                </thead>
                <tbody>
                </tbody>
            </table> */}
        </>
    )
}