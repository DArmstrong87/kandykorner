import React, { useEffect, useState } from "react"
import './Customers.css'

export const Purchases = () => {
    const [purchases, setPurchases] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/purchases?_expand=product&_expand=customer&customerId=1")
                .then(res => res.json())
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