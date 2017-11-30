

module.exports = {
    method: 'GET',
    path: '/api/todo/',
    handler: (req, h) => {

        return ("hello, I am on the todo GET"); console.log('get todo ok')
    }
}