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

    return (
        <>
            <h2>My Orders</h2>
            <ul className='myOrders'>
                {purchases.map(purchase => {
                    return <li key={`purchase--${purchase.id}`}>{purchase.product.name} - ${purchase.product.price.toFixed(2)}</li>
                })}
            </ul>
        </>
    )
}