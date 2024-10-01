import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import {Spinner} from "@components"
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Spinner/>}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
