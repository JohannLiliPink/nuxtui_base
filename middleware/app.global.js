import { useAppStore } from '~/stores/app';

import {app_routes}  from '~/app/routes_app';
import {auth_routes}  from '~/app/routes_auth';

import {website_routes}  from '~/app/website_without_authentication';


export default defineNuxtRouteMiddleware( async ( to , from ) => {

  const store_app = useAppStore();

  // return;

  
  if (process.client)
  {
    if ( store_app.urlApi == '' )
    {
      await $fetch( '/api/app' , {
        method: 'GET',
      })
      .then( ( response ) => {
        store_app.urlApi = response.urlApi;
        return response;
      })
      .catch((error) => {
        return error; 
      });
    }

  }

  const routesUserWithAuth = async () => {
    let routes = [

      { path:'/' },
      { path:'/login' },
      { path:'/auth/login' },
      { path:'/landing-page' },

    ];
    let routes_ = [ ...routes ];
    let validator = false;
    routes_.forEach( element => {
      if ( to.path === element.path )
      {
        validator = true;
      }
    });
    return await validator;
  };
  const routesUserCustomerWithAuth = async () => {
    let routes_ = false;

    let routes_customer = [ 
      { name: 'gift_voucher_card' }
    ];

    let routes_validate = [ ...app_routes , ...routes_customer ];

    routes_validate.forEach(element => {
      if ( to.name === element.name )
      {
        routes_ = true;
      }
    });

    return await routes_;
  };
  const routesWebsiteWithAuth = async () => {
    let routes_ = false;

    // let routes_customer = [ 
    //   { name: 'gift_voucher_card' }
    // ];
    // let routes_validate = [ ...website_routes , ...routes_customer ];

    let routes_validate = [ ...website_routes ];

    routes_validate.forEach(element => {
      if ( to.name === element.name )
      {
        routes_ = true;
      }
    });

    return await routes_;
  };
  const routesAuthentication = async () => {
    let routes_ = false;
    auth_routes.forEach(element => {
      if ( to.name === element.name )
      {
        routes_ = true;
      }
    });
    return await routes_;
  };

  if ( process.client )
  {

    let routes_website = await routesWebsiteWithAuth();
    if ( routes_website )
    {
      return;
    }



    if ( store_app.isAuth === false || typeof store_app.user.token == undefined )
    {
      let validator = await routesAuthentication();
      if ( validator === true )
      {
        return; 
      }
      let routes_user_with_auth = await routesUserCustomerWithAuth();
      if ( routes_user_with_auth )
      {
        return navigateTo('/login');
      }
    }
    else
    {
      let validator = await routesUserWithAuth();

      $fetch( store_app.urlApi+'validate-token' , {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${store_app.user.token}`
        }
      })
      .then( ( response ) => {

        if (response.status == 'error' )
        { 
          if ( response.type == 'expired' )
          {
            store_app.isAuth = false;
            store_app.user = {};
          };
        }

        if (response.status == 'success' && !validator )
        {
          store_app.last_url = to.path;
        }
        
      })
      .catch( error => {

        store_app.isAuth = false;
        store_app.user = {};
        
      });

      if ( validator === true )
      { 
        if (store_app.last_url !== '' )
        {
          // window.location.href = store_app.last_url;
          return navigateTo( store_app.last_url );
        }

        window.location.href = '/dashboard';
        return navigateTo('/dashboard'); 
      }
    }
   
  }

})