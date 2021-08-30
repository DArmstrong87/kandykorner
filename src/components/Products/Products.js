import React, { useEffect, useState } from "react"
import { getAllProducts } from "../ApiManager"
import './Products.css'

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            getAllProducts()
                .then((products) => {
                    setProducts(products)
                })
        },
        []
    )

    const orderProduct = (id) => {
        const newPurchase = {
            customerId: parseInt(localStorage.getItem("kk_customer")),
            productId: id,
            timestamp: Date.now()
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        }
        window.alert(`Item added to cart!`)
        return fetch('http://localhost:8088/purchases', fetchOption)
    }

    return (
        <>
            <h2>Products</h2>
            <ul className='productList'>
                {products.map((product) => {
                    return <li key={`product--${product.id}`}><button className="orderButton" key={`order--${product.id}`}
                        onClick={() => {
                            orderProduct(product.id)
                        }}
                    >Order</button>{product.name}
                    </li>
                })}
            </ul>
        </>
    )
}