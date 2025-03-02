import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen bg-zinc-100">
      <Header />
      <div className="grid grid-cols-[12rem_1fr] h-full gap-12">
        <SideBar />
        <div className="overflow-y-scroll py-12 mr-12">
          <main className="max-w-7xl mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
