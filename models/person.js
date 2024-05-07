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

const bcrypt= require('bcrypt');
personSchema.pre('save', async function(next){
    const person= this;
    if (!this.isModified('password')) return next();
    try {
        const salt= await bcrypt.genSalt();
        const hashedPassword= await bcrypt.hash(person.password, salt);
        person.password= hashedPassword;
        next();
    } catch (error) {
        return next(error)
    }
})
// Person Model
const Person= mongoose.model('Person', personSchema)
module.exports= Person;
