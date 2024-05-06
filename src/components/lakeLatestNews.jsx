import NewsItem from "./newsItem";

export default function LakeLatestNews() {
  return (
    <div className="border-t border-[#f2f2f2] mt-12">
      <div className="my-4">
        <p className="text-xl">Latest News</p>
      </div>
      <NewsItem />
    </div>
  );
}
