import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
export default function Product() {
	const [mobileMenu, setMobileMenu] = useState(false);
	return (
		<>
			<Head>
				<title>eTijar - Product Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="relative bg-white overflow-hidden pt-6 pb-16 sm:pb-24 lg:pb-32">
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
							<Link href="/" passHref>
								<a className="font-medium text-gray-500 hover:text-gray-900">Home</a>
							</Link>
							<Link href="/#features" passHref>
								<a className="font-medium text-gray-500 hover:text-gray-900">Features</a>
							</Link>
							<Link href="/product" passHref>
								<a className="font-medium text-gray-500 hover:text-gray-900">Product</a>
							</Link>
							<Link href="/contact" passHref>
								<a className="font-medium text-gray-500 hover:text-gray-900">Contact Us</a>
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
							<Link href="/" passHref>
								<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
									Home
								</a>
							</Link>
							<Link href="/#features" passHref>
								<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
									Features
								</a>
							</Link>
							<Link href="/product" passHref>
								<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
									Product
								</a>
							</Link>

							<Link href="/contact" passHref>
								<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
									Contact Us
								</a>
							</Link>
						</div>
						<a href="#" className="block w-full px-5 py-3 text-center font-medium text-secondary-600 bg-gray-50 hover:bg-gray-100">
							Log in
						</a>
					</div>
				</Transition>

				<div className="px-4 sm:px-6 lg:px-8 mt-20">
					<div className="text-lg max-w-prose mx-auto">
						<h1>
							<span className="block text-base text-center text-secondary-600 font-semibold tracking-wide uppercase">Introducing</span>
							<span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">eTijar - Earn Profit, Not Interest</span>
						</h1>
						<p className="mt-8 text-xl text-gray-500 leading-8">
							eTijar is a fully ethical finance and wealth management platform. We provide you with expense management, multi-currency wallets, access to investments, portfolio management, donations management, zakat payments and savings by investing. We are fully Halal compliant.
						</p>
					</div>
					<div className="mt-6 prose prose-secondary prose-lg text-gray-500 mx-auto">
						<h2>An ethical non-interest Investment and finance platform for all, anywhere in the world</h2>
						<p>A multi-currency e-wallet that allows you to get Mudarabah financing, virtual debit cards, personal/business bill payments and acceptance.</p>
						<p>eTijar helps you to exchange, spend and send money at the best possible rates. Build an asset portfolio for your future income with selected shariah-compliant equities and index funds.</p>
						<h2>eTijar Halal Investment</h2>
						<p>
							eTijar helps you invest in a shariah acceptable way, in fully-diversified portfolios of low-cost Halal index funds, equities and alternative investments, based on your risk profile using the Modern Portfolio Theory the halal way. Our technology simplifies the entire investing
							experience and provides you with the best possible return. Invest with eTijar: save on time, effort & money. Stay halal.
						</p>
						<h2>Zero Interest, Transparent financing for Small-businesses.</h2>
						<p>eTijar helps you build your small business and grow through ethical and shariah business rules.</p>
						<p>Making banking more useful for fast-growing businesses, the Interest-free way.</p>
						<p>We seek to make it easy for SMEs, entrepreneurs and freelancers to have affordable business banking services.</p>
						<p>Starting and running a business in Nigeria is hard. It can be less so. We believe banking can act as support for entrepreneurs everywhere and not a burden.</p>
						<figure>
							<img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1554058922-d51b58b707f5?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3" alt="" width={1310} height={873} />
							<figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
						</figure>
						<h2>Shariah Compliant Portfolio Investments</h2>
						<p>Invest in shariah acceptable equities and fully-diversified portfolios of low-cost Halal index funds.</p>
						<p>We follow established Shariah screening criteria set up by our Shariah Advisory Board.</p>
						<p>Our Shariah Equity Screening Solution enables individuals’ access to a pre-screened universe of Shariah-compliant stocks.</p>
						<p>Our system and technology can classify equities as Shariah-compliant based on many criteria set by our Shariah committee.</p>
						<p>Our dynamic Shariah audit tool helps Shariah funds remain in continuous Shariah compliance by generating precise Shariah Compliance audit reports at the desired frequencies.</p>
					</div>
				</div>
			</div>
		</>
	);
}
