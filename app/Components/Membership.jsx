import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { RxCross1 } from 'react-icons/rx'

const Membership = ({ setPop }) => {
	const [id, setId] = useState("")

	useEffect(() => {
		const data = sessionStorage.getItem("data");
		const parseData = JSON.parse(data);
		setId(parseData._id);
	}, []);

	return (
		<>
			<div className='flex md:w-[80%] md:h-[85%] z-50 sm:max-h-[650px] h-screen w-[95%] dark:bg-[#1b2431] mt-5 overflow-y-scroll no-scrollbar rounded-2xl bg-white pt-[30px] sm:overflow-hidden sm:px-[40px]'>
				<div className="min-w-full px-[10px]">
					<div className='flex justify-between items-center'>
						<p className="text-[#00153B] dark:text-white text-[20px] leading-[40px] font-semibold">
							Your Subscription
						</p>
						<div onClick={() => setPop(false)}>
							<RxCross1 />
						</div>
					</div>
					<div className="mt-[20px] pn:max-sm:pb-[90px] sm:pb-[50px] grid sm:grid-cols-3 gap-[20px]">
						<div key="1" className="w-full bg-[#fff] dark:bg-[#273142] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
							<div className="pt-[15px] px-[25px] pb-[25px]">
								<div className="flex justify-end">
									<div className="bg-[#F6F6F7] dark:bg-[#006EF5] rounded-[20px] flex justify-center align-center px-[12px]">
										<p className="text-[#00153B] dark:text-white text-[12px] leading-[28px] font-bold">
											Starter
										</p>
									</div>
								</div>

								<div>
									<p className="text-[#00153B] dark:text-white text-[19px] leading-[24px] font-bold">
										Active
									</p>
									<p className="text-[#00153B] dark:text-white text-[50px] leading-[63px] font-bold">
										Free
									</p>
								</div>

								{/* <div>
								<p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
									5 Credits
								</p>
								<p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
									1 User
								</p>
							</div> */}
							</div>

							<div className="pt-[25px] px-[25px] pb-[35px]">
								<div className='flex flex-col gap-3'>
									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
										Create Up-to 5 Products
									</p>
									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
										Create Up-to 2 Communities
									</p>
									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
										Free 10 Deliveries
									</p>
									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
										Access upto 5 templates
									</p>

								</div>

								{/* {memberships === "Free" && < div className="mt-[25px]">
									<button disabled className="bg-[#99b5d0] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">Current Plan</button>
								</div>} */}

							</div>
						</div>

						<div key="2" className="w-full bg-[#fff] dark:bg-[#273142] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
							<div className="pt-[15px] px-[25px] pb-[25px]">
								<div className="flex justify-end">
									<div className="bg-[#F6F6F7] dark:bg-[#006EF5] rounded-[20px] flex justify-center align-center px-[12px]">
										<p className="text-[#00153B] dark:text-white text-[12px] leading-[28px] font-bold">
											Premium
										</p>
									</div>
								</div>

								<div>
									<p className="text-[#00153B] dark:text-white text-[19px] leading-[24px] font-bold">
										Fast Start
									</p>
									<p className="text-[#00153B] dark:text-white text-[50px] leading-[63px] font-bold">
										&#8377;3499
									</p>
								</div>



								{/* <div>
								<p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
									50 Credits per month
								</p>
								<p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
									Unlimited users
								</p>
							</div> */}

							</div>

							<div className="pt-[25px] px-[25px] pb-[35px]">
								<div className='flex flex-col gap-3'>
									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
										Create Up-to 10 Products
									</p>
									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
										Create Up-to 5 Communities
									</p>
									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
										Free 400 Deliveries
									</p>
									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
										Access upto 15 templates
									</p>

								</div>

								<div className="mt-[25px]">
									{/* <button onClick={buyMembership} className="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">Upgrade +</button> */}
								</div>


							</div>
						</div>

						<div key="3" className="w-full bg-[#fff] dark:bg-[#273142] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
							<div className="pt-[15px] px-[25px] pb-[25px]">
								<div className="flex justify-end">
									<div className="bg-[#F6F6F7] dark:bg-[#006EF5] rounded-[20px] flex justify-center align-center px-[12px]">
										<p className="text-[#00153B] dark:text-white text-[12px] leading-[28px] font-bold">
											Value
										</p>
									</div>
								</div>

								<div>
									<p className="text-[#00153B] dark:text-white text-[19px] leading-[24px] font-bold">
										Accelerate
									</p>
									<p className="text-[#00153B] dark:text-white text-[50px] leading-[63px] font-bold">
										Custom
									</p>
								</div>

								{/* <div>
								<p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
									100 Credits per month
								</p>
								<p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
									Unlimited users
								</p>
							</div> */}
							</div>

							<div className="pt-[25px] px-[25px] pb-[35px]">
								<div className='flex flex-col gap-3'>
									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
										Create Custom Number of Products
									</p>
									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
										Create Custom Number of Communities
									</p>
									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
										Free Custom No of Deliveries
									</p>
									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
										Limited Custom selection templates
									</p>
								</div>
								<div className="mt-[25px]">
									{/* <button onClick={() => router.push("/membership/custom")} className="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">Upgrade +</button> */}
								</div>
							</div>
						</div>
					</div>

					<div className='flex justify-end items-center'>
						<a target='_blank' href={`https://workspace.grovyo.com/aybdhw?zyxxpht=${id}&path=/membership`} className="bg-[#006EF5] sm:-mt-9 -mt-[100px] flex justify-center items-center gap-1 rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold"> Learn More
							<IoIosArrowRoundForward className='text-lg font-semibold text-white' />
						</a>
					</div>
				</div>
			</div >
		</>
	)
}

export default Membership