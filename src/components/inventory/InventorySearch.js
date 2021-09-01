

export const InventorySearch = () => {




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
        </>
    )
}