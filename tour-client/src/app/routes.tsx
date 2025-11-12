import React from 'react'
import{ RouteObject} from 'react-router-dom'
import Layout from './layout'
import  Home  from '@/pages/Home'




export  const routes :RouteObject[] = [ 
    {

    path:'/',
    element:<Layout/>,
    children:[
        { index:true, element:<Home />},
    ],

}]

