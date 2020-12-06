const products = {}
const model = require('../Models/product')
const respons = require('../Helpers/respons')

products.read = async (req,res) => {
    try {
        const result = await model.readProd()
        return respons(res, 200, result)
    } catch (error) {
        return respons(res, 400, error)
    }
}

products.create = async (req,res) => {
    try {
        const result = await model.createProd(req.body)
        return respons(res, 200, result)
    } catch (error) {
        return respons(res, 400, error)
    }
}

products.update = async (req,res) => {
    try {
        const result = await model.updateProd(req.body)
        return respons(res, 200, result)
    } catch (error) {
        return respons(res, 400, error)
    }
}
products.delete = async (req,res) => {
    try {
        const result = await model.deleteProd(req.body)
        return respons(res, 200, result)
    } catch (error) {
        return respons(res, 400, error)
    }
}

module.exports = products

