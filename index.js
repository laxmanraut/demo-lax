const Hapi = require('hapi');

var server = new Hapi.Server(+process.env.PORT, '0.0.0.0');

server.connection({port: 5000});


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