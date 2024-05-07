const mongoose= require('mongoose')
const personSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    mobileNumber:{
        type: Number,
        required: true,
        unique: true
    },
    work:{
        type: String,
        enum: ['Serviceman', 'Postman', 'Batman']
    },
    username:{
        type:String
    },
    password:{
        type: String
    }
});

// Person Model
const Person= mongoose.model('Person', personSchema)
module.exports= Person;
