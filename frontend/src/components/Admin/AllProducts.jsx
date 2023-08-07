import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import {  AiOutlineEye,AiOutlineDelete } from "react-icons/ai";

import { Link } from "react-router-dom";

import axios from "axios";
import { server } from "../../server";
import { useState } from "react";
import { toast } from "react-toastify";


const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${server}/product/admin-all-products`, {withCredentials: true}).then((res) => {
        setData(res.data.products);
    })
  }, []);

  const handleDelete = (id) =>{
    axios.delete(`${server}/product/delete-product/${id}`,{withCredentials: true}).then((res) => {
      toast.success("Product deleted succesfully!")
    })
    window.location.reload();
    
  }

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 200, flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 140,
      flex: 0.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.4,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.4,
    },

    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 80,
      flex: 0.4,
    },
    {
      field: "Preview",
      flex: 0.4,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
            
          </>
        );
      },
    },
    {
      field: "Action",
      flex: 0.6,
      minWidth: 150,
      headerName: "actions",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            
            <Link to="/admin-product-update">
              <Button >
                <AiOutlineEye size={20} />
              </Button>
            </Link>
            <Link >
              <Button onClick={()=>handleDelete(params.id)}>
                <AiOutlineDelete size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  data &&
  data.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "US$ " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
    </>
  );
};

export default AllProducts;
