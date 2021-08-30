
export const getAllProducts = () => {
    return fetch("http://localhost:8088/products")
        .then(res => res.json())
}

export const getProductTypes = () => {
    return fetch("http://localhost:8088/productTypes")
        .then(res => res.json())
}

export const getLocations = () => {
    return fetch("http://localhost:8088/locations")
        .then(res => res.json())
}

export const getEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
}

export const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}

export const getMyOrders = () => {
    const user = localStorage.getItem('kk_customer')
    return fetch(`http://localhost:8088/purchases?_expand=product&_expand=customer&customerId=${user}`)
        .then(res => res.json())
}
export const getAllPurchases = () => {
    return fetch(`http://localhost:8088/purchases?_expand=product&_expand=customer`)
        .then(res => res.json())
}