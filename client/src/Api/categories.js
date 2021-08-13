import axios from 'axios';

const base_url = 'http://localhost:5000/categories';

export function getCategories() {
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


export function getCategory  (id) {
    return new Promise((resolve, reject) => {
        axios.get(`${base_url}/${id}`)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(console.log(error))
            })
    })
    
}