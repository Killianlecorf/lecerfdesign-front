import React from 'react';
import Link from "next/link"

export default function Page() {
    return (
      <main>
        <Link href='/'>
          <p>Hello world !</p>
        </Link>
      </main>
    )
  }