import React from "react";
import { TAgency, TCar } from "../../../src/types/types";
import Card from "../../../src/components/organisms/molecules/Card";
import agenciesFetcher from "../../../services/agenciesFetcher";
import { useRouter } from "next/router";

function CarsAgency() {
  const [cars, setCars] = React.useState<TCar[]>([]);
  const [agency, setAgency] = React.useState<TAgency>();
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  React.useEffect(() => {
    console.log(router.query);
    agenciesFetcher.getAgencyById(router.query.id as string).then((data) => {
      if (data) {
        setAgency(data);
      }
      setLoading(false);
    });
  }, [router.query]);
  console.log(agency);
  return (
    <div>
      {loading ? (
        <>Loading...</>
      ) : (
        agency && (
          <div className="flex items-center flex-col justify-center text-center align-middle m-auto">
            <h1 className="from-neutral-500 font-serif  mt-5 flex items-center text-center m-auto">
              Welcome to {agency.town} agency!{" "}
            </h1>
            <p className="from-neutral-500 font-serif  mb-5 m-auto">
              {" "}
              Here are our available cars
            </p>
          </div>
        )
      )}

      {loading ? (
        <>Loading...</>
      ) : (
        agency &&
        agency.cars &&
        agency?.cars.map((car) => <Card key={car.id} {...car} />)
      )}
    </div>
  );
}
export default CarsAgency;
