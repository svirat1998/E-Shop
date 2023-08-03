// import React, { useEffect } from "react";
// import AdminHeader from "../components/Layout/AdminHeader";
// import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
// import { DataGrid } from "@material-ui/data-grid";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrdersOfAdmin } from "../redux/actions/order";

// const AdminDashboardOrders = () => {
//   const dispatch = useDispatch();

//   const { adminOrders, } = useSelector(
//     (state) => state.order
//   );

//   useEffect(() => {
//     dispatch(getAllOrdersOfAdmin());
//   }, [dispatch]);

//   const columns = [
//     { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

//     {
//       field: "status",
//       headerName: "Status",
//       minWidth: 130,
//       flex: 0.7,
//       cellClassName: (params) => {
//         return params.getValue(params.id, "status") === "Delivered"
//           ? "greenColor"
//           : "redColor";
//       },
//     },
//     {
//       field: "itemsQty",
//       headerName: "Items Qty",
//       type: "number",
//       minWidth: 130,
//       flex: 0.7,
//     },

//     {
//       field: "total",
//       headerName: "Total",
//       type: "number",
//       minWidth: 130,
//       flex: 0.8,
//     },
//     {
//         field: "createdAt",
//         headerName: "Order Date",
//         type: "number",
//         minWidth: 130,
//         flex: 0.8,
//       },
//   ];

//   const row = [];
//   adminOrders &&
//     adminOrders.forEach((item) => {
//       row.push({
//         id: item._id,
//         itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
//         total: item?.totalPrice + " $",
//         status: item?.status,
//         createdAt: item?.createdAt.slice(0,10),
//       });
//     });
//   return (
//     <div>
//       <AdminHeader />
//       <div className="w-full flex">
//         <div className="flex items-start justify-between w-full">
//           <div className="w-[80px] 800px:w-[330px]">
//             <AdminSideBar active={2} />
//           </div>

//           <div className="w-full min-h-[45vh] pt-5 rounded flex justify-center">
//             <div className="w-[97%] flex justify-center">
//               <DataGrid
//                 rows={row}
//                 columns={columns}
//                 pageSize={4}
//                 disableSelectionOnClick
//                 autoHeight
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardOrders;





import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Layout/Loader";
import { getAllOrdersOfShop, getAllOrdersOfUser } from "../redux/actions/order";
import { AiOutlineArrowRight } from "react-icons/ai";

const AdminDashboardOrders = () => {
  const { orders, isLoading } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch,user._id]);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin-order/${params.id}`}>
            {/* <Link to="/admin-order/:id}"> */}
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "US$ " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AdminDashboardOrders;















