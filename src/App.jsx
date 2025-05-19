import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "../src/components/MainContainer" 
import WatchPage from "./components/WatchPage";
import ErrorElement from "./components/ErrorElement";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
            path: "/",
            element: <MainContainer />,
          },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
      errorElement: <ErrorElement />,
    },
  ]);


  
  export default App;
