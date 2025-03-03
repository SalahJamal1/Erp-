import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import AccountFrom from "./components/AccountFrom";
import Chart_Accounts from "./components/Chart_Accounts";
import Home from "./pages/Home";
import Journal from "./components/Journal";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/account",
        element: <Chart_Accounts />,
      },
      {
        path: "account/addAccount",
        element: <AccountFrom />,
      },
      {
        path: "account/:id",
        element: <AccountFrom />,
      },
      {
        path: "account/journal",
        element: <Journal />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
