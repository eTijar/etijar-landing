import Link from "next/link"
import Head from 'next/head';
import {useState} from "react";
import { motion } from 'framer-motion'
import Header from '../components/Header'
import MaxFooter from '../components/MaxFooter'
import { FaMoneyBillWave, FaChartLine, FaLaptopCode, FaQuestion, FaRocket, FaBalanceScale } from 'react-icons/fa'

const transition = {duration:1.2, ease: [0.6, 0.01, -0.05, 0.9]};

export default function Savings() {
    const imageSize = {
        width:200,
        height:200,
    };

    return(
        <motion.div  className="relative overflow-hidden mx-auto max-h-auto">
        <Head>
				<title>eTijar - Savings Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
            
                <div className="relative mb-4 pt-6 oveflow-hidden">

                    {/*******************Header**********************/}
                <Header />
                <div className="w-full relative mt-10 md:px-6 px-4 py-40 magic2">
                    <div className=" w-full text-center pt-10 relative">
                        <div className="text-gray-50 md:text-5xl text-3xl font-black text-shadow hero-eti px-10 mb-2">HALAL SAVINGS</div>
                        <p className="text-secondary-500 md:text-4xl text-2xl hero-eti text-shadow ">Save the Islamic way!</p>
                    </div>
                    </div>
                    </div>

                    <div className="relative min-h-auto w-auto pb-2 md:pb-4 px-6 lg:px-3 lg:mx-10 mx-6  flex justify-around items-center flex-wrap flex-row-reverse">
				<img className="w-3/6 sm:w-2/6 p-2 shadow-2xl bg-secondary-500 -mt-32 shapeless" src="savings.png" alt="savings" />
				<div className="w-full lg:w-3/6 h-full mt-5 justify-center lg:justify-start flex items-center flex-wrap">
					<p className="text-base text-gray-500">
                    eTijar savings plans come with zero riba! The best way to be 100% sure you're saving the right way based on your faith.</p>
				</div>
				<div className="relative min-h-auto w-auto mb-6 mt-32 bg-white">
				<div className="w-auto flex justify-center flex-wrap px-8 md:px-20">
					<div className="w-full text-center mb-6 lg:mb-20">
						<h2 className="text-xl md:text-4xl font-black text-gray-300">How to save without Riba (الربا) on <span className=" text-primary-500 opacity-60">eTijar</span></h2>
					</div>
                    </div>

                    <div className=" w-full flex justify-between flex-wrap md:px-6 px-3 py-10">
						<motion.div whileHover= {{scale:1.03}} className=" relative w-60 shadow-2xl rounded-lg mb-20 lg:mb-2 p-5 text-sm text-gray-500">
                            <img className="w-full h-48 bg-primary-400" src="plan.png" about="plan" />
                            <h2 className="w-full text-lg text-primary-100 font-bold mt-4 text-center">Create your plan</h2>
                            
						</motion.div>
                        <motion.div whileHover= {{scale:1.03}} className=" relative w-60 shadow-2xl rounded-lg mb-20 lg:mb-2 p-5 text-sm text-gray-500">
                            <img className="w-full h-48 bg-primary-400" src="amount.png" about="amount" />
                            <h2 className="w-full text-lg text-primary-100 font-bold mt-4 text-center">Add the amount you'll like to start saving with</h2>
                            
						</motion.div>
                        <motion.div whileHover= {{scale:1.03}} className=" relative w-60 shadow-2xl rounded-lg mb-20 lg:mb-2 p-5 text-sm text-gray-500">
                            <img className="w-full h-48 bg-primary-400" src="duration.png" about="duration" />
                            <h2 className="w-full text-lg text-primary-100 font-bold mt-4 text-center">Add your duration</h2>
                            
						</motion.div>
						
					</div>
                    </div>
                    </div>
                    <div className="relative min-h-auto w-auto bg-blue-100 py-2 px-6 lg:px-3 lg:mx-10 mx-6 mt-10 flex md:justify-between justify-center items-center flex-wrap">
                    <motion.img whileHover= {{scale:0.8}} className="w-3/6 md:w-2/6 mb-3 md:mb-0" src="savings-phone.png" alt="savings-phone" />
                <div className="w-full md:w-3/6 h-full justify-center lg:justify-start flex items-center flex-wrap">
					<p className="text-xl text-primary-50">
                    And you'll start saving the right way immediately.</p>
                    <div className="w-full mt-6 md:text-left text-center">
                    <a href ="https://app.etijar.com" target="_blank" className=" rounded border border-transparent px-5 py-3 text-base font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hero-btn">
                    Start immediately
					</a>
                    </div>
				</div>
                </div>
                
            </motion.div>
    );
}