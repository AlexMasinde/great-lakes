import CommonPageHeader from "@/components/commonPageHeader";
import Footer from "@/components/footer";
import LakeArticlesHome from "@/components/lakeArticlesHome";

export default function Resources() {
  return (
    <div>
      <CommonPageHeader title="Resources" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="my-4">
          <p className="md:text-xl border-l-2 border-[#ffcc00] pl-3 font-extralight">
            Journal Articles
          </p>
        </div>
        <LakeArticlesHome />
      </div>
      <Footer />
    </div>
  );
}
