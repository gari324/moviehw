import "./Global.css";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import Header from "./components/Header/Header";
import { movieLoader } from "./lib";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/movie/:id" loader={movieLoader} element={<MoviePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
