async function getUsers() {
    const res = await fetch("http://localhost:3000/api/users", {
        cache: 'no-cache'
    });

    const data = await res.json()
    return data.users
}

export default async function User() {
  const users = await getUsers();

   console.log(users);
        

  return (
    <>
      <main className={"!py-12 !px-0 !min-h-screen bg-black"}>
        <div className="max-w-7xl !mx-auto !px-4 w-full h-full">
          <div className="grid grid-cols-3 gap-5 items-stretch max-[1044px]:grid-cols-3 max-[768px]:grid-cols-2 max-[525px]:grid-cols-1">
            {Array.isArray(users) &&   users.map((user) => (
                <div key={user.id} className="rounded-2xl !py-6 !px-6 flex items-center flex-col gap-6 *:
                    bg-linear-to-br from-[#111] to-gray-600
                ">
                    <h2 className="!text-white text-3xl ">{user.name}</h2>
                    <p className="">{user.country}</p>
                    <p>{user.age}</p>
                </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
