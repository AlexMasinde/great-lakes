import NavBar from "./navBar";

export default function CommonPageHeader({ title }) {
  return (
    <div className="h-[400px] module flex flex-col">
      <div className="flex flex-col flex-1">
        <div className="z-50">
          <NavBar />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-1 justify-center">
          <div className="z-10 border-l-4 border-[#ffcc00] pl-6 ">
            <h1 className="text-white font-light text-2xl md:text-4xl">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
