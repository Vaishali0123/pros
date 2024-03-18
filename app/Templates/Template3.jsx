import React from 'react'

const Template3 = ({
	dispatch,
	switcher,
	setComponent, setChange,
	change, font1, link1, Linkes,
	background_color,
	link2,
	bgimage, setComponents, setReduxActive,
	setText1, color1, textcolor, active,
	header1, font2, color2, font3, Name, Button1,
	primeimage, header2, setText, buttoncss
}) => {
	return (
		<>
			{switcher === true ? (
				<div
				style={{
					backgroundImage: background_color
					  ? null
					  : bgimage
					  ? `url(${bgimage})`
					  : null,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundColor: background_color || "transparent",
					width: "100%",
					height: "100%",
					paddingTop: "2rem",
				  }}
					className="w-[100%] h-[100%] bg-gray-400 flex flex-row-reverse"
				>
					<div className="h-[100%] w-[50%] flex flex-col justify-center items-center">
						<div className="h-[100%] w-[90%] flex flex-col justify-center items-center">
							<link rel="stylesheet" href={font1 ? link1 : Linkes} />
							<div
								// ref={h1}
								id="h1"
								onClick={() => {
									dispatch(setDone1(true));
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
								className="text-[200%] pn:max-ss:text-[50%] ss:max-pp:text-[100%] pp:max-sm:text-[160%] hover:bg-[#e6e6e6] font-semibold text-black w-[100%] "
							>
								{header1}
							</div>
							<link rel="stylesheet" href={font2 ? link2 : Linkes} />
							<div
								id="h2"
								onClick={() => {
									dispatch(setDone2(true));
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
								className="text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%] font-semibold text-black w-[100%] my-2"
							>
								{header2}
							</div>
							<div
								onClick={() => dispatch(setReduxActive("h3"))}
								className="w-[100%] flex justify-start"
							>
								<a>
									<link rel="stylesheet" href={font3 ? font3 : Linkes} />
									<div
										style={{
											...buttoncss,
											// backgroundColor: buttoncolor,
											// color: textcolor,
											// fontFamily: Name,
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

					<div className="h-[100%] w-[50%] justify-center items-center flex flex-col">
						<img
							src={primeimage}
							alt="pic"
							className="object-contain h-[300px] w-[300px] rounded-xl"
						/>
					</div>
				</div >
			) : (
				<div
				style={{
					backgroundImage: background_color
					  ? null
					  : bgimage
					  ? `url(${bgimage})`
					  : null,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundColor: background_color || "transparent",
					width: "100%",
					height: "100%",
					paddingTop: "2rem",
				  }}
					className="w-[100%] h-[100%] bg-slate-100 flex flex-col-reverse"
				>
					<div className="h-[50%] w-[100%] flex flex-col justify-center items-center">
						<div className="h-[100%] w-[96%] flex flex-col justify-center items-center">
							<link rel="stylesheet" href={font1 ? link1 : Linkes} />
							<div
								id="h1"
								onClick={() => {
									// setComponent(2);
									dispatch(setComponent(2))
									setComponents(false);
									const h1 = document.getElementById("h1");
									setText(h1.innerText);
									dispatch(setReduxActive("h1"));
									// setActive("h1");
									setText1(true);
								}}
								style={{
									fontFamily: font1 ? font1 : Name,
									color: color1 ? color1 : textcolor,
								}}
								className="text-[24px] hover:bg-[#e6e6e6] font-semibold text-black w-[100%]  "
							>
								{header1}
							</div>
							<link rel="stylesheet" href={font2 ? link2 : Linkes} />
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
								className="text-[14px] h-[90px] font-semibold text-black w-[100%] my-2"
							>
								{header2}
							</div>
							<div className="w-[100%] flex">
								<a href={Link1}>
									<link rel="stylesheet" href={Linkes} />
									<div
										style={{
											...buttoncss,
											backgroundColor: buttoncolor,
											color: textcolor,
											fontFamily: font2,
										}}
									// className="text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%]"
									>
										<div style={{ fontFamily: font3 }}>{Button1}</div>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className="h-[100%] w-[100%] justify-center items-center flex flex-col">
						<img
							src={primeimage}
							alt="pic"
							className="object-contain h-[100%] w-[100%] "
						/>
					</div>
				</div>
			)}
		</>
	)
}

export default Template3