import React from "react"
import { Locations } from "./Locations.js"
import { Products } from "./Products.js"

export const KandyKornerMain = () => {

    return (
        <>
            <h1 key={`KandyKorner`}>Kandy Korner</h1>
            {Locations()}
            {Products()}
        </>
    )
}