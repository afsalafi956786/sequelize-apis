const express = require('express');
const prouctRouter = require('./routes/proct-route')
const app = express();



const port = 2000;


app.use(express.json())
app.use('/api',prouctRouter)


app.listen(port,()=>{
    console.log('server connected port 2000')
})