const express= require('express');
const app= express();
const db= require('./db')
const bodyParser= require('body-parser')
const Person= require('./models/person')
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("Front page")
})

app.post('/person', async(req,res)=>{
    try{
        const data= req.body
        const newPerson= new Person(data)
        const response= await newPerson.save();
        console.log("Data Saved");
        res.status(200).json(response)
    } catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})

app.get('/person', async(req,res)=>{
    try {
        const data= await Person.find()
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    }
})
app.listen(3000)


module.exports=db