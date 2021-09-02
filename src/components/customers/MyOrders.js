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
                const key = JSON.stringify({
                    productId: current.product.id,
                    price: current.product.price
                })
                if (sum.has(key)) {
                    let foundKey = sum.get(key)
                    foundKey++
                    sum.set(key, foundKey)
                } else {
                    sum.set(key, 1)
                }
                return sum
            }, new Map()
        )

        console.log('Mapped/Reduced:', mappedPurchases)

        const unstringifiedArray = []
        for (const item of mappedPurchases) {
            unstringifiedArray.push([JSON.parse(item[0]), item[1]])
        }
        console.log('Array',unstringifiedArray)

        return unstringifiedArray
    }

    const aggregated = createLineItem()

    console.log('aggregated', aggregated[0][0].productId)




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

                <ul>
            {aggregated.map(
                purchase => {
                    return <li>ProductId: {aggregated[0][0].productId},
                    Quantity: {aggregated[0][1]}</li>
                }
            )}
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