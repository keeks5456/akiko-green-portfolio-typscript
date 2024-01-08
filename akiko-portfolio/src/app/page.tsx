import ProfilePic from "./profile_pic/ProfilePic";

function Home() {
  return (
    <>
      {/* container for whole home */}
      <div className="container mx-auto px-4 flex">
        {/* container for name and title */}
        <div className="container">
          <h1 className="font-salsa text-8xl pt-10 ">Akiko Green</h1>
          <h3 className="text-3xl">Software Engineer</h3>
        </div>
        <div className="container flex justify-end">
          <ProfilePic />
        </div>
      </div>
    </>
  );
}
export default Home;
