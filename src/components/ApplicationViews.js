import React from "react"
import { Route } from "react-router-dom"
import { Locations } from "./locations/Locations.js"
import { ProductList } from "./Products/Products.js"
import { ProductTypes } from "./Products/ProductTypes.js"

// Sole responsibility of this module is to listen for when the url is changed and render the specific component.

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/products">
                <ProductList/>
            </Route>
            <Route exact path="/types">
                <ProductTypes/>
            </Route>
            <Route exact path="/locations">
                <Locations />
            </Route>
        </>
    )
}