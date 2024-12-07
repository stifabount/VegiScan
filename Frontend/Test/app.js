const Hapi = require('@hapi/hapi');
const Path = require('path');

const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: 'localhost',
    });

    await server.register(require('@hapi/inert')); // For serving static files

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: Path.join(__dirname, 'public'), // Ensure 'style.css' is inside the 'public' folder
            }
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();
