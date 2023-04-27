import React from "react";
import { Link } from "react-router-dom";
import { XsNewsCard } from "..";
import useWidthListenerForCard from "../../utils/windowEvent/useWidthListenerForCard";

const NewsCard = ({ news }) => {
  const showImgCard = useWidthListenerForCard();

  return showImgCard ? (
    <Link
      className="relative w-full inline-block p-2 hover:scale-105 ease-in-out duration-500"
      to={`/news/${news.slug}`}
    >
      <img
        className="sm:h-36 md:h-40 w-full object-cover"
        src={`./assets/img/${news.image}`}
        alt={news.title}
      />
      <div className="card-shadow absolute inset-2 sm:h-36 md:h-40 sm:w-56 md:w-72"></div>
      <div className="flex flex-col justify-start gap-3 mt-2 px-3 whitespace-normal break-all sm:w-56 md:w-72">
        <h3 className="text-lg font-extrabold xl:text-xl text-p">
          {news.title}
        </h3>
        <h5 className="text-s hidden md:inline text-base xl:text-lg max-h-20 overflow-hidden">
          {news.description}
        </h5>
        <span className="text-t self-start border-l-4 border-red-900 pl-3 mt-3">
          {news.category}
        </span>
      </div>
    </Link>
  ) : (
    <XsNewsCard title={news.title} category={news.category} slug={news.slug} />
  );
};

export default NewsCard;
