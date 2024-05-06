const mongoose= require ('mongoose');
const mongoURL= 'mongodb://localhost:27017/pranav'

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db= mongoose.connection;
db.on('connected',()=>{
    console.log('Connected to mongodb server');
})
db.on('disconnected',()=>{
    console.log('disconnected to mongodb server');
})
db.on('error',(err)=>{
    console.log('Mongodb connection error', err);
})