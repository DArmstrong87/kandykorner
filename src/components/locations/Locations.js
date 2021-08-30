import React, { useEffect, useState } from "react"
import { getLocations } from "../ApiManager"
import './Locations.css'

export const Locations = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            getLocations()
                .then((locations) => {
                    setLocations(locations)
                })
        },
        []
    )

    return (
        <>
            <h2>Locations</h2>
            <ul className="locationList">
                {locations.map((location) => {
                    return <li key={`location--${location.id}`}>{location.name}
                        <ul className={'location__sublist'}>
                            <li>Address: {location.address}</li>
                            <li>{location.sqFt} sqft</li>
                        </ul>
                    </li>
                })}
            </ul>
        </>
    )
}