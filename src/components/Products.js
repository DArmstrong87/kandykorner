import React, { useEffect, useState } from "react"

export const Products = () => {
    const [products, setProducts] = useState([])
    const [totalProductMessage, updateMessage] = useState("")

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

    useEffect(
        () => {
            if (products) {
                updateMessage(`You have ${products.length} products`)
            }
        },
        [products]
    )

    return (
        <>
            <h2>Products</h2>
            <div>{totalProductMessage}</div>
            {products.map((product) => {
                return <p key={`product--${product.id}`}>{product.name}</p>
            })}
        </>
    )
}