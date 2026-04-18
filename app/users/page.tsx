import { User } from "../types/User";


async function getUsers(): Promise<User[]> {
    const res = await fetch(`${process.env.API_USERS}/users`, {
        cache: 'no-store' 
    }) 

    if(!res.ok) throw new Error(`fetch failed ${res.status}`)

    const data = await res.json()
    return data.users
}

export default async function UserPage(){
    const users = await getUsers()
    await new Promise((res) => setTimeout(res,2000))

    return (
        <>
            <section className="bg-black !py-12 px-0">
                <div className="max-w-7xl !mx-auto !px-4 md:px-6 w-full h-full">
                    <div className="grid grid-cols-4 gap-10">

                        {users.map((user) => (
                            <div key={user.id} className=" flex items-start gap-4 flex-col !py-4 !px-4 rounded-xl shadow-lg shadow-gray-400 hover:shadow-cyan-500    transform transition hover:-translate-y-3  ">
                                <h2 className="text-xl font-mono">{user.firstName}</h2>
                                <h3 className="text-lg font-mono">{user.lastName}</h3>
                                <p className="text-sm ">{user.email}</p>
                                <p className="text-sm">{user.phone}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}



