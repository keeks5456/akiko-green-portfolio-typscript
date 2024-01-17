import ProfilePic from "./profile_pic/ProfilePic";

function Home() {
  return (
    <>
      {/* container for whole home */}
      <div className="container mx-auto px-4 flex">
        {/* container for name and title */}
        <div className="container">
          {/* <h1 className="font-salsa text-8xl mt-10 ml-10">Akiko Green</h1>
          <h3 className="text-3xl mt-5 ml-30 ">Software Engineer</h3> */}
        </div>
        <div className="container flex justify-end static ">
          <ProfilePic />
        </div>
      </div>
    </>
  );
}
export default Home;
