"use client"

import Link from "next/link"
import React, {useState, useEffect} from "react"
import { useRouter } from "next/navigation"
import axios  from "axios"
import { Toast } from "react-hot-toast"
import { NextResponse } from "next/server"

export default function LogInPage(){

    const router = useRouter();

   const [user, setUser] = useState({
    email: "",
    password: "",
   })

   const [buttonDisabled, setButtonDisabled] = useState(false)
   const [loading, setLoading] = useState(false)

   const onLogIn = async () => {
         try {

            setLoading(true);
            const response = await axios.post("/api/user/login", user)
            console.log("Login success", response.data);
            router.push("/profile");
            
         } catch (error : any) {
            console.log(error.message)
            //toast.error(error.message)
            return NextResponse.json({ error: error.message }, { status:500})
         }
   }

   useEffect(() =>{
    if(user.email.length > 0 && user.password.length > 0)
    {
        setButtonDisabled(false);
    }
    else{
        setButtonDisabled(true);
    }
   })

    return (
       <>
        
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        {/* <h1>{loading ? "Processing" : "Signup"}</h1> */}
        <h1 className="text-xl text-center text-black bg-orange-600 rounded-md">
        {loading ? "Processing" : "Login"}</h1>

        <hr />
        <br />

        <label htmlFor="email" >email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none 
        focus:border-gray-600 text-black"

            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
        />


        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none 
        focus:border-gray-600 text-black"

            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
        />


            <button
            onClick={onLogIn}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none 
            focus:border-gray-600">{buttonDisabled ? "disabled" : "Login"}</button>
          

            <div className="text-black bg-yellow-500 rounded-md">
              <Link href="/signup">Visit SignUp Page</Link>
            </div>


        </div>

       </>
    )
}