import React , {useState , useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import axios from 'axios'

function Form() {
    const [formData , setFormData]  = useState({
        name : '', 
        type : '', 
        discription : '', 
        skill1 : '',
        skill2 : '',
        skill3 : ''
    })
    const handleChange = (element) =>{
        setFormData({...formData, [element.target.name]:element.target.value })
        console.log(element.target.value)
    }
    const handleSubmission = async (element)=>{
        element.preventDefault()
        axios.post("http://localhost:3333/api/new_pet" , formData )
        .then(body=>{
            setFormData({
                name : '', 
                type : '', 
                discription : '', 
                skill1 : '',
                skill2 : '',
                skill3 : ''
            })
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className='conatiner m-3'>
        <form onSubmit={(e)=>{handleSubmission(e)}}>
  <div className="mb-3">

    <label for="First Name" className="form-label">pet  Name</label>
    <input type="text" name='name' value={formData.name} className="form-control" id="" aria-describedby="emailHelp" onChange = {(e)=>{handleChange(e)}}/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">pet type</label>
    <input type="text" name='type' value={formData.type} className="form-control" id="exampleInputPassword1"onChange = {(e)=>{handleChange(e)}}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">pet discription</label>
    <input type="text" name='discription' value={formData.discription} className="form-control" id="exampleInputPassword1" onChange = {(e)=>{handleChange(e)}}/>
  </div>
  <h3> skills (Optional)</h3>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">skill1</label>
    <input type="text" name='skill1' value={formData.skill1} className="form-control" id="exampleInputPassword1"onChange = {(e)=>{handleChange(e)}}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">skill2</label>
    <input type="text" name='skill2' value={formData.skill2} className="form-control" id="exampleInputPassword1"onChange = {(e)=>{handleChange(e)}}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">skill 3</label>
    <input type="text" name='skill3' value={formData.skill3} className="form-control" id="exampleInputPassword1"onChange = {(e)=>{handleChange(e)}}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Form