import Link from "next/link"
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
export default function MaxFooter() {
    return(
        <>
            <div className="relative min-h-auto w-auto mt-0 pt-2 bg-blue-50 flex items-center justify-center">
            
                <div className=" relative w-full lg:w-5/6 bg-blue-200 rounded-lg mt-6 py-10 px-14 flex items-center justify-between flex-col">
                    <h2 className="text-xl lg:text-2xl text-gray-800 mb-10">No hidden fees and full transparency, know where your money is at all times.
                    When you do well, that is when eTijar does well, our values align.</h2>

                    <div className="w-full flex justify-around items-center flex-wrap pb-2">
                    <h2 className="w-full lg:w-2/6 text-center mt-2 text-2xl lg:text-xl text-black" >Sign up to our newsletter today</h2>
                    <form action="#" className="w-full lg:w-3/6 mt-2 sm:max-w-lg sm:w-full sm:flex">
									<div className="min-w-0 flex-1">
										<label htmlFor="hero_email" className="sr-only">
											Email address
										</label>
										<input id="hero_email" type="email" className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-secondary-500 focus:ring-secondary-500" placeholder="Enter your email" />
									</div>
									<div className="mt-4 sm:mt-0 sm:ml-3">
										<button type="button" className="block w-full rounded-md border border-transparent px-5 py-3 text-base font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:px-10 hero-btn">
											Submit
										</button>
									</div>
								</form>
                    </div>
                </div>
            </div>
            <div className="relative min-h-auto w-auto pb-10 pt-12 px-6 bg-blue-50 flex items-center justify-around flex-wrap">
                <div className="mt-10 w-52 mr-14">
                        <a href="">
							<img className="h-20 sm:h-14" src="/logo.png" alt="" />
						</a>
                        <p className="text-gray-600">Make profit not interest</p>
                        <div className="flex space-around mt-3">
                <a className="text-xl text-gray-700 rounded-full p-2 bg-gray-200 text-shadow mr-6 hover:bg-blue-300" href="#"><FaTwitter/></a>
                <a className="text-xl text-gray-700 rounded-full p-2 bg-gry-200 text-shadow mr-6 hover:bg-blue-300" href="#"><FaFacebook/></a>
                <a className="text-xl text-gray-700 rounded-full p-2 bg-gray-200 text-shadow mr-6 hover:bg-blue-300" href="#"><FaInstagram/></a>
                <a className="text-xl text-gray-700 rounded-full p-2 bg-gray-200 text-shadow mr-6 hover:bg-blue-300" href="#"><FaLinkedin/></a>
                </div>
                </div>
                <div className="flex flex-col justify-around items-center mt-10 w-52 mr-14">
                    <p className="font-bold text-gray-600 text-lg mb-4">Quick Links</p>
                    <a href="" className="mb-2 text-gray-600 hover:text-blue-600">About us</a>
                    <a href="" className="mb-2 text-gray-600 hover:text-blue-600">FAQs</a>
                    <a href="" className="mb-2 text-gray-600 hover:text-blue-600">Meet our Team</a>
                    <a href="" className="mb-2 text-gray-600 hover:text-blue-600">Terms and condition</a>
                    <a href="" className="mb-2 text-gray-600 hover:text-blue-600">Privacy Policy</a>
                </div>
                <div className="w-52 mt-10 ">
                    <p className="font-bold text-gray-600 text-lg mb-4 mr-14">Talk to a human</p>
                    <p className="text-gray-600">If you have any questions about eTijar or the services we are offering, you can email us at support@example.com</p>
                </div>
                <div className="w-52 mt-10">
                    <p className="font-bold text-gray-600 text-lg mb-4">Contact</p>
                    <p className="text-gray-600">Plot 203 IEC Crescent, off Oladipo Diya Street, Durumi 2, Abuja</p>
                </div>
            </div>
            <footer className="bg-blue-900 py-4 text-blue-200 text-center">
                Copyright &copy; eTijar 2021 All Right Served
            </footer>
        </>
    );
}