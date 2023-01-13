import { User } from "@prisma/client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import carFetcher from "../../../../services/carFetcher";
import { TAgency, TCar } from "../../../../src/types/types";
import agencyFetcher from "../../../../services/agenciesFetcher";

function UpdateCar(id: string) {
  const router = useRouter();
  const [car, setCar] = useState<TCar>();
  const [agency, setAgency] = useState<TAgency>();

  React.useEffect(() => {
    console.log(router.query);
    carFetcher.getCarById(router.query.id as string).then((data) => {
      if (data) {
        setCar(data);
      }
    });
  }, [router.query]);
  console.log(router.query.id, car);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setCar({ ...car, [e.target.name]: e.target.value });
  // };
  return (
    <>
      <div className=" bg-emerald-50 flex flex-col justify-center align-middle items-center">
        <h1 className="from-neutral-500 font-serif  mt-10 flex text-center mx-auto">
          You just have been returned a car, please update its mileAge and the
          Agency if needed
        </h1>

        <form className="flex flex-col w-full m-auto align-middle mt-10">
          <input
            // onChange={(e) => handleChange(e)}
            className="form"
            type="select"
            name="agencyId"
            placeholder="Agency"
          />
          <input
            // onChange={(e) => handleChange(e)}
            className="form"
            type="number"
            name="mileAge"
            placeholder="Mile Age"
          />

          <button
            type="button"
            //   onClick={handleSubmit}
            className="border border-gray-500 flex w-40 h-8 m-auto mt-6  bg-gradient-to-r from-[#43BF9C] via-green-300 to-[#43BF9C] rounded-md justify-center"
          >
            Quick Update
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateCar;
