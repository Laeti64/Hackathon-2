import React from "react";
import { TCar } from "../../src/types/trypes";
import Card from "../../src/components/organisms/molecules/Card";
import carFetcher from "../../services/carFetcher";

type Props = {};

function Cars({}: Props) {
  const [cars, setCars] = React.useState<TCar[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    carFetcher.getCars().then((cars) => {
      setCars(cars as TCar[]);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        cars.map((car) => <Card key={car.id} {...car} />)
      )}
    </div>
  );
}
export default Cars;
