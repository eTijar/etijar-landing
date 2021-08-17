import Link from "next/link"
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
export default function MaxFooter() {
    return(
        <>
            <div className="relative min-h-auto w-auto pb-3 px-6 bg-blue-200 flex items-start justify-between flex-wrap">
                <div className="mt-2 w-full flex justify-center flex-wrap">
                    <div className="mb-4">
                        <a href="">
							<img className="h-20 sm:h-14" src="/logo.png" alt="" />
						</a>
                        <p className="text-gray-600">Make profit not interest</p>
                        <div className="flex space-around mt-3">
                <a className="text-xl text-secondary-300 rounded-full p-2 bg-gray-200 text-shadow mr-6 hover:bg-blue-300" href="#"><FaTwitter/></a>
                <a className="text-xl text-secondary-300 rounded-full p-2 bg-gray-200 text-shadow mr-6 hover:bg-blue-300" href="#"><FaFacebook/></a>
                <a className="text-xl text-secondary-300 rounded-full p-2 bg-gray-200 text-shadow mr-6 hover:bg-blue-300" href="#"><FaInstagram/></a>
                <a className="text-xl text-secondary-300 rounded-full p-2 bg-gray-200 text-shadow mr-6 hover:bg-blue-300" href="#"><FaLinkedin/></a>
                </div>
                </div>
                <div className="mt-6 px-4 mb-16">
                    <p className="text-gray-600 text-base">At eTijar, we want to lead and drive financial independence and inclusion of Muslims across the greater
                        African region. Money is a medium of social exchange. We are building the fabric to connect every member 
                        of this society, from individuals to small business owners to freelancers and beyond. Our human-first and
                         customer-centric approach will make the difference. A digital wallet to help Muslims handle debt, save, invest,
                          and spend money. With our app you can save and invest according to the tenets of shariah, you can pay out 
                        Zakat (personal income tax) and create a Will (Wassiyat).
                    </p>
                    </div>
                </div>
                <div className="w-full flex justify-between flex-wrap">
                <div className="flex flex-col justify-around items-center mt-10 w-52 mr-14">
                    <p className="font-bold text-gray-600 text-lg mb-4">Quick Links</p>
                    <a href="/about" className="mb-2 text-gray-600 hover:text-blue-600">About us</a>
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
            </div>
            <footer className="bg-blue-900 py-4 text-blue-200 text-center">
                Copyright &copy; eTijar 2021 All Right Served
            </footer>
        </>
    );
}