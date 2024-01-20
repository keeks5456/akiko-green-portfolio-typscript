import ProfilePic from "./profile_pic/ProfilePic";

function Home() {
  return (
    <>
      {/* container for whole home */}
      <div className="container mx-auto px-4 flex">
        {/* container for name and title */}
        <div className="container header-container justify-center">
          <h1 className="header-name text-8xl mt-10 ml-10">Akiko Green</h1>
          <h3 className="subheader-title text-3xl mt-5 ml-30 ">
            Software Engineer
          </h3>
          <p className="paragraph">
            Seasoned Full stack developer seeking opportunities to enhance her
            skills for Junior developer and Technical Writer roles.
          </p>
        </div>
        <div className="container flex justify-end static ">
          <ProfilePic />
        </div>
      </div>
    </>
  );
}
export default Home;
