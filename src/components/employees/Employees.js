import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getEmployees } from "../ApiManager"
import './Employees.css'

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getEmployees()
                .then(employees => {
                    setEmployees(employees)
                })
        },
        []
    )

    const fireEmployee = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                getEmployees()
                    .then(employees => {
                        setEmployees(employees)
                    })
            }, []
            )
    }

    return (
        <>
            <div>
                <button className='hireButton' onClick={() => history.push("/employees/create")}>
                    Hire Employee</button>
            </div>
            <h2>Employees</h2>
            <ul className='employeeList'>
                {employees.map(employee => {
                    return <li key={`employee--${employee.id}`}>{employee.name} - Store location: {employee.location.name}.
                        <button className='fireButton' key={`fire--${employee.id}`}
                            onClick={() => { fireEmployee(employee.id) }}
                        >Fire Employee</button>
                    </li>
                })}
            </ul>
        </>
    )
}