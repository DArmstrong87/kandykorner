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
        [],
    )

    const createLineItem = () => {

        const mappedPurchases = purchases.reduce(
            (sum, current) => {
                const setKey = { productId: current.product.id, price: current.product.price }
                const key = JSON.stringify({
                    customer: { id: current.customer, name: current.customer.name },
                    customerId: current.customer.id,
                    id: current.id,
                    product: { id: current.product.id, name: current.product.name, productTypeId: current.product.productTypeId.id, price: current.product.price },
                    productId: current.product.id,
                    timestamp: current.timestamp
                })
                if (sum.has(key)) {
                    let foundKey = sum.get(key)
                    foundKey++
                    sum.set(setKey, foundKey)
                } else {
                    sum.set(setKey, 1)
                }
                return sum
            }, new Map()

        )
        return mappedPurchases
    }

    const newPurchases = createLineItem()

    console.log(newPurchases)



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