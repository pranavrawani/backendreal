const passport= require('passport')
const localStrategy=  require('passport-local').Strategy;
const Person= require('./models/person')

passport.use(new localStrategy(async(username,password,done)=>{
    try {
        console.log("received credentials:", username, password);
        const user= await Person.findOne({username})
        if (!user)
            return done(nuull, false, {message:'Incorrect Username'})
        const isPasswordMatch= (user.password===password? true: false)
        if (isPasswordMatch)
            return done(null, user);
        else
            return done(null, false, {message: 'Incorrect Password'})
    } catch (error) {
        return done(error)
    }
}))
module.exports= passport;