import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Signup.css'


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists, Kindly Login !")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div class="logn">

       <h1 class="main">Trendify</h1>

       <div class="details">
        <h1 class="register">Register Now !</h1>

        <form action="POST" class="form1">
            <p  class="f1">Email</p>
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your Email" class="f2" required /> 
            <p class="f3">Password</p>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your Password" class="f4" required />
            <input type="submit" onClick={submit}  class="f5"/>

        </form>

        <p class="r1">Already have an account? <Link to="/" >Login</Link> </p>

       </div>

        

    </div>
    )
}

export default Login