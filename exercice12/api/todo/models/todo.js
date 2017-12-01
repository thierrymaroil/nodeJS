const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const todoSchema = Schema({
    title: {
        type: String,
        required: "Entrez un nom"
    },
    completed: {
        type: Boolean
    }



})
module.exports = mongoose.model('Todo', todoSchema);