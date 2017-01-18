'use strict'

let CompaniesController = require('../controllers/CompaniesController')
let auth = require('../middlewares/authorization')

module.exports = (app) => {
    let companiesCtrl = new CompaniesController()

    app.get('companies', (req, res, next) => {
        return companiesCtrl.find(req, res, next)
    })

    app.get('companies/:id', (req, res, next) => {
        return companiesCtrl.findById(req, res, next)
    })

    app.post('/companies', (req, res, next) => {
        return CompaniesController.create(req, res, next)
    })

    app.put('/companies/:id', (req, res, next) => {
        return companiesCtrl.update(req, res, next)
    })

    app.delete('/companies/:id', (req, res, next) => {
        return companiesCtrl.delete(req, res, next)
    })

}
