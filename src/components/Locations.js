import React, { useEffect, useState } from "react"

export const Locations = () => {
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

    return (
        <>
            {locations.map((location) => {
                return <p key={`location--${location.id}`}>{location.name}</p>
            })}
        </>
    )
}