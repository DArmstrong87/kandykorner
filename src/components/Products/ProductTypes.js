import React, { useEffect, useState } from "react"
import { getProductTypes } from "../ApiManager"
import './Products.css'

export const ProductTypes = () => {
    const [productTypes, setProductType] = useState([])

    useEffect(
        () => {
            getProductTypes()
                .then((productTypes) => {
                    setProductType(productTypes)
                })
        },
        []
    )

    return (
        <>
            <h2>Kandy Kategories</h2>
            <ul className='kategories'>
                {productTypes.map((type) => {
                    return <li key={`type--${type.id}`}>
                        {type.name}
                    </li>
                })}
            </ul>
        </>
    )
}