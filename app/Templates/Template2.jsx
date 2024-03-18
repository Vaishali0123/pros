import React from 'react'

const Template2 = ({
	dispatch,
	switcher,
	setComponent, setChange,
	change, font1, link1,
	background_color,
	link2,
	bgimage, Linkes, setComponents, setReduxActive,
	setText1, color1, textcolor, active,
	header1, font2, color2, font3, Name, Button1,
	header2, setText, buttoncss
}) => {
	return (
		<>
			{switcher === true ? (
				<div
					style={{
						backgroundColor: background_color || "transparent",
						height: "100%",
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							backgroundImage: bgimage ? `url(${bgimage})` : null,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							height: "95%",
							width: "97%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<div
								style={{
									height: "100%",
									width: "90%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<link rel="stylesheet" href={font1 ? link1 : Linkes} />
								<div
									// ref={h1}
									id="h1"
									onClick={(e) => {
										e.stopPropagation();
										dispatch(setReduxActive("h1"));
										// setComponent(2);
										dispatch(setComponent(2))
										setComponents(false);
										const h1 = document.getElementById("h1");
										setText(h1.innerText);
										// setActive("h1");
										setText1(true);
									}}
									style={{
										fontFamily: font1 ? font1 : Name,
										color: color1 ? color1 : textcolor,
										fontWeight: "semibold",
										width: "100%",
										textAlign: "center",
									}}
									className={`text-[200%] pn:max-ss:text-[50%] ss:max-pp:text-[100%] pp:max-sm:text-[160%]  font-semibold text-black w-[100%] ${active === "h1"
										? "border-2 border-blue-700 rounded-lg"
										: ""
										}`}
								>
									{header1}
								</div>
								<link rel="stylesheet" href={font2 ? link2 : Linkes} />
								<div
									id="h2"
									onClick={(e) => {
										e.stopPropagation();
										dispatch(setReduxActive("h2"));
										// setComponent(2);
										dispatch(setComponent(2))
										setComponents(false);
										const h2 = document.getElementById("h2");
										setText(h2.innerText);
										// setActive("h2");
										setText1(true);
									}}
									style={{
										fontFamily: font2 ? font2 : Name,
										color: color2 ? color2 : textcolor,
										fontWeight: "semibold",
										width: "100%",
										textAlign: "center",
									}}
									className={`text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%] font-semibold text-black w-[100%] my-2 ${active === "h2"
										? "border-2 border-blue-700 rounded-lg"
										: ""
										}`}
								>
									{header2}
								</div>
								<div
									onClick={() => dispatch(setReduxActive("h3"))}
									style={{
										width: " 100%",
										display: "flex",
										justifyContent: "center",
									}}
								>
									<link rel="stylesheet" href={Linkes} />
									<div
										onClick={(e) => {
											e.stopPropagation();
											// setComponent(3);
											dispatch(setComponent(3))
											setChange(2);
										}}
										style={{
											...buttoncss,
										}}
										className={`text-[100%] pn:max-ss:text-[30%] cursor-pointer ss:max-pp:text-[60%] pp:max-sm:text-[80%] ${change === 2
											? "border-2 border-blue-700 rounded-lg"
											: ""
											}`}
									>
										<div style={{ fontFamily: font3 ? font3 : Name }}>
											{Button1}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div
					style={{
						backgroundImage: bgimage ? `url(${bgimage})` : null,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundColor: background_color || "transparent",
					}}
					className="w-[100%] h-[100%] bg-gray-400 flex flex-col justify-center items-center"
				>
					<div
						className=" h-[95%] w-[95%] bg-center"
						style={{
							backgroundImage: bgimage ? `url(${bgimage})` : null,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundColor: background_color || "transparent",
						}}
					>
						<div className="h-[100%] w-[100%] flex flex-col justify-center items-center">
							<link rel="stylesheet" href={font1 ? link1 : Linkes} />
							<div
								id="h1"
								onClick={() => {
									// setComponent(2);
									dispatch(setComponent(2))
									setComponents(false);
									const h1 = document.getElementById("h1");
									setText(h1.innerText);
									// setActive("h1");
									dispatch(setReduxActive("h1"));
									setText1(true);
								}}
								style={{
									fontFamily: font1 ? font1 : Name,
									color: color1 ? color1 : textcolor,
								}}
								className="text-[24px] hover:bg-[#e6e6e6] text-center font-semibold text-black w-[100%]  "
							>
								{header1}
							</div>
							<link rel="stylesheet" href={Linkes} />
							<div
								id="h2"
								onClick={() => {
									// setComponent(2);
									dispatch(setComponent(2))
									setComponents(false);
									const h2 = document.getElementById("h2");
									setText(h2.innerText);
									dispatch(setReduxActive("h2"));
									// setActive("h2");
									setText1(true);
								}}
								style={{
									fontFamily: font2 ? font2 : Name,
									color: color2 ? color2 : textcolor,
								}}
								className="text-[14px] font-semibold text-center text-black w-[70%] my-2"
							>
								{header2}
							</div>
							<div
								onClick={() => dispatch(setReduxActive("h3"))}
								className="w-[100%] flex justify-start"
							>
								<a >
									<link rel="stylesheet" href={Linkes} />
									<div
										style={{
											...buttoncss,
										}}
										className="text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%]"
									>
										<div style={{ fontFamily: font3 ? font3 : Name }}>
											{Button1}
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Template2