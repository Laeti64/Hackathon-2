import React from "react";
import Table from "../../src/components/organisms/Table";

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
        cars.map((car) => <h1 key={car.id}>{car.name}</h1>)
      )}
    </div>
  );
}
export default Cars;
