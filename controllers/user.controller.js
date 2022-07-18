const models = require('../db/models')
const UserController = class {
    // Get all Users
    static getUsers = (req, res) => {
        models.User.findAll().then((result) => {
            console.log('User list', result[0].dataValues);
            res.render('userList', {data: result});
        }).catch((err) => {
            console.log('erreur de reucp Users data', err);
        });
        // res.render('userList')
    }

    // Get User
    static getForm = (req, res) => {
        res.render('userForm')
    }
    
    // Get User
    static addUser = (req, res) => {
        console.log('req body', req.body);
        const user = {
            noms: req.body.noms,
            email: req.body.email,
            password: req.body.password
        }
        models.User.create(user).then((result) => {
            console.log('resultat de l\'insertion', result);
            res.redirect('/users')
        }).catch((err) => {
            console.log('Oups !, User not create', err);
        });
        
    }
}

module.exports = UserController;