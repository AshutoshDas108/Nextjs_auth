export default function UserProfile({params} : any){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-black bg-orange-600 rounded-md">
                Profile Page</h1>
                <hr/>
                <br/>
                <span className=" p-2 ml-2 rounded-md bg-pink-600 text-black ">
                    {params.id}</span>
                </div>
    )
}