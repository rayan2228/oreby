import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Shop from "./pages/Shop";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
