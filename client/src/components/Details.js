import React, { useState,useEffect } from 'react'
import axios from 'axios'

function Details(props) {
    const [pet,setPet]= useState('')
    useEffect(()=>{
        console.log(props.id)
        axios.get(`http://localhost:3333/api/get_pet/${props.id}`)
        .then (body=>{
            setPet(body.data)
        })
        .catch(err=>console.log(err))
    },[props.id])

  return (
    <div className='container m-5'>
        <div className ="card" style={{width:"18rem"}}>
        <ul className ="list-group list-group-flush">
            <li className ="list-group-item flex justify-even"> <strong> Name</strong> <span>{pet.name}</span> </li>
            <li className ="list-group-item"><strong>Type</strong> <span>{pet.type}</span></li>
            <li className ="list-group-item"><strong>Discription</strong><span>{pet.discription}</span></li>
            <li className ="list-group-item"> <strong>skill1</strong><span>{pet.skill1}</span></li>
            <li className ="list-group-item"><strong>Skill2</strong><span>{pet.skill2}</span></li>
            <li className ="list-group-item"><strong>Skill3</strong><span>{pet.skill3}</span></li>
        </ul>
        </div>
    </div>
  )
}

export default Details