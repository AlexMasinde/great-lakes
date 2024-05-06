import LakeArticleItem from "./lakeArticleItem";
import shortid from "shortid";
import { articles } from "@/utils/articles";

export default function LakeArticlesHome() {
  const victoria = articles["victoria"].slice(0, 5);
  const albert = articles["albert"].slice(0, 5);
  const tanganyika = articles["tanganyika"].slice(0, 5);
  const edward = articles["edward"].slice(0, 5);
  const turkana = articles["turkana"].slice(0, 5);
  const malawi = articles["malawi"].slice(0, 5);
  const kivu = articles["kivu"].slice(0, 5);

  return (
    <>
      <LakeSampleArticles currentItems={victoria} title="Lake Victoria" />
      <LakeSampleArticles currentItems={edward} title="Lake Edward" />
      <LakeSampleArticles currentItems={albert} title="Lake Albert" />
      <LakeSampleArticles
        currentItems={malawi}
        title="Lake Malawi/Niassa/Nyasa"
      />
      <LakeSampleArticles currentItems={turkana} title="Lake Turkana" />
      <LakeSampleArticles currentItems={kivu} title="Lake Kivu" />
      <LakeSampleArticles currentItems={tanganyika} title="Lake Tanganyika" />
    </>
  );
}

function LakeSampleArticles({ currentItems, title }) {
  return (
    <div className="mt-4">
      <div>
        <p className="font-extralight">{title}</p>
      </div>
      {currentItems.map((article) => (
        <LakeArticleItem
          key={shortid.generate()}
          link={article.link}
          year={article.year}
          title={article.name}
        />
      ))}
    </div>
  );
}
