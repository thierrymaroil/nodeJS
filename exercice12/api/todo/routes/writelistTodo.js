const mongoose = require('mongoose');
const boom = require('boom');
const promisify = require('es6-promisify')
const Todo = mongoose.model('Todo')
const validation = require('../validationsSchema/todoValidationSchema.js');


module.exports = {
    method: 'POST',
    path: '/api/todo/writelist/',
    options: {},
    handler: async (req, h) => {
        const todo = await JSON.parse(req.payload);
        console.log(todo)
        try {
            await todo.save()
        } catch (e) {
            console.log(e)
            return boom.badRequest(e)
        }
        return todo;
    }
}
