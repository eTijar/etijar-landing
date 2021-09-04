import Link from "next/link"
import { useState, useEffect } from "react";
import {Transition} from "@headlessui/react";
import Image from 'next/image';
import { motion } from 'framer-motion'

export default function Header() {
    const [mobileMenu,setMobileMenu] = useState(false);
	const [state, setState] = useState({show:true, scrollp:0}); 
	const [navb, setNavb] = useState(false);
	
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if(window.scrollY >= 40) {
				setNavb(true)
			}else {
				setNavb(false)
			}
		});
		return window.removeEventListener('scroll', () => {
			if(window.scrollY >= 40) {
				setNavb(true)
			}else {
				setNavb(false)
			}
		});
	}, [setNavb]);

		

return(
        <>
            <motion.nav className={navb ? 'navbar active' : 'navbar'}aria-label="Global">
				<div className="flex items-center flex-1">
					<div className="flex items-center justify-between w-full md:w-auto">
						<a href="/">
							<span className="sr-only">Etijar</span>
							<img className=" w-20 sm:h-14" src="/logo.png" alt="" />
						</a>
						<div className="-mr-2 flex items-center md:hidden">
							<button onClick={()=>setMobileMenu(true)} type="button" className="bg-white  mr-4 rounded-md p-3 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500" aria-expanded="false">
								<span className="sr-only">Open main menu</span>
								{/* Heroicon name: outline/menu */}
								<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					</div>
					<div className=" hidden md:block md:ml-10 md:space-x-10">
						<Link href="/" passHref><a  className="font-medium text-gray-500 hover:text-gray-900">
							Home
						</a>
                        </Link>
						<Link href="/about" passHref><a  className="font-medium text-gray-500 hover:text-gray-900">
							About
						</a>
                        </Link>
						<Link href="/investment" passHref><a  className="font-medium text-gray-500 hover:text-gray-900">
							Investment
						</a>
                        </Link>
						<Link href="/savings" passHref><a  className="font-medium text-gray-500 hover:text-gray-900">
							Savings
						</a>
                        </Link>
						
                        <Link href="/contact" passHref>
                        <a  className="font-medium text-gray-500 hover:text-gray-900">
							Contact Us
						</a>
                        </Link>
					</div>
				</div>
				<div className="hidden md:block text-right">
					<span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
						<a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-blue-900 text-blue-100 hover:bg-blue-500">
							Log in
						</a>
					</span>
				</div>
			</motion.nav>
            <Transition show={mobileMenu} enter="duration-150 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
				<div className=" rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
					<div className="px-5 pt-4 flex items-center justify-between">
						<div>
							<img className="h-20 sm:h-14" src="/logo.png" alt="" />
						</div>
						<div className="-mr-2">
							<button onClick={()=>setMobileMenu(false)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500">
								<span className="sr-only">Close main menu</span>
								{/* Heroicon name: outline/x */}
								<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div className="px-2 pt-2 pb-3 space-y-1">
						<Link href="/" passHref><a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
							Home
						</a></Link>
						<Link href="/about" passHref><a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
							About
						</a></Link>
						<Link href="/investment" passHref><a  className="font-medium text-gray-500 hover:text-gray-900">
							Investment
						</a>
                        </Link>
						<Link href="/savings" passHref><a  className="font-medium text-gray-500 hover:text-gray-900">
							Savings
						</a>
                        </Link>s

                        <Link href="/contact" passHref><a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
							Contact Us
						</a></Link>
					</div>
					<a href="https://app.etijar.com/login" target="_blank" className="block w-full px-5 py-3 text-center font-medium text-secondary-600 bg-gray-50 hover:bg-gray-100">
						Log in
					</a>
				</div>
			</Transition>
        </>
    );
}