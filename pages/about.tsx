import Link from "next/link"
import Head from 'next/head';
import { motion } from 'framer-motion'
import Header from '../components/Header'
import MaxFooter from '../components/MaxFooter'
import { FaMosque, FaLaptop, FaUsers, FaClock, FaMoneyCheckAlt, FaStarAndCrescent, FaExchangeAlt, FaCheck } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const transition = {duration:1.2, ease: [0.6, 0.01, -0.05, 0.9]};

const aboutTxt = {
    animate: {
        transition: {
            delayChildren: .6,
            staggerChildren: .04,
            staggerDirection: -1,
        },
    },
};
const etiTxt = {
        animate: {
        transition: {
            delayChildren: .6,
            staggerChildren: .04,
            staggerDirection: 1,
        },
    },
};
const letter = {
    initial: {
        y:400,
    },
    animate: {
        y:0,
        transition: {duration:1, ...transition}
    },
};

export default function About() {
    useEffect(()=> {
		AOS.init();
	});
    const imageSize = {
        width:20,
    };

    return(
        <motion.div  className="relative overflow-hidden mx-auto max-h-auto">
        <Head>
				<title>eTijar - About Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
            
                <div className="relative mb-4 pt-6 oveflow-hidden">

                    {/*******************Header**********************/}
                <Header />
                <motion.div initial={{y:'-50%', width:imageSize.width,}} 
                 animate={{y:'0%', width:'100%', transition: {delay: .2, ...transition}}} className="w-full relative mt-10 px-6 py-40 magic">
                    <div className=" w-full text-center pt-10 relative">
                        <motion.div initial={{y:'-100%'}} animate={{y:'0', transition: {delay: .4, ...transition}}} className="text-gray-50 md:text-6xl text-5xl font-black text-shadow hero-eti">About eTijar</motion.div>
                        <div className="absolute bg-blue-50  border shadow-2xl rounded md:w-1/2 w-3/4 px-3 py-6 mt-5 lg:ml-72 mt-16 md:ml-52 sm:ml-24 ml-12">
                        <motion.p initial={{opacity:'0'}} animate={{opacity:'1', transition: {delay: 1.3, ...transition}}}  className="text-primary-600 text-sm md:text-base">We love knowing where our money went, we love spending within our means, we wish to make investments 
                        so we have to save, this is why we built eTijar, an ethical non-interest Investment and finance platform for 
                        all, anywhere in the world that is 100% halal compliant.</motion.p>
                        </div>
                    </div>
                    <motion.div initial={{y:200, scale:0}} animate={{y:0, scale:1, transition: {delay: .2, ...transition}}} className="lg:w-1/2 md:w-1/2 sm:w-full w-full bg-red-blue flex flex-wrap justify-center relative">
                        
                    </motion.div>
                
               {/**<motion.div initial={{y:'-20%', width:imageSize.width, height:imageSize.height,}} 
                 animate={{y:'-10%', width:'100%', height: '500px', transition: {delay: .2, ...transition}}} className="relative flex justify-center">
                <img className="relative lg:w-3/4 md:w-2/4 w-full lg:h-90 h-full my-16" src = "about.png" alt="about"/>
    </motion.div>**/}
                
                </motion.div>
                </div>
                <div className="relative px-6 mt-40">
                   
        
                <div className="bg-white py-3 mt-24">
                    <div className="md:px-16 px-6 mb-6">
                        <div className="px-8 flex justify-center items-center flex-wrap">
                            <img src="aboutMulti.png" alt="multi" className="md:w-2/4 w-full mt-4"/>

                            <div data-aos="zoom-in-right" data-aos-duration="1000" className="md:w-2/4 w-full py-10 mb-8 px-3 bg-white md:-ml-24 ml-0 border-r-8 border-blue-900 shadow-lg">
                            <p className="text-gray-500 text-base">With a multi-currency e-wallet back by a fully licensed Islamic bank that
                             is NDIC insured, which allows you to get non-interest financing for your business, 
                             with personal/business bill payments and acceptance.</p>
                            </div>
                        </div>
                        </div>
                        <div className="md:px-16 px-6">
                        <div className=" px-8 flex justify-center items-center flex-wrap flex-row-reverse">
                            <img src="aboutInsight.png" alt="abtInsight" className="md:w-2/4 w-full mt-4"/>

                            <div data-aos="zoom-in-left" data-aos-duration="1000" className="md:w-2/4 w-full py-10 mb-8 px-3 bg-white md:-mr-24 mr-0 border-l-8 border-blue-900 shadow-lg">
                            <p className="text-gray-500 text-base">eTijar helps you gain insights on your debt, expenses, budget, and increase in your savings
                             that leads to investments for your future income with selected shariah-compliant equities and index funds. 
                             eTijar is 100% interest free and 100% Halal.</p>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="relative w-full px-6 mt-16 mb-4 flex justify-around flex-wrap">
                        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="md:w-1/4 w-full mb-10 p-4 rounded-lg text-gray-600 hover:text-white hover:bg-primary-100 hover:shadow-2xl duration-100">
                            <div className="text-primary-400 text-5xl w-10 px-2 flex items-center justify-center rounded-lg bg-blue-200 shadow-lg mb-3 hover:bg-white"><FaMosque/></div>
                            <h3 className="text-lg font-bold mb-2 text-primary-600">Shariah Compliant</h3>
                            <p className="text-base text-gray-500">Your investments are screened against Islamic principles to give you piece of mind.</p>
                        </div>
                        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="md:w-1/4 w-full mb-10 p-4 rounded-lg text-gray-600 hover:text-white hover:bg-primary-100 hover:shadow-2xl duration-100">
                            <div className="text-primary-400 text-5xl w-10 px-2 flex items-center justify-center rounded-lg bg-blue-200 shadow-lg mb-3 hover:bg-white"><FaLaptop/></div>
                            <h3 className="text-lg font-bold mb-2 text-primary-600">Tailored Investment Plan</h3>
                            <p className="text-base text-gray-500">We analyze your investment objectives and risk preferences to help you make informed decisions.</p>
                        </div>
                        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="md:w-1/4 w-full mb-10 p-4 rounded-lg text-gray-600 hover:text-white hover:bg-primary-100 hover:shadow-2xl duration-100">
                            <div className="text-primary-400 text-5xl w-10 px-2 flex items-center justify-center rounded-lg bg-blue-200 shadow-lg mb-3 hover:bg-white"><FaUsers/></div>
                            <h3 className="text-lg font-bold mb-2 text-primary-600">Professional Management</h3>
                            <p className="text-base text-gray-500">Your investments are managed by experienced and professional fund managers.</p>
                        </div>
                        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="md:w-1/4 w-full mb-10 p-4 rounded-lg text-gray-600 hover:text-white hover:bg-primary-100 hover:shadow-2xl duration-100">
                            <div className="text-primary-400 text-5xl w-10 px-2 flex items-center justify-center rounded-lg bg-blue-200 shadow-lg mb-3 hover:bg-white"><FaClock/></div>
                            <h3 className="text-lg font-bold mb-2 text-primary-600">Regular Savings Plan</h3>
                            <p className="text-base text-gray-500">A monthly investment plan that helps you reach financial goals faster and easier.</p>
                        </div>
                        </div>

                        <div className="relative min-h-auto w-auto mb-32 mt-16 bg-white">
                <div className="w-auto flex justify-center flex-wrap px-6">
                    <div className="w-full text-center mb-6 lg:mb-20">
                    <h2 className="text-2xl md:text-5xl font-black text-secondary-300 text-shadow mb-6 lg:mb-0">Our Mission</h2>
                    </div>
                    <div className=" w-full flex lg:justify-between justify-center flex-wrap">
                        <div data-aos="zoom-out-up" data-aos-duration="1000" className=" relative w-3/4 lg:w-2/4 mb-20 lg:mb-2 bg-blue-50 shapeless rounded-sm py-5 px-8 text-sm text-gray-500 shadow-2xl">
                            <FaMoneyCheckAlt className=" text-4xl mb-2 text-secondary-300"/>
                        <h2 className="text-base text-primary-600 font-bold mb-3">Lower the costs and barriers of financing and investing for everyday people</h2>
                        At eTijar, we want to lead and drive financial independence and inclusion across the greater African region. Money is a medium of social
                         exchange and we are building the fabric to connect every member of this society together from individuals to business owners to freelancers and beyond. Our human-first and customer-centric approach will make the difference
                          
                        </div>
                        <div data-aos="zoom-out-down" data-aos-duration="1000" className="relative w-3/4 lg:w-2/4 mb-20 lg:mb-2 bg-white rounded-sm py-5 px-8 text-sm text-gray-500">
                        <FaStarAndCrescent className=" text-4xl mb-2 text-secondary-300"/>
                        <h2 className="text-base text-primary-600 font-bold mb-3">eTijar Halal Investment</h2>
                        eTijar helps you invest in a shariah acceptable way, in fully-diversified portfolios of low-cost Halal index funds, equities and alternative investments, based o
                        n your risk profile using the Modern Portfolio Theory the halal way. Our technology simplifies the entire investing experience and provides you with the best possible return. Invest with eTijar: save on time, effort & money. Stay halal
                        </div>
                        </div>
                        <div className="w-full flex lg:justify-between justify-center flex-wrap mt-24">
                        <div data-aos="zoom-out-down" data-aos-duration="1000" className="relative w-3/4 lg:w-2/4 mb-2 lg:mb-2 bg-white rounded-sm py-5 px-8 text-sm text-gray-500">
                        <FaExchangeAlt className=" text-4xl mb-2 text-secondary-300"/>
                        <h2 className="text-base text-primary-600 font-bold mb-3">An ethical non-interest Investment and finance platform for all, anywhere in the world</h2>
                        A multi-currency e-wallet that allows you to get Non-Interest financing, personal/business bill payments and acceptance.
                        eTijar helps you to exchange, spend and send money at the best possible rates. Build an asset portfolio for your future income with selected shariah-compliant equities and index funds.
                        </div>
                        <div data-aos="zoom-out-up" data-aos-duration="1000" className="relative w-3/4 lg:w-2/4 mb-2 lg:mb-2 bg-blue-50 rounded-sm py-5 px-8 text-sm text-gray-500 shadow-2xl">
                        <FaCheck className=" text-4xl mb-2 text-secondary-300"/>
                        <h2 className="text-base text-primary-600 font-bold mb-3">Zero Interest, Transparent financing for Small-businesses</h2>
                        eTijar helps you build your small business and grow through ethical and shariah business rules.
                        Making banking more useful for fast-growing businesses, the Interest-free way. We seek to make it easy for SMEs, entrepreneurs and freelancers to have affordable business banking services. Starting and running a business in Nigeria is hard. It can be less so. We believe banking can act as support for entrepreneurs everywhere and not a burden.

                        </div>
                        </div>
                </div>
            </div>
                    </div>
                    <div className="relative w-full md:mt-16 mt-24">
                    <svg className="relative -top-32" id="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#083170" fill-opacity="1"
                     d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,197.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                   <div className="relative min-h-auto w-auto -mt-36 py-6  bg-primary-600 flex justify-around items-center flex-wrap">
                    <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-4/6 lg:w-2/6" src="time.png" alt="time" />
                <div className="w-full lg:w-3/6 h-full justify-center lg:justify-start flex items-center flex-wrap px-10">
                <p className="mt-5 lg:mt-4 mb-5 text-lg lg:text-2xl sm:text-xl text-gray-100">Stay organized, Save time and money with handy tools that keep your financial life organized.</p>
                <p className="text-gray-100 text-base mb-4">At eTijar, we want to lead and drive financial independence and inclusion of Muslims across the greater African region. Money is a medium of social exchange. We are building the fabric to connect every member of this society, from individuals to small business owners to freelancers and beyond. Our human-first and customer-centric approach will make the difference. A digital wallet to help Muslims handle debt, save, invest, and spend money. With our app you can save and invest according to the tenets of shariah, you can pay out Zakat (personal income tax) and create a Will (Wassiyat).</p>
                <form action="#" className="mt-5 sm:max-w-lg sm:w-full w-3/4 sm:flex">
									<div className="min-w-0 flex-1">
										<label htmlFor="hero_email" className="sr-only">
											Email address
										</label>
										<input id="hero_email" type="email" className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-secondary-500 focus:ring-secondary-500" placeholder="Enter your email" />
									</div>
									<div className="mt-4 sm:mt-0 sm:ml-3">
										<a href="https://app.etijar.com" target="_blank" className="block w-full rounded-md border border-transparent px-5 py-3 text-base font-medium text-blue-50 shadow bg-primary-400 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:px-10 hero-btn">
											Get started
										</a>
									</div>
								</form>
            </div>
           

            </div>
                    </div>

                    <MaxFooter />
                    
            </motion.div>
    );
}