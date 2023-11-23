import Link from "next/link";
import React from "react";
import { useState } from "react";

const Navbar = () => {
    const [query, setQuery] = useState('')
    return(
        <nav className="fixed w-full h-24 shadow-xl bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">                
          <Link href="/home">
            <h1 className="ml-10 uppercase hover:border-b">Home</h1>
          </Link>

          <div>
            <ul>
                <input className="ml-2 border" type="text" onChange={ e => setQuery(e.target.value)} placeholder="Search" />
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar