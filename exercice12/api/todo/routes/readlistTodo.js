const mongoose = require('mongoose');
const boom = require('boom');
const promisify = require('es6-promisify')
const Todo = mongoose.model('Todo')



module.exports = {
    method: 'POST',
    path: '/api/todo/readlist/',
    options: {},
    handler: async (req, h) => {

        const list = Todo.find()
        try {
            await list
        } catch (e) {
            console.log(e)
            return boom.badRequest(e)
        }
        return list;
    }
}
