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
    }
});

// Person Model
const Person= mongoose.model('Person', personSchema)
module.exports= Person;
