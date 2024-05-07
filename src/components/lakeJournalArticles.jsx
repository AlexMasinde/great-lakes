import React, { useState } from "react";
import LakeArticleItem from "./lakeArticleItem";
import shortid from "shortid";
import { articles } from "@/utils/articles";

const ITEMS_PER_PAGE = 10;

export default function LakeJournalArticles({ slug }) {
  const [currentPage, setCurrentPage] = useState(1);
  const articleList = articles[slug];
  const sortedArticles = articleList.sort((a, b) => b.year - a.year)
  const requiresPagination = articleList.length > 10;



  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = requiresPagination
    ? sortedArticles.slice(indexOfFirstItem, indexOfLastItem)
    : sortedArticles;



  return (
    <div>
      {currentItems.map((article) => (
        <LakeArticleItem
          key={shortid.generate()}
          link={article.link}
          year={article.year}
          title={article.name}
        />
      ))}
      {requiresPagination ? (
        <div className="text-center my-10">
          <button
            className="border border-[#555555] py-1 px-3 rounded-md"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-md mx-4">{currentPage}</span>
          <button
            className="border border-[#555555] py-1 px-3 rounded-md"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={indexOfLastItem >= articleList.length}
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
