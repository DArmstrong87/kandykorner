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
        { productId: '' }
    )

    const orderProduct = (event) => {
        event.preventDefault()
        const newPurchase = {
            customerId: parseInt(localStorage.getItem("kk_customer")),
            productId: purchase.productId,
            timestamp: Date.now()
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        }

        return fetch('http://localhost:8088/purchases', fetchOption)

    }

    return (
        <>
            <h2>Products</h2>
            <ul className='productList'>
                {products.map((product) => {
                    return <li key={`product--${product.id}`}><button className="orderButton" key={`order--${product.id}`}
                        onMouseEnter={(event) => {
                            const copy = { ...purchase }
                            copy.productId = product.id
                            updatePurchase(copy)
                        }}
                        onClick={orderProduct}
                    >Order</button>{product.name}
                    </li>
                })}
            </ul>
        </>
    )
}