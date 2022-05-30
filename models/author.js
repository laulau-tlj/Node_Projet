const { Schema, model } = require('mongoose')

const Author = new Schema({
    name: String
})

const AuthorModel = model('Author', Author)

module.exports = {
    AuthorModel,
} 