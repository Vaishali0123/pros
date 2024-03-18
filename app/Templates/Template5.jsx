import React from "react";

const Template5 = ({
  dispatch,
  switcher,
  setComponent,
  setChange,
  change,
  font1,
  link1,
  background_color,
  link2,
  bgimage,
  Linkes,
  setComponents,
  setReduxActive,
  setText1,
  color1,
  textcolor,
  active,
  header1,
  font2,
  color2,
  font3,
  Name,
  Button1,
  primeimage,
  header2,
  setText,
  buttoncss,
}) => {
  return (
    <>
      {switcher === true ? (
        <div
          style={{
            backgroundImage: background_color
             
          }}
          className="w-[100%] h-[100%] bg-gray-400 flex flex-col justify-center items-center"
        >
          <div
            className=" h-[95%] w-[95%] bg-cover"
            style={{
              backgroundImage: bgimage ? `url(${bgimage})` : null,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: background_color || "transparent",
			  backgroundImage: background_color
			  ? null
			  : bgimage
			  ? `url(${bgimage})`
			  : null,
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
                  dispatch(setComponent(2));
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
              <link rel="stylesheet" href={font2 ? link2 : Linkes} />
              <div
                id="h2"
                onClick={() => {
                  // setComponent(2);
                  dispatch(setComponent(2));
                  setComponents(false);
                  const h2 = document.getElementById("h2");
                  setText(h2.innerText);
                  // setActive("h2");
                  dispatch(setReduxActive("h2"));
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
                className="w-[100%] flex justify-center"
              >
                <a>
                  <link rel="stylesheet" />
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
              <div className=" w-[50%] justify-center items-center flex flex-col">
                <img
                  src={primeimage}
                  alt="pic"
                  className="object-contain h-[300px] w-[300px] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundColor: background_color }}
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
                  dispatch(setComponent(2));
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
              <link rel="stylesheet" href={font2 ? link2 : Linkes} />
              <div
                id="h2"
                onClick={() => {
                  // setComponent(2);
                  dispatch(setComponent(2));
                  setComponents(false);
                  const h2 = document.getElementById("h2");
                  setText(h2.innerText);
                  // setActive("h2");
                  dispatch(setReduxActive("h2"));
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
                <a>
                  <link rel="stylesheet" href={Linkes} />
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
        </div>
      )}
    </>
  );
};

export default Template5;
