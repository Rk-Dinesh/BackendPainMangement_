const app = require('./app')

const port = 3000;

app.get('/',(req,res)=>{
    res.send("Welcome");
}); 

app.listen(port,()=>{
    console.log(`Server Listening on port:${port}`)
});