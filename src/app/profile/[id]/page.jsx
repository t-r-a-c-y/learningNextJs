export default function UserProfile({params}){
    return(
        <div className="text-center flex flex-col justify-center min-h-screen">
            <h1 className="text-xl font-bold">Profile page</h1>
            <hr />
            <h1>Welcome to the {params.id} profile page</h1>
        </div>
    )
}