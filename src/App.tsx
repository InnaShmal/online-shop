import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./Pages/MainPage/mainPage";
import SecondPage from "./Pages/SecondPage/secondPage";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/products", element: <SecondPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
