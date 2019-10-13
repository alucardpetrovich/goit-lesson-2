const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');

app.use(bodyParser());
app.post('/post', (req, res, next) => {
    console.log(req.body);
    console.log(typeof req.body);
    res.send('hello');
});
app.get('/hello', (req, res, next) => {
    // return res.send('Hello world!!');
    const error = new Error('Forbidden error');
    error.status = 403;
    next(error);
}, (req, res, next) => {
    res.send('Hello second handler');
})

app.use((err, req, res, next) => {
    delete err.stack;
    next(err);
});
    
app.listen(PORT, () => {
        console.log('Server started on port', PORT);
    })
    
;
