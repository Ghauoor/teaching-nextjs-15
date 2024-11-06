"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function UserPage() {
  const [user, setUser] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-600">
        {error}
      </div>
    );

  return (
    <ul className="space-y-4 p-4">
      {user?.map((user) => (
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
