import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import UpdateAdminProduct from "../components/Admin/UpdateAdminProduct";

const AdminProductUpdate = () => {
  return (
    <div>

    <AdminHeader />
   <div className="flex items-center justify-between w-full">
       <div className="w-[80px] 800px:w-[330px]">
      <AdminSideBar  />
      
      
    </div>
      <div className="w-full justify-center flex">
        <UpdateAdminProduct />
      </div>
     </div>
   </div>





    
  )
}

export default AdminProductUpdate