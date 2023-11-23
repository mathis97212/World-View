import Link from "next/link";
import React from "react";
import { useState } from "react";

const Navbar = () => {
    const [query, setQuery] = useState('')
    return(
        <nav className="fixed w-full h-24 shadow-xl bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
          <div className="text-2xl">🌍</div>

          <div>
            <ul className="flex">
                <Link href="/home">
                    <li className="ml-10 uppercase hover:border-b">Home</li>
                </Link>
                <label className="ml-10 uppercase">Search</label>
                <input className="ml-2" type="text" onChange={ e => setQuery(e.target.value)} />
            </ul>
          </div>

        </div>
      </nav>
    )
}

export default Navbar