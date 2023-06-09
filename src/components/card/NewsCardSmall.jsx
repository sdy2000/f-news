import React from "react";
import { Link } from "react-router-dom";
import { XsNewsCard } from "..";
import useWidthListenerForCard from "../../utils/windowEvent/useWidthListenerForCard";

const NewsCardSmall = ({ news, showDescription = true }) => {
  const showImgCard = useWidthListenerForCard();

  return showImgCard ? (
    <Link
      className="relative w-full hover:scale-105 duration-500 col-span-1"
      to={`/news/${news.slug}`}
    >
      <img
        className="sm:h-28 md:h-32 w-full object-cover"
        src={`./assets/img/${news.image}`}
        alt={news.title}
      />
      <div className="card-shadow absolute inset-0 sm:h-28 md:h-32  w-[100%]"></div>
      <div className="flex flex-col justify-start gap-3 mt-2 px-3 break-words w-[100%]">
        <h3 className="text-p text-lg font-extrabold xl:text-xl">
          {news.title}
        </h3>
        {showDescription && (
          <h5 className="text-s hidden md:inline text-base xl:text-lg max-h-[4.5rem] lg:max-h-20 overflow-hidden">
            {news.description}
          </h5>
        )}
        <span className="text-t self-start border-l-4 border-red-900 pl-3">
          {news.category}
        </span>
      </div>
    </Link>
  ) : (
    <XsNewsCard title={news.title} category={news.category} slug={news.slug} />
  );
};

export default NewsCardSmall;
