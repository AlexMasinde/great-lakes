import Link from "next/link";

export default function LakeThumbnail({ name, image, navLink }) {
  const bgURL = image;
  return (
    <Link
      href={`/lakes${navLink}`}
      className="relative h-[400px] w-full md:w-[350px] cursor-pointer overflow-hidden mt-5"
    >
      <div
        className={`absolute top-0 left-0 w-full h-full hover:scale-125 bg-cover bg-center transition-transform duration-250 duration-500 ease-out`}
        style={{ backgroundImage: `url(${bgURL})` }}
      ></div>
      <div className="absolute bottom-0 bg-white w-full py-4 opacity-95 px-4">
        <div>
          <p className="font-extralight">{name}</p>
        </div>
      </div>
    </Link>
  );
}
