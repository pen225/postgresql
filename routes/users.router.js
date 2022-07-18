var express = require('express');
const UserController = require('../controllers/user.controller');
var router = express.Router();


/* GET users listing. */
router.get('/', UserController.getUsers);

/* GET user form. */
router.get('/add', UserController.getForm);
/* Create user. */
router.post('/add', UserController.addUser);

module.exports = router;
