// import http from 'http';
// http.createServer((req,res,next) => {
//     if (req.method === 'GET' && req.url === '/check') {
//         res.write('hi');
//         res.end();
//     }
// }).listen(3000);
// import express from 'express';
// const app = express();
// var i = 10;
// app.use('/get', (req, res,next) => {
//     i++;
//     console.log(i);
//     res.json({'message': 'sending'})
// })
// app.listen(3000, () => {
//     console.log('connected');
// })

import http from 'http';
http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/check') {
      
        // Prepare JSON object
        const jsonResponse = { message: 'send' };

        // Convert JSON object to string and send it
        res.write(JSON.stringify(jsonResponse));

        res.end();
    }

}).listen(3000);