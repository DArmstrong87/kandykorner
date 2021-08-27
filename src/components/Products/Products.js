import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [totalProductMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
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
            <ul>
                {products.map((product) => {
                    return <li key={`product--${product.id}`}>{product.name} Type: {product.productType.name}</li>
                })}
            </ul>
            {/* 
            {products.map(
                product => {
                    return Object.keys(product).map(
                        key => {
                            return <div>{key}: {product[key]}</div>
                        }
                    )
                }
            )} */}
        </>
    )
}