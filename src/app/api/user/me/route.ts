import { getDataFromToken } from "@/helper/getDataFromTokens";
import User from "@/models/usersModel";
import {connect} from "@/dbConfig/dbConfig"
import { NextRequest, NextResponse} from "next/server";

connect()

export async function GET(request: NextRequest) {
    try {

        const id = await getDataFromToken(request)
        const user = await User.findById(id).select('-password')
        return NextResponse.json({
            success: true,
            message: 'user found successfully',
            data: user
        })
        
    } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message);
    }
}