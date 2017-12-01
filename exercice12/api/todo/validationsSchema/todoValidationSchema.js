const joi = require('joi');

module.exports = createTodoValidationSchema = joi.object({
    title: joi.string().min(5).max(20).required().label('il faut au moins 5 caractères'),
    description: joi.string().min(5).max(200)
    
});