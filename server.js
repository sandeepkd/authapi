const http = require('http');
const app = require("./app");
const PORT = 3000;

const server = http.createServer(app);

server.listen(PORT, (req, res)=>{

        console.log('Server is running on post:'+PORT);

});