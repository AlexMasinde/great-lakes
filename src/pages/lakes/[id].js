import Footer from "@/components/footer";
import CommonPageHeader from "@/components/commonPageHeader";
import LakeDetails from "@/components/lakeDetails";
import { lakeDetails } from "@/utils/lakeDetails";

export default function Lake({ postData }) {
  const { name } = postData;
  return (
    <div>
      <CommonPageHeader title={name} />
      <div>
        <LakeDetails lakeData={postData} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [
    { params: { id: "victoria" } },
    { params: { id: "albert" } },
    { params: { id: "kivu" } },
    { params: { id: "malawi" } },
    { params: { id: "turkana" } },
    { params: { id: "tanganyika" } },
    { params: { id: "edward" } },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postId = params.id;
  const postData = lakeDetails[postId];

  return {
    props: {
      postData,
    },
  };
}
