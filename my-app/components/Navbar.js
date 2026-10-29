import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-700 flex justify-between item-center px-3 text-white'>
            <div className='logo font-bold text-2xl p-4'>
                <Link href="/"><li className='flex flex-none'>BitLinks</li></Link>
            </div>
            <ul className='flex justify-center gap-4 items-center'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/shorten"><li>Shorten</li></Link>
                <Link href="/contact"><li>Contact Us</li></Link>

                <li className='flex gap-3'>
                    <Link href="/shorten" className='font-bold bg-purple-500 rounded-lg shadow-lg py-1 p-3' ><button>Try Now</button></Link>
                    <Link href="https://github.com/opahmad759-cloud/url-shortner" className='font-bold bg-purple-500 rounded-lg shadow-lg py-1 p-3' ><button>Github</button></Link>
                </li>
            </ul>


        </nav>
    )
}

export default Navbar
