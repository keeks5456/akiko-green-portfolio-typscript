import Image from "next/image";

const ProfilePic = () => {
  return (
    //Find an image of yourself and change
    <Image
      src="/images/temp-prof-pic.jpeg"
      alt="Temp Image"
      width={"100"}
      height={"74"}
      className="relative"
    />
  );
};
export default ProfilePic;
