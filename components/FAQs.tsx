
export default function FAQs({accTitle, accContent, id, active, setActive}) {
	function Active(){
		setActive(prevstate => ({active: !prevstate.active}))
	}
	return (
		<div className="bg-white relative w-full">
			<div className="w-full mx-auto py-4 lg:px-24 sm:px-8 lg:py-4">
					
					<div className="mt-12 lg:mt-0 ">
							<div>
								<div className="p-2 bg-primary-300 rounded md:text-xl text-base leading-6 font-bold text-gray-100 flex flex-row justify-between items-center px-3 accTitle">
									<p>{accTitle}</p> <div onClick = {Active} className="text-white text-4xl font-bold cursor-pointer hover:text-secondary-300 duration-100">+</div> 
									</div>
								<div className="bg-white shadow-2xl rounded pt-5 pb-10 px-4 text-base text-gray-600 ">{accContent}</div>
							</div>
					</div>

			</div>
		</div>
	);
}
