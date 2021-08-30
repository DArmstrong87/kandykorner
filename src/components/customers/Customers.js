import React, { useEffect, useState } from "react"
import './Customers.css'

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then(customers => {
                    setCustomers(customers)
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
        </>
    )
}