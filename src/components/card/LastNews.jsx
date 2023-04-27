import React from "react";
import { Link } from "react-router-dom";
import { XsNewsCard } from "..";
import useWidthListenerForCard from "../../utils/windowEvent/useWidthListenerForCard";

const LastNews = ({ news }) => {
  const showImgCard = useWidthListenerForCard();

  return showImgCard ? (
    <Link
      className="relative col-span-1 row-span-1 overflow-hidden
            hover:scale-105 transition-all duration-500"
      to={`/news/${news.slug}`}
    >
      <img
        className="h-full object-cover"
        src={`./assets/img/${news.image}`}
        alt="News img"
      />

      <div className="card-shadow absolute inset-0 flex flex-col justify-end items-end gap-2 px-3 py-4">
        <h2 className="text-las text-lg font-bold lg:text-xl">{news.title}</h2>
        <span className="text-lap self-start border-l-4 border-red-900 pl-3">
          {news.category}
        </span>
      </div>
    </Link>
  ) : (
    <XsNewsCard title={news.title} category={news.category} slug={news.slug} />
  );
};

export default LastNews;
