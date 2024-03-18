import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setColor1,
  setColor2,
  setFont1,
  setFont2,
  setFont3,
  setFonts,
  setPremium,
  setRemovePremium,
  setTextColor,
  settClic,
} from "../redux/reducer/prosite_data";
import axios from "axios";
import { ColorPicker, useColor } from "react-color-palette";
import { FaCrown } from "react-icons/fa6";
import { APIPRO } from "@/Essentials";
import colors from "../assets/color.png";

import style from "../pages/CustomScrollbar.module.css";
import Image from "next/image";
function Styles({ search }) {
  const dispatch = useDispatch();
  const [fonnt, setFonnt] = useState([]);
  const { active, textcolor } = useSelector((state) => state.prosite_data);
  const [color, setColor] = useColor("");
  const [clickk, setClickk] = useState(false);

  const Fonts = async () => {
    try {
      const res = await axios.get(`${APIPRO}/getfonts`);
      setFonnt(res.data);
    } catch (e) {
      console.log("Items not fetched");
    }
  };

  useEffect(() => {
    Fonts();
  }, []);

  useEffect(() => {
    dispatch(setTextColor(color.hex));
    dispatch(setColor1(color.hex));
    dispatch(setColor2(color.hex));
  }, [color]);

  return (
    <>
      <div
        onClick={() => setClickk(false)}
        className={`fixed inset-0 ${
          clickk ? "z-10" : "-z-10"
        } w-screen h-screen`}
      ></div>
      <div className="my-2">
        <div className="text-[#424242] font-medium text-[14px]">Text color</div>
        {/* <div
          className=" h-[40px] w-[40px] bg-[#424242] my-2 rounded-lg"
          onClick={() => {
            dispatch(settClic(true));
            setClickk(true);
          }}
        ></div> */}
        <Image
          src={colors}
          className="h-[40px] w-[40px] rounded-xl"
          alt="color"
          onClick={() => {
            dispatch(settClic(true));
            setClickk(true);
          }}
        />
      </div>
      <div className={clickk === false ? "hidden" : "absolute w-[250px] z-10"}>
        <ColorPicker color={color} onChange={setColor} width="100%" />
      </div>
      <div
        className={`h-[350px] ${style.customScrollbar} bg-white select-none w-full grid grid-cols-2 overflow-auto `}
      >
        {search ? (
          <>
            {fonnt
              .filter((f) => {
                return f.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((d, i) => (
                <div
                  key={i}
                  className="flex w-[96%] h-[100px] mt-2 relative hover:bg-[#28292c] hover:shadow-lg hover:scale-105 duration-75 justify-center items-center select-none cursor-pointer bg-slate-100"
                >
                  <div
                    onClick={() => {
                      dispatch(setFont1(d?.name));
                      dispatch(setFont2(d?.name));
                      dispatch(setFont3(d?.name));
                      dispatch(
                        setFonts({
                          Linke: d?.link,
                          fontFamily: d?.name,
                        })
                      );
                      if (d.premium) {
                        dispatch(setPremium({ type: "fonts" }));
                      } else {
                        dispatch(setRemovePremium({ type: "fonts" }));
                      }
                    }}
                    className="w-[90%] bg-purple-200 h-[90%]"
                  >
                    <div className="px-4 py-2 flex-row flex shadow-lg h-full w-full rounded-sm bg-slate-200 text-black items-center justify-center">
                      <link rel="stylesheet" href={d?.link} />
                      <div style={{ fontFamily: d?.name }}>{d?.name}</div>
                      {d.premium && (
                        <div className="absolute bottom-2 right-2 flex justify-center items-end">
                          <div
                            className=" bg-[#171717] 
                     p-1 rounded-full self-end flex "
                          >
                            <FaCrown className=" text-orange-300 " />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className=" bottom-0"></div>
                </div>
              ))}
          </>
        ) : (
          <>
            {fonnt.map((d, i) => (
              <div
                key={i}
                className="flex w-[96%] h-[100px] mt-2 relative hover:bg-[#28292c] hover:shadow-lg hover:scale-105 duration-75 justify-center items-center select-none cursor-pointer bg-slate-100"
              >
                <div
                  onClick={() => {
                    sessionStorage.setItem("font", d?.name);
                    if (active == "h1") {
                      sessionStorage.setItem("font1", d?.name);
                    }
                    if (active == "h2") {
                      sessionStorage.setItem("font2", d?.name);
                    }
                    if (active == "h3") {
                      sessionStorage.setItem("font3", d?.name);
                    }
                    dispatch(setFont1({ name: d?.name, link: d?.link }));
                    dispatch(setFont2({ name: d?.name, link: d?.link }));
                    dispatch(setFont3({ name: d?.name, link: d?.link }));
                    if (!active) {
                      dispatch(
                        setFonts({
                          Linke: d?.link,
                          fontFamily: d?.name,
                        })
                      );
                    }
                    if (d.premium) {
                      dispatch(setPremium({ type: "fonts" }));
                    } else {
                      dispatch(setRemovePremium({ type: "fonts" }));
                    }
                  }}
                  className="w-[90%] bg-purple-200 h-[90%]"
                >
                  <div className="px-4 py-2 flex-row flex shadow-lg h-full w-full rounded-sm bg-slate-200 text-black items-center justify-center">
                    <link rel="stylesheet" href={d?.link} />
                    <div style={{ fontFamily: d?.name }}>{d?.name}</div>
                    {d.premium && (
                      <div className="absolute bottom-2 right-2 flex justify-center items-end">
                        <div
                          className=" bg-[#171717] 
                     p-1 rounded-full self-end flex "
                        >
                          <FaCrown className=" text-orange-300 " />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className=" bottom-0"></div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Styles;
