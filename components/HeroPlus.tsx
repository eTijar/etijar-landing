import Link from 'next/link';
import { motion, AnimatePresence, useTransform, useViewportScroll } from 'framer-motion';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import FAQs from './faqs';
import { Disclosure } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroPlus() {
	useEffect(() => {
		AOS.init();
	});
	const { scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [0, 1, 1], [1, 0.5, 0.04]);
	const show1 = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
	const [active, setActive] = useState('');
	const faqs = [
		{
			id: 'fone',
			accTitle: 'What is a Shariah-compliant fund?',
			accContent: 'The most common forms of Shariah-compliant investment funds are equity funds, real estate funds and money market funds. These investment funds employ Islamic contracts which ensure that the terms and rights of all parties are safeguarded in conformity with Islamic principles.',
		},
		{
			id: 'ftwo',
			accTitle: 'What are the main principles of Islamic finance?',
			accContent: 'Two fundamental principles of Islamic banking are the sharing of profit and loss, and the prohibition of the collection and payment of interest by lenders and investors. There are more than 300 banks and 250 mutual funds around the world that comply with Islamic principles.',
		},
		{
			id: 'fthree',
			accTitle: 'What are the major modes of Islamic financing?',
			accContent: "Some of the modes of Islamic banking/finance include Mudarabah (profit-sharing and loss-bearing), Wadiah (safekeeping), Musharaka joint venture, Murabaha (cost-plus), and Ijara (leasing). The Qur'an prohibits riba, which means increase",
		},
		{
			id: 'ffour',
			accTitle: 'How do you make money if interest is prohibited?',
			accContent: 'Islamic financiers operate without interest, which is not permitted in Islam. Instead, money is generated through profit from investments. Each Islamic finance or investment firm has a panel of Muslim advisers who ensure that these investments are compliant with Sharia law.',
		},
		{
			id: 'ffive',
			accTitle: 'Why is Shariah compliance important?',
			accContent:
				'Reputational risk is particularly damaging for shariah-compliant entities especially the banks since the nature of their business requires them to maintain the confidence of the depositors, creditors, and the general marketplace. Thus, the compliance issue is one of the most crucial factors in determining smooth and successful banking operations.',
		},
		{
			id: 'fsix',
			accTitle: 'Can finance be Islamic?',
			accContent:
				'Islamic finance refers to how businesses and individuals raise capital in accordance with Sharia, or Islamic law. It also refers to the types of investments that are permissible under this form of law. Islamic finance can be seen as a unique form of socially responsible investment.',
		},
		{
			id: 'fseven',
			accTitle: 'Encouraging stability in investments',
			accContent: 'Companies whose financial practices and operations are too risky are usually kept away by Islamic financing companies. By performing intensive audits and analyses, Islamic finance promotes the reduction of risk and creates space for greater investment stability.',
		},
	];
	return (
		<>
			<div className="relative min-h-auto w-auto md:mt-5 mt-10  pt-4 md:pt-2 bg-white ">
				<div className="w-full flex flex-wrap flex-row-reverse justify-center lg:justify-between px-12 sm:px-20">
					<div data-aos="fade-up" data-aos-duration="2000" className="relative md:mt-8 mt-10 w-full lg:w-2/6 h-auto flex flex-col flex-wrap blur mb-6">
						<h2 className="text-primary-800 text-lg md:text-2xl m-4">At eTijar, we believe that the best opportunities should be seized, on your own terms.</h2>
						<div className=" px-4 py-5 pb-2 rounded font-base text-gray-600 flex items-center heroo">
							<img className="w-12 h-12 mr-2 p-2 bg-red-300 rounded shadow-xl" src="handcoin.png" alt="hand-coin" />
							<p>Achieve your financial goals by investing in Islamic Investments</p>
						</div>
						<div className="px-4 py-5 pb-2 rounded font-base text-gray-600 flex items-center heroo">
							<img className="w-12 h-12 mr-2 p-2 bg-yellow-300 rounded shadow-xl" src="banking.png" alt="banking" />
							<p>Connect all your bank accounts in one place</p>
						</div>
						<div className="px-4 py-5 pb-2 rounded font-base text-gray-600 flex items-center heroo">
							<img className="w-12 h-12 mr-2 p-2 bg-green-300 rounded shadow-xl" src="insight.png" alt="insight" />
							<p>Get insights on your debt, expenses, set goals, and increase your savings that leads to Investments. Get started today with us for Free</p>
						</div>
					</div>
					<div className="relative w-full lg:w-2/6 h-auto md:mt-0 mt-24 flex justify-center flex-wrap">
						<img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="w-auto h-auto relative -top-18" src="/signup.png" alt="signup" />
						<form action="#" className="-mt-5 sm:max-w-lg sm:w-full sm:flex">
							<div className="min-w-0 flex-1">
								<label htmlFor="hero_email" className="sr-only">
									Email address
								</label>
								<input id="hero_email" type="email" className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-secondary-500 focus:ring-secondary-500" placeholder="Enter your email" />
							</div>
							<div className="mt-4 sm:mt-0 sm:ml-3">
								<a href="https://app.etijar.com" target="_blank" className="block w-full rounded border border-transparent px-5 py-3 text-base font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:px-10 hero-btn">
									Sign Up
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="relative bg-gradient-to-tr from-secondary-600 via-secondary-200 to-primary-800 min-h-auto w-auto px-6 lg:px-5 lg:mx-10 mx-6 lg:mt-32 mt-48 lg:py-28 py-0  flex justify-around items-center flex-wrap flex-row-reverse">
					<img data-aos="zoom-in-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className="lg:absolute relative lg:right-0 lg:-mt-0 lg:-mb-0 sm:-mt-40 sm:-mb-8 -mt-28 -mb-0 w-4/6 lg:w-3/6" src="download.png" alt="download" />
					<div className="lg:w-full h-full justify-center ">
						<h3 className="text-xl sm:text-3xl lg:text-4xl text-primary-600 mb-4 mt-8 lg:mt-10">eTijar App coming soon</h3>
						<div className="w-full flex items-center ">
						<a href=""><img className="sm:w-32 w-28 h-11 mr-2" src="apple.png" alt="apple"/></a>
						<a href=""><img className="sm:w-40 w-32 sm:h-auto h-16 mr-2" src="google.png" alt="google"/></a>
						</div>
					</div>
				</div>

			<div className="relative min-h-auto w-auto mb-32 md:mt-48 mt-32 bg-white">
				<div className="w-auto flex justify-center flex-wrap px-8 md:px-20">
					<div className="w-full text-center mb-6 lg:mb-20">
						<h2 className="text-2xl md:text-6xl font-black text-gray-300">
							Three products, <span className=" text-secondary-500 opacity-60">One goal.</span>
						</h2>
					</div>
					<div className=" w-full flex justify-around flex-wrap">
						<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className=" relative w-3/4 lg:w-1/4 mb-20 lg:mb-2 bg-white shadow-xl rounded-sm p-5 text-sm text-gray-500 hover:bg-blue-50 duration-100 box1">
							<h2 className="text-lg text-primary-800 font-bold mb-3">Personal loans for the everyday borrower</h2>
							eTijar offer access to personal loans for middle-income borrowers that need help with things like unexpected personal expenses in the form of Qard Hasn a Benevolent Loan at 0% interest forever.
							<a href="/about" className="block mt-3 text-sm text-secondary-300 rounded font-bold hover:text-secondary-600 duration-100">
								Learn more <FaArrowRight className="inline" />
							</a>
						</div>
						<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="relative w-3/4 lg:w-1/4 mb-20 lg:mb-2 bg-white shadow-xl rounded-sm p-5 text-sm text-gray-500 hover:bg-blue-50 duration-100 box2">
							<h2 className="text-lg text-primary-800 font-bold mb-3">Transparent financing for business</h2>
							eTijar helps you build your small business and grow while staying within your personal beliefs, ethical and shariah business rules.
							<a href="/about" className=" block mt-3 text-sm text-secondary-300 rounded font-bold hover:text-secondary-600 duration-100">
								Learn more <FaArrowRight className="inline" />
							</a>
						</div>
						<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="relative w-3/4 lg:w-1/4 mb-2 lg:mb-2 shadow-xl rounded-sm p-5 text-sm text-gray-500 hover:bg-blue-50 duration-100 box3">
							<h2 className="text-lg text-primary-800 font-bold mb-3">Ethical Wealth and Growth</h2>
							You do not and should never compromise on your beliefs to make money. eTijar provides a means for you to invest and grow your money safely and securely for the medium and long-term that will not conflict with your belief or principles.
							<a href="/about" className=" block mt-3 text-sm text-secondary-300 rounded font-bold hover:text-secondary-600 duration-100">
								Learn more <FaArrowRight className="inline" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-primary-50">
				<div className="relative min-h-auto w-auto py-10 md:py-8 px-6 lg:px-3 lg:mx-10 mx-6  flex justify-around items-center flex-wrap flex-row-reverse">
					<img data-aos="zoom-in-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className="w-4/6 lg:w-2/6 p-3 shadow-2xl shapeless" src="investment.png" alt="investment" />
					<div className="w-full lg:w-3/6 h-full justify-center lg:justify-start flex items-center flex-wrap">
						<h3 className="text-xl md:text-2xl text-primary-800 mb-3 text-center mt-8 lg:mt-10  font-bold">An investment pot for your children</h3>
						<p className="text-base text-gray-100">Open an investment account for your child where you, your family and friends can all invest for your child’s future.</p>
					</div>
				</div>
				<div className="relative min-h-auto w-auto py-10 md:py-5 px-6 lg:px-3 lg:mx-10 mx-6 flex justify-around items-center flex-wrap">
					<img data-aos="zoom-in-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className="w-4/6 lg:w-2/6 p-3 shadow-2xl shapeless" src="anxiety.png" alt="anxiety" />
					<div className="w-full lg:w-3/6 h-full justify-center lg:justify-start flex items-center flex-wrap">
						<p className="mt-8 lg:mt-10 text-base text-gray-100">Let eTijar take the anxiety and hassle out of managing your finances. Instantly unlock insights on your spending.</p>
						<form action="#" className="mt-5 sm:max-w-lg sm:w-full w-3/4 sm:flex">
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
									className="block w-full rounded border border-transparent px-5 py-3 text-base font-medium text-white shadow bg-primary-500 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:px-10 hero-btn">
									Get started
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="relative min-h-auto w-auto mt-32 bg-white">
				<div className="w-auto flex justify-center flex-wrap px-8 md:px-32">
					<div className="w-full text-center mb-10 lg:mb-20">
						<h2 className="text-4xl md:text-6xl font-black text-gray-300">
							<span className=" text-secondary-500 opacity-60">UNBURDEN</span> YOURSELF
						</h2>
					</div>

					<div className=" w-full flex justify-around flex-wrap">
						<div className="w-full relative flex justify-around flex-wrap mb-16 lg:mb-32">
							<div className="w-1/2">
								<img className="md:w-3/4 w-full h-auto lg:mb-3" src="legal-document.png" alt="legal-document" />
							</div>
							<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="w-full lg:w-1/2 mb-10 lg:mb-2 mt-8 lg:mt-8 rounded-sm p-5 bg-white">
								<h2 className="text-xl md:text-2xl text-primary-600 font-bold mb-3">
									WASSIYAT <span className="text-gray-400 text-3xl md:text-5xl ml-2">وصیت</span>
								</h2>
								<p className="text-base text-gray-500">
									Many people leave their estates to guesses and squabbles, a lot of assets never get found or known about, even more creating an estate plan in compliance with Islamic rules of inheritance is a practice abandoned. Wassiyat changes everything. Now you can create legal documents that
									comply with Islamic rules in minutes, at a very low cost, and in the comfort and privacy of your own home. We can further get it notarized if you desire. We keep simple so reviews are easy and quick.
								</p>
							</div>
						</div>
					</div>
					<div className=" w-full flex justify-around flex-wrap mb-6 lg:mb-10">
						<div className="w-full relative flex justify-around flex-wrap flex-row-reverse">
							<div className="w-1/2">
								<img className="md:w-3/4 w-full h-auto ml-0 lg:ml-8" src="zakat.png" alt="zakat" />
							</div>
							<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="w-full lg:w-1/2 mb-10 lg:mb-2 mt-8 lg:mt-8 rounded-sm p-5 bg-white">
								<h2 className="text-xl md:text-2xl text-primary-600 font-bold mb-3">
									ZAKAT <span className="text-gray-400 text-3xl md:text-5xl ml-2">الزكاة</span>
								</h2>
								<p className="text-base text-gray-500">
									Zakat is obligatory on all Muslims who are in possession of surplus wealth for a full lunar year, exceeding the monetary value of 85 grams of gold (7.5 Tola), we will help you calculate it either by your manual input or as an automated action from your eTijar account. eTijar will
									help you with deduction and payout to vetted charities, zakat funds, and individuals of your choice.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*frequently asked questions*/}

			<div className="relative min-h-auto w-auto pb-4  px-3 lg:px-0 lg:mx-32 md:mx-16 mx-10 lg:grid lg:grid-cols-2">
				<div>
					<img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="w-full" src="faq.png" alt="faq" />
					{/* <div className="w-full  h-full justify-center lg:justify-start flex items-center flex-wrap">
						<p className="mt-5 text-lg lg:text-xl text-gray-700">
							{' '}
							You still have plenty of questions to ask? Checkout our <span className="text-green-600">Frequently Asked Question</span>
						</p>
					</div> */}
				</div>
				{/******************************frequently asked questions component************************/}
				<div>
					<div className="w-full px-4 pt-16">
						<div className="w-full max-w-3xl p-2 mx-auto bg-white rounded-2xl space-y-2">
							{faqs.map((item, index) => (
								<Disclosure key={`faq-${index}`} as="div" className="my-2">
									{({ open }) => (
										<>
											<Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
												<span>{item.accTitle}</span>
												<ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-blue-500`} />
											</Disclosure.Button>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">{item.accContent}</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							))}
						</div>
					</div>
					<p className="mt-4 text-lg text-gray-400 text-right px-4y">
						Can’t find the answer you’re looking for? Reach out to our{' '}
						<a href="#" className="font-medium text-primary-600 hover:text-primary-500">
							customer support
						</a>{' '}
						team.
					</p>
				</div>
			</div>
		</>
	);
}
