import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import CreateProduct from "../components/Admin/CreateProduct";

const AdminDashboardUsers = () => {
  return (


   <div>
    <AdminHeader />
   <div className="flex items-center justify-between w-full">
       <div className="w-[80px] 800px:w-[330px]">
      <AdminSideBar active={3} />
      
      
    </div>
      <div className="w-full justify-center flex">
        <CreateProduct />
      </div>
     </div>
   </div>
  )
}

export default AdminDashboardUsers