import Link from "next/link";

export default function UpcomingEvents() {
  return (
    <div className="flex justify-between flex-wrap">
      <EventItem />
      <EventItem />
      <EventItem />
    </div>
  );
}

function EventItem() {
  return (
    <Link
      href="/single_event"
      className="w-full md:w-[350px] border border-[#f2f2f2] mb-2 cursor-pointer"
    >
      <img
        src="victoria/victoria2.jpeg"
        height="167"
        style={{ objectFit: "cover", maxHeight: "167px", width: "100%" }}
      />
      <div className="py-4 px-2">
        <div className="flex items-center">
          <div className=" min-w-[30%] flex flex-col items-center">
            <p className="uppercase text-[#4539B4] text-sm font-extralight">
              MAR
            </p>
            <p className="uppercase text-[#555555] text-sm font-extralight">
              12 - 15
            </p>
          </div>
          <div className="max-w-[70%] border-l border-red-[#f2f2f2] pl-4">
            <p className="text-sm text-[#555555] font-medium">
              Removing water hyacinth deposits
            </p>
            <p className="text-sm font-extralight text-[#555555]">
              Rusinga Island, Kenya
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
