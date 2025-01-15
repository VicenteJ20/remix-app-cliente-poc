import { useQuery } from '@apollo/client'
import { Link } from "@remix-run/react";
import { useEffect } from 'react';
import client from '~/graphql/client';
import { SPOTS_QUERY } from '~/graphql/querys/spots';

export default function HomeDashboard() {
  
  const { data, loading, error } = useQuery(SPOTS_QUERY);

  useEffect(() => {
    if (!loading && !error) {
      console.log(data);
    }
  }, [data, loading, error]);

  return (
    <section className=" min-h-[80vh] flex items-center justify-center flex-col gap-4">
      <div className='flex items-center justify-center flex-col h-full'>
        <h1 className="text-2xl font-semibold">Bienvenido a la POC de Estacionamiento Inteligente</h1>
        <p>Esta es una prueba de concepto que integra backend con DJANGO y GRAPHQL con Graphene y para el frontend React junto a Remix.</p>
      </div>
      <div className="grid grid-cols-2 gap-8 pt-5 w-[55%]">
        <div className="border border-zinc-200 p-4 text-sm bg-white rounded-lg flex gap-3 flex-col">
          <h2 className="text-lg font-semibold">Mantenedor estándar</h2>
          <p>Representa un CRUD para los lugares de estacionamiento denominado spot para este ejemplo.</p>
          <Link to="/mantenedor" className="bg-teal-600 w-full flex px-4 py-4 rounded-sm text-white text-center hover:bg-teal-500 items-center justify-center">Ir al Mantenedor Normal</Link>
        </div>
        <div className="border border-zinc-200 p-4 text-sm bg-white rounded-lg flex gap-3 flex-col">
          <h2 className="text-lg font-semibold">Realtime</h2>
          <p>Visualiza cambios en tiempo real utilizando subscripciones de GraphQL a través de Graphene</p>
          <Link to="/real-time" className="bg-teal-600 w-full flex px-4 py-4 rounded-sm text-white text-center hover:bg-teal-500 items-center justify-center">Ir al Mantenedor Normal</Link>
        </div>
      </div>
    </section>
  );
}
