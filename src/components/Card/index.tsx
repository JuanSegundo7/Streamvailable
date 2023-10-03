import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface Card {
  title: string;
  image: string;
  id: string;
  country: string;
}

const Card = ({ image, title, id, country }: Card) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/media/${id}?country=${country}`);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        onClick={handleClick}
        src={image === "N/A" ? "/imgs/not-found.png" : image}
        width={200}
        height={300}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.target as HTMLImageElement;
          target.src = "/imgs/not-found.png";
        }}
        alt={title}
        className={`h-[300px] cursor-pointer ${
          (image === "N/A" && "object-cover") ||
          (image === undefined && "object-cover")
        }`}
      />
      <div className="group relative flex justify-center">
        <button className="text-sm text-white w-36 truncate">{title}</button>
        <span className="absolute top-6 scale-0 rounded bg-blue p-2 text-xs text-white group-hover:scale-100 shadow-sm truncate">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Card;
