import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Accounting from "./pages/Accounting";
import AccountFrom from "./components/AccountFrom";
import Chart_Accounts from "./components/Chart_Accounts";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
