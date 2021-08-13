


import axios from 'axios';

const base_url = 'http://localhost:5000/';



export function signUp  (formData) {
    return new Promise((resolve, reject) => {
        axios.post(base_url+"signup", formData)
            .then(res => {
                resolve(res.data)
                console.log(res.data.result._id)
               
            })
            .catch(error => {
                reject(console.log(error))
            })
    })
    
}


export function signIn  (formData) {
    return new Promise((resolve, reject) => {
        axios.post(base_url+"signin", formData)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(console.log(error))
            })
    })
    
}
