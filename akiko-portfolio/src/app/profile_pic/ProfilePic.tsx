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
    <Image
      className="pt-10"
      src="/images/temp-prof-pic.jpeg"
      alt="Temp Image"
      width={width < 1024 ? "300" : "400"}
      height={width < 1024 ? "45" : "400"}
    />
  );
};
export default ProfilePic;
