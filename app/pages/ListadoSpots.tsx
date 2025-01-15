import { useQuery } from "@apollo/client";
import { Link } from "@remix-run/react";
import { SPOTS_QUERY } from "~/graphql/querys/spots";

const ListadoSpots = () => {
  const { loading, error, data } = useQuery(SPOTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.spots.map((spot: any) => (
          <Link to={`/sensorid/${spot.sensorId}`} key={spot.sensorId} className="block p-4 border rounded-lg shadow-lg hover:bg-gray-100">
            <p className="font-bold">Sensor ID: {spot.sensorId}</p>
            <p>
              <span className="font-bold">Status:</span> {spot.sensorStatus ? 'Ocupado' : 'Libre'}
            </p>
            {spot.sensorLocation && (
              <p>
                <span className="font-bold">Location:</span> {spot.sensorLocation}
              </p>
            )}
            <p>
              <span className="font-bold">Type:</span> {spot.sensorType}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ListadoSpots;