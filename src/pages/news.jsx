import NavBar from "@/components/navBar";
import UpcomingEvents from "@/components/lakesUpcomingEvents";
import NewsItem from "@/components/newsItem";
import Footer from "@/components/footer";
import CommonPageHeader from "@/components/commonPageHeader";
import UpcomingEventsContainer from "@/components/upcomingEventsContainer";
import UpcomingNewsContainer from "@/components/upcomingNewsContainer";

export default function NewsAndEvents() {
  return (
    <div>
      <div>
        <CommonPageHeader title="News and Upcoming Events" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white my-7">
          <h1 className="text-2xl text-[#2D2C3C] ">Explore By Lake</h1>
        </div>
        <LakeSelectorContainer />
        <UpcomingNewsContainer />
        <UpcomingEventsContainer />
      </div>
      <Footer />
    </div>
  );
}

function LakeSelectorContainer() {
  return (
    <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LakeSelector lake="Lake Victoria" image="/victoria/victoria2.jpeg" />
      <LakeSelector lake="Lake Kivu" image="/victoria/victoria10.jpeg" />
      <LakeSelector lake="Lake Tanganyika" image="/victoria/victoria5.jpeg" />
      <LakeSelector lake="Lake Edward" image="/victoria/victoria3.jpg" />
      <LakeSelector
        lake="Lake Malawi Niassa Nyasa"
        image="/victoria/victoria10.jpeg"
      />
      <LakeSelector lake="Lake Turkana" image="/victoria/victoria8.jpeg" />
      <LakeSelector lake="Lake Albert" image="/victoria/victoria11.jpeg" />
    </div>
  );
}

function LakeSelector({ lake, image }) {
  return (
    <div className="flex flex-col items-center cursor-pointer max-w-[120px]">
      <div className="rounded-[50%] w-[100px] h-[100px]">
        <img src={image} className="object-cover aspect-square rounded-full" />
      </div>
      <div className=" mt-1  text-sm text-center">
        <p>{lake}</p>
      </div>
    </div>
  );
}
