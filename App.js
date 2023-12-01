import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contct";
import RestaurantMenu from "./Components/RestaurantMenu";
import Mission from "./Components/Mission";
import Products from "./Components/Products";

import { Provider } from "react-redux";
import UserContext from "./utils/UserContext";
// import store from "./utils/store";

const Grocery = lazy(()=> import("./Components/Grocery"))

// const RestaurantCard=({restName,cuisine,rating}) =>{} . -> destructure on the fly

const AppLayout = () => {
  const [loggedInUser, setLoggedInUser] = useState({loggedInUser:{}});
  useEffect(()=>{
    user={loggedInUser: {
      userName: "Rasmita-dash"
  }}
  setLoggedInUser(user);
  },[]);
  
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/About", element: <About />, 
      // children:[
      //   {path: "/Mission", element: <Mission/>},        
      //   {path: "/Products", element: <Products/>}
      // ] 
    },
      { path: "/Contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      {path:"/Grocery", element:<Suspense fallback="<h1>Loading...</h1>"><Grocery/></Suspense>}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
