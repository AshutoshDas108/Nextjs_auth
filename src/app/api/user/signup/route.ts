import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/usersModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export default async function POST(req: NextRequest) {
    try {

        const reqBody = await req.json();
        const{username, email, password} = reqBody
        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email});

        if(user){
            return NextResponse.json({message: "User already exists"}, {status: 400})
        }
        
        //hash password

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        
        //add new user to database
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        
        const savedUser = newUser.save()
        console.log(savedUser)
        
        return NextResponse.json(
            {
                message: "User signedup successfully",
                success: true,
                savedUser
            }
        )


    }
    
    catch (error : any) {
        return NextResponse.json(
            { error: error.message}, 
            {status: 500}
            );
    }
}
