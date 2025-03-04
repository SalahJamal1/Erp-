import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen bg-zinc-100">
      <Header />
      <div className="grid grid-cols-[18rem_1fr] gap-12 overflow-y-scroll">
        <SideBar />
        <div className="overflow-y-scroll py-12">
          <main className="max-w-7xl mx-auto mr-12">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
