import React from "react"
import { Locations } from "./Locations.js"
import { ProductList } from "./Products/Products.js"
import { ProductTypes } from "./Products/ProductTypes.js"

export const KandyKornerMain = () => {

    return (
        <>
            <h1 key={`KandyKorner`}>Kandy Korner</h1>
            {Locations()}
            {ProductList()}
            {ProductTypes()}
        </>
    )
}