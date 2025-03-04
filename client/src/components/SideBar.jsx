import { Link } from "react-router-dom";

function SideBar() {
  return (
    <ul className="border-r border-slate-600 px-12 py-12 space-y-4">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/account">accounting</Link>
      </li>
      <li>
        <Link to="/account/journal">Journal Entry</Link>
      </li>
      <li>
        <Link to="/account/journals">Journals</Link>
      </li>
    </ul>
  );
}

export default SideBar;
