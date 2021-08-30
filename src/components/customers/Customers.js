import React, { useEffect, useState } from "react"
import { getAllPurchases, getCustomers } from "../ApiManager"
import './Customers.css'

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [purchases, setPurchases] = useState([])

    useEffect(
        () => {
            getCustomers()
                .then(customers => {
                    setCustomers(customers)
                })
        },
        []
    )
    useEffect(
        () => {
            getAllPurchases()
                .then(purchases => {
                    setPurchases(purchases)
                })
        },
        []
    )

    return (
        <>
            <h2>Customers</h2>
            <ul className='customerList'>
                {customers.map(customer => {
                    return <li key={`customer--${customer.id}`}>{customer.name}</li>
                })}
            </ul>

            <table key="table">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Candies Bought</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => {
                        const customerPurchases = []
                        customerPurchases.push(purchases.product)
                        return <tr key={`row--${customer.id}`}>
                            <td>{customer.name}</td>
                            <td>{customerPurchases.length}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}