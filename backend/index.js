const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Pet = require('./models/Pets')

const app = express()
app.use(express.json())
app.use(cors())
const connect = async ()=>{
try {
        await mongoose.connect('mongodb://127.0.0.1/pets_data', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}) 
    console.log("connected to mongo db")
} catch (error) {
    console.log(error)
    
}
}
connect()

//get 
//post

app.post('/api/new_pet',async (req,res)=>{
    console.log(req.body)
    try {
        let pet = new Pet({
            name : req.body.name, 
            type : req.body.type, 
            discription : req.body.discription, 
            skill1 : req.body.skill1,
            skill2 : req.body.skill2,
            skill3 : req.body.skill3, 
            
        })
        await pet.save()
        res.status(200).json("success")
    } catch (error) {
        res.status(500).json(error)
    }
    

} )

app.get('/api/pets', async (req,res)=>{
    try {
        const pets = await Pet.find()
        res.status(200).json(pets)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.get('/api/get_pet/:id', async (req, res)=>{
    console.log(req.params.id)
    let pet = await Pet.findById(req.params.id)

    res.status(200).json(pet)
})

app.post('/api/update',async (req, res)=>{
    let updated = await Pet.findOneAndUpdate({_id : req.body._id},{$set:req.body}, {new : true} )
    res.status(200).json(updated)

})







app.listen(3333, ()=>{console.log("connected to the server at 3333")})