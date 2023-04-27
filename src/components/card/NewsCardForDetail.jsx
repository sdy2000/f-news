import React from "react";
import { Link } from "react-router-dom";

const NewsCardForDetail = ({ moreNews }) => {
  return (
    <div className="flex flex-col gap-4">
      {moreNews.map((news) => (
        <Link
          className="flex flex-col sm:flex-row"
          to={`/news/${news.slug}`}
          key={news.newsId}
        >
          <img
            className="w-full h-52 xs:h-72 sm:w-48 sm:min-w-[12rem] sm:h-24 object-cover mb-3"
            src={`./assets/img/${news.image}`}
            alt={news.title}
          />
          <div className="flex flex-col sm:justify-around gap-2 px-3">
            <h3 className="text-p font-semibold font-serif">{news.title}</h3>
            <span className="text-t text-sm">{news.createDate}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewsCardForDetail;
