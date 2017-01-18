'use strict'

let Controller = require('./Controller') // on étend la classe
const COMPANIES = require('../models/companies')
const USERS = require('../models/users')
    // La classe BlogsController étend controller, on peut l'étendre encore et encore et encore...

class UsersController extends Controller {
    constructor() {
        super(USERS)
    }
    
}

module.exports = UsersController
