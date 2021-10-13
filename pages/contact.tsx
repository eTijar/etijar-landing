import { Transition } from "@headlessui/react";
import Link from "next/link"
import { motion } from 'framer-motion'
import Header from '../components/Header'
import {useState} from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaArrowLeft } from 'react-icons/fa';

const transition = {duration:1.2, ease: [0.6, 0.01, -0.05, 0.9]};

export default function Contact() {
    const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<div className="relative w-full md:h-screen h-auto md:overflow-hidden overflow-visible md:bg-white bg-primary-900">
			
			
			{/* <div className="absolute inset-0">
				<div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
			</div> */}
			<div className="relative w-full flex justify-center items-start md:flex-nowrap flex-wrap">

				<motion.div initial={{x:700}} animate={{x:0, transition: {delay:0.8, ...transition} }} className="md:w-3/6 w-full md:h-screen h-auto px-4 sm:px-6 lg:px-8 md:pt-6 pt-3 bg-primary-900">
					<a href="/"><motion.div className="text-blue-300 text-2xl font-bold"><FaArrowLeft /></motion.div></a>
					<div className="w-full md:mt-32 mt-8 md:px-8 px-16 flex flex-col items-center">
						<div className="text-blue-300 md:text-lg text-sm text-center font-light">Use secure Banking links to connect your bank accounts and credit cards in one place</div>
						<div className="md:mt-40 mt-3 cssArt1">
							<img className="md:h-auto h-32" src="lock.gif" alt="lockk"/>
						</div>
					</div>
					
				</motion.div>

				<div className="relative md:w-3/6 h-screen md:py-10 py-5 px-4 sm:px-6 lg:py-24 lg:px-16 md:bg-blue-50 bg-primary-900">
					<div className=" mx-auto md:mt-16 mt-0 flex justify-center">
						<form action="#" method="POST" className="grid grid-cols-1 gap-y-6 w-80">
							<div>
								<label htmlFor="full_name" className="sr-only">
									Full Name
								</label>
								<input type="text" name="full_name" id="full_name" autoComplete="name" className="block w-full py-3 px-4 mb-1 bg-transparent placeholder-gray-500 border-b-2 md:border-primary-500 border-blue-300 md:focus:border-primary-300 focus:border-blue-100 outline-none" placeholder="Full name" />
							</div>
							<div>
								<label htmlFor="email" className="sr-only">
									Email
								</label>
								<input id="email" name="email" type="email" autoComplete="email" className="block w-full py-3 px-4 mb-1 bg-transparent placeholder-gray-500 border-b-2 md:border-primary-500 border-blue-300 md:focus:border-primary-300 focus:border-blue-100 outline-none" placeholder="Email" />
							</div>
							<div>
								<label htmlFor="phone" className="sr-only">
									Phone
								</label>
								<input type="text" name="phone" id="phone" autoComplete="tel" className="block w-full py-3 px-4 mb-1 bg-transparent placeholder-gray-500 border-b-2 md:border-primary-500 border-blue-300 md:focus:border-primary-300 focus:border-blue-100 outline-none" placeholder="Phone" />
							</div>
							<div>
								<label htmlFor="message" className="sr-only">
									Message
								</label>
								<textarea id="message" name="message" rows={4} className="block w-full md:bg-blue-100 bg-primary-800 shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-300 focus:border-primary-300 border-primary-500 outline-none" placeholder="Message" defaultValue={''} />
							</div>
							<div>
								<button type="submit" className="inline-flex md:w-auto w-full justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white md:bg-primary-700 bg-blue-500 hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>

				</div>
				{/**Start of etijar Zendesk Widget script**/}
<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=8181c863-dc19-4ab9-9f8b-67ab2d9c5fa2"> </script>
{/**End of etijar Zendesk Widget script**/}
		</div>
	);
}
