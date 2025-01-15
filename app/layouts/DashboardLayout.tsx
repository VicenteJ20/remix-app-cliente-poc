import { Link } from "@remix-run/react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white text-zinc-900 fixed w-full top-0 z-10 border-b border-zinc-200">
        <nav className="flex justify-between items-center px-8 py-5">
          <h1 className="text-lg font-semibold">Estacionamiento inteligente DEMO</h1>
          <ul className='flex flex-row gap-2'>
            <li>
              <Link to="/home">Inicio</Link>
            </li>
            <li>
              <Link to="/mantenedor">Mantedor</Link>
            </li>
            <li>
              <Link to="/real-time">Real Time</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow pt-24 px-8 bg-zinc-100">
        {children}
      </main>
      <footer className="bg-white text-zinc-800 p-4 text-center border-t border-zinc-200">
        <p>POC FRONTEND ESTACIONAMIENTO INTELIGENTE (FRONT CON REMIX)</p>
      </footer>
    </div>
  );
}
