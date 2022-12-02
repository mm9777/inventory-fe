import React from 'react'
 

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
 
const AddProduct = React.lazy(() => import('./views/Product/AddProduct'))
const Billing = React.lazy(()=> import('./views/Bill/Billing'))
const Product = React.lazy(()=> import('./views/Product/ViewProduct'))
const Bill = React.lazy(()=> import('./views/Bill/ViewBill'))
const BuyerReports = React.lazy(()=> import('./views/Reports/BuyerReports'))
const SellerReports = React.lazy(()=> import('./views/Reports/SellerReports'))
// const QrScanner = React.lazy(()=> import('./components/QrScanner')) 
const routes = [
  { path: '/Home', name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  {path: '/', exact:true, name:'Signin'},
  {path: '/Product', name:'Product',component:AddProduct, exact:true},
  {path:'/Product/AddProduct', name:'AddProduct', element:AddProduct,exact:true},
  {path: '/Bill', name:'Bill',component:Billing, exact:true},
  {path:'/Bill/Billing', name:'Billing',element:Billing,exact:true},
  {path: '/Product', name:'Product', component:Product, exact:true},
  {path:'/Product/Product', name:'Product', element:Product,exact:true},
  {path: '/Bill', name:'Bill',component:Bill, exact:true},
  {path:'/Bill/Bill', name:'Billing',element:Bill,exact:true},
  {path:'/Reports', name:'Reports',component:BuyerReports,exact:true},
  {path:'/Reports/BuyerReports', name:'BuyerReports',element:BuyerReports,exact:true},
  {path:'/Reports', name:'Reports',component:SellerReports,exact:true},
  {path:'/Reports/SellerReports', name:'SellerReports',element:SellerReports,exact:true},
  // {path:'/QrScanner',name:'QrScanner',component:QrScanner,exact:true},
  // {path:'/Reports/QrScanner',name:'QrScanner',element:QrScanner,exact:true}
  


]

export default routes
