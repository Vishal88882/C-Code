import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Parent from "./components/Parent";
import Landing_Page from "./pages/Landing_Page"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Auth from "./pages/Auth"
import Verification from "./pages/Verification"
import Age from "./pages/Age"



export default function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <Parent />,
      children: [
        { index: true, element: <Landing_Page /> },
        { path: "Landing_Page", element: <Landing_Page /> },
        { path: "Login", element: <Login /> },
        { path: "Signup", element: <Signup /> },
        { path: "Auth", element: <Auth /> },
        { path: "Verification", element: <Verification /> },
        { path: "Age", element: <Age />}
      ]
    }
  ]);
  return (
    <RouterProvider router={routerObj} />
  )
}

