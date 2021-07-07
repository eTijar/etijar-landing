import Link from "next/link"
export default function MaxFooter() {
    return(
        <>
            <div className="relative min-h-auto w-auto mt-16 pt-24 md:pt-16 bg-blue-400 flex items-center justify-center">
                <div className="foot"></div>
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#60A5FA" fill-opacity="1" d="M0,160L120,181.3C240,203,480,245,720,218.7C960,192,1200,96,1320,48L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                <div className=" relative w-full lg:w-5/6 rounded py-10 px-14 flex items-center justify-between flex-col  z-10 heroo">
                    <h2 className="text-xl lg:text-2xl font-black text-gray-800 mb-10">No hidden fees and full transparency, know where your money is at all times.
                    When you do well, that is when eTijar does well, our values align.</h2>

                    <div className="w-full flex justify-around items-center flex-wrap pb-2">
                    <h2 className="w-full lg:w-2/6 text-center mt-2 text-2xl lg:text-xl font-bold text-black" >Sign up to our newsletter today</h2>
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
            <footer className="bg-blue-900 py-4 text-blue-200 text-center">
                Copyright &copy; eTijar 2021 All Right Served
            </footer>
        </>
    );
}