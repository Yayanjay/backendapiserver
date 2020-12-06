/* eslint-disable no-unused-vars */
const db = require('../Configs/db')
const products = {}

products.readProd = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM public.products ORDER BY id ASC`)
            .then((res) => {
                if (res.rows.length == 0) {
                    resolve({msg : "Data kosong"})
                } else {
                    resolve(res.rows)
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}

products.createProd = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO public.products(name, price) VALUES ('${data.name}', ${data.price})`)
        .then((res) => {
            resolve(data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

products.updateProd = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE public.products SET name='${data.name}', price=${data.price} WHERE id=${data.id}`)
            .then((res) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

products.deleteProd = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.products WHERE id=${data.id}`)
            .then((res) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = products
