import React, { useEffect, useState } from "react"

export const ProductTypes = () => {
    const [productTypes, setProductType] = useState([])

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

    return (
        <>
            <h2>Kandy Kategories</h2>
            <ul>
                {productTypes.map((type) => {
                    return <li key={`type--${type.id}`}>{type.name}</li>
                })}
            </ul>
        </>
    )
}