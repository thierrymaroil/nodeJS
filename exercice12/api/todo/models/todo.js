const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const todoSchema = Schema({
    id: Number,
    unique: true,

    name: String,
    required: "Entrez un nom",

    description: String,

    priority: [0, 1, 2, 3, 4, 5, 6],

    date: Date


})
module.exports = mongoose.model('todo', todoSchema);