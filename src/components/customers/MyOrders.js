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


    const createLineItem = () => {
        const orderMap = new Map()

        for (const purchase of purchases) {
            const key = purchase.product.name
            if (orderMap.has(key)) {
                orderMap.get(key).total++
            } else {
                orderMap.set(key, { total: 1, price: purchase.product.price })
            }
        }

        console.log('OrderMap', orderMap)

        return [...orderMap]
    }
    const aggregated = createLineItem()
    console.log('Aggregated', aggregated)

    return (
        <>
            <h2>My Orders</h2>
            <ul className='myOrders'>
                {purchases.map(purchase => {
                    return <li key={`purchase--${purchase.id}`}>{purchase.product.name} - 💲{purchase.product.price.toFixed(2)}
                        <button className='cancelOrderButton'
                            onClick={() => {
                                deleteOrder(purchase.id)
                            }}
                        >Cancel</button>
                    </li>
                })}
            </ul>

            <h2>My Orders Aggregated</h2>
            <ul className="myOrders">
                {aggregated.map(
                    order => {
                        return <li key={`order--${order[0]}`}>
                            {order[0]} |
                            Quantity: {order[1].total} |
                            Price/Unit: 💲{order[1].price.toFixed(2)}</li>
                    }
                )}
            </ul>
        </>
    )
}