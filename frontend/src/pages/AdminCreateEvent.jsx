import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import CreateEvent from "../components/Admin/CreateEvent.jsx";

const AdminDashboardEvent = () => {
  return (


   <div>
    <AdminHeader />
   <div className="flex items-center justify-between w-full">
       <div className="w-[80px] 800px:w-[330px]">
      <AdminSideBar active={5} />
      
      
    </div>
      <div className="w-full justify-center flex">
        <CreateEvent />
      </div>
     </div>
   </div>
  )
}

export default AdminDashboardEvent