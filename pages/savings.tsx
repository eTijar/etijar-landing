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

                    <div className="relative min-h-auto w-auto pb-10 md:pb-8 px-6 lg:px-3 lg:mx-10 mx-6  flex justify-around items-center flex-wrap flex-row-reverse">
				<img className="w-4/6 lg:w-2/6 p-2 shadow-2xl bg-secondary-500 -mt-32 shapeless" src="savings.png" alt="savings" />
				<div className="w-full lg:w-3/6 h-full mt-5 justify-center lg:justify-start flex items-center flex-wrap">
					<p className="text-base text-gray-500">
                    eTijar savings plans come with zero riba! The best way to be 100% sure you're saving the right way based on your faith.</p>
				</div>
				
			</div>
            </motion.div>
    );
}