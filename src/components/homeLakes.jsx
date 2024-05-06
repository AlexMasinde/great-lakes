import LakeArticlesHome from "@/components/lakeArticlesHome";
import LakeThumbnail from "@/components/lakeThumbnail";
import UpcomingEvents from "@/components/lakesUpcomingEvents";
import NewsItem from "@/components/newsItem";
import { lakeList } from "@/utils/lakeList";

export default function HomeLakes() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 ">
      <div className="my-4">
        <p className="md:text-xl border-l-2 border-[#ffcc00] pl-3 font-extralight">
          The 7 Great Lakes
        </p>
      </div>
      <div className="flex justify-between flex-wrap">
        {lakeList.map((lake) => {
          return (
            <LakeThumbnail
              name={lake.name}
              image={lake.image}
              country={lake.country}
              navLink={lake.navLink}
              key={lake.name}
            />
          );
        })}
      </div>
      <div className="border-t border-[#f2f2f2] mt-12">
        <div className="my-4">
          <p className="md:text-xl border-l-2 border-[#ffcc00] pl-3 font-extralight">
            Sample Articles
          </p>
        </div>
        <LakeArticlesHome />
      </div>
      <div className="border-t border-[#f2f2f2] mt-12 mb-12">
        <div className="my-4">
          <p className="md:text-xl border-l-2 border-[#ffcc00] pl-3 font-extralight">
            Latest News
          </p>
        </div>
        <NewsItem />
      </div>
      <div className="border-t border-[#f2f2f2] mt-12 mb-12">
        <div className="my-4">
          <p className="md:text-xl border-l-2 border-[#ffcc00] pl-3 font-extralight">
            Upcoming Events
          </p>
        </div>
        <UpcomingEvents />
      </div>
    </div>
  );
}
