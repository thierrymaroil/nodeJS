const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const todoSchema = Schema({
    title: {
        type: String,
        required: "Entrez un nom"
    },
    description: {
        type: String
    }



})
module.exports = mongoose.model('Todo', todoSchema);