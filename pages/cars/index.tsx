import React from "react";
import { TCar } from "../../src/types/trypes";
import Card from "../../src/components/organisms/molecules/Card";

type Props = {};

function Cars({}: Props) {
  const [cars, setCars] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("http://localhost:3000/api/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
    console.log(cars);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        cars.map((car) => <Card key={car.id} modelId={car.modelId} />)
      )}
    </div>
  );
}
export default Cars;
