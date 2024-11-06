"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, SignedOut, SignedIn } from "@clerk/nextjs";

export default function Navigation() {
  const pathName = usePathname();
  return (
    <nav className="flex justify-end gap-16 items-center  p-2">
      <Link
        href="/"
        className={pathName === "/" ? "mr-4 font-bold" : "mr-4 text-blue-500"}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathName === "/about" ? "mr-4 font-bold" : "mr-4 text-blue-500"
        }
      >
        About
      </Link>
      <Link
        href="/products/1"
        className={
          pathName.startsWith("/products/1")
            ? "mr-4 font-bold"
            : "mr-4 text-blue-500"
        }
      >
        Product 1
      </Link>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}
