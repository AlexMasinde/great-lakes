import Footer from "@/components/footer";
import CommonPageHeader from "@/components/commonPageHeader";
import LakeDetails from "@/components/lakeDetails";

export default function Lake() {
  return (
    <div>
      <CommonPageHeader title="Lake Victoria" />
      <div>
        <LakeDetails />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
