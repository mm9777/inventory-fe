import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilCalculator}   customClassName="nav-icon" />,
     
  },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
   
      
  {
    component: CNavItem,
    name: 'Product',
    to: '/Product/Product',
    icon: <CIcon icon={cilNotes}  customClassName="nav-icon" />,
    
  },
  {
    component: CNavItem,
    name: 'Bill',
    to: '/Bill/Bill',
    icon: <CIcon icon={cilChartPie}    customClassName="nav-icon" />,
    
  },
      // {
      //   component: CNavItem,
      //   name: 'Product',
      //   to: '/Product/Product',
      // },
    
    
  
   
       
      
    

  
  {
    component: CNavGroup,
    name: 'Reports',
    to: '/Bill',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'BuyerReports',
        to: '/Reports/BuyerReports',
      },
      {
        component: CNavItem,
        name: 'SellerReports',
        to: '/Reports/SellerReports',
      },
       
      
    ]

  },
  
 
]

export default _nav
