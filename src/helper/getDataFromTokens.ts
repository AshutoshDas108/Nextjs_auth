import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try {
        const encodedtoken = request.cookies.get("token")?.value || '';
        const decodedToken:any = jwt.verify(encodedtoken, process.env.TOKEN_SECRET!);
        return decodedToken._id;
    } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message);
    }

}