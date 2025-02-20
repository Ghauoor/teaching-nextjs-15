export const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
  { id: 5, name: "Tom" },
];

export async function GET() {
  return Response.json(users);
}
export async function POST(request: Request) {
  const user = await request.json();

  const newUser = { id: users.length + 1, name: user.name };
  users.push(newUser);

  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
