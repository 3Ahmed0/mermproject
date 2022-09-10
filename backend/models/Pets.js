const mongoose= require('mongoose')
const petscheme = new mongoose.Schema({ 
    name:{type:String},
    type:{type:String},
    discription:{type:String},
    skill1 : {type : String},
    skill2 : {type : String},
    skill3 : {type : String},

}) 

module.exports = Pet = mongoose.model('pet', petscheme)

//wait  i  not hearing you 
//  i will back after 5 please fix the  souns issue 
 //ok

