import CommonPageHeader from "@/components/commonPageHeader";
import Footer from "@/components/footer";

export default function NewsPage() {
  return (
    <div className="">
      <CommonPageHeader title="News" />
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              Exploring the Wonders of Lake Victoria
            </h2>
            <p className="mt-4 text-gray-700">By Sarah Johnson | May 4, 2024</p>
            <p className="mt-4 text-gray-800">
              Lake Victoria, located in East Africa, is the largest lake in
              Africa and the second-largest freshwater lake in the world. It is
              a vital resource for millions of people living in the surrounding
              region, providing water for drinking, fishing, agriculture, and
              transportation.
            </p>
            <p className="mt-4 text-gray-800">
              The lake is renowned for its rich biodiversity, supporting a
              diverse array of plant and animal species. It is home to numerous
              endemic fish species, including the Nile perch and the tilapia,
              which are important for both local economies and international
              trade.
            </p>
            <p className="mt-4 text-gray-800">
              In addition to its ecological significance, Lake Victoria also
              holds cultural and historical importance for the communities that
              inhabit its shores. It has served as a source of inspiration for
              artists, writers, and musicians throughout history, and its
              stunning landscapes attract tourists from around the globe.
            </p>
            <p className="mt-4 text-gray-800">
              However, Lake Victoria faces various challenges, including
              pollution, overfishing, and invasive species. Efforts are underway
              to address these issues and ensure the long-term sustainability of
              this precious resource.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
