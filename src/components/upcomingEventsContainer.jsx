import UpcomingEvents from "./lakesUpcomingEvents";
import SeeMoreButton from "./seeMore";

export default function UpcomingEventsContainer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <p className="text-2xl text-[#2D2C3C] mb-7">Upcoming Events</p>
      <div>
        <UpcomingEvents />
        <div className="mt-4">
          <UpcomingEvents />
        </div>
      </div>
      <div className="flex justify-center w-full my-10 cursor-pointer">
        <SeeMoreButton />
      </div>
    </div>
  );
}
