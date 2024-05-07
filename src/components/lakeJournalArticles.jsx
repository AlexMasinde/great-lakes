import React, { useState } from "react";
import LakeArticleItem from "./lakeArticleItem";
import shortid from "shortid";
import { articles } from "@/utils/articles";

const ITEMS_PER_PAGE = 10;

export default function LakeJournalArticles({ slug }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [titleSearchQuery, setTitleSearchQuery] = useState("");
  const [authorSearchQuery, setAuthorSearchQuery] = useState("");
  const articleList = articles[slug];
  const sortedArticles = articleList.sort((a, b) => b.year - a.year);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTitleSearch = (e) => {
    setTitleSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching by title
  };

  const handleAuthorSearch = (e) => {
    setAuthorSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching by author
  };

  const filteredArticles = sortedArticles.filter((article) =>
      article.name.toLowerCase().includes(titleSearchQuery.toLowerCase()) &&
      article.authors?.toLowerCase().includes(authorSearchQuery.toLowerCase())
  );


  const requiresPagination = filteredArticles.length > ITEMS_PER_PAGE;

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = requiresPagination
      ? filteredArticles.slice(indexOfFirstItem, indexOfLastItem)
      : filteredArticles;

  return (
      <div>
        <div>
          <div className="my-4 px-2">
            <p className="font-light">Search Articles</p>
          </div>
          <div className="flex w-full ">
            <div className="flex-1 pr-4">
              <input
                  type="text"
                  placeholder="Search by title..."
                  value={titleSearchQuery}
                  onChange={handleTitleSearch}
                  className="border border-gray-300 rounded-md px-3 py-1 mb-4 outline-none w-full"

              />
            </div>
            <div className="flex-1 pl-4">
              <input
                  type="text"
                  placeholder="Search by author..."
                  value={authorSearchQuery}
                  onChange={handleAuthorSearch}
                  className="border border-gray-300 rounded-md px-3 py-1 mb-4 outline-none w-full"
              />
            </div>
          </div>
        </div>
        {currentItems.map((article) => (
            <LakeArticleItem
                key={shortid.generate()}
                link={article.link}
                year={article.year}
                title={article.name}
                authors={article.authors}
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
                  disabled={indexOfLastItem >= filteredArticles.length}
              >
                Next
              </button>
            </div>
        ) : null}
      </div>
  );
}
