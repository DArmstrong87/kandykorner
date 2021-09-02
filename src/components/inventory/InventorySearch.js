import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllProducts } from "../ApiManager"

export const InventorySearch = () => {

    const [searchTerms, updateTerms] = useState({ terms: '' })
    const [products, setProducts] = useState([])

    const findProducts = () => {
        const searchTermArray = searchTerms.terms.split(" ")
        console.log("Search terms", searchTermArray)
        const foundMatchingProducts = products.filter(
            product => {
                for (const term of searchTermArray) {
                    if (product.name.toLowerCase().includes(term)) {
                        return product
                    }
                }
            }
        )
        console.log("Found matching products", foundMatchingProducts)
        return foundMatchingProducts
    }

    const listfoundProducts = () => {
        const foundProducts = findProducts()
        return (searchTerms.terms === '' ? "What tickles your fancy?" :
            <><h2>Found Products</h2><ul>
                {foundProducts.map(product => {
                    return <li><Link to="/products">{product.name}</Link></li>
                })}
            </ul></>)
    }

    useEffect(
        () => {
            getAllProducts()
                .then((products) => {
                    setProducts(products)
                })
        },
        []
    )

    return (
        <>
            <form className="searchInventory">
                <h2>Inventory Search</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Search Kandy:</label>
                        <input
                            onChange={
                                (event) => {
                                    const copy = { ...searchTerms }
                                    copy.terms = event.target.value.toLowerCase()
                                    updateTerms(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Search terms"
                        />
                    </div>
                </fieldset>
            </form>
            {listfoundProducts()}
        </>
    )
}