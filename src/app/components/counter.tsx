"use client";
import React, { useState } from "react";

import { useAuth, useUser } from "@clerk/nextjs";

export default function Counter() {
  console.log("Counter component");
  const [count, setCount] = useState(0);

  const user = useUser();
  const auth = useAuth();

  console.log("Counter Component", user, auth);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
