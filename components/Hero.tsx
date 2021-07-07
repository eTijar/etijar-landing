import Link from "next/link"
import { useState } from "react";
import {Transition} from "@headlessui/react";
import Image from 'next/image';
import HeroImage from '../public/HeroImage.jpg';

export default function Hero() {
  const [mobileMenu,setMobileMenu] = useState(false);
	return (
		<div className="relative overflow-hidden max-h-auto mb-34">

			{/*Glass color effects*/}
			<div className="colors1"></div>
			<div className="colors2"></div>
			<div className="colors3"></div>
			<div className="colors4"></div>
			<div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
				
			</div>
			<div>
			</div>
			<div className="relative pt-6 pb-16 sm:pb-24 lg:pb-24 heroo">
			<nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
				<div className="flex items-center flex-1">
					<div className="flex items-center justify-between w-full md:w-auto">
						<a href="#">
							<span className="sr-only">Etijar</span>
							<img className="h-6 w-12 sm:h-14" src="/logo.png" alt="" />
						</a>
						<div className="-mr-2 flex items-center md:hidden">
							<button onClick={()=>setMobileMenu(true)} type="button" className="bg-white shadow-lg mr-4 rounded-md p-3 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500" aria-expanded="false">
								<span className="sr-only">Open main menu</span>
								{/* Heroicon name: outline/menu */}
								<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
						<Link href="/" passHref><a  className="font-medium text-gray-500 hover:text-gray-900">
							About
						</a>
                        </Link>
						<Link href="/features" passHref><a className="font-medium text-gray-500 hover:text-gray-900">
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
						<a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-blue-900 text-blue-100 hover:bg-blue-500">
							Log in
						</a>
					</span>
				</div>
			</nav>
			<Transition show={mobileMenu} enter="duration-150 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
				<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
					<div className="px-5 pt-4 flex items-center justify-between">
						<div>
							<img className="h-6 w-12 sm:h-14" src="/logo.png" alt="" />
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
						<Link href="/" passHref><a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
							About
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
				<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-24">
					<div className="lg:grid lg:grid-cols-12 lg:gap-8">
						<div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
							<div className="">
								<div>
									<a href="#" className="inline-flex space-x-4">
										<span className="rounded bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700 tracking-wide uppercase">What's new</span>
										<span className="inline-flex items-center text-sm font-medium text-secondary-600 space-x-1">
											<span>Just shipped version 0.1.0</span>
											{/* Heroicon name: solid/chevron-right */}
											<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
												<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
											</svg>
										</span>
									</a>
								</div>
								<div className="mt-7 sm:max-w-xl">
									<h1 className="text-2xl font-bold text-gray-600 mb-4 tracking-tight sm:text-5xl hero-eti">eTijar</h1>
									<h2 className="text-3xl font-bold text-blue-900 tracking-tight sm:text-6xl hero-eti">Make profit not Interest</h2>
									<p className="mt-5 text-base text-gray-500">Providing 100% ethical and interest-free. We are digitizing how you handle debt, save, invest and spend money.</p>
								</div>
								<form action="#" className="mt-8 sm:max-w-lg sm:w-full sm:flex">
									<div className="min-w-0 flex-1">
										<label htmlFor="hero_email" className="sr-only">
											Email address
										</label>
										<input id="hero_email" type="email" className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-secondary-500 focus:ring-secondary-500" placeholder="Enter your email" />
									</div>
									<div className="mt-4 sm:mt-0 sm:ml-3">
										<button type="submit" className="block w-full rounded-md border border-transparent px-5 py-3 text-base font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:px-10 hero-btn">
											Sign Up
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
						<div className="mt-10 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
							
							<div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
								<button  type="button" className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500">
									<span className="sr-only">Watch our video to learn more</span>
									<img className="w-full" src = "/HeroImage.jpg" alt="heroimg" />

								</button>
							</div>
							<div className="absolute p-5 w-32 shadow-lg rounded flex items-center flex-col hero-glass glass-one">
							<img className="w-10 bg-blue-300 p-2 rounded-full" src= "/target.svg" alt="target" />
								<div className="">Achieve your financial Goals without Compromise</div></div>
							<div className="absolute p-5 w-42 shadow-lg rounded flex items-center flex-col hero-glass glass-two">
								<img className="w-10 bg-blue-300 p-2 rounded-full" src= "/connection.svg" alt="con" />
							<div className="">Use secure Banking links to connect your bank accounts and credit cards
							to view all your transactions in one place</div> </div>
							<div className="absolute p-5 w-42 shadow-lg rounded flex items-center flex-col hero-glass glass-three">
							<img className="w-10 bg-blue-300 p-2 rounded-full" src= "/stats.svg" alt="stats" />
								<div className=""> Zero Interest, Transparent financing for 
							small-businesses. Manage your business in one place </div></div>
							</div>
					</div>
				</main>
			</div>
		</div>
	);
}
