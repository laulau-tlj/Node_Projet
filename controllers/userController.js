// Je fais un import de mon model user
const UserModel = require('../models/User')
const fetch = require('node-fetch')

module.exports = {
    //fonction qui récupère les users
    getUsers: (req, res) => {
        UserModel.find((err, user) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!user) {res.status(404).json({"message": "User not found"})}
                res.render('./pages/users', {
                    users: user
                })
            }
        })
    },
    // fonction qui crée un nouvel user 
    createUser: async (req, res) => {
        //Je crée une variable qui va contenir les données créées
        const {username, email, age} = req.body
        alert( {username, email, age});
        const user = new UserModel({username, email, age})
        // console.log(user)
        alert(user);

        user.save((err, user) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(201).json({
                    status: 201,
                    message: "succes",
                    user
                })
            }
        })
    },
    //Fonction qui modifie un user
    updateUser: (req, res) => {
        const {username, email, age} = req.body
        
        // Le deuxième paramètre de la méthode findOneAndUpdate est le nom des propriétés à modifier. 
        // Dans la requête il n'est pas nécessaire de mettre toutes les propriétés à modifier.
        // Les propriétés renseignées dans la requête seront remplacées par les valeurs de la requête.
        UserModel.findOneAndUpdate({userId: req.params.userId}, {username, email, age}, (err, user) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!user) {res.status(404).json({"message": "User not found"})}
                res.status(200).json({
                    "message": "success"
                })
            }
        })
    },
    //Supprimer un user
    deleteUser: (req, res) => {
        UserModel.findOneAndDelete({userId: req.params.userId}, (err, user) => {
            if (!user) {
                return res.status(404).json({message: "user not found"})
            }
            res.json(user)
        })
    },
}