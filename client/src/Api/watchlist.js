import axios from 'axios';

const base_url = 'http://localhost:5000/watchitems';

export function getWatchItemsByuserid(userid) {
    return new Promise((resolve, reject) => {
        axios.get(`${base_url}/${userid}`)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(console.log(error))
            })
    })

}





export function addWatchItemByid(userid,productid) {
    return new Promise((resolve, reject) => {
        axios.post(`${base_url}/${userid}`,{'productId':productid})
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(console.log(error))
            })
    })
    
}


export function deleteWatchItem  (userid,productid) {
    return new Promise((resolve, reject) => {
        axios.delete(`${base_url}/${userid}`,{'productId':productid})
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(console.log(error))
            })
    })
    
}