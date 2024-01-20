"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProfilePic = () => {
  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);
  return (
    //Find an image of yourself and change
    <>
      <Image
        className=" justify-center rounded-md mt-10 mr-5"
        src="/images/temp-prof-pic.jpeg"
        alt="Temp Image"
        width={"500"}
        height={"1000"}
      />
    </>
  );
};
export default ProfilePic;

//margin: 0 20px 20px 0;
