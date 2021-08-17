import { Transition } from "@headlessui/react";
import Link from "next/link"
import { motion } from 'framer-motion'
import Header from '../components/Header'
import {useState} from "react";

const transition = {duration:1.2, ease: [0.6, 0.01, -0.05, 0.9]};

export default function Contact() {
    const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<div className="relative w-full md:h-screen h-auto md:overflow-hidden overflow-visible bg-white conImg">
			
			
			{/* <div className="absolute inset-0">
				<div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
			</div> */}
			<div className="relative w-full flex justify-center items-start md:flex-nowrap flex-wrap contact">
				<div className="md:w-3/6 w-full px-4 sm:px-6 lg:px-8 pt-16">
					<div  className="text-primary-300 text-5xl text-center text-bold text-shadow md:w-auto relative w-full z-20">Contact us</div>
					<motion.div initial={{y:'-20%', width:200, height:200,}} 
                 animate={{y:'-10%', width:'100%', height: '500px', transition: {delay: .2, ...transition}}} className="">
					<img className="relative lg:-right-16 sm:right-0 right-0 z-10 w-full h-full" src="contact.png" alt="contact" />
					</motion.div>
				</div>

				<div className="relative md:w-2/6 w-full h-full py-10 px-4 sm:px-6 lg:py-24 lg:px-16 conImg2 md:bg-transparent bg-primary-300">
					<div className=" mx-auto">
						<form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
							<div>
								<label htmlFor="full_name" className="sr-only">
									Full name
								</label>
								<input type="text" name="full_name" id="full_name" autoComplete="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" placeholder="Full name" />
							</div>
							<div>
								<label htmlFor="email" className="sr-only">
									Email
								</label>
								<input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" placeholder="Email" />
							</div>
							<div>
								<label htmlFor="phone" className="sr-only">
									Phone
								</label>
								<input type="text" name="phone" id="phone" autoComplete="tel" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" placeholder="Phone" />
							</div>
							<div>
								<label htmlFor="message" className="sr-only">
									Message
								</label>
								<textarea id="message" name="message" rows={4} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" placeholder="Message" defaultValue={''} />
							</div>
							<div>
								<button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-secondary-300 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>

				</div>
		</div>
	);
}
