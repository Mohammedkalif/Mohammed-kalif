import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout";
import { Routers } from "./routers";
export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={Routers.Home} element={<Layout/>}>
          <Route index element={'home'} />
          <Route path={Routers.Profile} element={'profile'} />
        </Route>
      </Routes>
    </Router>
  );
}

