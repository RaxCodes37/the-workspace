import Link from 'next/link';
import React from 'react'

export default function AuthNavbar() {
  return (
    <nav className="flex justify-center gap-20 bg-[#2d2d2d] rounded-b-md py-5 text-2xl font-bold">
      <Link href="/sign-in" className="hover:underline">Sign-In</Link>
      <Link href="/sign-up" className="hover:underline">Sign-Up</Link>
    </nav>
  )
}
