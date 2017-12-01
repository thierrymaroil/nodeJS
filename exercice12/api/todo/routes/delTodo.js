
const mongoose = require('mongoose');
const boom = require('boom');
const promisify = require('es6-promisify')
const Todo = mongoose.model('Todo')



module.exports = {
    method: 'POST',
    path: '/api/todo/del/{id}',
    options: {

    },
    handler: async (req, h) => {
        // console.log('id = ' + req.params.id)
        try {
            await Todo.deleteOne(req.params.id)

        } catch (e) {
            console.log(e)
            return boom.badRequest(e)

        }
        return ("deleted")

    }
}
