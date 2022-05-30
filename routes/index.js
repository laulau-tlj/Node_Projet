// je charge les choses dont j'ai besoin
var express = require('express');
const articleController = require('../controllers/articleController');
const userController = require('../controllers/userController');
var router = express.Router();

// j'utilise res.render pour charger un fichier de vue ejs

//article page
router.route('/article').post(articleController.createArticle)
router.route('/home').get(articleController.getArticles)


//user page
router.route('/users').get(userController.getUsers)
router.route('/users').post(userController.createUser)
router.route('/users/:userId').put(userController.updateUser)
router.route('/users/:userId').delete(userController.deleteUser)



module.exports = router;