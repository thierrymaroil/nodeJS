const mongoose = require('mongoose');
const boom = require('boom');
const promisify = require('es6-promisify')

module.exports = {
    method: 'POST',
    path: '/api/todo/',
    handler: async (req, h) => {
        const todo = await new Todo(req.payload);
        try {
            await todo.save()
        } catch (e) {
            console.log(e)
            return boom.badRequest(e)
        }
        return ("hello, I am on the todo POST");

    }
}