import Link from "next/link";

export default function HomeAbout() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="my-4">
        <p className="md:text-xl border-l-2 border-[#ffcc00] pl-3 font-extralight">
          About AGL Information Platform
        </p>
      </div>
      <p className="font-extralight text-[#555555] mt-3 leading-8">
        The African Great Lakes Information Platform (African Great Lakes
        Inform) delivers the information needed to support sustainable
        management of the amazing natural resources of the African Great Lakes
        region. The site helps users access spatial data; information on past,
        present and future projects; and all aspects of the adaptive management
        process, which ensures a more comprehensive, effective and efficient
        approach to addressing complex conservation issues.{" "}
        <span>
          <Link href="/partnerships">
            <span className="text-[#4539B4]">Contact Us</span>
          </Link>
        </span>
        .
      </p>
    </div>
  );
}
