const mongoose = require('mongoose');
const boom = require('boom');
const promisify = require('es6-promisify')
const Todo = mongoose.model('Todo')



module.exports = {
    method: 'POST',
    path: '/api/todo/modif/{id}/',
    options: {

    },
    handler: async (req, h) => {

        try {
            await Todo.findOneAndUpdate({ _id: req.params.id }, req.payload)
            // console.log('id = ' + req.params.id)
        } catch (e) {
            console.log(e)
            return boom.badRequest(e)
        }
        return ("updated")

    }
}