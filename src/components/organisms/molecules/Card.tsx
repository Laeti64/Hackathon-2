import React from "react";
import { TCar } from "../../../types/trypes";
import Image from "next/image";

type Props = Partial<TCar>;

function Card({ id, brandId, modelId, imgUrl }: Props) {
  return (
    <div key={id} className="w-[80%] h-[5em] bg-slate-400">
      <Image src={imgUrl!} alt={modelId!} />
      <h1>
        {brandId} {modelId}
      </h1>
    </div>
  );
}

export default Card;
