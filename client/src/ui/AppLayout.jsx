import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <header className="px-8 py-3 border-b border-slate-600">
        <nav className="flex items-center justify">
          <Link to="/">
            <img src="./logo.png" alt="logo" className="h-20 w-20" />
          </Link>
          <h2 className="text-xl">Erp System</h2>
        </nav>
      </header>
      <div className="grid grid-cols-[12rem_1fr] h-full gap-12">
        <ul className="border-r border-slate-600 px-12 py-12">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <div className="overflow-y-scroll py-12">
          <main className="max-w-7xl mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
