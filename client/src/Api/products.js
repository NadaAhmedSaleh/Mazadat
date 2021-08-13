import axios from 'axios';

const base_url = 'http://localhost:5000/products';

export function getProducts() {
    return new Promise((resolve, reject) => {
        axios.get(base_url)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(console.log(error))
            })
    })
    
}

export function createProduct  (newProduct) {
    return new Promise((resolve, reject) => {
        axios.post(base_url, newProduct)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(console.log(error))
            })
    })
    
}


export function updateProduct  (id, updatedProduct) {
    return new Promise((resolve, reject) => {
        axios.put(`${base_url}/${id}`, updatedProduct)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(console.log(error))
            })
    })
    
}

export function deleteProduct  (id) {
    return new Promise((resolve, reject) => {
        axios.delete(`${base_url}/${id}`)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(console.log(error))
            })
    })
    
}
