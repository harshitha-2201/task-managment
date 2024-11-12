import React , {useState} from 'react'
import axios from 'axios'

const Register = () => {

    const [data , setData] = useState('')

    const hadleSubmit = (e) =>{
        e.preventDefault();
        const fetchUSer = async(token) =>{
            try{
                const response = await axios.get('http://localhost:5000/api/register' ,{
                    headers : {Authorization : `Bearer ${token}`}
                })
                console.log('fetched todos' , response.data)
            }catch(err){
                console.error("error fetching todos" )
            }

            
        }

    }


  return (
    <div>
        <div>
            <h1>Register</h1>
            <form onSubmit={hadleSubmit}>
              <label>USERNAME :</label>  
              <input type = 'text' placeholder = 'usename'  onChange = {(e) => setData(e.targetvalue)}/> <br/>
              
              <label>Email :</label>  
              <input type = 'email' placeholder = 'Enter email' onChange = {(e) => setData(e.targetvalue)} /> <br/>
              
              <label>Password :</label>  
              <input type = 'password' placeholder = 'password' onChange = {(e) => setData(e.targetvalue)} />
              <button  type = 'submit'>Button</button>
              
            </form>
        </div>
    </div>
  )
}

export default Register