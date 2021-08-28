import React, { useEffect, useState } from "react"

export const ProductTypes = () => {
    const [productTypes, setProductType] = useState([])
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/productTypes")
                .then(res => res.json())
                .then((productTypes) => {
                    setProductType(productTypes)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
                .then(res => res.json())
                .then((products) => {
                    setProducts(products)
                })
        },
        []
    )

    return (
        <>
            <h2>Kandy Kategories</h2>
            <ul>
                {productTypes.map((type) => {
                    return <li key={`type--${type.id}`}>
                        {type.name}
                    </li>
                })}
            </ul>
            <ul>
                {products.map((product) => {
                    return <li key={`type--${product.productType.id}`}>
                        {product.productType.name}
                        <ul>
                            <li>{product.name}</li>
                        </ul>
                    </li>
                }
                )}
            </ul>
        </>
    )
}