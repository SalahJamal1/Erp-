import { Link, Outlet } from "react-router-dom";

function SideBar() {
  return (
    <ul className="border-r border-slate-600 px-12 py-12">
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
}

export default SideBar;
