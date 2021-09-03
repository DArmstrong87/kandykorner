import React, { useEffect, useState } from "react"
import { getMyOrders } from "../ApiManager"
import './Customers.css'

export const Purchases = () => {
    const [purchases, setPurchases] = useState([])
    const [totals, setTotals] = useState(new Map())
    console.log(...totals)

    useEffect(
        () => {
            getMyOrders()
                .then(purchases => {
                    setPurchases(purchases)
                })
        },
        []
    )

    useEffect(
        () => {
            setTotals(createLineItem())
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
            const key = purchase.product.id
            if (orderMap.has(key)) {
                orderMap.get(key).total++
            } else {
                orderMap.set(key, { total: 1 })
            }
        }

        console.log(orderMap)
        return orderMap
    }

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

        </>
    )
}

















// const createLineItem = () => {

//     const mappedPurchases = purchases.reduce(
//         (sum, current) => {
//             const key = JSON.stringify({
//                 productId: current.product.id,
//                 price: current.product.price
//             })
//             if (sum.has(key)) {
//                 let foundKey = sum.get(key)
//                 foundKey++
//                 sum.set(key, foundKey)
//             } else {
//                 sum.set(key, 1)
//             }
//             return sum
//         }, new Map()
//     )

//     console.log('Mapped/Reduced:', mappedPurchases)  // To delete

//     const unstringifiedArray = []
//     for (const item of mappedPurchases) {
//         unstringifiedArray.push([JSON.parse(item[0]), item[1]])
//     }
//     console.log('Unstringified Array', unstringifiedArray)// To delete

//     let newObjectArray = []
//     console.log(newObjectArray)// To delete
//     for (let i = 0; i < unstringifiedArray.length; i++) {
//         newObjectArray.push(
//             {
//                 productId: unstringifiedArray[i][0].productId,
//                 quantity: unstringifiedArray[i][1],
//                 price: unstringifiedArray[i][0].price
//             }
//         )
//     }

//     console.log(newObjectArray)// To delete
//     return newObjectArray
// }

// const aggregated = createLineItem()

// console.log('aggregated', aggregated[0][0].productId)

//Key aggregated[0][1].productId
//Value aggregated[0][1]


/* <ul className="myOrders">
{aggregated.map(
    order => {
        return <li>ProductId: {order.productId} |
            Quantity: {order.quantity} |
            Price/Unit: 💲{order.price.toFixed(2)}</li>
    }
)}
</ul> */