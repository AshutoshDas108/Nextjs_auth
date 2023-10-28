import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/usersModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody
        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "User Not registered"}, {status: 400})
        }
        else{
            console.log('user exits successfully')
        }

        //check if password is correct
        const isPasswordCorrect = await bcryptjs.compare(password, user.password)
        if(!isPasswordCorrect){
            return NextResponse.json({error: "Password is incorrect"}, {status: 400})
        }
        else{
            console.log('password is correct')
        }

        //create token data
        const tokenData = {
            _id: user._id,
            username: user.username,
            email: user.email
        }

        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET as string, {
            expiresIn: '1d'
        })

        const response =NextResponse.json({
            message : "login successful",
            success: true,
        })

        response.cookies.set("token", token ,{
            httpOnly: true
        })

        return response


}
catch(error: any){
    console.log(error.message);
    return NextResponse.json({error: error.message}, {status: 500})
}

}