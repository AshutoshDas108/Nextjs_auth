"use client"

import Link from "next/link"
import React, {useState} from "react"
import { useRouter } from "next/navigation"
import { Axios } from "axios"
import { Toast } from "react-hot-toast"

export default function LogInPage(){

   const [user, setUser] = useState({
    email: "",
    password: "",
   })

   const onLogIn = () => {

   }

    return (
       <>
        
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        {/* <h1>{loading ? "Processing" : "Signup"}</h1> */}
        <h1 className="text-xl text-center text-black bg-orange-600 rounded-md">
            Login Page</h1>

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
            focus:border-gray-600">Login
            </button>

            <div className="text-black bg-yellow-500 rounded-md">
              <Link href="/signup">Visit SignUp Page</Link>
            </div>


        </div>

       </>
    )
}