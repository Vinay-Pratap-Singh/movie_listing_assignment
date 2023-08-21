import { IindividualMovieData } from "@/helper/intances";
import Image from "next/image";
import React from "react";

type Iprop = {
  data: IindividualMovieData;
};

const ProductCard = ({ data }: Iprop) => {
  return (
    <div className="shadow shadow-dark-50 p-2 rounded-lg w-60 space-y-1 self-stretch">
      <Image
        className="rounded-lg"
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL + data?.poster_path}`}
        alt="poster"
        width={300}
        height={300}
      />
      <h1 className="text-center font-semibold text-xl line-clamp-1">
        {data?.original_title}
      </h1>
      <p className="line-clamp-3 text-sm">{data?.overview}</p>
      <p className="text-sm font-semibold">
        Language : {data?.original_language}
      </p>
      <p className="text-sm font-semibold">
        Released in : {data?.release_date}
      </p>
      <p className="text-sm font-semibold">
        Popularity : {data?.vote_average.toFixed(0)} {" / "}10
      </p>
    </div>
  );
};

export default ProductCard;
