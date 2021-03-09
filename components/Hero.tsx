import Link from "next/link"
import { useState } from "react";
import {Transition} from "@headlessui/react"
export default function Hero() {
  const [mobileMenu,setMobileMenu] = useState(false);
	return (
		<div className="relative bg-white overflow-hidden min-h-screen">
			<div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
				<svg className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width={640} height={784} fill="none" viewBox="0 0 640 784">
					<defs>
						<pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x={118} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
							<rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect y={72} width={640} height={640} className="text-secondary-50" fill="currentColor" />
					<rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
				</svg>
			</div>
			<div>
			</div>
			<div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
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
				<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
					<div className="lg:grid lg:grid-cols-12 lg:gap-8">
						<div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
							<div className="">
								<div>
									<a href="#" className="inline-flex space-x-4">
										<span className="rounded bg-secondary-50 px-2.5 py-1 text-xs font-semibold text-secondary-600 tracking-wide uppercase">What's new</span>
										<span className="inline-flex items-center text-sm font-medium text-secondary-600 space-x-1">
											<span>Just shipped version 0.1.0</span>
											{/* Heroicon name: solid/chevron-right */}
											<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
												<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
											</svg>
										</span>
									</a>
								</div>
								<div className="mt-6 sm:max-w-xl">
									<h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">eTijar - make profit not interest.</h1>
									<p className="mt-6 text-xl text-gray-500">Providing 100% ethical and interest-free loans and wealth management.</p>
								</div>
								<form action="#" className="mt-6 sm:max-w-lg sm:w-full sm:flex">
									<div className="min-w-0 flex-1">
										<label htmlFor="hero_email" className="sr-only">
											Email address
										</label>
										<input id="hero_email" type="email" className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-secondary-500 focus:ring-secondary-500" placeholder="Enter your email" />
									</div>
									<div className="mt-4 sm:mt-0 sm:ml-3">
										<button type="submit" className="block w-full rounded-md border border-transparent px-5 py-3 bg-primary-600 text-base font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:px-10">
											Notify me
										</button>
									</div>
								</form>
								<div className="mt-6">
									<div className="inline-flex items-center divide-x divide-gray-300">
										<div className="flex-shrink-0 flex pr-5">
											{/* Heroicon name: solid/star */}
											<svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											{/* Heroicon name: solid/star */}
											<svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											{/* Heroicon name: solid/star */}
											<svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											{/* Heroicon name: solid/star */}
											<svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											{/* Heroicon name: solid/star */}
											<svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										</div>
										<div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
											<span className="font-medium text-gray-900">Rated 5 stars</span> by over <span className="font-medium text-secondary-600">500 beta users</span>
										</div>
									</div>
								</div>
							</div>{' '}
						</div>
						<div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
							<svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width={640} height={784} fill="none" viewBox="0 0 640 784" aria-hidden="true">
								<defs>
									<pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x={118} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
										<rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
									</pattern>
								</defs>
								<rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
								<rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
							</svg>
							<div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
								<button  type="button" className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500">
									<span className="sr-only">Watch our video to learn more</span>
									<img className="w-full" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />

								</button>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
