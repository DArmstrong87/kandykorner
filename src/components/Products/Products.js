import React, { useEffect, useState } from "react"
import './Products.css'

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products")
                .then(res => res.json())
                .then((products) => {
                    setProducts(products)
                })
        },
        []
    )

    const [purchase, updatePurchase] = useState(
        {
            customerId: parseInt(localStorage.getItem("kk_customer")),
            productId: '',
            timestamp: Date.now()
        }
    )

    const orderProduct = (event) => {

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(purchase)
        }

        return fetch("http://localhost:8088/purchases", fetchOption)

    }




    return (
        <>
            <h2>Products</h2>
            <ul>
                {products.map((product) => {
                    return <li key={`product--${product.id}`}><button className="orderButton" key={`order--${product.id}`}
                        onClick={
                            (event) => {
                                const copy = { ...purchase }
                                copy.productId = product.id
                                updatePurchase(copy)
                                orderProduct()
                            }
                        }
                    >Order</button>{product.name}

                    </li>
                })}
            </ul>
        </>
    )
}