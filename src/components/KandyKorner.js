import React from "react"
import { ApplicationViews } from "./ApplicationViews.js"
import { Locations } from "./Locations.js"
import { NavBar } from "./nav/NavBar.js"
import { ProductList } from "./Products/Products.js"
import { ProductTypes } from "./Products/ProductTypes.js"

export const KandyKornerMain = () => {

    return (
        <>
        <NavBar/>
            <h1 key={`KandyKorner`}>Kandy Korner</h1>
        <ApplicationViews/>
        </>
    )
}