import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import {motion, AnimatePresence, useTransform, useViewportScroll} from 'framer-motion'
import Header from '../components/Header'
import MaxFooter from '../components/MaxFooter'

const transition = { duration:1, ease: [0.43, 0.13, 0.23, 0.96] }

export default function Product() {
	const [mobileMenu, setMobileMenu] = useState(false);
	const {scrollYProgress} = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4])
	return (
		<>
			<Head>
				<title>eTijar - Product Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<motion.div className="relative overflow-hidden pt-10 pb-16 sm:pb-2 lg:pb-5 heroo">
			
				
<main className=" w-full mt-16  px-4 sm:mt-24 px-4 lg:px-10 sm:px-6 lg:mt-24">
	
	<div className="lg:grid lg:grid-cols-12 lg:gap-8">
		
		<div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
			<div className="">
				<div>
					<a href="#" className="inline-flex space-x-4">
						<span className="rounded bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700 tracking-wide uppercase">What's new</span>
						<span className="inline-flex items-center text-sm font-medium text-secondary-600 space-x-1">
							<span>Introducing</span>
							{/* Heroicon name: solid/chevron-right */}
							<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
							</svg>
						</span>
					</a>
				</div>
				<div className="mt-7 sm:max-w-xl">
					<motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1, transition: {delay:0.4, ...transition}}} className="text-2xl font-bold text-gray-600 mb-4 tracking-tight sm:text-5xl hero-eti text-shadow">eTijar</motion.h1>
					<motion.h2 initial={{y:20, opacity:0}} animate={{y:0, opacity:1, transition: {delay:0.6, ...transition}}} className="text-3xl font-bold text-primary-300 tracking-tight sm:text-6xl hero-eti text-shadow">Make profit not Interest !</motion.h2>
					<motion.p initial={{y:20, opacity:0}} animate={{y:0, opacity:1, transition: {delay:0.8, ...transition}}} className="mt-5 text-base text-gray-500">eTijar is a fully ethical finance and wealth management platform. We provide you with expense
					 management, multi-currency wallets, access to investments, portfolio management, donations management, zakat payments and savings by investing. We are fully Halal compliant.</motion.p>
				</div>
				<motion.form initial={{y:20, opacity:0}} animate={{y:0, opacity:1, transition: {delay:0.4, ...transition}}} action="#" className="mt-8 sm:max-w-lg sm:w-full sm:flex">
					<div className="min-w-0 flex-1">
						<label htmlFor="hero_email" className="sr-only">
							Email address
						</label>
						<input id="hero_email" type="email" className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-secondary-500 focus:ring-secondary-500" placeholder="Enter your email" />
					</div>
					<div className="mt-4 sm:mt-0 sm:ml-3">
						<button type="submit" className="block w-full rounded-md border border-transparent px-5 py-3 text-base font-medium text-white shadow-lg bg-primary-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:px-10">
							Sign Up
						</button>
					</div>
				</motion.form>
				
			</div>{' '}
		</div>
		<div className="mt-10 p-6 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
			
					<motion.img style= {{scale:scale}} className="w-full rounded-lg" src = "/productMockup.png" alt="productMockup" />
			
			</div>
	</div>
