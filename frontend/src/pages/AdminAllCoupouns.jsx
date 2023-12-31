import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllCoupones from "../components/Admin/AllCoupones.jsx";

const AdminAllCoupouns = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex items-center justify-between w-full">
       <div className="w-[80px] 800px:w-[330px]">
      <AdminSideBar active={10} />
      
      
    </div>
      <div className="w-full justify-center flex">
        <AllCoupones />
      </div>
     </div>
    </div>
  )
}

export default AdminAllCoupouns
