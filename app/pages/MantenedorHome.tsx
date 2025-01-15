import { useMutation, useQuery } from "@apollo/client";

import { SPOT_MUTATION_ADD } from "~/graphql/querys/spots";
import ListadoSpots from "./ListadoSpots";

const MantenedorHome = () => {

  const [mutateFunction, { data, loading, error }] = useMutation(SPOT_MUTATION_ADD);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const values = {
      sensor_id: form.sensor_id.value,
      sensor_status: form.sensor_status.checked,
      sensor_location: form.sensor_location.value,
      sensor_type: form.sensor_type.value
    }

    mutateFunction({
      variables: {
        sensorId: values.sensor_id,
        sensorType: values.sensor_type,
        sensorStatus: values.sensor_status,
        sensorLocation: values.sensor_location
      }
    });

    if (!loading && !error) {
      console.log(data);
    }

    console.log(values);
  }

  return (
    <section className='min-h-[80vh] flex flex-col gap-4'>
      <header>
        <h1 className='text-xl font-semibold'>Mantenedor de spots</h1>
        <p>Este mantenedor es un CRUD clásico, ejecuta las operaciones de CREATE, READ, DELETE Y UPDATE utilizando GRAPHQL</p>
      </header>
      <div className='mt-5'>
        <form className='grid grid-cols-4 gap-4' onSubmit={handleSubmit}>
          <div className='col-span-1'>
            <label htmlFor="sensor_id" className='block text-sm font-medium text-gray-700'>Sensor ID</label>
            <input type="text" id="sensor_id" name="sensor_id" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm' />
            <button type="submit" className='mt-4 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500 w-full'>Submit</button>
          </div>
          <div className='col-span-1'>
            <label htmlFor="sensor_status" className='block text-sm font-medium text-gray-700'>Sensor Status</label>
            <input type="checkbox" id="sensor_status" name="sensor_status" className='mt-1 block' />
          </div>
          <div className='col-span-1'>
            <label htmlFor="sensor_location" className='block text-sm font-medium text-gray-700'>Sensor Location</label>
            <input type="text" id="sensor_location" name="sensor_location" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm' />
          </div>
          <div className='col-span-1'>
            <label htmlFor="sensor_type" className='block text-sm font-medium text-gray-700'>Sensor Type</label>
            <input type="text" id="sensor_type" name="sensor_type" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm' />
          </div>
        </form>
      </div>
      <ListadoSpots />
    </section>
  );
}

export default MantenedorHome;