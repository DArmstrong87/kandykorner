import React, { useEffect, useState } from "react"

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

    return (
        <>
            <h2>Products</h2>
            <ul>
                {products.map((product) => {
                    return <li key={`product--${product.id}`}>{product.name}</li>
                })}
            </ul>
        </>
    )
}