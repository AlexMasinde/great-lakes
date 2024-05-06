import CommonPageHeader from "@/components/commonPageHeader";
import Footer from "@/components/footer";

export default function Partnerships() {
  return (
    <div>
      <CommonPageHeader title="Partners" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <PartnerList />
      </div>
      <Footer />
    </div>
  );
}

function PartnerList() {
  return (
    <div className="mt-5">
      <div>
        <h1 className="md:text-2xl text-[#2D2C3C]">Partners</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-0 md:mt-5">
        <PartnerItem />
        <PartnerItem />
        <PartnerItem />
      </div>
    </div>
  );
}

function PartnerItem() {
  return (
    <div className="mt-10 md:mt-0 p-5 shadow-lg w-full md:w-[380px]">
      <div>
        <p className="text-semibold">Ministry of Environment</p>
      </div>
      <div className="mt-2">
        <p className="text-md text-[#555555] font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
          distinctio quia iste porro amet possimus enim dolorum corrupti cum
          vel, nobis fugit non magnam doloribus reprehenderit, molestiae
          temporibus aperiam dolores.
        </p>
      </div>
      <div className="mt-3">
        <div className="border border-[#555555] w-fit py-1 px-5 rounded-md cursor-pointer">
          <p>Learn More</p>
        </div>
      </div>
    </div>
  );
}
