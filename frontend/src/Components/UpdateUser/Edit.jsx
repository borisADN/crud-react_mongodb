import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../AddUser/Add.css'
import axios, { Axios } from 'axios'
import toast from 'react-hot-toast'
import Button2 from '../../Button3'

export default function Edit() {
    const users ={
        fname:"",
        lname:"",
        email:"",
    }
    const {id} = useParams()
    const[user,setUser]= useState(users)
    const navigate=useNavigate()
    
    const handleChange=(e)=>{
       const{name,value} = e.target;
       setUser({...user,[name]:value})
       console.log(user);
    }

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/getOne/"+id)
        // ou 
        // axios.get(`http://127.0.0.1:8000/api/getOne/${id}`)
        .then((response)=>{
            console.log(response.data);
            
            setUser(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id])
    const submitForm = async(e) => {
        e.preventDefault();
        await axios
          .put(`http://127.0.0.1:8000/api/update/${id}`, user)
          .then((response) => {
            // console.log(response);
            toast.success(response.data.message);
            navigate(-1); // retourne à la page précédente
          })
          .catch((error) => {
            console.log(error);
          });
    }
  return (
    <div className='addUser'>
    <Link to="/"> <Button2/></Link>
   
    {/* <i class="fa-solid fa-arrow-left"></i> */}
    <h3>Modifier un utilisateur</h3>
    <form className='addUserForm'  onSubmit={submitForm}>

        <div className="inputGroup">
            <label htmlFor="fname">Prenom</label>
            <input type="text" id="fname" name="fname" placeholder="Enter First Name" value={user.fname} onChange={handleChange} autoComplete='off' required />
        </div>

        <div className="inputGroup">
            <label htmlFor="lname">Nom</label>
            <input type="text" id="lname" name="lname" placeholder="Enter Last Name" value={user.lname} onChange={handleChange} autoComplete='off' required />
        </div>

        <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Email Address" value={user.email} onChange={handleChange} autoComplete='off' required />
        </div>

        <div className="inputGroup">
            <button type='submit'>Modifier</button>
        </div>

    </form>
</div>
  )
}
