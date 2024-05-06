import SeeMoreButton from "./seeMore";
import NewsItem from "./newsItem";

export default function UpcomingNewsContainer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 ">
      <p className="text-2xl text-[#2D2C3C] mb-7">Great Lakes News</p>
      <div>
        <NewsItem />
        <div className="mt-4 ">
          <NewsItem />
        </div>
      </div>
      <div className="flex justify-center w-full my-10 cursor-pointer">
        <SeeMoreButton />
      </div>
    </div>
  );
}
