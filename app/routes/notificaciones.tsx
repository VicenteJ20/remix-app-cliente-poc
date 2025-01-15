import type { MetaFunction } from "@remix-run/node";
import DashboardLayout from "~/layouts/DashboardLayout";
import ListadoSpots from "~/pages/ListadoSpots";
import MantenedorHome from "~/pages/MantenedorHome";
import ReadFromServer from "~/pages/ReadFromServer";

export const meta: MetaFunction = () => {
  return [
    { title: "Notificaciones" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  return (
    <DashboardLayout>
      <ReadFromServer />
    </DashboardLayout>
  )
}