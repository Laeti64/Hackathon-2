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
        agency &&
        agency.cars &&
        agency?.cars.map((car) => <Card key={car.id} {...car} />)
      )}
    </div>
  );
}
export default CarsAgency;
