import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import { Home } from "layouts/home";
import { NotFound } from "layouts/not-found";
import { Login } from "layouts/login";

const routesList = [
  { path: "/", component: <Home /> },
  { path: "/login", component: <Login /> },
];

export const Routes = () => {
  const loadRoutes = () =>
    routesList.map(({ path, component }) => (
      <Route key={path} path={path} element={component} />
    ));

  return (
    <BrowserRouter>
      <Switch>
        {loadRoutes()}
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};
