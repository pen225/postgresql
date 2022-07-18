const UserController = class {
    // Get all Users
    static getUsers = (req, res) => {
    res.render('userList')
}

    // Get User
    static getForm = (req, res) => {
        res.render('userForm')
    }
    
    // Get User
    static addUser = (req, res) => {
        console.log('req body', req.body);
        res.redirect('/users')
    }
}

module.exports = UserController;