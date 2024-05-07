const mongoose= require ('mongoose');
const mongoURL= 'mongodb+srv://pranavrawani2839:pranav@cluster0.v7esao6.mongodb.net/'

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