import {website_routes}  from './routes_app'

export const appRoutes = () => {
  let routes = [...website_routes ];
  return routes;
}

export const routes = appRoutes()
