import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black text-white w-full min-h-72 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between md:justify-around border-b border-[#a9a9a9] pt-4 ">
          <div className="md:w-[30%]">
            <p className="text-sm font-medium mb-2 w-fit border-b border-[#ffcc00]">
              SITE MAP
            </p>
            <div>
              <Link href="/" className="text-sm font-extralight mb-2">
                Home
              </Link>
            </div>
            <div>
              <Link href="/news" className="text-sm font-extralight mb-2">
                News and Events
              </Link>
            </div>
            <div>
              <Link
                href="/partnerships"
                className="text-sm font-extralight mb-2"
              >
                Partnerships
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium mb-2 w-fit border-b border-[#ffcc00]">
              GREAT LAKES
            </p>
            <div>
              <Link
                href="/lakes/turkana"
                className="text-sm font-extralight mb-2"
              >
                Lake Turkana
              </Link>
            </div>
            <div>
              <Link
                href="/lakes/victoria"
                className="text-sm font-extralight mb-2"
              >
                Lake Victoria
              </Link>
            </div>
            <div>
              <Link
                href="/lakes/albert"
                className="text-sm font-extralight mb-2"
              >
                Lake Albert
              </Link>
            </div>
            <div>
              <Link href="/lakes/kivu" className="text-sm font-extralight mb-2">
                Lake Kivu
              </Link>
            </div>
            <div>
              <Link
                href="/lakes/edward"
                className="text-sm font-extralight mb-2"
              >
                Lake Edward
              </Link>
            </div>
            <div>
              <Link
                href="/lakes/tanganyika"
                className="text-sm font-extralight mb-2"
              >
                Lake Tanganyika
              </Link>
            </div>
            <div>
              <Link
                href="/lakes/malawi"
                className="text-sm font-extralight mb-2"
              >
                Lake Malawi/Niassa/Nyasa
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-[#a9a9a9] text-xs font-extralight py-[17px]">
          &copy; 2024 Africa Great Lakes Information Platform
        </p>
      </div>
    </div>
  );
}
