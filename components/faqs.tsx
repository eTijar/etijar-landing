interface ComponentProps {
	accTitle:string;
	accContent:string;
	id:string;
	active:string;
	setActive:React.Dispatch<React.SetStateAction<string>>;
}

export default function FAQs({ accTitle, accContent, id, active, setActive }:ComponentProps) {
	function Active() {
		setActive(id);
	}
	return (
		<div className="bg-white relative w-full">
			<div className="w-full mx-auto lg:px-24 sm:px-8">
				<div className="mt-12 lg:mt-0 ">
					<div>
						<div className=" bg-primary-200 rounded md:mb-5 mb-0 md:text-xl text-base leading-6 text-blue-50 flex flex-row justify-between items-center px-3 py-2 accTitle">
							<p>{accTitle}</p>{' '}
							<div onClick={Active} className="text-white text-4xl font-bold cursor-pointer hover:text-secondary-300 duration-100">
								{active === id ? "-" : "+"}
							</div>
						</div>
						<div className={(active === id ? "show" : "") + "accContent"}>{accContent}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
