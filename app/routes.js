import {app_routes}  from './routes_app';
import {auth_routes}  from './routes_auth';
import {website_routes}  from './website_without_authentication';

export const appRoutes = () => {
  let routes = [...app_routes , ...auth_routes , ...website_routes ];
  return routes;
}

export const routes = appRoutes()
