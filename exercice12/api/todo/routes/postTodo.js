const mongoose = require('mongoose');
const boom = require('boom');
const promisify = require('es6-promisify')
const Todo = mongoose.model('Todo')
const validation = require('../validationsSchema/todoValidationSchema.js');


module.exports = {
    method: 'POST',
    path: '/api/todo/add/',
    options: {
        validate: {
            payload: validation,
            failAction: (request, h, err) => err
        }
    },
    handler: async (req, h) => {
        const todo = await new Todo(req.payload);
        try {
            await todo.save()
        } catch (e) {
            console.log(e)
            return boom.badRequest(e)
        }
        return todo;
    }
}