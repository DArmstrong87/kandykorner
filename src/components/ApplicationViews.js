import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/Customers.js"
import { Purchases } from "./customers/MyOrders.js"
import { EmployeeList } from "./employees/Employees.js"
import { EmployeeForm } from "./employees/HireEmployee.js"
import { Inventory } from "./inventory/Inventory.js"
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
            <Route exact path="/purchases">
                <Purchases/>
            </Route>
            <Route exact path="/locations">
                <Locations />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route path="/inventory">
                <Inventory />
            </Route>
        </>
    )
}