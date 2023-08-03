import React from 'react'

import AdminHeader from '../components/Layout/AdminHeader'
import Footer from '../components/Layout/Footer'
import AdminOrderDetail from "../components/Admin/AdminOrderDetail.jsx";

const AdminOrderDetails = () => {
  return (
    <div>
        <AdminHeader />
        <AdminOrderDetail />
        <Footer />
      </div>
    
  )
}

export default AdminOrderDetails
