'use strict'

let UsersController = require('../controllers/UsersController')
let auth = require('../middlewares/authorization')

module.exports = (app) => {
    let usersCtrl = new UsersController()

    app.get('/users', (req, res, next) => {
        return usersCtrl.find(req, res, next)
    })

    app.get('/users/:id', (req, res, next) => {
        return usersCtrl.findById(req, res, next)
    })

    app.post('/users', (req, res, next) => {
        return usersCtrl.create(req, res, next)
    })

    // Upload file
    app.post('/upload', (req, res, next) => {
        return usersCtrl.upload(req, res, next)
    })

    //Auth
  //  app.post('/admin', usersCtrl.connect)

    app.put('/users/:id', (req, res, next) => {
        return usersCtrl.update(req, res, next)
    })

    app.delete('/users/:id', (req, res, next) => {
        return usersCtrl.delete(req, res, next)
    })

}
