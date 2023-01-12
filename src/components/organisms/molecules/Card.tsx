import React from "react";
import { TCar } from "../../../types/trypes";
import Image from "next/image";

type Props = Partial<TCar>;

function Card(car: Props) {
  console.log(car);

  const { id, brandId, model, imgUrl } = car;
  return (
    <div
      key={id}
      className="w-[80%] h-full bg-slate-400 m-auto mt-10 rounded-xl">
      <Image
        className="rounded-t-xl"
        src={imgUrl!}
        alt={model!.name}
        width={400}
        height={400}
      />
      <h1>
        {model!.brand.name} {model!.name}
      </h1>
    </div>
  );
}

export default Card;
