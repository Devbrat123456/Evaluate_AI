const { app, port ,server} = require('./config/app');




const start = async () => {
    try {
        server.listen(port);
        console.log(`app is listening on ${port}`)
    } catch (error) {
        console.log(error);
    }
}
start();