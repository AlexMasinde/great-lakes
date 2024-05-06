import NavBar from "./navBar";

export default function LakeHeader({ title, imageUrl }) {
  return (
    <div className="h-[100vh]">
      <HeaderBackground />
      <div className="z-30 relative">
        <NavBar />
      </div>
    </div>
  );
}

function HeaderBackground() {
  return (
    <div
      className="absolute h-full w-full top-0 left-0"
      style={{
        backgroundImage: "url(/victoria/victoria4.jpeg)",
        filter: "brightness(0.3)",
      }}
    ></div>
  );
}
