import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import UserList from "./pages/UserList";
import FavoriteUser from "./pages/FavoriteUser";
import AddUserForm from "./pages/AddUserForm";
import NotFound from "./pages/NotFound";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<UserList />} />
          <Route path="/favorite-users" element={<FavoriteUser />} />
          <Route path="/add-user" element={<AddUserForm />} />

           <Route path="*" element={<NotFound />} />

        </Route>
      </>
    )
  );

  return (
    <div className={`app`}>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

const Root = () => {


  return (
    <div className={`App`}>
      <Outlet />
    </div>
  );
};
