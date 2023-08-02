const app =require('./app');
const ports=3000;


app.listen(ports,()=>{
    console.log('listening: ${ports}')
})