import React from "react";
import { TCar } from "../../../types/types";
import Image from "next/image";
import CarouselForCard from "./CarouselForCard";

type Props = Partial<TCar>;

function Card(car: Props) {
  console.log(car);

  const { id, model, imgUrl, imgUrl2, imgUrl3 } = car;
  return (
    <div
      key={id}
      className="w-[80%] h-full bg-slate-400 m-auto my-10 rounded-xl relative z-[0]">
      <CarouselForCard imgUrl={imgUrl!} imgUrl2={imgUrl2!} imgUrl3={imgUrl3!} />
      <h1>
        {model!.brand.name} {model!.name}
      </h1>
    </div>
  );
}

export default Card;
