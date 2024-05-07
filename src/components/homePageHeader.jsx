import NavBar from "./navBar";

export default function HomePageHeader() {
  return (
    <div className="h-screen home-hero flex flex-col">
      <div className="flex flex-col flex-1">
        <div className="z-10">
          <NavBar />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-1 justify-center">
          <div className="z-10 border-l-4 border-[#ffcc00] pl-6 ">
            <h1 className="text-white text-md font-light md:text-6xl">
              SEVEN GREAT LAKES. TEN COUNTRIES. ONE INFORMATION SYSTEM.
            </h1>
          </div>
          <div className="z-10 pl-6 mt-3 md:mt-7">
            <p className="text-white font-extralight text-sm md:text-3xl">
              Thousands of people are working to sustainably manage the African
              Great Lakes, but they face barriers to connect. That is where we
              come in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
