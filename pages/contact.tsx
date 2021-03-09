import { Transition } from "@headlessui/react";
import Link from "next/link"
import {useState} from "react";

export default function Contact() {
    const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<div className="relative bg-white pt-6 pb-16 sm:pb-24 lg:pb-32">
			<nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
				<div className="flex items-center flex-1">
					<div className="flex items-center justify-between w-full md:w-auto">
						<a href="#">
							<span className="sr-only">Etijar</span>
							<img className="h-8 w-auto sm:h-14" src="/etijar-logo.svg" alt="" />
						</a>
						<div className="-mr-2 flex items-center md:hidden">
							<button onClick={()=>setMobileMenu(true)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500" aria-expanded="false">
								<span className="sr-only">Open main menu</span>
								{/* Heroicon name: outline/menu */}
								<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					</div>
					<div className="hidden md:block md:ml-10 md:space-x-10">
						<Link href="/" passHref><a  className="font-medium text-gray-500 hover:text-gray-900">
							Home
						</a>
                        </Link>
						<Link href="/#features" passHref><a className="font-medium text-gray-500 hover:text-gray-900">
							Features
						</a>
                        </Link>
						<Link href="/product" passHref><a  className="font-medium text-gray-500 hover:text-gray-900">
							Product
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
						<a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-secondary-600 bg-white hover:bg-gray-50">
							Log in
						</a>
					</span>
				</div>
			</nav>
			<Transition show={mobileMenu} enter="duration-150 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
				<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
					<div className="px-5 pt-4 flex items-center justify-between">
						<div>
							<img className="h-8 w-auto" src="/etijar-logo.svg" alt="" />
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
						<Link href="/#features" passHref><a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
							Features
						</a></Link>
						<Link href="/product" passHref><a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
							Product
						</a></Link>

                        <Link href="/contact" passHref><a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
							Contact Us
						</a></Link>
					</div>
					<a href="#" className="block w-full px-5 py-3 text-center font-medium text-secondary-600 bg-gray-50 hover:bg-gray-100">
						Log in
					</a>
				</div>
			</Transition>

			{/* <div className="absolute inset-0">
				<div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
			</div> */}
			<div className="max-w-7xl mx-auto lg:grid lg:grid-cols-5">
				<div className="px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
					<div className="max-w-lg mx-auto">
						<h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
						<p className="mt-3 text-lg leading-6 text-gray-500">Have any questions? Feel free to leave us a message..</p>
						<dl className="mt-8 text-base text-gray-500">
							<div>
								<dt className="sr-only">Postal address</dt>
								<dd>
									<p>Paylite Fintech Solutions Africa Ltd Trading as eTijar.</p>
									<p>Head Office: Suite 2, 6th Floor Nusaiba Towers, Kado Abuja. FCT, Nigeria.</p>
								</dd>
							</div>
							<div className="mt-3">
								<dt className="sr-only">Email</dt>
								<dd className="flex">
									{/* Heroicon name: outline/mail */}
									<svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
									<span className="ml-3">support@example.com</span>
								</dd>
							</div>
						</dl>
						<p className="mt-6 text-base text-gray-500">
							Looking for careers?
							<a href="#" className="font-medium text-gray-700 underline">
								View all job openings
							</a>
							.
						</p>
					</div>
				</div>
				<div className="bg-secondary-400 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
					<div className="max-w-lg mx-auto lg:max-w-none">
						<form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
							<div>
								<label htmlFor="full_name" className="sr-only">
									Full name
								</label>
								<input type="text" name="full_name" id="full_name" autoComplete="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" placeholder="Full name" />
							</div>
							<div>
								<label htmlFor="email" className="sr-only">
									Email
								</label>
								<input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" placeholder="Email" />
							</div>
							<div>
								<label htmlFor="phone" className="sr-only">
									Phone
								</label>
								<input type="text" name="phone" id="phone" autoComplete="tel" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" placeholder="Phone" />
							</div>
							<div>
								<label htmlFor="message" className="sr-only">
									Message
								</label>
								<textarea id="message" name="message" rows={4} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" placeholder="Message" defaultValue={''} />
							</div>
							<div>
								<button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
