import { dashboard } from "../views/dashboard.js";
import { heroView } from "../views/heroView.js";
import { loginView } from "../views/loginView.js";
import { notFound } from "../views/not-found.js";
import { registerView } from "../views/registerView.js";

const routes = {
    "/hero" : heroView,
    "/login" : loginView,
    "/register" : registerView,
    "/dashboard": dashboard,
    "/notfound": notFound,
}

export function router() {
  const hash = window.location.hash.slice(1) || "/hero";
  const route = routes[hash];

  if (route) {
    route();
  } else {
    routes['/notfound']();
  }
}
