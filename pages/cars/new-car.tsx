import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TCar, TCategory } from "../../src/types/types";
import carFetcher from "../../services/carFetcher";
import categoryFetcher from "../../services/categoryFetcher";

type Props = {};

function NewCar({}: Props): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [cars, setCars] = useState<TCar[]>([]);
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carFetcher.getCars().then((data) => {
      if (data) {
        setCars(data);
      }
    });
    categoryFetcher.getCategories().then((data) => {
      if (data) {
        setCategories(data);
      }
    });
    setLoading(false);
  }, []);

  console.log(cars);
  console.log(categories);

  return (
    <form
      className="h-flex flex-col w-full m-auto align-middle h-screen mt-10"
      onSubmit={handleSubmit((data) => console.log(data))}>
      <input className="form" placeholder="year" {...register("year")} />
      <input
        className="form w-[80%]"
        placeholder="1rst image url"
        {...register("imgUrl")}
      />
      <input
        className="form"
        placeholder="2nd image url"
        {...register("imgUrl2")}
      />
      <input
        className="form"
        placeholder="3rd image url"
        {...register("imgUrl3")}
      />
      <input
        className="form"
        placeholder="gray card url"
        {...register("grayCardUrl")}
      />
      <input
        className="form"
        placeholder="description"
        {...register("description")}
      />
      <input
        className="form"
        placeholder="autonomie"
        {...register("autonomie")}
      />
      <input className="form" placeholder="mile age" {...register("mileAge")} />
      <input
        className="form"
        placeholder="number of places"
        {...register("nbPlaces")}
      />
      <input
        className="form"
        placeholder="batterie"
        {...register("batterie")}
      />
      <input
        className="form"
        placeholder="puissance"
        {...register("puissance")}
      />
      <input
        className="form"
        placeholder="capacity"
        {...register("capacity")}
      />
      <input
        className="form"
        placeholder="number of doors"
        {...register("nbPortes")}
      />
      <input
        className="form"
        placeholder="bar code url"
        {...register("barCodeUrl")}
      />
      <input
        className="form"
        placeholder="registration"
        {...register("registration")}
      />
      <label className="label">is available</label>
      <select className="form" {...register("isAvailable")}>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <label className="label">Autonomous to drive</label>
      <select className="form" {...register("autonomous")}>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <input
        className="form"
        placeholder="time to charge"
        {...register("tempsCharge")}
      />
      <input className="form" placeholder="price/km" {...register("prixKm")} />
      <input
        className="form"
        placeholder="price/day"
        {...register("prixJour")}
      />
      <select className="form" {...register("categoryId")}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        className="form"
        placeholder="capacity"
        {...register("capacity")}
      />
      <input className="form" {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input className="form" {...register("age", { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input
        className="border border-gray-500 flex w-40 h-8 m-auto my-2   bg-gradient-to-r from-[#43BF9C] via-green-300 to-[#43BF9C] rounded-md justify-center"
        type="submit"
      />
    </form>
  );
}

export default NewCar;
