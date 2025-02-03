import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./Route/Route";
import { useEffect } from "react";
//@ts-expect-error aosNotFound
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ once: true, mirror: false });
    AOS.refresh();
  }, []);
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
