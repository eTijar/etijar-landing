import Link from "next/link"
import { motion, AnimatePresence, useTransform, useViewportScroll } from 'framer-motion'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
export default function HeroPlus() {
    const {scrollYProgress} = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.04])
	return (
        <>
        
            <div className="relative min-h-auto w-auto mt-16 pt-24 md:pt-16 bg-blue-100 ">
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DBEAFE" fill-opacity="1" d="M0,96L720,128L1440,256L1440,320L720,320L0,320Z"></path></svg>
                <div className="flex flex-wrap justify-center lg:justify-between px-8 sm:px-20">
                <div className="relative w-full lg:w-2/6 h-auto">
                    <motion.img initial={{scale:1}}  className="w-auto h-auto relative -top-18" src="/signup.png" alt="signup" />
                    <form action="#" className="-mt-5 sm:max-w-lg sm:w-full sm:flex">
									<div className="min-w-0 flex-1">
										<label htmlFor="hero_email" className="sr-only">
											Email address
										</label>
										<input id="hero_email" type="email" className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-secondary-500 focus:ring-secondary-500" placeholder="Enter your email" />
									</div>
									<div className="mt-4 sm:mt-0 sm:ml-3">
										<button type="submit" className="block w-full rounded-md border border-transparent px-5 py-3 text-base font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:px-10 hero-btn">
											Sign Up
										</button>
									</div>
								</form>
                </div>
                <div className="relative mt-8 w-full lg:w-2/6 h-auto flex flex-col flex-wrap blur mb-8">
                    <h2 className="text-gray-700 text-lg md:text-2xl font-bold m-4" >At eTijar, we believe that the best opportunities should be seized, on your own terms.</h2>
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
                    <p>Get insights on your debt, expenses, set goals, and increase your savings that leads to Investments.
                            Get started today with us for Free
                        </p>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="relative min-h-auto w-auto py-24 md:py-16 px-5 lg:px-0 bg-blue-300 flex justify-around items-center flex-wrap flex-row-reverse">
            <img className="w-4/6 lg:w-2/6" src="islamic.png" alt="islamic" />
                <div className="w-full lg:w-3/6 h-full justify-center lg:justify-start flex items-center flex-wrap">
                <h2 className="mt-5 lg:mt-10 text-2xl lg:text-3xl sm:text-3xl text-gray-200">Achieve your financial goals by investing in Islamic Investments.</h2>
                <form action="#" className="mt-5 sm:max-w-lg sm:w-full w-3/4 sm:flex">
									<div className="min-w-0 flex-1">
										<label htmlFor="hero_email" className="sr-only">
											Email address
										</label>
										<input id="hero_email" type="email" className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-secondary-500 focus:ring-secondary-500" placeholder="Enter your email" />
									</div>
									<div className="mt-4 sm:mt-0 sm:ml-3">
										<button type="submit" className="block w-full rounded-md border border-transparent px-5 py-3 text-base font-medium text-white shadow bg-red-400 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:px-10 hero-btn">
											Get started
										</button>
									</div>
								</form>
            </div>
           

            </div>
            <div className="relative min-h-auto w-auto my-32 bg-white">
                <div className="w-auto flex justify-center flex-wrap px-8 md:px-20">
                    <div className="w-full text-center mb-6 lg:mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-300">Three products, One goal.</h2>
                    </div>
                    <div className=" w-full flex justify-around flex-wrap">
                        <div className=" relative w-3/4 lg:w-1/4 mb-20 lg:mb-2 bg-white shadow-xl rounded-sm p-5 text-sm text-gray-500 hover:bg-blue-50 duration-100 box1">
                        <h2 className="text-lg text-blue-900 font-bold mb-3">Personal loans for the everyday borrower</h2>
                        eTijar offer access to personal loans for middle-income borrowers that need help with things like unexpected personal expenses in the form of Qard Hasn a Benevolent Loan at 0% interest forever.
                          <button type="button" className="block px-3 py-2 my-2 text-sm bg-red-300 rounded-full text-white hover:bg-black duration-100">Learn more</button> 
                        </div>
                        <div className="relative w-3/4 lg:w-1/4 mb-20 lg:mb-2 bg-white shadow-xl rounded-sm p-5 text-sm text-gray-500 hover:bg-blue-50 duration-100 box2">
                        <h2 className="text-lg text-blue-900 font-bold mb-3">Transparent financing for business</h2>
                        eTijar helps you build your small business and grow while staying within your personal beliefs, ethical and shariah business rules.
                          <button type="button" className=" block px-3 py-2 my-2 text-sm bg-red-300 rounded-full text-white hover:bg-black duration-100">Learn more</button> 
                        </div>
                        <div className="relative w-3/4 lg:w-1/4 mb-2 lg:mb-2 shadow-xl rounded-sm p-5 text-sm text-gray-500 hover:bg-blue-50 duration-100 box3">
                        <h2 className="text-lg text-blue-900 font-bold mb-3">Ethical Wealth and Growth</h2>
                        You do not and should never compromise on your beliefs to make money.
                        eTijar provides a means for you to invest and grow your money safely and securely for the medium and long-term that will not conflict with your belief or principles.

                          <button type="button" className=" block px-3 py-2 my-2 text-sm bg-red-300 rounded-full text-white hover:bg-black duration-100">Learn more</button> 
                        </div>
                        </div>
                </div>
            </div>
            <div className="relative min-h-auto w-auto py-24 md:py-16 px-6  bg-blue-300 flex justify-around items-center flex-wrap">
            <img className="w-4/6 lg:w-2/6" src="anxiety.png" alt="anxiety" />
                <div className="w-full lg:w-3/6 h-full justify-center lg:justify-start flex items-center flex-wrap">
                <p className="mt-5 lg:mt-10 text-2xl lg:text-3xl sm:text-3xl text-gray-200">Let eTijar take the anxiety and hassle out of managing your finances. Instantly unlock insights on your spending.</p>
                <form action="#" className="mt-5 sm:max-w-lg sm:w-full w-3/4 sm:flex">
									<div className="min-w-0 flex-1">
										<label htmlFor="hero_email" className="sr-only">
											Email address
										</label>
										<input id="hero_email" type="email" className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-secondary-500 focus:ring-secondary-500" placeholder="Enter your email" />
									</div>
									<div className="mt-4 sm:mt-0 sm:ml-3">
										<a href="" className="block w-full rounded-md border border-transparent px-5 py-3 text-base font-medium text-white shadow bg-red-400 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:px-10 hero-btn">
											Get started
										</a>
									</div>
								</form>
            </div>
           

            </div>
            <div className="relative min-h-auto w-auto mt-32 bg-white">
                
                <div className="w-auto flex justify-center flex-wrap px-8 md:px-32">
                    <div className="w-full text-center mb-10 lg:mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-300">UNBURDEN YOURSELF</h2>
                    </div>

                    <div className=" w-full flex justify-around flex-wrap">
                        <div className="w-full relative flex justify-around flex-wrap mb-20 lg:mb-32">
                        <div className="w-1/2 rounded-lg bg-blue-200 shadow-xl">
                            <img className="w-2/4 h-auto" src="legal-document.png" alt="legal-document" />
                            </div>
                        <div className="w-full lg:w-1/2 mb-10 lg:mb-2 rounded-sm p-5 bg-white">
                        <h2 className="text-xl md:text-2xl text-blue-900 font-bold mb-3">WASSIYAT <span className="text-gray-400 text-3xl md:text-5xl ml-2">وصیت</span></h2>
                        <p className="text-base text-gray-500">Many people leave their estates to guesses and squabbles, a lot of assets never get found or known about, even more creating an estate plan in compliance with Islamic rules of inheritance is a practice abandoned. Wassiyat changes everything. Now you can create legal documents that comply with Islamic rules in minutes, at a very low cost, and in the comfort and privacy of your own home. We can further get it notarized if you desire.
                        We keep simple so reviews are easy and quick.</p>
                        </div>
                        </div>
                        
                        </div>
                        <div className=" w-full flex justify-around flex-wrap mb-20 lg:mb-32">
                        <div className="w-full relative flex justify-around flex-wrap flex-row-reverse">
                        <div className="w-1/2 rounded-lg bg-blue-200 shadow-xl">
                            <img className="w-2/4 h-auto" src="zakat.png" alt="zakat" />
                            </div>
                        <div className="w-full lg:w-1/2 mb-10 lg:mb-2 rounded-sm p-5 bg-white">
                        <h2 className="text-xl md:text-2xl text-blue-900 font-bold mb-3">ZAKAT <span className="text-gray-400 text-3xl md:text-5xl ml-2">الزكاة</span></h2>
                        <p className="text-base text-gray-500">Zakat is obligatory on all Muslims who are in possession of surplus wealth for a full lunar year, exceeding the monetary value of 85 grams of gold (7.5 Tola), we will help you calculate it either by your manual input or as an automated action from your eTijar account.
                        eTijar will help you with deduction and payout to vetted charities, zakat funds, and individuals of your choice.</p>
                        </div>
                        </div>
                        
                        </div>
                </div>
            </div>
                    {/*frequently asked questions*/}

            <div className="relative min-h-auto w-auto pb-4 px-5 lg:px-0 bg-yellow-100 flex justify-around items-start flex-wrap">
            <img className="w-4/6 lg:w-2/6" src="faq.png" alt="faq" />
                <div className="w-full lg:w-3/6 h-full justify-center lg:justify-start flex items-center flex-wrap">
                <p className="mt-5 lg:mt-32 text-lg lg:text-xl text-gray-700"> You still have plenty of questions to ask? Do not worry, our FAQ have got you covered.
                Head to our <a href="" className="text-green-600">Frequently Asked Question</a> page to know more <br/><br/>
                <a href="#" className=" rounded-md border border-transparent  px-5 py-3 text-base font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hero-btn">
											Go!
										</a></p>
			
            <p className="w-full mt-7 text-gray-700">Follow us on:</p>
            <div className="w-full flex space-around mt-3">
                <a className="text-2xl text-yellow-400 rounded-full p-2 bg-yellow-50 text-shadow mr-6 hover:bg-gray-700" href="#"><FaTwitter/></a>
                <a className="text-2xl text-yellow-400 rounded-full p-2 bg-yellow-50 text-shadow mr-6 hover:bg-gray-700" href="#"><FaFacebook/></a>
                <a className="text-2xl text-yellow-400 rounded-full p-2 bg-yellow-50 text-shadow mr-6 hover:bg-gray-700" href="#"><FaInstagram/></a>
                <a className="text-2xl text-yellow-400 rounded-full p-2 bg-yellow-50 text-shadow mr-6 hover:bg-gray-700" href="#"><FaLinkedin/></a>
                </div>
            </div>
           

            </div>
        </>
    );
    }