</main>
</motion.div>
<div className="relative min-h-auto w-auto mb-32 mt-16 bg-white">
                <div className="w-auto flex justify-center flex-wrap px-10">
                    <div className="w-full text-center mb-10 lg:mb-20">
                    <h2 className="text-3xl md:text-6xl font-black text-secondary-300 text-shadow">What we offer</h2>
                    </div>
                    <div className=" w-full flex lg:justify-between justify-center flex-wrap flex-row-reverse lg:flex-row mb-24">
                        <div className=" relative w-4/4 lg:w-3/4 bg-primary-300 py-5 px-8 text-gray-300">
							<p className="text-lg font-bold mb-3">An ethical non-interest Investment and finance platform for all, anywhere in the world</p>
							<p className="text-base">A multi-currency e-wallet that allows you to get Mudarabah financing, virtual debit cards, personal/business bill payments and acceptance.
									eTijar helps you to exchange, spend and send money at the best possible rates. 
									Build an asset portfolio for your future income with selected shariah-compliant equities and index funds.</p>
                        </div>
                        <div className="relative w-4/4 lg:w-1/4 md:w-2/4 mb-20 lg:mb-2 bg-white py-5 px-8">
							<img className="w-full p-3 bg-gray-100 shadow-2xl" src ="proOne.png" alt="proOne" />
                        
                        </div>
                        </div>
						<div className=" w-full flex lg:justify-between justify-center flex-wrap flex-row-reverse mb-24">
                        <div className="relative w-4/4 lg:w-3/4 bg-primary-300 py-5 px-8 text-gray-300">
                            <p className="text-lg font-bold mb-3">eTijar Halal Investment</p>
							<p className="text-base">eTijar helps you invest in a shariah acceptable way, in fully-diversified portfolios of low-cost Halal index funds, equities and alternative investments, based on your risk profile using the Modern Portfolio Theory the halal way. Our technology simplifies the entire investing
							experience and provides you with the best possible return. Invest with eTijar: save on time, effort & money. Stay halal.</p>
                          
                        </div>
                        <div className="relative w-4/4 lg:w-1/4 md:w-2/4 mb-20 lg:mb-2 bg-white py-5 px-8">
							<img className="w-full p-3 bg-gray-100 shadow-2xl" src ="proTwo.png" alt="proTwo" />
                        
                        </div>
                        </div>
						<div className=" w-full flex lg:justify-between justify-center flex-wrap mb-24">
                        <div className="relative w-4/4 lg:w-3/4 bg-primary-300 py-5 px-8 text-gray-300">
                            <p className="text-lg font-bold mb-3">Zero Interest, Transparent financing for Small-businesses.</p>
							<p className="text-base">eTijar helps you build your small business and grow through ethical and shariah business rules.
						Making banking more useful for fast-growing businesses, the Interest-free way.
						We seek to make it easy for SMEs, entrepreneurs and freelancers to have affordable business banking services.
						Starting and running a business in Nigeria is hard. It can be less so. We believe banking can act as support for entrepreneurs everywhere and not a burden.</p>
                          
                        </div>
                        <div className="relative w-4/4 lg:w-1/4 md:w-2/4 mb-20 lg:mb-2 bg-white py-5 px-8">
							<img className="w-full p-3 bg-gray-100 shadow-2xl" src ="proThree.png" alt="proThree" />
                        
                        </div>
                        </div>
						<div className=" w-full flex lg:justify-between justify-center flex-wrap flex-row-reverse mb-24">
                        <div className="relative w-4/4 lg:w-3/4 bg-primary-300 py-5 px-8 text-gray-300">
                            <p className="text-lg font-bold mb-3">Shariah Compliant Portfolio Investments</p>
							<p className="text-base">Invest in shariah acceptable equities and fully-diversified portfolios of low-cost Halal index funds.
						We follow established Shariah screening criteria set up by our Shariah Advisory Board.
						Our Shariah Equity Screening Solution enables individuals’ access to a pre-screened universe of Shariah-compliant stocks.
						Our system and technology can classify equities as Shariah-compliant based on many criteria set by our Shariah committee.
						Our dynamic Shariah audit tool helps Shariah funds remain in continuous Shariah compliance by generating precise Shariah Compliance audit reports at the desired frequencies.</p>
                          
                        </div>
                        <div className="relative w-4/4 lg:w-1/4 md:w-2/4 mb-20 lg:mb-2 bg-white py-5 px-8">
							<img className="w-full p-3 bg-gray-100 shadow-2xl" src ="proFour.png" alt="proFour" />
                        
                        </div>
                        </div>

                </div>
            </div>
			<MaxFooter/>	
		</>
	);
}
