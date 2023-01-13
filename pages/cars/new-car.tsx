import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TCar, TCategory, TBrand, TModel } from "../../src/types/types";
import carFetcher from "../../services/carFetcher";
import categoryFetcher from "../../services/categoryFetcher";
import brandFetcher from "../../services/brandFetcher";
import { textChangeRangeIsUnchanged } from "typescript";
import modelFetcher from "../../services/modelFetcher";

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
  const [brands, setBrands] = useState<TBrand[]>([]);
  const [models, setModels] = useState<TModel[]>([]);

  useEffect(() => {
    const allBrandsUsed: string[] = [];
    carFetcher.getCars().then((data) => {
      if (data) {
        setCars(data);
      }
    });
    modelFetcher.getModels().then((data) => {
      if (data) {
        setModels(data);
      }
    });
    categoryFetcher
      .getCategories()
      .then((data) => {
        if (data) {
          setCategories(data);
        }
      })
      .then(() => {
        if (cars) {
          setBrands([]);
          cars.forEach((car: TCar) => {
            if (!allBrandsUsed.includes(car.model.brand.name)) {
              allBrandsUsed.push<TBrand>({
                id: car.model.brandId,
                name: car.model.brand.name,
              });
              setBrands(allBrandsUsed);
            }
          });
        }
      });
    setLoading(false);
  }, []);

  console.log(cars);
  console.log(categories);

  return (
    <form
      className="h-flex flex-col w-full h-full m-auto align-middle mt-10 "
      onSubmit={handleSubmit((data) =>
        carFetcher.createCar(data).then((data) => console.log(data))
      )}>
      <div className="input-primary">
        <label>Year</label>
        <input {...register("year")} />
      </div>
      <div className="input-primary">
        <label>1rst image url</label>
        <input {...register("imgUrl")} />
      </div>
      <div className="input-primary">
        <label>2nd image url</label>
        <input {...register("imgUrl2")} />
      </div>
      <div className="input-primary">
        <label>3rd image url</label>
        <input {...register("imgUrl3")} />
      </div>
      <div className="input-primary">
        <label>Gray card url</label>
        <input {...register("grayCardUrl")} />
      </div>
      <div className="input-primary">
        <label>Description</label>
        <input {...register("description")} />
      </div>
      <div className="input-primary">
        <label>Autonomy</label>
        <input {...register("autonomie")} />
      </div>
      <div className="input-primary">
        <label>Mile age</label>
        <input {...register("mileAge")} />
      </div>
      <div className="input-primary">
        <label>Number of places</label>
        <input {...register("nbPlaces")} />
      </div>
      <div className="input-primary">
        <label>Battery power</label>
        <input {...register("batterie")} />
      </div>
      <div className="input-primary">
        <label>Power (CV)</label>
        <input {...register("puissance")} />
      </div>
      <div className="input-primary">
        <label>Trunk capacity</label>
        <input {...register("capacity")} />
      </div>
      <div className="input-primary">
        <label>Number of doors</label>
        <input {...register("nbPortes")} />
      </div>
      <div className="input-primary">
        <label>QR Code url</label>
        <input {...register("barCodeUrl")} />
      </div>
      <div className="input-primary">
        <label>Registration</label>
        <input {...register("registration")} />
      </div>

      <div className="input-primary">
        <label>Vehicule category</label>
        <select {...register("categoryId")}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-primary">
        <label>Vehicule brand</label>
        <select {...register("brandId")}>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-primary">
        <label>Vehicule model</label>
        <select {...register("modelId")}>
          {models.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-primary">
        <label>Vehicule available</label>
        <select {...register("isAvailable")}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <div className="input-primary">
        <label>Autonomous to drive</label>
        <select {...register("autonomous")}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>

      <div className="input-primary">
        <label>Time to charge</label>
        <input {...register("tempsCharge")} />
      </div>
      <div className="input-primary">
        <label>Price €/km</label>
        <input {...register("prixKm")} />
      </div>
      <div className="input-primary">
        <label>Price €/day</label>
        <input {...register("prixJour")} />
      </div>

      <div className="input-primary">
        <label>Electrik connector type</label>

        <input
          value={"5efd3b0d-25fb-412e-b60f-386c36bef59d"}
          {...register("connectorId")}
        />
      </div>

      <input
        className="border border-gray-500 flex mb-32 w-40 h-8 m-auto bg-gradient-to-r from-[#43BF9C] via-green-300 to-[#43BF9C] rounded-md justify-center"
        type="submit"
      />
    </form>
  );
}

export default NewCar;
