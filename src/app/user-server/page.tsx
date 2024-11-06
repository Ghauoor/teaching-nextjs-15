type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <ul className="space-y-4 p-4">
      {users?.map((user: User) => (
        <li
          key={user.id}
          className="bg-blue-950 p-4 rounded-md shadow-md text-white-800 font-bold"
        >
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </li>
      ))}
    </ul>
  );
}
