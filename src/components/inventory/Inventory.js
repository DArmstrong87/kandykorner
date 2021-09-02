import React, { useEffect } from "react"
import { InventorySearch } from "./InventorySearch"

export const Inventory = () => {


    useEffect(
        () => {

        },
        []
    )

    return (<>
        <InventorySearch />
    </>
    )
}

/* The search terms will be one string.
The string can be split by a space and each word stored as a string within a new array.
Update transient state to store the array of those search terms.
Write a conditional statement that lists the products if their name contains at least one of the words or starts with one of the words in the searchTerms array.
*/