import React from 'react'
import ComingSoon from '../assets/ComingSoon'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import { RouteType } from './routeType'
// import { urls } from '../redux/ApiHandler/BackendAPI'
// import ConfigureTheme from '../pages/themesettings/ConfigureTheme/ConfigureTheme'
// import Branding from '../pages/themesettings/Branding/Branding'
// import ErrorPage from '../assets/ErrorPage'
// import ChooseThemePage from '../pages/themesettings/ChooseTheme/ChooseThemePage'


// export const configurethemeUrl = urls.apiUrl.replace(/^.*\/\/[^\/]+/, '') + '/configuretheme/page';
// export const brandingUrl = urls.apiUrl.replace(/^.*\/\/[^\/]+/, '') + '/branding/form';
// export const choosethemeUrl = urls.apiUrl.replace(/^.*\/\/[^\/]+/, '') + '/landing/page1';

export const appRoutes: RouteType[] = [
  {
    path: '/',
    element: <Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path: "*",
    element: <ComingSoon />
  }
]