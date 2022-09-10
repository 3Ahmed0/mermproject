import React , {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Details from './Details'
import Edit from './Edit'
import axios from 'axios'




export default function Table() {
    const [pets ,setPets] = useState([])
    const [id , setId] = useState('')
    const [visible, setVisible] = useState(false)
    const [detailsVisible,setDetailsVisible]=useState(false)
    useEffect(()=>{
        axios.get("http://localhost:3333/api/pets")
        .then((body)=>{
            setPets(body.data)
        })
        .catch(err=>console.log(err))
    }, [])
  return (
    <div className='cointaner'>
      <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name  </th>
        <th scope="col">Type </th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {pets && pets.map((pet)=>{
            return(<tr>
                <th scope="row">1</th>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td><button className = "btn btn-primary" onClick={()=>{setVisible(true)
                setId(pet._id.valueOf())}}>Edit</button></td>
                <td><button className = "btn btn-success" onClick={()=>{setDetailsVisible(true)
                setId(pet._id.valueOf())}}>Details</button></td>
              </tr>)
      })
        }
      
    </tbody>
  </table>

{
  visible && <Edit id = {id}/>
}
{ 
 detailsVisible && <Details id = {id}/>
}
    </div>
  )
}
