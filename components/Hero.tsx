import Link from 'next/link';
import Image from 'next/image';
import Header from './Header';
import phoneMockup from '../public/phoneMockup.png';
import { motion, AnimatePresence, useTransform, useViewportScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
export default function Hero() {
	useEffect(() => {
		AOS.init();
	});
	const [istoggled, setToggle] = useState(false);
	const { scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
	return (
		<motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }} className="relative overflow-hidden max-h-auto mb-34">
			{/*******************Header**********************/}
			<Header />
			{/*Glass color effects*/}
			<div className="colors1"></div>
			<div className="colors2"></div>
			<div className="colors3"></div>
			<div className="colors4"></div>
			<motion.div className="relative pt-10 pb-5 lg:pb-16 heroo">
				<main className=" w-full mt-16  sm:mt-24 px-4 lg:px-10 sm:px-6 lg:mt-24">
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
									<motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.4, ...transition } }} className="text-2xl font-bold text-black mb-3 tracking-tight sm:text-3xl hero-eti text-shadow">
										eTijar
									</motion.h1>
									<motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.6, ...transition } }} className="text-4xl font-bold text-primary-500 tracking-tight sm:text-5xl text-shadow">
										Make profit <span className="text-secondary-500">not Interest</span>
									</motion.h2>
									<motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.8, ...transition } }} className="mt-5 text-base text-gray-600">
										Organise bank accounts, stocks, investments and safely designate an administrator for your estate. Use our ethical money app to Achieve Your Financial Goals Without Compromising your belief
									</motion.p>
								</div>
								<form action="#" className="mt-10 sm:max-w-lg sm:w-full sm:flex">
									<div className="min-w-0 flex-1">
										<label htmlFor="hero_email" className="sr-only">
											Email address
										</label>
										<input id="hero_email" type="email" className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-secondary-500 focus:ring-secondary-500" placeholder="Enter your email" />
									</div>
									<div className="mt-4 sm:mt-0 sm:ml-3">
										<a
											href="https://app.etijar.com"
											target="_blank"
											className="block w-full rounded border border-transparent px-5 py-3 text-base font-medium text-white shadow-xl bg-primary-500 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:px-10">
											Sign Up
										</a>
									</div>
								</form>
								<div className="bg-transparent">
									<div className="">
										<div className="py-16">
											<p className="text-base font-semibold uppercase text-gray-600 tracking-wider">Featured In</p>
											<div className="mt-6 grid grid-cols-3 gap-4 md:grid-cols-4 lg:mt-8">
												<div className="col-span-1 flex justify-center py-2">
													<img className="max-h-10" src="ifn.png" alt="ifn" style={{ filter: 'grayscale(1)' }} />
												</div>
												<div className="col-span-1 flex justify-center py-2">
													<img className="max-h-8" src="proshare.png" alt="Proshare" style={{ filter: 'grayscale(1)' }} />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-10 p-6 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
							<motion.img style={{ scale: scale }} className="w-full rounded-lg" src="/phoneMockup.png" alt="heroimg" />

							<motion.div initial={{ scale: 0.4 }} animate={{ scale: 1 }} transition={transition} className="sm:block absolute p-3 w-72 border bg-white text-xs shadow-xl rounded-lg flex items-center flex-col glass-two">
								<img className="w-8 bg-secondary-500 p-1 rounded-full" src="/connection.svg" alt="con" />
								<div className="">Use secure Banking links to connect your bank accounts and credit cards to view all your transactions in one place</div>{' '}
							</motion.div>
							<motion.div initial={{ scale: 0.4 }} animate={{ scale: 1 }} transition={transition} className="sm:block absolute p-3 w-72 border bg-white text-xs shadow-xl rounded-lg flex items-center flex-col glass-three">
								<img className="w-8 bg-secondary-500 p-1 rounded-full" src="/target.svg" alt="target" />
								<div className=""> Achieve your financial goals without compromise </div>
							</motion.div>

							{/*********for mobile****************/}
							<div className="relative w-full flex flex-col items-center p-6">
								<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="sm:hidden bg-white hover:bg-secondary-300 duration-100 mt-10 p-5 w-full shadow-lg rounded flex items-center flex-col">
									<img className="w-10 bg-secondary-300 p-2 rounded-full shadow-lg" src="/connection.svg" alt="con" />
									<div className="mt-5">Use secure Banking links to connect your bank accounts and credit cards to view all your transactions in one place</div>{' '}
								</div>
								<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="sm:hidden bg-white hover:bg-secondary-300 duration-100 mt-16 p-5 w-full shadow-lg rounded flex items-center flex-col">
									<img className="w-10 bg-secondary-600 p-2 rounded-full shadow-lg" src="/target.svg" alt="target" />
									<div className="mt-5">Achieve your financial goals without compromise </div>
								</div>
								<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="sm:hidden bg-white hover:bg-secondary-300 duration-100 mt-16 p-5 w-full shadow-lg rounded flex items-center flex-col">
									<img className="w-10 bg-secondary-600 p-2 rounded-full shadow-lg" src="/stats.svg" alt="stats" />
									<div className="mt-5"> Zero Interest, Transparent financing for small-businesses. Manage your business in one place </div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</motion.div>
			{/**Start of etijar Zendesk Widget script**/}
			<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=8181c863-dc19-4ab9-9f8b-67ab2d9c5fa2">
				{' '}
			</script>
			{/**End of etijar Zendesk Widget script**/}
		{/**Global site tag (gtag.js) - Google Analytics**/}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y2SJMJG6CT"></script>

		</motion.div>
	);
}
