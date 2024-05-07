import Link from "next/link";

export default function LakeArticleItem({ year, title, link, authors }) {
  return (
    <Link className="sm:max-w-[100%]" href={link} target="blank">
      <div className="py-3 border-b border-dotted flex">
        <p className="mr-4 font-extralight text-sm md:text-md">{year}</p>
          <div>
              <p className="font-extralight text-[#4539B4] text-sm md:text-md pb-3" style={{overflow: "hidden"}}>
                  <strong>Title: </strong>{title}
              </p>
              <p className="font-extralight text-[#4539B4] text-sm md:text-md">
                  <strong>Author(s): </strong>{authors}
              </p>
          </div>
      </div>
    </Link>
  );
}
