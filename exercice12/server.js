const todo = require('todomvc');
const promisify = require('es6-promisify');
const hapi = require('hapi');
const path = require('path')
const glob = require('glob')
const globP = promisify(glob)
const mongoose = require('mongoose')



async function initializeDB() {
    mongoose.connect('mongodb://localhost/todo', { useMongoClient: true });
    mongoose.Promise = global.Promise;
    mongoose.connection.on('error', err => console.error(err.message))
}



async function initializeRoutes(server) {
    const routes = await globP('./api/**/routes/*.js', { root: __dirname });
    routes.map(item => {
        server.route(require(path.join(process.cwd(), item)))
    })
    console.log('routes');
}


async function initializeModels() {
    const models = await globP('./api/**/models/*.js', { root: __dirname });

    models.map(item => require(path.join(process.cwd(), item)));
}

async function init() {
 
    await initializeDB();
    await initializeModels();
    const server = hapi.server({ port: 7777 });
    await initializeRoutes(server);
    //registerPlugins(server);
    await server.start();
    // console.log(server.table())
    console.log('Server has been started at: ' + server.info.uri);
}

init()
