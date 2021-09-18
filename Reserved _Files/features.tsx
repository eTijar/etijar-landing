import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
export default function Features() {
	const [mobileMenu, setMobileMenu] = useState(false);
	return (
		<>
			<Head>
				<title>eTijar - features Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
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
		<section id="features" className="py-16 bg-gray-50 overflow-hidden lg:py-24">
			<div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
				<svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width={404} height={784} fill="none" viewBox="0 0 404 784" aria-hidden="true">
					<defs>
						<pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
							<rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
				</svg>
				<div className="relative">
					<h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Investing can be delightfully easy. Simple.</h2>
					<p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">With as little as $1 a week, you can automatically start Investing.</p>
				</div>
				<div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
					<div className="relative">
						<h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">What we offer</h3>
						<p className="mt-3 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.</p>
						<dl className="mt-10 space-y-10">
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white">
										{/* Heroicon name: outline/globe-alt */}
										<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<dt className="text-lg leading-6 font-medium text-gray-900">Secure Application</dt>
									<dd className="mt-2 text-base text-gray-500">We understand how important it is that you can transact in a highly secure manner, that is why we have taken a lot of security measures to ensure that happens.</dd>
								</div>
							</div>
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white">
										{/* Heroicon name: outline/scale */}
										<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<dt className="text-lg leading-6 font-medium text-gray-900">Automated Recurring Investment.</dt>
									<dd className="mt-2 text-base text-gray-500">Avoid timing the market, you can easily set up recurring purchases, then focus on other things that matter.</dd>
								</div>
							</div>
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white">
										{/* Heroicon name: outline/lightning-bolt */}
										<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<dt className="text-lg leading-6 font-medium text-gray-900">Simple & Personalised</dt>
									<dd className="mt-2 text-base text-gray-500">
										<p>We try our best to keep every single thing on the app simple so that you can have a pleasant experience. All the Time.</p>
										<blockquote className=" mt-1">You worked hard for your money, it’s time it works for you</blockquote>
									</dd>
								</div>
							</div>
						</dl>
					</div>
					<div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
						<svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width={784} height={404} fill="none" viewBox="0 0 784 404">
							<defs>
								<pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
									<rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
								</pattern>
							</defs>
							<rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
						</svg>
						<img className="relative mx-auto" width={490} src="/features.svg" alt="" />
					</div>
				</div>

				<svg className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width={404} height={784} fill="none" viewBox="0 0 404 784" aria-hidden="true">
					<defs>
						<pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
							<rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
				</svg>
				<div className="relative mt-12 sm:mt-16 lg:mt-24">
					<div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
						<div className="lg:col-start-2">
							<h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Control how often you want to save.</h3>
							<p className="mt-3 text-lg text-gray-500">eTijar allows you to customize your savings plan to fit your preference.</p>
							<dl className="mt-10 space-y-10">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white">
											{/* Heroicon name: outline/annotation */}
											<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<dt className="text-lg leading-6 font-medium text-gray-900">Choose a plan that matches your savings goals.</dt>
										<dd className="mt-2 text-base text-gray-500 pl-3">
											<ul className="list-disc">
												<li>Choose a plan. E.g. Umrah Plans</li>
												<li>Give your plan a functional name.</li>
											</ul>
										</dd>
									</div>
								</div>
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white">
											{/* Heroicon name: outline/mail */}
											<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<dt className="text-lg leading-6 font-medium text-gray-900">Full power to personalize your plan</dt>
										<dd className="mt-2 text-base text-gray-500 pl-3">
											<ul className="list-disc">
												<li>Set aside an amount you’d want to invest.</li>
												<li>Set a target for your daily, weekly or monthly savings.</li>
												<li>Set a date you would like to start this exercise!</li>
											</ul>
										</dd>
									</div>
								</div>
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white">
											{/* Heroicon name: outline/mail */}
											<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<dt className="text-lg leading-6 font-medium text-gray-900">Now that you have set the rules</dt>
										<dd className="mt-2 text-base text-gray-500 pl-3">Connect your bank account. Sit back and relax! Our AI will handle the rest.</dd>
									</div>
								</div>
							</dl>
						</div>
						<div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
							<svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width={784} height={404} fill="none" viewBox="0 0 784 404" aria-hidden="true">
								<defs>
									<pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
										<rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
									</pattern>
								</defs>
								<rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
							</svg>
							<img className="relative mx-auto" width={490} src="/features-2.svg" alt="" />
						</div>
					</div>
					<p></p>
				</div>
			</div>
		</section>
		</>
	);
}
