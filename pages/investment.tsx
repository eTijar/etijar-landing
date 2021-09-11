import Link from "next/link"
import Head from 'next/head';
import {useState} from "react";
import { motion } from 'framer-motion'
import Header from '../components/Header'
import MaxFooter from '../components/MaxFooter'
import { FaMoneyBillWave, FaChartLine, FaLaptopCode, FaQuestion, FaRocket, FaBalanceScale } from 'react-icons/fa'

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

export default function Investment() {
    const imageSize = {
        width:200,
        height:200,
    };

    return(
        <motion.div  className="relative overflow-hidden mx-auto max-h-auto">
        <Head>
				<title>eTijar - Investment Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
            
                <div className="relative mb-4 pt-6 oveflow-hidden">

                    {/*******************Header**********************/}
                <Header />
                <div className="w-full relative mt-10 md:px-6 px-4 py-40 magic2">
                    <div className=" w-full text-center pt-10 relative">
                        <div className="text-gray-50 md:text-5xl text-3xl font-black text-shadow hero-eti px-10">MAKE THE MOST OF YOUR MONEY 
BY MAKING IT <span className="text-secondary-500">WORK FOR YOU</span>
</div>
                       
                    </div>
                    </div>
                    </div>

                    <div className="relative min-h-auto w-auto pb-10 md:pb-8 px-6 lg:px-3 lg:mx-10 mx-6  flex justify-around items-center flex-wrap flex-row-reverse">
				<img className="w-4/6 lg:w-2/6 p-3 shadow-2xl -mt-32 shapeless" src="about.png" alt="about" />
				<div className="w-full lg:w-3/6 h-full mt-5 justify-center lg:justify-start flex items-center flex-wrap">
					<p className="text-base text-gray-500">
                    You can be new to investing and you can be experienced, eTijar does what is right for you and your money, we help you reach your goal safely and faster, by providing with suite of services some of which are only available to multi-millionaires</p>
				</div>
				
			</div>
            <div className=" w-full flex justify-around flex-wrap bg-blue-50 mt-32 md:px-6 px-3 py-16">
						<div className=" relative w-3/4 lg:w-1/4 mb-20 lg:mb-2 bg-white shadow-xl rounded-sm p-5 text-sm text-gray-500 hover:bg-blue-50 duration-100">
                        <div className="text-green-400 text-5xl w-10 px-2 flex items-center justify-center rounded-full bg-green-200 shadow-lg mb-3"><FaMoneyBillWave/></div>
                            <h2 className="text-lg text-primary-800 font-bold mb-3">Diversified</h2>
							Invest in multiple portfolios of stocks, sukuks, mutual funds and other classes of assets tailored to your risk, all in a shariah compliant way.
							
						</div>
						<div className="relative w-3/4 lg:w-1/4 mb-20 lg:mb-2 bg-white shadow-xl rounded-sm p-5 text-sm text-gray-500 hover:bg-blue-50 duration-100">
							<div className="text-yellow-400 text-5xl w-10 px-2 flex items-center justify-center rounded-full bg-yellow-200 shadow-lg mb-3"><FaChartLine/></div>
                            <h2 className="text-lg text-primary-800 font-bold mb-3">Passive, No Hassle Investing
</h2>
Investing in low-cost Index Funds that track the market performance and seeks to outperform stock picking over the long term.

						</div>
						<div className="relative w-3/4 lg:w-1/4 mb-2 lg:mb-2 bg-white shadow-xl rounded-sm p-5 text-sm text-gray-500 hover:bg-blue-50 duration-100">
                            <div className="text-purple-400 text-5xl w-10 px-2 flex items-center justify-center rounded-full bg-purple-200 shadow-lg mb-3"><FaLaptopCode/></div>
                            <h2 className="text-lg text-primary-800 font-bold mb-3">Smart Portfolio rebalancing </h2>
							We use smart algorithms, with third party APIs to balance and rebalance your portfolios based on market dynamics, while reinvesting your dividends.
							
						</div>
					</div>
                    <div className="relative min-h-auto w-auto mb-32 mt-32 bg-white">
				<div className="w-auto flex justify-center flex-wrap px-8 md:px-20">
					<div className="w-full text-center mb-6 lg:mb-20">
						<h2 className="text-4xl md:text-6xl font-black text-gray-300">How it <span className=" text-secondary-500 opacity-60">works</span></h2>
					</div>
                    </div>
                    <div className=" w-full flex justify-around flex-wrap md:px-6 px-3 py-10">
						<div className=" relative w-3/4 lg:w-1/4 mb-20 lg:mb-2 p-5 text-sm text-gray-500 hover:bg-blue-50 duration-100">
                        <div className="text-blue-400 text-4xl text-center w-10 px-2 flex items-center justify-center rounded-full bg-blue-200 shadow-lg mb-3"><FaQuestion/></div>
                            <h2 className="w-full text-lg text-primary-50 font-bold mb-6">1.	We get to know you</h2>
                            <div className="w-full flex flex-col flex-wrap ">
                            <p className=" mb-2">a.How is your financial life? </p>
                            <p className="mb-2">b.why and what you are investing for? </p>
                            <p className="mb-2">c.How much risk can you take? </p>
                            <p className="mb-2">d.	How long do you intend to invest? </p>
                        
                                </div>
                            
						</div>
						<div className="relative w-3/4 lg:w-1/4 mb-20 lg:mb-2 p-5 text-sm text-gray-500 hover:bg-blue-50 duration-100">
							<div className="text-blue-400 text-5xl text-center w-10 px-2 flex items-center justify-center rounded-full bg-blue-200 shadow-lg mb-3"><FaRocket/></div>
                            <h2 className="text-lg text-primary-50 font-bold mb-3">2. We build Your Portfolio</h2>
                            Based on your responses we build you, your portfolio, that meets you peculiar situation and future financial plans.
						</div>
						<div className="relative w-3/4 lg:w-1/4 mb-20 lg:mb-2 p-5 text-sm text-gray-500 hover:bg-blue-50 duration-100">
							<div className="text-blue-400 text-5xl text-center w-10 px-2 flex items-center justify-center rounded-full bg-blue-200 shadow-lg mb-3"><FaBalanceScale/></div>
                            <h2 className="text-lg text-primary-50 font-bold mb-3">3. Then we Put your Money to work</h2>
                            We are always working to rebalance and Optimise your portfolio, even while you are asleep, your money keeps working, reinvesting all dividends back into your portfolio, for full and continuous growth.
						</div>
					</div>
                    </div>
                    <div className="relative min-h-auto w-auto bg-blue-50 mb-32 pb-10 md:pb-8 px-6 lg:px-3 lg:mx-10 mx-6  flex justify-around items-center flex-wrap">
                    <div className=" lg:w-3/6 h-full lg:-mt-32 lg:-mb-32 -mt-32 -mb-0">
                    <motion.img whileHover= {{scale:0.8}} className="" src="investment-phone.png" alt="investment-phone" />
                    </div>
				<div className="w-full lg:w-2/6 h-full">
					<h3 className="text-xl md:text-2xl text-primary-800 font-bold mb-3 mt-8 lg:mt-10  font-bold">100% HALAL</h3>
					<p className="text-base text-gray-500">
                    Our Halal Portfolios are made up of Sukuks, ETFs, Mutual Funds, Index Funds, that follow Islamic laws and principles of investing, such as are not forbidden to Muslims or harm the earth and environment.</p>
				</div>
				
			</div>
                    <MaxFooter />
                    </motion.div>
    );
}