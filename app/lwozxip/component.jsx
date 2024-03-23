"use client";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Loading from "../assests/Loading.json";

const Component = () => {
  const searchparams = useSearchParams();
  const id = searchparams.get("id");
  const temp = searchparams.get("temp");
  const router = useRouter();

  const fetchid = async () => {
    try {
      const res = await axios.get(
        `https://work.grovyo.xyz/api/v1/fetchwithid/${id}`
      );
      console.log(res.data);
      if (res.data.success) {
        const data = res.data.user;
        sessionStorage.setItem("data", JSON.stringify(data));
        sessionStorage.setItem("temp", Number(temp));
        router.push("/");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchid();
    }
  }, [id]);

  return (
    <>
      <div className="fixed inset-0 w-screen flex justify-center items-center dark:bg-[#273142] bg-white h-screen">
        <div>
          <Lottie animationData={Loading} loop size={250} />
        </div>
      </div>
    </>
  );
};

export default Component;
