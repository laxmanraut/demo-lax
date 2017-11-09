const Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({port: ~~process.env.PORT | 8000});


server.route([
    {
        method:'GET',
        path:'/',
        handler: function(request, reply){
            reply('done');
        }
    }
]);


server.start(err=>{
    if(err){
        throw err;
    }
    
    console.log('server started at ',server.info.uri);

})