import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locations) => {
                    setLocations(locations)
                })
        },
        []
    )

    const [employee, updateEmployee] = useState({
        name: "",
        locationId: 1,
        hourlyRate: 1,
        manager: false,
        fullTime: false,
    });
    const history = useHistory()

    const submitEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            hourlyRate: employee.hourlyRate,
            manager: employee.manager,
            fullTime: employee.fullTime
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(
                () => {
                    history.push("/employees")
                }
            )
    }

    return (
        <form className="EmployeeForm">
            <h2 className="EmployeeForm__title">New Kandy Korner Employee</h2>

            {/* Name */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.name = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee Name"
                    />
                </div>
            </fieldset>

            {/* Location */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location: </label>
                    <select onChange={
                        (event) => {
                            const copy = { ...employee }
                            copy.locationId = parseInt(event.target.value)
                            updateEmployee(copy)
                        }}>
                        {locations.map(location => {
                            return <option key={`location--${location.id}`} value={location.id}
                                className="form-control"
                            >{location.name}
                            </option>
                        })}
                    </select>
                </div>
            </fieldset>

            {/* Manager */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.manager = event.target.checked
                                updateEmployee(copy)
                            }
                        } type="checkbox" />
                </div>
            </fieldset>

            {/* Full Time */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="full-time">Full Time</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.fullTime = event.target.checked
                                updateEmployee(copy)
                            }
                        } type="checkbox" />
                </div>
            </fieldset>

            {/* Hourly Rate */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hourly Rate:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.hourlyRate = parseFloat(event.target.value)
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Hourly Rate"
                    />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitEmployee}>
                Finish Hiring
            </button>
        </form>
    )
}