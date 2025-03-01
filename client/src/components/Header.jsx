import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="px-8 py-3 border-b border-slate-600">
      <nav className="flex items-center justify">
        <Link to="/">
          <img src="../logo.png" alt="logo" className="h-20 w-20" />
        </Link>
        <h2 className="text-xl">Erp System</h2>
      </nav>
    </header>
  );
}

export default Header;
