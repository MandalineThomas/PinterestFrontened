import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import CreatePin from "./Pages/CreatePin/CreatePin.jsx";
import Boards from "./Pages/Boards.jsx";
import Pins from "./Pages/Pins.jsx";
import BoardDetail from "./Pages/BoardDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        children:[
          { index: true, element: <Pins /> },
          { path: "boards", element: <Boards /> },
          { path: "boards/:boardName", element: <BoardDetail /> },
        ],
      },
      { path: "createpin", element: <CreatePin /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}