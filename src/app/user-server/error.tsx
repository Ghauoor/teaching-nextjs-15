"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => console.log(error), [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-lg font-bold text-red-500">{error.message}</div>
    </div>
  );
}
