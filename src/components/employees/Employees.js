import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then(employees => {
                    setEmployees(employees)
                })
        },
        []
    )

    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/create")}>
                    Hire Employee</button>
            </div>
            <h2>Employees</h2>
            <ul>
                {employees.map(employee => {
                    return <li key={`employee--${employee.id}`}>{employee.name}</li>
                }
                )
                }
            </ul>
        </>
    )
}